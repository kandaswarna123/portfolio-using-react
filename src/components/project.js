// src/components/Projects.js
import React from 'react';
import './project.css'; // Ensure this file exists and is properly linked
import project1Image from './images/feedback.jpg';
import project2Image from './images/note.jpeg';
import project3Image from './images/iris.jpeg';
import project4Image from './images/movie.png';
import project5Image from './images/Portfolio.png';
import project6Image from './images/port.png';
function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul className="projects-list">
        <li className="project-item">
          <img src={project1Image} alt="Project 1" className="project-image" />
          <div className="project-details">
            <h3>Project 1</h3>
            <p>FEEDBACK FORM.</p>
            <a href="https://www.linkedin.com/in/kandha-swarna-a9459a288" className="linkedin-link" target="_blank" rel="noopener noreferrer">
              View on LinkedIn
            </a>
          </div>
        </li>
        <li className="project-item">
          <img src={project2Image} alt="Project 2" className="project-image" />
          <div className="project-details">
            <h3>Project 2</h3>
            <p> NOTE TAKING APP.</p>
            <a href="hhttps://www.linkedin.com/in/kandha-swarna-a9459a288" className="linkedin-link" target="_blank" rel="noopener noreferrer">
              View on LinkedIn
            </a>
          </div>
        </li>
        <li className="project-item">
          <img src={project3Image} alt="Project 3" className="project-image" />
          <div className="project-details">
            <h3>Project 3</h3>
            <p>IRIS FLOWER CLASSIFICATION.</p>
            <a href="https://www.linkedin.com/in/kandha-swarna-a9459a288" className="linkedin-link" target="_blank" rel="noopener noreferrer">
              View on LinkedIn
            </a>
          </div>
        </li>
        <li className="project-item">
          <img src={project4Image} alt="Project 3" className="project-image" />
          <div className="project-details">
            <h3>Project 4</h3>
            <p>online movie ticket booking</p>
            <a href="https://www.linkedin.com/in/kandha-swarna-a9459a288" className="linkedin-link" target="_blank" rel="noopener noreferrer">
              View on LinkedIn
            </a>
          </div>
        </li>
        <li className="project-item">
          <img src={project5Image} alt="Project 3" className="project-image" />
          <div className="project-details">
            <h3>Project 5</h3>
            <p>portfolio using react</p>
            <a href="https://www.linkedin.com/in/kandha-swarna-a9459a288" className="linkedin-link" target="_blank" rel="noopener noreferrer">
              View on LinkedIn
            </a>
          </div>
        </li>
        <li className="project-item">
          <img src={project6Image} alt="Project 3" className="project-image" />
          <div className="project-details">
            <h3>Project 6</h3>
            <p>portfolio using html css</p>
            <a href="https://www.linkedin.com/in/kandha-swarna-a9459a288" className="linkedin-link" target="_blank" rel="noopener noreferrer">
              View on LinkedIn
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
