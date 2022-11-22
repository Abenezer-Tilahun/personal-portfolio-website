import React from 'react';
import CV from '../../asset/Resume.pdf';

const CTA = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="cta">
    <a href={CV} download className="btn">Download CV</a>
    <a href="#contact" className="btn btn-primary">Lets Talk</a>
  </div>
);

export default CTA;
