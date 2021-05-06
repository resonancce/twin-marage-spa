import React, { memo } from 'react';
import { scroller } from 'react-scroll';

import styles from './Menu.module.scss';

const linksMenu = [
  {
    name: 'Наши услуги',
    id: 'ourServices',
  },
  {
    name: 'Клиенты',
    id: 'clients',
  },
  {
    name: 'Связаться',
    id: 'formMail',
  },
  {
    name: 'О нас',
    id: 'aboutUs',
  }
]

const Menu = ({ onClick, open }) => {

  const scroll = (idBlock) => () => {
    onClick();

    scroller.scrollTo(idBlock, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className={`${styles.menu} ${open ? styles.menu__transition : ''}`}>
      {
        linksMenu.map(({ name, id}) => (
          <h3
            key={id}
            onClick={scroll(id)}
          >
            {name}
          </h3>
        ))
      }
    </div>
  )
};

export default memo(Menu);
