import React, { useEffect, memo } from 'react';
import AOS from 'aos';

import katy from '../../assets/images/katy.webp';
import sayNoMore from '../../assets/images/saynomore.webp';
import studio from '../../assets/images/studio.webp';
import mealPoint from '../../assets/images/mealpoint.webp';
import instagramIcon from '../../assets/icons/instagram.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import vkIcon from '../../assets/icons/vk.svg';
import webIcon from '../../assets/icons/web.svg';

import DescribeClients from "./components/DescribeClients";

import styles from './Clients.module.scss';

import 'aos/dist/aos.css';

const CLIENTS = [
  {
    title: 'Katy Kiri',
    instagramLink: 'https://instagram.com/kiri_brand',
    instagramTitle: '/kiri_brand',
    img: katy,
    aos: 'flip-right',
    siteLink: 'https://katy-kiri.ru',
    siteTitle: 'katy-kiri.ru'
  },
  {
    title: 'Say No More',
    instagramLink: 'https://instagram.com/saynomore.moscow',
    instagramTitle: '/saynomore.moscow',
    img: sayNoMore,
    aos: 'flip-right'
  },
  {
    title: 'Studio 25.02',
    instagramLink: 'https://instagram.com/studio_25.02',
    instagramTitle: '/studio_25.02',
    img: studio,
    aos: 'flip-right'
  },
  {
    title: 'Meal Point',
    instagramLink: 'https://instagram.com/edim.v.doroge',
    instagramTitle: '/edim.v.doroge',
    vkLink: 'https://vk.com/edimvdoroge',
    vkTitle: '/edimvdoroge',
    facebookLink: 'https://facebook.com/burgerikofe',
    facebookTitle: '/burgerikofe',
    img: mealPoint,
    aos: 'flip-right'
  }
]

const Clients = () => {
  useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 700,
        easing: 'ease-in-sine',
        delay: 150,
      });
  }, []);

  return (
    <div id="clients" className={styles.clients}>
      <h1 data-aos="zoom-in" >
        Клиенты
      </h1>
      <div className={styles.clientsContainer}>
        {
          CLIENTS.map(({
             title,
             aos,
             instagramLink,
             vkLink,
             vkTitle,
             instagramTitle,
             facebookLink = null,
             facebookTitle,
             siteLink,
             siteTitle,
             img
          }) => (
            <div
              key={title}
              className={styles.clientsItem}
            >
              <h3 className={styles.clientTitle}>
                {title}
              </h3>
              <div className={styles.clientSocialContainer}>
                <a
                  className={styles.socialLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  href={instagramLink}
                >
                  <span className={styles.iconWrapper}>
                    <img src={instagramIcon} alt={title}/>
                  </span>
                  <span>{instagramTitle}</span>
                </a>
                {siteLink && (
                  <a
                    className={styles.socialLink}
                    rel="noopener noreferrer"
                    target="_blank"
                    href={siteLink}
                  >
                  <span className={styles.iconWrapper}>
                    <img src={webIcon} alt={title}/>
                  </span>
                    <span>{siteTitle}</span>
                  </a>
                )}
                {vkLink && (
                  <a
                    className={styles.socialLink}
                    rel="noopener noreferrer"
                    target="_blank"
                    href={vkLink}
                  >
                    <span className={styles.iconWrapper}>
                      <img src={vkIcon} alt={title}/>
                    </span>
                    <span>{vkTitle}</span>
                  </a>
                )}
                {facebookLink && (
                  <a
                    className={styles.socialLink}
                    rel="noopener noreferrer"
                    target="_blank"
                    href={facebookLink}
                  >
                    <span className={styles.iconWrapper}>
                      <img src={facebookIcon} alt={title}/>
                    </span>
                    <span>{facebookTitle}</span>
                  </a>
                )}
              </div>
              <p className={styles.separator} />
              <img
                data-aos={aos}
                className={styles.clientPhoto}
                src={img}
                alt={title}
              />
            </div>
          ))
        }
      </div>
      <DescribeClients />
    </div>
  );
}

export default memo(Clients);
