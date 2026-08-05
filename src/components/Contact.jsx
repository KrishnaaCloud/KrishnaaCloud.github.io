import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
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
          <form className="contact-form" action="https://formsubmit.co/krishnaamuthukumar@gmail.com" method="POST">
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
            {/* FormSubmit configurations */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://krishnaacloud.github.io/" />
            <button type="submit" className="btn primary" style={{marginTop: '10px', width: '100%'}}>Send Message</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
