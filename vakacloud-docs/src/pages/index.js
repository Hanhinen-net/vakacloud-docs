import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const FeatureList = [
  {
    title: 'Helppokäyttöinen',
    Svg: require('@site/static/img/vaka-cloud-logo.png').default,
    description: (
      <>
        VakaCloud on suunniteltu yhdessä varhaiskasvatuksen ammattilaisten kanssa.
        Käyttöliittymä on selkeä ja intuitiivinen, mikä vapauttaa aikaa hallinnosta
        tärkeimpään – eli lapsille.
      </>
    ),
  },
  {
    title: 'Tehokas Viestintä',
    Svg: require('@site/static/img/vaka-cloud-logo.png').default,
    description: (
      <>
        Yhdistä päiväkoti ja koti saumattomasti. Reaaliaikaiset viestit,
        tiedotteet, hoitoaikojen varaukset ja tapahtumakalenteri löytyvät
        kaikki yhdestä turvallisesta paikasta.
      </>
    ),
  },
  {
    title: 'Turvallinen & Kotimainen',
    Svg: require('@site/static/img/vaka-cloud-logo.png').default,
    description: (
      <>
        Tietoturva on meille ykkösasia. Palvelu on täysin GDPR-yhteensopiva ja kaikki tiedot säilytetään
        turvallisesti Suomessa.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}