import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projectsList = [
    {
      name: "AWS EKS Reference Platform",
      description: "Built a reference Kubernetes platform on AWS EKS with Terraform, ArgoCD GitOps (app-of-apps) and Kyverno admission policies. Defined 2 SLOs (99% availability, 95% of probes under 50 ms) with Prometheus burn-rate alerts and a Grafana dashboard. In a controlled test, the alert fired 2m 22s after an outage. Rebuilt in about 11.5 minutes and destroyed after each session, with every timing logged in the repo.",
      link: "https://github.com/KrishnaaCloud/eks-platform",
      tags: ["AWS EKS", "Terraform", "GitOps", "ArgoCD", "Kyverno", "Prometheus", "Grafana"],
      category: "EKS"
    },
    {
      name: "Enterprise Golden AMI Pipeline",
      description: "Architected a centralized Golden AMI pipeline using AWS EC2 Image Builder, distributing hardened AMIs across 12 AWS accounts. Automated cross-account sharing via EventBridge/Lambda and optimized cloud-init sequences to cut ECS readiness time from 153s to 102s (33%).",
      link: "https://github.com/KrishnaaCloud/Golden-AMI-Pipeline",
      tags: ["AWS EC2 Image Builder", "AWS Lambda", "AWS SSM", "Python", "DevSecOps"],
      category: "CI/CD"
    },
    {
      name: "Zero-Access Financial ERP Platform",
      description: "Engineered a zero-trust Supervised Browser portal in a no-access AWS account using FIDO hardware keys. Deployed ephemeral container sessions via AWS ECS and AWS CDK. Optimized costs using EC2 bin-packing algorithms while strictly enforcing immutable audit trails via EFS session recording and a private RDS backend.",
      link: "https://github.com/KrishnaaCloud/Secure-ERP-Access-Portal",
      tags: ["DevSecOps", "AWS ECS", "AWS CDK", "OIDC", "Security"],
      category: "ECS"
    },
    {
      name: "Global API: High-Traffic Microservice Architecture",
      description: "Architected a mission-critical async-first Python microservice on AWS ECS, successfully serving 3.5M+ weekly requests. Engineered unified Cloudflare DNS routing from multiple domains into a single ALB. Deployed full infrastructure via AWS CDK with CI/CD fully automated in GitHub Actions.",
      link: "https://github.com/KrishnaaCloud/Enterprise-AWS-ECS-Microservice",
      tags: ["AWS CDK", "Python", "ECS", "GitHub Actions", "Cloudflare", "MongoDB"],
      category: "All"
    },
    {
      name: "Mahashivratri High-Volume Donation Processor (AWS)",
      description: "Engineered a highly scalable, event-driven order processing system utilizing AWS Lambda, EventBridge, and DynamoDB. Decoupled backend services for asynchronous event routing. Deployed the entire stack using Infrastructure-as-Code (AWS CDK) to eliminate server management overhead.",
      link: "https://github.com/KrishnaaCloud/mahashivratri-donation-processor",
      tags: ["Serverless", "EventBridge", "AWS CDK", "Lambda", "DynamoDB"],
      category: "All"
    },

    {
      name: "AWS MWAA (Apache Airflow) CI/CD Automation",
      description: "Engineered highly secure, zero-trust GitHub Actions deployment pipelines for Amazon MWAA using AWS OIDC. Built a custom state-machine to trigger MWAA updates, sync DAGs to S3, and broadcast dynamic Slack alerts.",
      link: "https://github.com/KrishnaaCloud/AWS-MWAA-CICD-Pipeline",
      tags: ["GitHub Actions", "Apache Airflow", "AWS MWAA", "CI/CD", "Bash"],
      category: "CI/CD"
    },
    {
      name: "AWS ECS Cross-Region Migration",
      description: "Led the end-to-end replication and stabilization of a high-traffic enterprise architecture. Diagnosed and resolved cascading failures involving ECS, ALB timeouts, and RDS database locking using AWS CloudTrail and CloudWatch.",
      link: "https://github.com/KrishnaaCloud/AWS-ECS-Cross-Region-Migration",
      tags: ["AWS ECS", "AWS ALB", "AWS CDK", "RDS"],
      category: "ECS"
    },
    {
      name: "AWS MSK Cross-Cloud Proxy",
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
      name: "Internal Playwright Testing Platform",
      description: "Architected a centralized Next.js and Express platform for orchestrating automated Playwright browser tests. Built a secure Node.js local agent using WebSockets to execute browser tests locally without compromising EC2 server security.",
      link: "https://github.com/KrishnaaCloud/Playwright-Agent",
      tags: ["Node.js", "Next.js", "Express", "WebSockets", "Playwright"],
      category: "All"
    },
    {
      name: "AWS MSK Kafka Platform Migration",
      description: "Led zero-downtime migration of 481 topics / 5 GB daily throughput from self-managed Kafka to Amazon MSK. Automated staggered ingestion, integrated AWS Secrets Manager, and reduced DB query spike incidents by 57%.",
      link: "https://github.com/KrishnaaCloud/aws-msk-kafka-platform",
      tags: ["Amazon MSK", "Apache Kafka", "Data Engineering"],
      category: "MSK"
    }
  ];

  const categories = ["All", "EKS", "MSK", "ECS", "CI/CD"];
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
