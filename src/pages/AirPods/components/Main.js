import React from 'react';
import bxMouseImg from 'assets/icons/bx-mouse.svg';
import airPod1Img from 'assets/img/airpod1.png';
import airPod2Img from 'assets/img/airpod2.png';
import airPodImg from 'assets/img/airpods.png';

export default function Main() {
  return (
    <main className="l-main bd-grid">
      {/* <!-- HOME -->  */}
      <section className="home">
        <div className="home__data">
          <h1 className="home__title">AirPods</h1>
          <p className="home__description">
            Los AirPods te brindan una experiencia inalámbrica inigualable, pues
            ahora te ofrecen más horas para hablar y traen un nuevo estuche de carga{' '}
            <br />
            inalámbrica.
          </p>
        </div>

        <div className="home__img">
          {/* <!-- IMG --> */}
          <img src={airPod1Img} alt="" className="airpod1" />
          <img src={airPod2Img} alt="" className="airpod2" />
        </div>

        <div className="home__scroll">
          <span className="home__scroll-text">Scroll down for more</span>
          <a href="#l-section">
            <img src={bxMouseImg} alt="" className="home__scroll-icon" />
          </a>
        </div>
      </section>

      {/* <!-- DETAILS AIRPODS --> */}
      <section className="l-section" id="l-section">
        <div className="details">
          <div className="details__content">
            <div className="details__box">
              <span className="details__initial">Más de</span>
              <h3 className="details__title">
                24<span> h</span>
              </h3>
              <p className="details__description">
                de batería con
                <br /> el estuche de carga
              </p>
            </div>
            <div className="details__box">
              <span className="details__initial">Hasta</span>
              <h3 className="details__title">
                5<span> h</span>
              </h3>
              <p className="details__description">
                de batería con
                <br /> una sola carga
              </p>
            </div>
            <div className="details__box">
              <span className="details__initial">Sólo</span>
              <h3 className="details__title">
                15<span> min</span>
              </h3>
              <p className="details__description">
                de carga equivalen
                <br /> a hasta 3 horas de
                <br /> audio
              </p>
            </div>
          </div>

          <div className="details__img">
            <img src={airPodImg} alt="" className="airpods" />
          </div>
        </div>
      </section>
    </main>
  );
}
