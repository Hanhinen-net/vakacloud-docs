import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        
        {/* Linkkipainikkeet */}
        <div className={styles.buttons} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '30px' }}>
          <Link
            className="button button--primary button--lg"
            to="/blog/tags/news">
            Uutiset 📰
          </Link>
          <Link
            className="button button--info button--lg"
            to="/blog/tags/updates">
            Päivitykset 🚀
          </Link>
          <Link
            className="button button--warning button--lg"
            to="/blog/tags/maintenance">
            Huoltoilmoitukset ⚠️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Etusivu | ${siteConfig.title}`}
      description="VakaCloud päivitykset ja tiedotteet">
      <HomepageHeader />
      <main>
        {/* Tässä ei ole enää HomepageFeatures-komponenttia, joten kuvat yms. poistuvat */}
      </main>
    </Layout>
  );
}