/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';
import './footer.css';

const Footer = () => (
  <footer>
    <a href="#" className="footer_logo">Abenezer</a>
    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimony">Testimony</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="footer_socials">
      <a href="https://www.linkedin.com/in/abenezer-tilahun/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/Abenezer-Tilahun" target="_blank" rel="noreferrer"><BsGithub /></a>
      <a href="https://angel.co/u/abenezer-tilahun" target="_blank" rel="noreferrer"><FaAngellist /></a>
      <a href="https://twitter.com/AbenezerTilah11" target="_blank" rel="noreferrer"><BsTwitter /></a>
    </div>
    <div className="footer_copyright">
      <small>&copy; Abenezer Tilahun. All Rights Reserved(&copy;2022)</small>
    </div>
  </footer>
);

export default Footer;
