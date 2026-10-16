import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import styles from '../guide.module.css';

export default function StaffGuide() {
  return (
    <Layout
      title={translate({
        id: 'guide.staff.meta',
        message: 'Ohjeet henkilökunnalle',
      })}
      description={translate({
        id: 'guide.staff.intro',
        message:
          'Aamu lähtee sujuvammin, kun lasten tulo näkyy heti ja viestit lähtevät perheille samasta näkymästä.',
      })}>
      <main className={styles.page}>
        <article className={styles.wrap}>
          <Link className={styles.back} to="/#ohjeet">
            <Translate id="guide.back">Takaisin ohjeisiin</Translate>
          </Link>
          <h1 className={styles.title}>
            <Translate id="guide.staff.title">Ohjeet henkilökunnalle</Translate>
          </h1>
          <p className={styles.intro}>
            <Translate id="guide.staff.intro">
              Aamu lähtee sujuvammin, kun lasten tulo näkyy heti ja viestit
              lähtevät perheille samasta näkymästä.
            </Translate>
          </p>
          <section className={styles.block}>
            <h2 className={styles.heading}>
              <Translate id="guide.staff.arrival.title">
                Saapuminen ja lähtö
              </Translate>
            </h2>
            <p>
              <Translate id="guide.staff.arrival.text">
                Lapset ja aikuiset kuittaavat tulon ja lähdön Täppi-tunnisteella.
                Näet yhdellä silmäyksellä, ketkä ovat paikalla.
              </Translate>
            </p>
          </section>
          <section className={styles.block}>
            <h2 className={styles.heading}>
              <Translate id="guide.staff.messages.title">Viestit perheille</Translate>
            </h2>
            <p>
              <Translate id="guide.staff.messages.text">
                Tiedotteen voi lähettää koko talolle, yhdelle ryhmälle tai
                yhdelle perheelle. Huoltaja näkee viestin omassa näkymässään.
              </Translate>
            </p>
          </section>
          <section className={styles.block}>
            <h2 className={styles.heading}>
              <Translate id="guide.staff.hours.title">Hoitoajat</Translate>
            </h2>
            <p>
              <Translate id="guide.staff.hours.text">
                Varatut ja toteutuneet ajat ovat samassa paikassa. Poissaolon voi
                merkitä ilman erillistä lappua.
              </Translate>
            </p>
          </section>
          <div className={styles.actions}>
            <a className={styles.primary} href="https://app.vakacloud.fi">
              <Translate id="guide.login">Kirjaudu VakaCloudiin</Translate>
            </a>
            <Link className={styles.secondary} to="/blog/tags/updates">
              <Translate id="guide.seeUpdates">Katso päivitykset</Translate>
            </Link>
            <Link className={styles.secondary} to="/ohjeet/huoltajat">
              <Translate id="guide.staff.toGuardians">
                Ohjeet huoltajille
              </Translate>
            </Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
