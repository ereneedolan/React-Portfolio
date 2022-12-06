import React from 'react';
import EileenDolan from '../../assets/EileenDolan.jpg'

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <img className='Eileen' src={EileenDolan} alt = 'Eileen'/>
      <p>
        I have recently graduated from Columbia School of Engineering Fullstack Development Bootcamp. I have worked with a variety of languages and am proficient in  HTML, CSS, JavaScript, jQuery, Node.js, Express.js, MySQL, Sequelize, MongoDB, Mongoose, Webpack, ReactJS, Handlebars, Bootstrap, NoSQL, PWA and MERN stack.
      </p>
    </div>
  );
}
