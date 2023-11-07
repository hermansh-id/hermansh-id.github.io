import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Merapi Minister",
    image:
      "https://play-lh.googleusercontent.com/uRi5nag2V9Dq2NOGM5k0gcpfWeeFtnM-KVWob67rTBMh2N0thzwxrWjf9rQ7Kd-Sow=w240-h480-rw",
    description: (
      <>
        Merapi Miniter is a free disaster response application from related
        party reports.
      </>
    ),
    link: "https://play.google.com/store/apps/details?id=id.merapi.merapi_minister",
  },
];

function Feature({title, image, description, link}: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={image} alt={title} className={styles.featureSvg} style={{marginBottom: "20px"}}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={link}>
          <Heading as="h3">{title}</Heading>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
