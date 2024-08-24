// src/components/About.js
import React from 'react';
import './about.css'; // Ensure this file contains the necessary styles
import image from './pic.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm a web developer with a passion for creating beautiful and functional web applications. With a background in computer science and a keen eye for design, I blend technical expertise with creative flair to build responsive and user-friendly websites.
          </p>
          <p>
            I enjoy learning new technologies and staying up-to-date with industry trends. In my free time, I love to work on personal projects, contribute to open-source communities, and share knowledge with fellow developers.
          </p>
        </div>
        <img src={image} alt="Profile" className="profile-pic" />
      </div>
    </section>
  );
};

export default About;
