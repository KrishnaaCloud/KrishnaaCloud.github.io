import React from 'react';
import './index.css';

function App() {
  const projects = [
    {
      name: "MSK to EventBridge Webhook Pipeline",
      description: "Architected a serverless pipeline using AWS EventBridge Pipes to natively push real-time data from a private Amazon MSK cluster to an external Supabase webhook, bypassing EC2 runners.",
      link: "#",
      tags: ["Amazon MSK", "EventBridge", "Serverless", "AWS VPC"]
    },
    {
      name: "aws-msk-kafka-platform",
      description: "Enterprise-scale migration of 65+ connectors and 200+ topics from self-managed Kafka to Amazon MSK, featuring automated staggered ingestion and AWS Secrets Manager integration.",
      link: "https://github.com/KrishnaaCloud/aws-msk-kafka-platform",
      tags: ["Amazon MSK", "Apache Kafka", "Data Engineering"]
    },
    {
      name: "3-Tier-AWS-Infra-Using-Terraform",
      description: "A fully automated AWS 3-Tier Architecture built with Terraform, hosting a Python Flask web application. Includes ALB, EC2 instances, and Multi-AZ RDS MySQL.",
      link: "https://github.com/KrishnaaCloud/3-Tier-AWS-Infra-Using-Terraform",
      tags: ["Terraform", "AWS", "Infrastructure as Code"]
    },
    {
      name: "aws-ecs-devops-cdk-stack",
      description: "End-to-end automated AWS environment. Features dual GitHub Actions CI/CD pipelines deploying CDK CloudFormation and containerized ECS application.",
      link: "https://github.com/KrishnaaCloud/aws-ecs-devops-cdk-stack",
      tags: ["AWS CDK", "ECS", "CI/CD", "GitHub Actions"]
    },
    {
      name: "Jenkins-EC2-Tomcat-Pipeline",
      description: "Complete CI/CD pipeline setup to automatically build and deploy a Java web app (WAR) to Apache Tomcat on AWS EC2 using Jenkins and Maven.",
      link: "https://github.com/KrishnaaCloud/Jenkins-EC2-Tomcat-Pipeline",
      tags: ["Jenkins", "EC2", "Tomcat", "CI/CD"]
    }
  ];

  return (
    <div className="portfolio-container">
      <div className="background-glow"></div>
      
      <header className="hero-section">
        <h1 className="name-title">Krishna Muthukumar</h1>
        <h2 className="role-title">3X AWS Certified Solutions Architect</h2>
        <p className="bio">
          Hands-on experience in managing and optimizing cloud infrastructure. Skilled in deploying and configuring enterprise-scale AWS services, automated CI/CD pipelines, and robust Data Engineering platforms.
        </p>
        <div className="contact-links">
          <a href="https://github.com/KrishnaaCloud" target="_blank" rel="noreferrer" className="btn primary">GitHub Profile</a>
          <a href="mailto:krishnaamuthukumar@gmail.com" className="btn secondary">Email Me</a>
        </div>
      </header>

      <section className="projects-section">
        <h3 className="section-title">Featured Projects</h3>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <div className="tags-container">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">View Repository ↗</a>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2026 Krishna Muthukumar. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
