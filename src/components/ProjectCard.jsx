import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Lock } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const isPrivate = project.link === "#";

  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      <div className="tags-container">
        {project.tags.map((tag, idx) => (
          <span key={idx} className="tag">{tag}</span>
        ))}
      </div>
      
      {!isPrivate ? (
        <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
          <ExternalLink size={16} style={{ marginRight: '6px' }} />
          View Repository
        </a>
      ) : (
        <span className="project-link disabled" style={{ cursor: 'not-allowed', opacity: 0.6 }}>
          <Lock size={16} style={{ marginRight: '6px' }} />
          Private Repository
        </span>
      )}
    </motion.div>
  );
};

export default ProjectCard;
