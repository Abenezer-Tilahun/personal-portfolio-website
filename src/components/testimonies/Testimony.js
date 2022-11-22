/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './testimonies.css';
import Slider from 'react-slick';
import settings from '../slider/caroussel';
import AVTR from '../../asset/AVTR.jpg';
import AVTR1 from '../../asset/AVTR1.jpg';
import AVTR2 from '../../asset/AVTR2.jpg';
import AVTR3 from '../../asset/AVTR3.jpg';
import AVTR4 from '../../asset/AVTR4.jpg';
import AVTR5 from '../../asset/AVTR5.jpg';

const data = [
  {
    avatar: AVTR,
    name: 'Bereket Temesegen',
    review: ' I am writing this letter to recommend Abenezer Tilahun for the position of software engineer at your business. Abenezer was a team lead for our project.his performance and his skills and knowledge were unparalleled at projects.Along with that, however, he brought an energy and dependability that made him crucial to our team. I can recommend him without reservation.',
  },

  {
    avatar: AVTR1,
    name: 'Victor Ebube Okoroji',
    review: 'Abenezer is one of the smartest software developers I have ever met.I worked alongside him at Microverse as a coding partner during remote pair programming, and during that time he proved his commitment and determination over and over again.He is a person who is ready to help you grow as a software developer and also help solve any coding blocker.  He kept me from falling into bug blues multiple times.',
  },

  {
    avatar: AVTR5,
    name: 'Faith Usor',
    review: 'Abenezer is a highly intelligent software engineer, with a decent knowledge of both frontend skills such as Reactjs,Redux, bootstrap and backend skills Java and Ruby on Rails and had demonstrated the ability to work and collaborate remotely.I would highly recommend him to any hiring manager. He is also a genuinely kind, respectful,encouraging person.I highly recommend him for your team and company!',
  },

  {
    avatar: AVTR2,
    name: 'Bushra Mustofa',
    review: 'Abenezer is an experienced and determined programmer. He has deep understanding of programming and UI/UX design skills.I have been able to witness firsthand how he solves problems and finds solutions to any logical issues on both the server-side and client-side.If you want to get done your project in a short period of time I recommend you to hire Abenezer.',
  },

  {
    avatar: AVTR3,
    name: 'Linda Keza',
    review: ' We’ve joined our hands on several projects, and Abenezer is one of the best people I had as a partner during my journey at Microverse. I highly recommend his competence to any person looking for a Full-Stack Software Developer. He is the most profound person I have met, and his ability to tackle any problem is remarkable and with a kind smile. Abenezer would become an appreciated member of any team.',
  },

  {
    avatar: AVTR4,
    name: 'Wasihun Mesfin',
    review: ' Abenezer is skilled and always finds new techniques to solve a problem.He has the vision to make the web accessible to everyone, which I believe should be the vision embedded in every one of us. When he reviewed for a project, Abenezer showed good competitiveness. He has the necessary tool set to make an impact in the web development field.I highly recommend him for your team and company!',
  },
];

const Testimony = () => (
  <section id="testimony">
    <h5>Review Form Clients/Co-Workers</h5>
    <h2>Testimonials</h2>
    <div className="container testimonial_container ">
      <Slider {...settings}>
        {
      data.map(({ avatar, name, review }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <article key={index} className=" testimonial">
          <div className="client_avatar">
            <img src={avatar} alt="Avatar one" />
          </div>
          <h5 className="client_name">{name}</h5>
          <small className="client_review">
            {review}
          </small>
        </article>
      ))
}
      </Slider>
    </div>
  </section>
);

export default Testimony;
