/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';
import './header.css';

const HeaderSocial = () => (
  <div className="header_social">
    <a href="https://www.linkedin.com/in/abenezer-tilahun/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
    <a href="https://github.com/Abenezer-Tilahun" target="_blank" rel="noreferrer"><BsGithub /></a>
    <a href="https://angel.co/u/abenezer-tilahun" target="_blank" rel="noreferrer"><FaAngellist /></a>
    <a href="https://twitter.com/AbenezerTilah11" target="_blank" rel="noreferrer"><BsTwitter /></a>
  </div>
);

export default HeaderSocial;
