import React, { useState } from 'react';
import './certificates.css'; // Ensure this file exists and is properly linked

// Certificate images
import cert1Image from './edyst.jpg';
import cert2Image from './images/cer1.jpg';
import cert3Image from './images/cer2.jpg';
import cert4Image from './images/cer3.jpg';
import cert5Image from './images/pythonfud.png';
import cert6Image from './images/fed.png';
import cert7Image from './images/htatri.png';
import cert8Image from './images/ibm1.png';
import cert9Image from './images/ibmai.png';


// List of certificates
const certificates = [
  {
    image: cert1Image,
    title: 'Certificate 1',
    link: 'https://example.com/certificate1',
    course:'edyst-Basics of python',
  },
  {
    image: cert2Image,
    title: 'Certificate 2',
    link: 'https://example.com/certificate2',
    course:'Udemy-python and django framework',
  },
  {
    image: cert3Image,
    title: 'Certificate 3',
    link: 'https://example.com/certificate3',
    course:'Udemy-CSS,JS,PHP',
  },
  {
    image: cert4Image,
    title: 'Certificate 4',
    link: 'https://example.com/certificate4',
    course:'Udemy-HTML5',
  },
  {
    image: cert5Image,
    title: 'Certificate 5',
    link: 'https://example.com/certificate5',
    course:'Greatlearning-python fundamentals',
  },
  {
    image: cert6Image,
    title: 'Certificate 6',
    link: 'https://example.com/certificate6',
    course:'Greatlearning-Frontend development[HTML]',
  },
  {
    image: cert7Image,
    title: 'Certificate 7',
    link: 'https://example.com/certificate7',
    course:'Greatlearning-HTML[attributes and tags]',

  },
  {
    image: cert8Image,
    title: 'Certificate 8',
    link: 'https://example.com/certificate8',
    course:'IBM skillsbuild', 
  },
  {
    image: cert9Image,
    title: 'Certificate 9',
    link: 'https://example.com/certificate8',
    course:'IBM AI', 
  },
];

function Modal({ isOpen, onClose, imageSrc }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Certificate" className="modal-image" />
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function Certificates() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage('');
  };

  return (
    <section id="certificates">
      <h2>Certificates</h2>
      <ul className="certificates-list">
        {certificates.map((cert, index) => (
          <li key={index} className="certificate-item">
            <div className="certificate-details">
              <h3>{cert.title}</h3>
              <h4>{cert.course}</h4>

              <button
                className="certificate-link"
                onClick={() => openModal(cert.image)}
              >
                View Certificate
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Modal isOpen={modalOpen} onClose={closeModal} imageSrc={currentImage} />
    </section>
  );
}

export default Certificates;
