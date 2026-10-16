import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {usePluginData} from '@docusaurus/useGlobalData';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './index.module.css';

function IconRefresh() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.iconSvg}>
      <path
        d="M20 12a8 8 0 1 1-2.3-5.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M20 4v5h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconStaff() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.iconSvg}>
      <circle cx="9" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3.5 19c.6-3 2.8-4.5 5.5-4.5s4.9 1.5 5.5 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M17 8.5h4M19 6.5v4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconFamily() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.iconSvg}>
      <circle cx="8" cy="8" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="9" r="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3.8 19c.5-2.6 2.3-4 4.4-4s3.8 1.3 4.3 3.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13.5 18.6c.4-1.8 1.6-2.8 3.1-2.8 1.4 0 2.5.9 3 2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const cards = [
  {
    href: '/blog/tags/updates',
    icon: <IconRefresh />,
    titleId: 'home.card.updates.title',
    title: 'Uusimmat päivitykset',
    textId: 'home.card.updates.text',
    text: 'Uudet ominaisuudet ja pienet parannukset, jotka helpottavat päiväkodin arkea.',
  },
  {
    href: '/ohjeet/henkilokunta',
    icon: <IconStaff />,
    titleId: 'home.card.staff.title',
    title: 'Ohjeet henkilökunnalle',
    textId: 'home.card.staff.text',
    text: 'Saapumiset, viestit perheille ja hoitoajat samassa paikassa, ilman paperilappuja.',
  },
  {
    href: '/ohjeet/huoltajat',
    icon: <IconFamily />,
    titleId: 'home.card.guardians.title',
    title: 'Ohjeet huoltajille',
    textId: 'home.card.guardians.text',
    text: 'Varaa hoitoajat, lue päiväkodin viestit ja pysy mukana lapsen päivässä.',
  },
];

function formatDate(value, locale) {
  const match = /^(\d{4})-(\d{1,2})-(\d{1,2})/.exec(value || '');
  if (!match) {
    return value;
  }
  const [, year, month, day] = match;
  if (locale === 'en') {
    return `${day}/${month}/${year}`;
  }
  return `${Number(day)}.${Number(month)}.${year}`;
}

function tagLabel(tag) {
  if (tag === 'news') {
    return translate({id: 'home.tag.news', message: 'Uutinen'});
  }
  if (tag === 'maintenance') {
    return translate({id: 'home.tag.maintenance', message: 'Huolto'});
  }
  if (tag === 'updates') {
    return translate({id: 'home.tag.updates', message: 'Päivitys'});
  }
  return tag;
}

export default function Home() {
  const {i18n} = useDocusaurusContext();
  const {posts = []} = usePluginData('recent-posts') ?? {};

  return (
    <Layout
      title={translate({
        id: 'home.meta.title',
        message: 'Päivitykset ja ohjeet',
      })}
      description={translate({
        id: 'home.meta.description',
        message:
          'VakaCloudin päivitykset sekä lyhyet ohjeet henkilökunnalle ja huoltajille.',
      })}>
      <main>
        <section className={styles.hero}>
          <div className={styles.wrap}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <Translate id="home.hero.eyebrow">Päiväkodin arkeen</Translate>
              </p>
              <h1 className={styles.title}>
                <Translate id="home.hero.title">Päivitykset ja ohjeet</Translate>
              </h1>
              <p className={styles.lede}>
                <Translate id="home.hero.lede">
                  Täältä näet, mitä VakaCloudissa on muuttunut. Samasta paikasta
                  löydät lyhyet ohjeet henkilökunnalle ja huoltajille.
                </Translate>
              </p>
              <div className={styles.actions}>
                <Link className={styles.primary} to="/blog/tags/updates">
                  <Translate id="home.hero.primary">
                    Katso uusimmat päivitykset
                  </Translate>
                </Link>
                <Link className={styles.secondary} to="#ohjeet">
                  <Translate id="home.hero.secondary">Ohjeet</Translate>
                </Link>
              </div>
            </div>
            <img
              className={styles.shot}
              src={useBaseUrl('/img/app-home.png')}
              alt={translate({
                id: 'home.hero.imageAlt',
                message:
                  'VakaCloudin kotinäkymä, jossa näkyvät päiväkodin kalenteri ja tiedotteet',
              })}
            />
          </div>
        </section>

        <section id="ohjeet" className={styles.band}>
          <div className={styles.wrap}>
            <div className={styles.sectionIntro}>
              <h2>
                <Translate id="home.guides.title">Mistä haluat aloittaa?</Translate>
              </h2>
              <p>
                <Translate id="home.guides.lede">
                  Valitse polku. Päivitykset kertovat, mikä on uutta. Ohjeet
                  auttavat arjen tavallisissa tilanteissa.
                </Translate>
              </p>
            </div>
            <div className={styles.cards}>
              {cards.map((card) => (
                <Link key={card.href} className={styles.card} to={card.href}>
                  <span className={styles.icon}>{card.icon}</span>
                  <h3>
                    <Translate id={card.titleId}>{card.title}</Translate>
                  </h3>
                  <p>
                    <Translate id={card.textId}>{card.text}</Translate>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.posts}>
          <div className={styles.wrap}>
            <div className={styles.sectionIntro}>
              <h2>
                <Translate id="home.posts.title">Viimeisimmät tiedotteet</Translate>
              </h2>
              <p>
                <Translate id="home.posts.lede">
                  Uusimmat uutiset, päivitykset ja huoltoilmoitukset.
                </Translate>
              </p>
            </div>
            {posts.length === 0 ? (
              <p>
                <Translate id="home.posts.empty">Ei tiedotteita vielä.</Translate>
              </p>
            ) : (
              <ul className={styles.list}>
                {posts.map((post) => (
                  <li key={post.permalink} className={styles.item}>
                    <time className={styles.date} dateTime={post.date}>
                      {formatDate(post.date, i18n.currentLocale)}
                    </time>
                    <div>
                      {post.tag ? (
                        <span className={styles.tag}>{tagLabel(post.tag)}</span>
                      ) : null}
                      <Link to={post.permalink}>{post.title}</Link>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <p className={styles.more}>
              <Link to="/blog">
                <Translate id="home.posts.all">Kaikki tiedotteet</Translate>
              </Link>
            </p>
          </div>
        </section>

        <section className={clsx(styles.band, styles.cta)}>
          <div className={styles.wrap}>
            <h2>
              <Translate id="home.cta.title">Tarvitsetko apua?</Translate>
            </h2>
            <p>
              <Translate id="home.cta.text">
                Ota yhteyttä tukeen. Vastaamme suomeksi ja englanniksi, ja apua
                saa myös ruotsiksi.
              </Translate>
            </p>
            <a className={styles.primary} href="mailto:info@vakacloud.fi">
              <Translate id="home.cta.button">Ota yhteyttä tukeen</Translate>
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
