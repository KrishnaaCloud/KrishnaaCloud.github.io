import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real scenario, integrate Formspree or Web3Forms here.
    // For now, we simulate a successful submission.
    setStatus("Thank you! Your message has been sent.");
    e.target.reset();
  };

  return (
    <section className="contact-section">
      <div className="section-content">
        <h3 className="section-title" style={{textAlign: 'center'}}>Get in touch</h3>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required placeholder="Let's build something great..."></textarea>
            </div>
            <button type="submit" className="btn primary" style={{marginTop: '10px', width: '100%'}}>Send Message</button>
            {status && <p style={{color: 'var(--color-neon-green)', textAlign: 'center', marginTop: '10px'}}>{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
