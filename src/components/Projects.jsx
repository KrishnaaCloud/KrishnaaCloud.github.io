import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectsList = [
    {
      name: "AWS-MSK-Cross-Cloud-Proxy",
      description: "Advanced networking architecture utilizing HAProxy and TCP SNI routing to securely connect external cloud providers (Azure, GCP) to private Amazon MSK brokers without a VPN.",
      link: "https://github.com/KrishnaaCloud/AWS-MSK-Cross-Cloud-Proxy",
      tags: ["Amazon MSK", "HAProxy", "Networking", "TCP/SNI"]
    },
    {
      name: "MSK to EventBridge Webhook Pipeline",
      description: "Architected a serverless pipeline using AWS EventBridge Pipes to natively push real-time data from a private Amazon MSK cluster to an external Supabase webhook, bypassing EC2 runners.",
      link: "https://github.com/KrishnaaCloud/MSK-to-EventBridge-Webhook-Pipeline",
      tags: ["Amazon MSK", "EventBridge", "Serverless", "AWS VPC"]
    },
    {
      name: "aws-msk-kafka-platform",
      description: "Led zero-downtime migration of 481 topics / 5 GB daily throughput from self-managed Kafka to Amazon MSK. Automated staggered ingestion, integrated AWS Secrets Manager, and reduced DB query spike incidents by 57%.",
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
    <section className="projects-section">
      <h3 className="section-title">Featured Projects</h3>
      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
