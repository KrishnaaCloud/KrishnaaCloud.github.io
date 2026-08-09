import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const experiences = [
    {
      company: "Isha Foundation",
      role: "DevOps Engineer",
      date: "Nov 2025 - Present",
      type: "Full-time",
      summary: "Architecting high-traffic microservices, zero-trust CI/CD, and enterprise Kafka streaming platforms.",
      details: [
        "Architected an async-first Python microservice on AWS ECS, effortlessly serving over 3.5 Million weekly HTTP requests behind unified Cloudflare DNS routing.",
        "Engineered zero-trust, automated CI/CD pipelines via GitHub Actions for AWS Managed Airflow (MWAA) and ECS container rollouts, utilizing AWS OIDC and Secrets Manager.",
        "Led the zero-downtime cross-region migration and scaling of a mission-critical enterprise architecture across the EU and APAC regions.",
        "Single-handedly owned the organization-wide Apache Kafka ecosystem, migrating 481 topics (5GB+ daily throughput) to Amazon MSK while architecting cross-cloud proxy routing to Azure.",
        "Eliminated cascading architectural failures and reduced database query spikes by 57% through custom staggered-ingestion algorithms and ALB timeout tuning."
      ]
    },
    {
      company: "ServerCake India",
      role: "DevOps Engineer",
      date: "Nov 2022 - Apr 2025",
      type: "Full-time",
      summary: "Managed multi-client AWS infrastructure, secure VPC architectures, and CI/CD automation.",
      details: [
        "Deployed and maintained core AWS infrastructure (EC2, VPC, RDS, Lambda) for multi-client environments, ensuring strict IAM access control and workload isolation.",
        "Architected secure VPC networks with robust subnet segmentation, route tables, and NACLs tailored for diverse client hosting requirements.",
        "Built and administered automated CI/CD pipelines using GitHub Actions and Jenkins for streamlined application builds and deployments.",
        "Engineered event-driven automation using AWS Lambda for S3-triggered processing, scheduled maintenance, and API Gateway integrations.",
        "Hardened security posture and optimized global delivery by tuning Cloudflare CDN, WAF, and firewall rules."
      ]
    },
    {
      company: "ServerCake India",
      role: "CloudOps Engineer",
      date: "Jul 2022 - Nov 2022",
      type: "Full-time",
      summary: "Administered high-availability Linux/Windows hosting platforms for 400+ customers.",
      details: [
        "Managed enterprise Linux and Windows hosting environments, ensuring 99.9% uptime and operational reliability for 400+ shared hosting customers and 45+ resellers.",
        "Administered industry-standard hosting control panels including cPanel, WHM, Plesk, Webuzo, and DirectAdmin.",
        "Owned complete mail server operations, advanced DNS routing, and the end-to-end SSL/TLS certificate lifecycle across all hosting environments.",
        "Supported primary cloud operations by deploying and maintaining baseline AWS infrastructure (EC2, IAM)."
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
