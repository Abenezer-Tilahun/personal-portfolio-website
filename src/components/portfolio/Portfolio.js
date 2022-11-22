import React from 'react';
import './portfolio.css';
import BudgetApp from '../../asset/Budget app.PNG';
import MealApp from '../../asset/Meal App.PNG';
import Airquality from '../../asset/Air Quality.png';
import Space from '../../asset/Space t.PNG';
import Leadboard from '../../asset/Leader Board.PNG';
import BookStore from '../../asset/BookStore.PNG';
import Math from '../../asset/Math.PNG';
import Awesomebook from '../../asset/Awesome Books.PNG';
import CreativeHub from '../../asset/Creative hub.PNG';

const data = [
  {
    id: 1,
    image: BudgetApp,
    title: 'Budget App',
    github: 'https://github.com/Abenezer-Tilahun/Budget-app',
    demo: 'https://budget-app21.herokuapp.com/',
  },

  {
    id: 2,
    image: MealApp,
    title: 'Meal App',
    github: 'https://github.com/Abenezer-Tilahun/MealApp',
    demo: 'https://abenezer-tilahun.github.io/MealApp/',
  },
  {
    id: 3,
    image: Airquality,
    title: 'Air Quality Data',
    github: 'https://github.com/Abenezer-Tilahun/Air-Quality-Data',
    demo: 'https://air-quality-data.netlify.app',
  },
  {
    id: 4,
    image: Space,
    title: 'Space-T',
    github: 'https://github.com/Abenezer-Tilahun/space-travellers-hub',
    demo: 'https://space-travellers-booking-app.herokuapp.com',
  },

  {
    id: 5,
    image: Leadboard,
    title: 'Lead board ',
    github: 'https://github.com/Abenezer-Tilahun/Leaderboard',
    demo: 'https://abenezer-tilahun.github.io/Leaderboard/',
  },

  {
    id: 6,
    image: BookStore,
    title: 'BookStore',
    github: 'https://github.com/Abenezer-Tilahun/Bookstore',
    demo: 'https://abenezer-tilahun.github.io/Bookstore/',
  },

  {
    id: 7,
    image: Math,
    title: 'Math-Magicians ',
    github: 'https://github.com/Abenezer-Tilahun/Math-Magicians',
    demo: 'https://abenezer-tilahun.github.io/Math-Magicians/',
  },

  {
    id: 8,
    image: Awesomebook,
    title: 'Awesome Book',
    github: 'https://github.com/Abenezer-Tilahun/Math-Magicians',
    demo: 'https://abenezer-tilahun.github.io/Awesome-books-with-ES6/',
  },

  {
    id: 9,
    image: CreativeHub,
    title: 'Creative Hub',
    github: 'https://github.com/Abenezer-Tilahun/Creative-Hub-Conference-page',
    demo: 'https://abenezer-tilahun.github.io/Creative-Hub-Conference-page/',
  },
];

const Portfolio = () => (
  <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container  portfolio_container">
      {
        data.map(({
          id, image, title, github, demo,
        }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">Source</a>
              <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </article>
        ))
      }
    </div>
  </section>
);

export default Portfolio;
