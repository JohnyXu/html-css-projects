import React, { useEffect } from 'react';
import gsap from 'gsap';

import './index.scss';
import Header from './components/Header';
import Main from './components/Main';

export default function AirPods() {
  useEffect(() => {
    /*TEXT*/
    gsap.from('.home__title', { opacity: 0, duration: 1.5, delay: 0.5, y: 50 });
    gsap.from('.home__description', {
      opacity: 0,
      duration: 1.5,
      delay: 0.8,
      y: 50,
    });

    /*IMG AIRPOD*/
    gsap.from('.airpod1', { opacity: 0, duration: 2, delay: 1.2, y: -40 });
    gsap.from('.airpod2', { opacity: 0, duration: 2, delay: 1.4, y: 40 });

    /*NAV*/
    gsap.from('.nav__logo', { opacity: 0, duration: 2.5, delay: 1.5, y: 25 });
    gsap.from('.nav__toggle', { opacity: 0, duration: 2.5, delay: 1.7, y: 25 });
    gsap.from('.nav__item', {
      opacity: 0,
      duration: 2.5,
      delay: 1.9,
      y: 25,
      ease: 'expo.out',
      stagger: 0.3,
    });
    gsap.from('.nav__btn', { opacity: 0, duration: 2.5, delay: 2, y: 25 });

    /*SCROLL*/
    gsap.from('.home__scroll', { opacity: 0, duration: 1.5, delay: 2.3, y: 30 });
  }, []);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}
