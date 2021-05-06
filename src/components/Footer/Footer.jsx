import React, { memo } from 'react';

import SocialLinks from "./components/SocialLinks";

import styles from './Footer.module.scss';

const CONTACT_MAIL = 'TWIN-managment@yandex.ru'
const ADDRESS = 'Россия, г.Москва, Солнцевский пр-кт, дом 14';
const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {

  return (
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <SocialLinks />
          <p className={styles.footerTitle}>Мы работаем - Вы зарабатываете!</p>
          <a
            className={styles.footerLink}
            href={`http://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {ADDRESS}
          </a>
          <p className={styles.footerMailContainer}>
            <span>E-mail:&nbsp;</span>
            <a
              className={styles.footerLink}
              href={`mailto:${CONTACT_MAIL}`}
            >
              {CONTACT_MAIL}
            </a>
          </p>
          <p className={styles.footerCopyright}>© {CURRENT_YEAR} twin marketing agency</p>
        </div>
      </footer>
  );
};

export default memo(Footer);
