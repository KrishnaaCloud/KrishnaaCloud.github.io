import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const experiences = [
    {
      company: "Isha Foundation",
      role: "DevOps Engineer",
      date: "Nov 2025 - Present · 10 mos",
      type: "Full-time",
      summary: "Leading enterprise-scale MSK/ECS infrastructure.",
      details: [
        "Independently own and optimize enterprise-scale Kafka/MSK platforms and ECS infrastructure.",
        "Ensure high availability and reliability for mission-critical applications.",
        "Automated staggered ingestion and integrated AWS Secrets Manager.",
        "Reduced DB query spike incidents by 57%."
      ]
    },
    {
      company: "ServerCake India",
      role: "DevOps Engineer",
      date: "Nov 2022 - Feb 2025 · 2 yrs 4 mos",
      type: "Full-time",
      summary: "Managed cloud resources and CI/CD pipelines.",
      details: [
        "Automated CI/CD pipelines, managed cloud resources, and implemented robust IaC practices.",
        "Led infrastructure deployments using Terraform.",
        "Maintained Kubernetes clusters and deployed microservices."
      ]
    },
    {
      company: "ServerCake India",
      role: "CloudOps Engineer",
      date: "Jul 2022 - Nov 2022 · 5 mos",
      type: "Full-time",
      summary: "Monitored server health and supported migrations.",
      details: [
        "Monitored server health, resolved operational issues, and supported cloud migrations.",
        "Managed daily backups and disaster recovery drills.",
        "Provided L2 support for cloud infrastructure issues."
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
              <div className="timeline-content" style={{cursor: 'pointer'}} onClick={() => setSelectedJob(exp)}>
                <h4>{exp.role}</h4>
                <div className="company">{exp.company} <span style={{fontSize: '0.8rem', color: '#888'}}>({exp.type})</span></div>
                <div className="date">{exp.date}</div>
                <p style={{fontSize: '0.95rem', opacity: 0.8, marginBottom: '10px'}}>{exp.summary}</p>
                <button className="btn secondary" style={{padding: '6px 16px', fontSize: '0.85rem'}}>Read More</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedJob && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedJob(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedJob(null)}>&times;</button>
              <h3 style={{fontFamily: 'var(--font-serif)', color: 'var(--color-dark-green)', marginBottom: '5px'}}>{selectedJob.role}</h3>
              <div style={{fontWeight: '600', color: 'var(--color-mustard)', marginBottom: '20px'}}>{selectedJob.company}</div>
              <ul style={{paddingLeft: '20px'}}>
                {selectedJob.details.map((detail, idx) => (
                  <li key={idx} style={{marginBottom: '10px', fontSize: '1rem', color: 'var(--color-black)'}}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
