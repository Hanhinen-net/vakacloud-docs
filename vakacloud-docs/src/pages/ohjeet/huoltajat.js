import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import styles from '../guide.module.css';

export default function GuardianGuide() {
  return (
    <Layout
      title={translate({
        id: 'guide.guardians.meta',
        message: 'Ohjeet huoltajille',
      })}
      description={translate({
        id: 'guide.guardians.intro',
        message:
          'VakaCloud on paikka, josta hoidat lapsen arjen asiat päiväkodin kanssa.',
      })}>
      <main className={styles.page}>
        <article className={styles.wrap}>
          <Link className={styles.back} to="/#ohjeet">
            <Translate id="guide.back">Takaisin ohjeisiin</Translate>
          </Link>
          <h1 className={styles.title}>
            <Translate id="guide.guardians.title">Ohjeet huoltajille</Translate>
          </h1>
          <p className={styles.intro}>
            <Translate id="guide.guardians.intro">
              VakaCloud on paikka, josta hoidat lapsen arjen asiat päiväkodin
              kanssa.
            </Translate>
          </p>
          <section className={styles.block}>
            <h2 className={styles.heading}>
              <Translate id="guide.guardians.hours.title">Hoitoajat</Translate>
            </h2>
            <p>
              <Translate id="guide.guardians.hours.text">
                Varaa lapsen hoitoajat sovelluksessa. Jos suunnitelma muuttuu,
                voit päivittää varauksen itse.
              </Translate>
            </p>
          </section>
          <section className={styles.block}>
            <h2 className={styles.heading}>
              <Translate id="guide.guardians.messages.title">
                Viestit päiväkodilta
              </Translate>
            </h2>
            <p>
              <Translate id="guide.guardians.messages.text">
                Päiväkodin tiedotteet ja kuvat tulevat samaan paikkaan. Näet ne,
                kun ehdit.
              </Translate>
            </p>
          </section>
          <section className={styles.block}>
            <h2 className={styles.heading}>
              <Translate id="guide.guardians.invoices.title">Laskut</Translate>
            </h2>
            <p>
              <Translate id="guide.guardians.invoices.text">
                Laskut näkyvät muiden tietojen vieressä, ja ne voi maksaa
                verkossa.
              </Translate>
            </p>
          </section>
          <div className={styles.actions}>
            <a className={styles.primary} href="https://app.vakacloud.fi">
              <Translate id="guide.login">Kirjaudu VakaCloudiin</Translate>
            </a>
            <Link className={styles.secondary} to="/ohjeet/henkilokunta">
              <Translate id="guide.guardians.toStaff">
                Ohjeet henkilökunnalle
              </Translate>
            </Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
