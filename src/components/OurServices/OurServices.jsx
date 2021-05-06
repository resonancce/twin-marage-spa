import React, { useEffect, memo } from 'react';
import AOS from 'aos';

import instagramIcon from '../../assets/icons/instagram.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import youtubeIcon from '../../assets/icons/youtube.svg';
import webIcon from '../../assets/icons/web.svg';
import userIcon from '../../assets/icons/user.svg';
import cameraIcon from '../../assets/icons/camera.svg';

import {
  FACEBOOK,
  INSTAGRAM,
  YOUTUBE,
  WEB_SITE,
  OWN_BRAND,
  PHOTO_VIDEO,
} from "./constants";

import styles from './OurServices.module.scss';

const OurServices = () => {

  useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 700,
        easing: 'ease-in-sine',
        delay: 150,
      });
  }, []);

  return (
    <div id="ourServices" className={styles.content}>
      <h1 data-aos="zoom-in" className={styles.servicesTitle}>
        Наши Услуги
      </h1>
      <div data-aos="fade-right">
        <h2>
          Instagram
        </h2>
        <div className={styles.service}>
          <img
            className={styles.logo}
            src={instagramIcon}
            alt="instagram"
          />
          <div className={styles.listContainer}>
            <ul className={styles.list}>
              {INSTAGRAM.slice(0,6).map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
            <ul className={styles.list}>
              {INSTAGRAM.slice(6).map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div data-aos="fade-left">
        <h2>
          Facebook
        </h2>
        <div className={styles.service}>
          <img
            className={styles.logo}
            src={facebookIcon}
            alt="facebook"
          />
          <div className={styles.listContainer}>
            <ul className={styles.list}>
              {FACEBOOK.slice(0,5).map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
            <ul className={styles.list}>
              {FACEBOOK.slice(5).map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div data-aos="fade-right">
        <h2>
          Youtube
        </h2>
        <div className={styles.service}>
          <img
            className={styles.logo}
            src={youtubeIcon}
            alt="youtube"
          />
          <div className={styles.listContainer}>
            <ul className={styles.list}>
              {YOUTUBE.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div data-aos="fade-right">
        <h2>
          Сайты и landing pages
        </h2>
        <div className={styles.service}>
          <img
            className={styles.logo}
            src={webIcon}
            alt="web"
          />
          <div className={styles.listContainer}>
            <ul className={styles.list}>
              {WEB_SITE.slice(0,5).map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
            <ul className={styles.list}>
              {WEB_SITE.slice(5).map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div data-aos="fade-right">
        <h2>
          Личный бренд
        </h2>
        <div className={styles.service}>
          <img
            className={styles.logo}
            src={userIcon}
            alt="ownBrand"
          />
          <div className={styles.listContainer}>
            <ul className={styles.list}>
              {OWN_BRAND.slice(0,4).map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
            <ul className={styles.list}>
              {OWN_BRAND.slice(4).map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div data-aos="fade-right">
        <h2>
          Фото и видео съемка
        </h2>
        <div className={styles.service}>
          <img
            className={styles.logo}
            src={cameraIcon}
            alt="twinLogo"
          />
          <div className={styles.listContainer}>
            <ul className={styles.list}>
              {PHOTO_VIDEO.slice(0,3).map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
            <ul className={styles.list}>
              {PHOTO_VIDEO.slice(3).map((item) => (
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

export default memo(OurServices);
