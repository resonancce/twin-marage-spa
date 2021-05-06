import React, { memo } from 'react';

import facebookIcon from '../../../../assets/icons/facebook.svg';
import instagramIcon from '../../../../assets/icons/instagram.svg';

import styles from './SocialLinks.module.scss';

const LINKS = [
  {
    link: 'https://facebook.com/TWINMARAGE/',
    img: facebookIcon,
    alt: 'facebook',
  },{
    link: 'https://instagram.com/twin.marage/',
    img: instagramIcon,
    alt: 'instagram',
  }
]

const Footer = () => {
  return (
      <div className={styles.footerSocialLinks}>
        {
          LINKS.map(({link, img, alt}) => (
            <a
              key={alt}
              rel="noopener noreferrer"
              target="_blank"
              href={link}
            >
              <span className={styles.iconWrapper}>
                <img src={img} alt={alt}/>
              </span>
            </a>
          ))
        }
      </div>
  );
};

export default memo(Footer);
