import React from 'react';
import './contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <div className="contact-details">
        <p>Email: <a href="mailto:kandha815@gmail.com">kandha815@gmail.com</a></p>
        <p>Phone: <a href="tel:+1234567890">9014955289</a></p>
        <p>Location: kiet-W korangi, kakinada district</p>
      </div>
      <div className="social-media">
        <h3>Follow me on:</h3>
        <a href="mailto:kandha815@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a>
        <a href="https://www.linkedin.com/in/kandha-swarna-a9459a288?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BSNbmTj%2BYTv2DYcZiqfTTPQ%3D%3D" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/kandaswarna123" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
}

export default Contact;
