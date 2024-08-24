import React from 'react';
import './skills.css';
import CLogo from './images/c.png';
import htmlLogo from './images/htmllogo.png'; // Add your logos here
import cssLogo from './images/csslogo.png';
import PythonLogo from './images/pythonlogo.png';
import JsLogo from './images/JS.png';
import MlLogo from './images/ml.png';


const Skills = () => {
  const skills = [
    { name: 'C', logo: CLogo },
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'PYTHON', logo: PythonLogo },
    { name: 'JAVA SCRIPT', logo: JsLogo },
    { name: 'MACHINE LEARNING', logo: MlLogo },
    // Add more skills here
  ];

  return (
    <section className="skills-section" id="skills">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skills.map(skill => (
          <li key={skill.name}>
            <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
            <p>{skill.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
