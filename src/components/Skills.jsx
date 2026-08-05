import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const certifications = [
    {
      name: "AWS Certified DevOps Engineer – Professional",
      image: "/aws-certified-devops-engineer-professional.png",
      id: "6e687b08-4d71-4bcd-9b5c-de80793e34fc"
    },
    {
      name: "AWS Certified Solutions Architect - Associate",
      image: "/aws-certified-solutions-architect-associate.png",
      id: "94b7d279-91c8-479c-b3a0-9e674de96ff3"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      image: "/aws-certified-cloud-practitioner.png",
      id: "533d0689-4db4-4511-b72f-a63606ba53be"
    }
  ];

  const keySkills = [
    "AWS ECS", "Kafka & AWS MSK", "CI/CD", "Terraform", "Infrastructure as Code", "Kubernetes"
  ];

  return (
    <motion.section 
      className="skills-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <motion.div 
            key={index} 
            className="cert-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <img src={cert.image} alt={cert.name} className="cert-image" />
            <div className="cert-info">
              <h5>{cert.name}</h5>
              <span className="cert-id">ID: {cert.id}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="key-skills-container">
        <h4 className="skills-title">Core Expertise</h4>
        <div className="tags-container center">
          {keySkills.map((skill, idx) => (
            <span key={idx} className="tag solid">{skill}</span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
