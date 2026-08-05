import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <motion.header 
      className="hero-section"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="profile-container">
        <img src="/profile.jpg" alt="Jothi Krishna M" className="profile-img" />
      </div>
      <h1 className="name-title">Jothi Krishna M</h1>
      <h2 className="role-title">3X AWS Certified Solutions Architect</h2>
      <p className="bio">
        Hands-on experience in managing and optimizing cloud infrastructure. Skilled in deploying and configuring enterprise-scale AWS services, automated CI/CD pipelines, and robust Data Engineering platforms.
      </p>
      <div className="contact-links">
        <a href="https://github.com/KrishnaaCloud" target="_blank" rel="noreferrer" className="btn primary">
          <FaGithub size={20} />
          GitHub Profile
        </a>
        <a href="https://www.linkedin.com/in/jothi-krishna-m-07a275190/" target="_blank" rel="noreferrer" className="btn secondary">
          <FaLinkedin size={20} />
          LinkedIn
        </a>
        <a href="mailto:krishnaamuthukumar@gmail.com" className="btn secondary">
          <FaEnvelope size={20} />
          Email Me
        </a>
      </div>
    </motion.header>
  );
};

export default Hero;
