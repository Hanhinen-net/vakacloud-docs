import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Translate from '@docusaurus/Translate'; // <--- TÄMÄ ON TÄRKEÄ TUONTI

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          {/* Käännetään myös tagline */}
          <Translate id="homepage.tagline">Moderni toiminnanohjaus varhaiskasvatukseen</Translate>
        </p>
        
        {/* Linkkipainikkeet käännettynä */}
        <div className={styles.buttons} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '30px' }}>
          <Link
            className="button button--primary button--lg"
            to="/blog/tags/news">
            <Translate>Uutiset 📰</Translate>
          </Link>
          <Link
            className="button button--info button--lg"
            to="/blog/tags/updates">
            <Translate>Päivitykset 🚀</Translate>
          </Link>
          <Link
            className="button button--warning button--lg"
            to="/blog/tags/maintenance">
            <Translate>Huoltoilmoitukset ⚠️</Translate>
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
      </main>
    </Layout>
  );
}