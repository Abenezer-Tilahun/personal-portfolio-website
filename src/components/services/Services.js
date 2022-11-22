import React from 'react';
import { BsCheck } from 'react-icons/bs';
import './services.css';

const Services = () => (
  <section id="services">
    <h5>What I offer</h5>
    <h2>Services</h2>
    <div className="container services_container">
      <article className="services">
        <div className="service_head">
          <h3>UI/UX Design</h3>
        </div>
        <ul className="service_list">
          <li>
            <BsCheck className="service_list-icon" />
            <p>Web Design Services</p>
          </li>
          <li>
            <BsCheck className="service_list-icon" />
            <p>Cross-platform experiences design</p>
          </li>
          <li>
            <BsCheck className="service_list-icon" />
            <p>Mobile app UX and UI design services</p>
          </li>
          <li>
            <BsCheck className="service_list-icon" />
            <p>UI and UX consulting</p>
          </li>
        </ul>
      </article>

      <article className="services">
        <div className="service_head">
          <h3> Web Development</h3>
        </div>
        <ul className="service_list">
          <li>
            <BsCheck className="service_list-icon" />
            <p>Full-Stack Web Development</p>
          </li>
          <li>
            <BsCheck className="service_list-icon" />
            <p>Custom Web Applications</p>
          </li>
          <li>
            <BsCheck className="service_list-icon" />
            <p>Content Management Systems</p>
          </li>
          <li>
            <BsCheck className="service_list-icon" />
            <p>QA & Testing</p>
          </li>
        </ul>
      </article>

      <article className="services">
        <div className="service_head">
          <h3>Software development </h3>
        </div>
        <ul className="service_list">
          <li>
            <BsCheck className="service_list-icon" />
            <p>Designing and Prototyping</p>
          </li>
          <li>
            <BsCheck className="service_list-icon" />
            <p>Software Development & Implementation</p>
          </li>
          <li>
            <BsCheck className="service_list-icon" />
            <p>Testing</p>
          </li>
          <li>
            <BsCheck className="service_list-icon" />
            <p>Deployment, Operation and Maintenance</p>
          </li>
        </ul>
      </article>
    </div>
  </section>
);

export default Services;
