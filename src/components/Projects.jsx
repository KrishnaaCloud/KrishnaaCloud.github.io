import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projectsList = [
    {
      name: "Global Enterprise Infrastructure Stabilization",
      description: "Led the end-to-end replication and stabilization of a high-traffic enterprise architecture. Diagnosed and resolved cascading failures involving ECS, ALB timeouts, and RDS database locking using AWS CloudTrail and CloudWatch.",
      link: "https://github.com/KrishnaaCloud/Global-Enterprise-Infrastructure-Stabilization",
      tags: ["AWS ECS", "AWS ALB", "AWS CDK", "RDS"],
      category: "ECS"
    },
    {
      name: "AWS-MSK-Cross-Cloud-Proxy",
      description: "Advanced networking architecture utilizing HAProxy and TCP SNI routing to securely connect external cloud providers (Azure, GCP) to private Amazon MSK brokers without a VPN.",
      link: "https://github.com/KrishnaaCloud/AWS-MSK-Cross-Cloud-Proxy",
      tags: ["Amazon MSK", "HAProxy", "Networking", "TCP/SNI"],
      category: "MSK"
    },
    {
      name: "MSK to EventBridge Webhook Pipeline",
      description: "Architected a serverless pipeline using AWS EventBridge Pipes to natively push real-time data from a private Amazon MSK cluster to an external Supabase webhook, bypassing EC2 runners.",
      link: "https://github.com/KrishnaaCloud/MSK-to-EventBridge-Webhook-Pipeline",
      tags: ["Amazon MSK", "EventBridge", "Serverless", "AWS VPC"],
      category: "MSK"
    },
    {
      name: "aws-msk-kafka-platform",
      description: "Led zero-downtime migration of 481 topics / 5 GB daily throughput from self-managed Kafka to Amazon MSK. Automated staggered ingestion, integrated AWS Secrets Manager, and reduced DB query spike incidents by 57%.",
      link: "https://github.com/KrishnaaCloud/aws-msk-kafka-platform",
      tags: ["Amazon MSK", "Apache Kafka", "Data Engineering"],
      category: "MSK"
    },
    {
      name: "3-Tier-AWS-Infra-Using-Terraform",
      description: "A fully automated AWS 3-Tier Architecture built with Terraform, hosting a Python Flask web application. Includes ALB, EC2 instances, and Multi-AZ RDS MySQL.",
      link: "https://github.com/KrishnaaCloud/3-Tier-AWS-Infra-Using-Terraform",
      tags: ["Terraform", "AWS", "Infrastructure as Code"],
      category: "Other"
    },
    {
      name: "aws-ecs-devops-cdk-stack",
      description: "End-to-end automated AWS environment. Features dual GitHub Actions CI/CD pipelines deploying CDK CloudFormation and containerized ECS application.",
      link: "https://github.com/KrishnaaCloud/aws-ecs-devops-cdk-stack",
      tags: ["AWS CDK", "ECS", "CI/CD", "GitHub Actions"],
      category: "ECS"
    },
    {
      name: "Jenkins-EC2-Tomcat-Pipeline",
      description: "Complete CI/CD pipeline setup to automatically build and deploy a Java web app (WAR) to Apache Tomcat on AWS EC2 using Jenkins and Maven.",
      link: "https://github.com/KrishnaaCloud/Jenkins-EC2-Tomcat-Pipeline",
      tags: ["Jenkins", "EC2", "Tomcat", "CI/CD"],
      category: "CI/CD"
    }
  ];

  const categories = ["All", "MSK", "ECS", "CI/CD", "Other"];
  const filteredProjects = filter === 'All' ? projectsList : projectsList.filter(p => p.category === filter);

  return (
    <section className="projects-section">
      <div className="section-content">
        <h3 className="section-title">Featured Projects</h3>
        
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px'}}>
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              onClick={() => setFilter(cat)}
              className="btn"
              style={{
                padding: '8px 20px', 
                fontSize: '0.9rem',
                backgroundColor: filter === cat ? 'var(--color-black)' : 'transparent',
                color: filter === cat ? 'var(--color-mustard)' : 'var(--color-black)',
                border: '1px solid var(--color-black)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="project-card"
              >
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                  View Repository &rarr;
                </a>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
