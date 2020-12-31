import React, { useState } from 'react';
import chevronDownImg from 'assets/icons/bx-chevron-down.svg';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const onOpenToggle = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <a href="#" className="nav__logo">
          AirPods
        </a>
        <div className={`nav__menu ${openMenu ? 'show' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link">
                Descripcion
              </a>
            </li>
            <li className="nav__item">
              <a href="#l-section" className="nav__link">
                Especificaciones
              </a>
            </li>
          </ul>
        </div>

        <div className="nav__actions">
          <div className="nav__toggle" id="nav-toggle" onClick={onOpenToggle}>
            <img src={chevronDownImg} alt="" />
          </div>
          <a href="#" className="nav__btn">
            Comprar
          </a>
        </div>
      </nav>
    </header>
  );
}
