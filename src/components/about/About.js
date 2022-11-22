import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import ME from '../../asset/Abeni-1.png';

const About = () => (
  <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={ME} alt="About-me" />
        </div>
      </div>

      <div className="about_content">
        <div className="about_cards">
          <article className="about_card">
            <FaAward className="about_icon" />
            <h5>Experience</h5>
            <small> 4+ Years</small>
          </article>
          <article className="about_card">
            <FiUsers className="about_icon" />
            <h5>Clients</h5>
            <small>50+ Worldwide</small>
          </article>
          <article className="about_card">
            <AiOutlineFundProjectionScreen className="about_icon" />
            <h5>Project</h5>
            <small>25 + Completed</small>
          </article>
        </div>
        <p>
          Over 4 years of hands-on experience designing, developing and implementing applications
          and solutions using a range of technologies and programming languages.
          Seeking to leverage broad development experience and hands-on technical
          expertise in a challenging role as a Full-stack Developer.
        </p>
        <a href="#contact" className="btn btb-primary"> Lets Talk</a>
      </div>
    </div>
  </section>
);

export default About;
