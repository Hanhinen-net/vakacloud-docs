import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';

const SUPPORT_FI = 'https://vakacloud.fi/contact/';
const SUPPORT_EN = 'https://vakacloud.fi/en/contact/';

export default function FooterLinkItem({item}) {
  const {i18n} = useDocusaurusContext();
  const {to, href, label, prependBaseUrlToHref, className, ...props} = item;
  const localizedHref =
    href === SUPPORT_FI && i18n.currentLocale === 'en' ? SUPPORT_EN : href;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(localizedHref, {forcePrependBaseUrl: true});

  return (
    <Link
      className={clsx('footer__link-item', className)}
      {...(localizedHref
        ? {
            href: prependBaseUrlToHref ? normalizedHref : localizedHref,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {label}
      {localizedHref && !isInternalUrl(localizedHref) && <IconExternalLink />}
    </Link>
  );
}
