import React, { useEffect, memo } from 'react';
import AOS from 'aos';
import cn from 'classnames'

import katyBlock from '../../../assets/images/katyBlock.webp';
import sayNoMoreBlock from '../../../assets/images/sayNoMoreBlock.webp';
import mealPointBlock from '../../../assets/images/mealPointBlock.webp';
import studioBlock from '../../../assets/images/studioBlock.webp';
import snmResult1 from '../../../assets/images/snmResult1.webp';
import snmResult2 from '../../../assets/images/snmResult2.webp';

import styles from '../Clients.module.scss';

import 'aos/dist/aos.css';

const STUDIO_SERVICES = [
  'Осуществлялось тематическое наполнение страниц текстовым и фотоконтентом;',
  'Рассылка по целевой аудитории;',
  'Настраивалась и велась таргетированная реклама;'
];
const MEAL_POINT_SERVICES = [
  'Обложка сообщества вконтакте;',
  'Меню сообщества вконтакте;',
  'Обложки для фотоальбомов вконтакте;',
  'Заполнена шапка аккаунта instagram и оформлены закрпленные истории;',
  'Оформлен дизайн постов;',
  'Обложка для страницы facebook;',
  'Подготовлен контент-план;',
  'Опубликован первичный контент за первую неделю по контент-плану в сообществах вконтакте и instagram;'
]

const DescribeClients = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 1500,
    });
  }, []);

  return (
    <>
      <div className={styles.clientDescribeItem}>
        <div
          data-aos="fade-right"
          className={styles.describeLeftBlock}
        >
          <h3>
            Звездный стилист Katy Kiri
          </h3>
          <p>
            Основатель бренда одежды kiri. Более 40 воркшопов по личному стилю в России и мире.
            Школа стиля "Kiri Style School". Онлайн-курсы. Марафоны. Лекции.
          </p>
          <p>
            Для данного клиента мы разработали и ведем персональный сайт. С учетом всех пожеланий клиента.
            С возможностью принимать платежи и вести учет продаж онлайн курсов и билетов на мероприятия. Мы
            снимаем и монтируем видео для youtube канала клиента.
          </p>
          <p>
            Мы работаем с клиентом интаграма для его брэнда. Данный клиент также обращается к нам за создание
            афиц и билетов для мероприятий.
          </p>
        </div>
        <div
          data-aos="fade-left"
          className={styles.photoContainer}
        >
          <h3>katy kiri</h3>
          <img
            className={styles.describePhoto}
            src={katyBlock}
            alt="katyBlock"
          />
        </div>
      </div>
      <div className={styles.clientDescribeItem}>
        <div
          data-aos="fade-right"
          className={styles.photoContainer}
        >
          <h3>say no more</h3>
          <img
            className={cn([styles.describePhoto, styles.describePhotoSNM])}
            src={sayNoMoreBlock}
            alt="sayNoMoreBlock"
          />
        </div>
        <div
          data-aos="fade-left"
          className={styles.describeRightBlock}
        >
          <h3>
            Магазин одежды премиум качества
          </h3>
          <p>
            На профиль была настроена таргетированная реклама на пользлователей социальной
            сети, согласно портретам целевой аудитории.
          </p>
          <p>
            На данный момент в профиле 865 человек, прирост с момента начала рекламы
            составил 296 человек. Последний график демонстирует, что прирост регулярный. Если бы аудитории
            были выбраны в корне не верно, люди бы не подписывались. С аудиторией нужно работать, инстаграм это
            визуальная и развелекательная соц. сеть, а не каталог сайта, поэтому нужно эксперементировать
            с контентом, а также работать с аудиторией.
          </p>
          <div className={styles.snmResultContainer}>
            <img src={snmResult1} alt="snmResult1"/>
            <img src={snmResult2} alt="snmResult2"/>
          </div>
        </div>
      </div>
      <div className={styles.clientDescribeItem}>
        <div
          data-aos="fade-right"
          className={styles.describeLeftBlock}
        >
          <h3>
            Оформление фотосессий
          </h3>
          <p>
            Оказаны услуги по запуску предсавительства в instagram.
            Осуществлялось Администрирование профиля.
          </p>
          <p>
            Оказаны услуги по развитию и продвижению профиля:
          </p>
          <ul className={styles.listContainer}>
            {STUDIO_SERVICES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Чистый прирост составил 106 подписчиков.
          </p>
          <p>
            Охват рекламы составил 26960 пользователей. 109 пользователей перешли в профиль.
          </p>
        </div>
        <div
          data-aos="fade-left"
          className={styles.photoContainer}
        >
          <h3>studio 25.02</h3>
          <img
            className={styles.describePhoto}
            src={studioBlock}
            alt="studioBlock"
          />
        </div>
      </div>
      <div className={styles.clientDescribeItem}>
        <div
          data-aos="fade-right"
          className={styles.photoContainer}
        >
          <h3>Сеть кафе meal point</h3>
          <h3>"Бургер и кофе"</h3>
          <img
            className={styles.describePhoto}
            src={mealPointBlock}
            alt="mealPointBlock"
          />
        </div>
        <div
          data-aos="fade-left"
          className={styles.describeRightBlock}
        >
          <h3>
            Оказаны услуги по оформлению социальных сетей
          </h3>
          <p>
            Созданы и настроены:
          </p>
          <ul className={styles.listContainer}>
            {MEAL_POINT_SERVICES.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default memo(DescribeClients);
