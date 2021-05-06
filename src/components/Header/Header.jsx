import React, {
  memo,
  useEffect,
  useState,
  useCallback
} from 'react';
import { isMobile } from "react-device-detect";

import Burger from './components/Hamburger'
import Menu from './components/Menu';

import styles from './Header.module.scss';

const Header = () => {
  const [isActiveBurger, setActiveBurger] = useState(false);

  const toggleClass = useCallback(() => {
     setActiveBurger((prevState => !prevState));
  }, []);

  useEffect(() => {
    if (!isMobile) {
      if (isActiveBurger) {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = "15px";
        document.getElementsByClassName('hamburger-wrapper')[0].style.right = '40px';
      } else {
        document.body.style.position = '';
        document.body.style.overflow = "auto";
        document.body.style.paddingRight = "0";
        document.getElementsByClassName('hamburger-wrapper')[0].style.right = '25px';
      }
    } else {
      if (isActiveBurger) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  }, [isActiveBurger]);

  return (
    <div className={styles.headerWrapper}>
       <Burger
         onClick={toggleClass}
         active={isActiveBurger}
       />
       <Menu
         onClick={toggleClass}
         open={isActiveBurger}
       />
    </div>
  );
};

export default memo(Header);
