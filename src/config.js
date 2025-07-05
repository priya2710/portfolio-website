// src/config.js

const config = {
    siteTitle: "Supriya Rani",
    navLinks: ["About", "Experience", "Projects", "Resume", "Contact"],
    
    about: {
      name: "Supriya Rani",
      role: "Data Engineer | Python, PySpark, GCP",
      description: "Experienced in building scalable data pipelines using Python, PySpark, and GCP. Passionate about solving real-world data challenges.",
    },

    experience: [
      {
        company: "National Instruments (Emerson)",
        role: "Staff Software Engineer",
        location: "Bengaluru",
        duration: "Mar 2025 – Present",
        description: [
          "Developed cloud-based automation and testing systems using AWS, Python, and C++.",
          "Identified and fixed memory leaks, optimizing system performance by 20%.",
        ],
      },
      {
        company: "Gen Digital Inc (formerly Norton LifeLock)",
        role: "Software Engineer",
        location: "Chennai",
        duration: "Nov 2022 – Mar 2025",
        description: [
          "Engineered serverless backend using AWS Lambda, Step Functions, AuroraDB, and S3.",
          "Integrated multi-platform APIs to clean files (Google Cloud, OneDrive, etc).",
          "Worked on WhatsApp Scam Analyzer using AWS Bedrock and open-source models.",
          "Automated cross-platform telemetry and data upload (30% faster).",
          "🏆 Nspire Award (May 2023, Aug 2024)",
        ],
      },
      {
        company: "Tata Consultancy Services (PayPal Client)",
        role: "Systems Engineer",
        location: "Bengaluru",
        duration: "Jul 2021 – Nov 2022",
        description: [
          "Built and monitored cloud-based alerting systems using Splunk and Python.",
          "Automated integration workflows via Dell Boomi and Slack APIs.",
          "Created dashboards for real-time visualization using DaLM.",
          "🏆 TCS Gems - Technical Excellence",
        ],
      },
    ],

    projects: [
      {
        title: "Customer Analytics Pipeline",
        description: "Built a pipeline on GCP using PySpark to process 1TB/day.",
        stack: ["PySpark", "BigQuery", "GCP"],
        link: "#",
      },
      {
        title: "SRE Tooling Automation",
        description: "Reduced incident time by 40% using Python automation.",
        stack: ["Python", "AWS Lambda"],
        link: "#",
      },
    ],
  
    resumeLink: "/resume.pdf",
  
    contact: {
      email: "supriya@email.com",
      linkedin: "https://linkedin.com/in/supriya",
      github: "https://github.com/supriya",
    },
  };
  
  export default config;  