import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/krishnaamuthukumar@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus("Thank you! I will reach out to you shortly.");
        e.target.reset();
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Oops! Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
            
            <input type="hidden" name="_captcha" value="false" />
            
            <button type="submit" className="btn primary" disabled={isSubmitting} style={{marginTop: '10px', width: '100%', opacity: isSubmitting ? 0.7 : 1}}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {status && (
              <p style={{
                color: status.includes("Oops") ? '#ff4d4d' : 'var(--color-mustard)', 
                textAlign: 'center', 
                marginTop: '15px',
                fontWeight: '500'
              }}>
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
