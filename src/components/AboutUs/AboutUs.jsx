import React, { useEffect, memo } from 'react';
import AOS from 'aos';

import twinMarage from '../../assets/images/twinLogo.webp';

import { LIST_SITE, LIST_INSTAGRAM} from "./constants";

import styles from './AboutUs.module.scss';
import 'aos/dist/aos.css';

const AboutUs = () => {

  useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 700,
        easing: 'ease-in-sine',
        delay: 150,
      });
  }, []);

  return (
    <div
      id="aboutUs"
      className={styles.aboutUs}
    >
      <h1 data-aos="zoom-in" >
        О нас
      </h1>
      <div data-aos="slide-up">
        <p className={styles.aboutTwin}>
          Twinmarage - маркетинговое агенство.
        </p>
        <p>
          Наше агенство готово предоставить большой спектр услуг, выполнить их качественно,
          соблюдая при этом временные рамки. Обращаясь к нам, вы доверяете работу профессионалам.
        </p>
        <div className={styles.twinLogoContainer}>
          <img
            className={styles.twinLogo}
            src={twinMarage}
            alt="twinmarage"
          />
          <h2>#TWINMARAGE</h2>
        </div>
        <h3>Поработав с нами один раз, вы останетесь с нами навсегда!</h3>
        <p>
          Наша команда профессионалов зарекомендовала себя стабильным и надежным партнером.
          Широкий спектр услуг и гибкая ценовая политика создают для наших заказчиков не
          только удобные, но и выгодные условия сотрудничества.
        </p>
        <h4>Чем мы можем помпочь:</h4>

        <div className={styles.listContainer}>
          <div>
            <p className={styles.titleAbout}>Сайты и landing pages</p>
            <ul className={styles.listAbout}>
              {LIST_SITE.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={styles.titleAbout}>Instagram</p>
            <ul className={styles.listAbout}>
              {LIST_INSTAGRAM.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(AboutUs);
