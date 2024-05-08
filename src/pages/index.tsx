import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomeHeader from '@site/src/components/homeHeader';
import Heading from '@theme/Heading';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Hey, I am Herman Sugiharto! <span className="waving-hand">👋</span>
        </Heading>
        <p className="hero__subtitle" style={{marginBottom: "50px"}}>
          passionate Data Scientist and AI Engineer with expertise in machine
          learning, deep learning, and Python. My mission is to reshape the
          landscape of data philosophy and research to unlock the true potential
          of data-driven insights.
        </p>
        <div className="row">
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/pdf/CVHERMAN.pdf"
              target='_blank'
              style={{ marginLeft: "20px" }}
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={{ marginRight: "10px" }}
              />
              Resume
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg ml-2"
              to="https://www.linkedin.com/in/hermansh-id/"
              style={{ marginLeft: "20px" }}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ marginRight: "10px" }}
              />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello, It's Herman!`}
      description="Description will go into a meta tag in <head />">
      <main>
        <HomepageHeader />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
