import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {usePluginData} from '@docusaurus/useGlobalData';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './index.module.css';

function supportHref(locale) {
  return locale === 'en'
    ? 'https://vakacloud.fi/en/contact/'
    : 'https://vakacloud.fi/contact/';
}

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
  const contactUrl = supportHref(i18n.currentLocale);

  return (
    <Layout
      title={translate({
        id: 'home.meta.title',
        message: 'Päivitykset ja tiedotteet',
      })}
      description={translate({
        id: 'home.meta.description',
        message: 'VakaCloudin päivitykset, tiedotteet ja yhteys tukeen.',
      })}>
      <main>
        <section className={styles.hero}>
          <div className={styles.wrap}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <Translate id="home.hero.eyebrow">Päiväkodin arkeen</Translate>
              </p>
              <h1 className={styles.title}>
                <Translate id="home.hero.title">Päivitykset ja tiedotteet</Translate>
              </h1>
              <p className={styles.lede}>
                <Translate id="home.hero.lede">
                  Täältä näet, mitä VakaCloudissa on muuttunut, ja luet uusimmat
                  tiedotteet.
                </Translate>
              </p>
              <div className={styles.actions}>
                <Link className={styles.primary} to="/blog/tags/updates">
                  <Translate id="home.hero.primary">
                    Katso uusimmat päivitykset
                  </Translate>
                </Link>
                <Link className={styles.secondary} to="/blog">
                  <Translate id="home.hero.secondary">Kaikki tiedotteet</Translate>
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

        <section id="tuki" className={`${styles.band} ${styles.cta}`}>
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
            <a className={styles.primary} href={contactUrl}>
              <Translate id="home.cta.button">Ota yhteyttä tukeen</Translate>
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
