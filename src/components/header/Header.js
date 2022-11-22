import React from 'react';
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';
import ME from '../../asset/Abeni-1.png';
import './header.css';

const Header = () => (
  <header>
    <div className="container header_container">
      <h5>Hello I am</h5>
      <h1>Abenezer Tilahun</h1>
      <h5 className="text-light">Full-Stack Developer</h5>
      <CTA />
      <HeaderSocial />
      <div className="me">
        <img src={ME} alt="me" />
      </div>
    </div>
  </header>
);

export default Header;
