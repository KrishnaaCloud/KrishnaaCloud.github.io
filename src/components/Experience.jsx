import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: "Isha Foundation",
      role: "DevOps Engineer",
      date: "Nov 2025 - Present · 10 mos",
      type: "Full-time",
      details: [
        "Independently own and optimize enterprise-scale Kafka/MSK platforms and ECS infrastructure.",
        "Ensure high availability and reliability for mission-critical applications."
      ]
    },
    {
      company: "ServerCake India",
      role: "DevOps Engineer",
      date: "Nov 2022 - Feb 2025 · 2 yrs 4 mos",
      type: "Full-time",
      details: [
        "Automated CI/CD pipelines, managed cloud resources, and implemented robust IaC practices."
      ]
    },
    {
      company: "ServerCake India",
      role: "CloudOps Engineer",
      date: "Jul 2022 - Nov 2022 · 5 mos",
      type: "Full-time",
      details: [
        "Monitored server health, resolved operational issues, and supported cloud migrations."
      ]
    }
  ];

  return (
    <section className="experience-section">
      <div className="section-content">
        <h3 className="section-title">My Experience</h3>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="timeline-content">
                <h4>{exp.role}</h4>
                <div className="company">{exp.company} <span style={{fontSize: '0.8rem', color: '#888'}}>({exp.type})</span></div>
                <div className="date">{exp.date}</div>
                <ul>
                  {exp.details.map((detail, idx) => (
                    <li key={idx} style={{marginBottom: '6px', fontSize: '0.95rem'}}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
