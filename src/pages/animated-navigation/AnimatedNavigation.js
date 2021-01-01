import React, { useState } from 'react';
import Wrapper from './AnimatedNavigation.style';

export default function AnimatedNavigation() {
  const [openMenu, setOpenMenu] = useState(false);
  const onOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <Wrapper>
      <nav class={`${openMenu ? 'active' : ''}`} id="nav" onClick={onOpenMenu}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Works</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button class="icon" id="toggle">
          <div class="line line1"></div>
          <div class="line line2"></div>
        </button>
      </nav>
    </Wrapper>
  );
}
