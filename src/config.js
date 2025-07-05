// src/config.js

const config = {
  navLinks: ["About", "Experience", "Education"],

  about: {
    name: "Supriya Rani",
    role: "Full Stack Cloud Engineer | Python, React.js, AWS, GCP",
    description: "Experienced Cloud Engineer with a strong foundation in full-stack development and a proven track record of building scalable, automated cloud-native systems. With 4+ years of hands-on experience across AWS and GCP, I’ve engineered high-impact backend workflows, developed modern web applications, and led integrations across multi-cloud platforms. Passionate about solving complex data challenges and delivering reliable, performant software in production environments.",
  },

  skills: {
    "Cloud" : ["AWS", "GCP"],
    "AWS Services": ["Lambda", "S3", "Step Functions", "Cloudwatch", "API Gateway", "Athena", "IAM Roles", "Secrets Manager", "Cost Explorer"],
    "Languages" : ["Python", "JavaScript", "TypeScript", "C++"],
    "Tools" : ["React.js", "REST APIs", "CI/CD (Jenkins, TeamCity)", "LabVIEW", "Splunk", "Dell Boomi", "Azure DevOps", "Visual Studio"],
    "Databases" : ["DynamoDB", "AuroraDB", "MySQL", "Postgres"],
    "Certifications" : ["GCP Cloud Developer", "AWS Solutions Architect", "Coursera: SQL, Databases"]
  },

  education: [
    {
      institution: "Indian Institute of Information Technology (IIIT), Ranchi",
      degree: "B.Tech (Hons.) in Computer Science and Engineering",
      duration: "June 2021",
      score: "CGPA: 8.97 / 10"
    },
    {
      institution: "DAV Public School, Rajrappa Project",
      degree: "12th Grade",
      duration: "March 2016",
      score: "91.40%"
    },
    {
      institution: "DAV Public School, Rajrappa Project",
      degree: "10th Grade",
      duration: "March 2014",
      score: "CGPA: 9.8"
    }
  ],

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

  internships: [
    {
      company: "MindFire Solutions",
      role: "Software Engineer Intern",
      duration: "Jan 2021 – Jun 2021",
      description: [
        "Fixed front-end bugs and enhanced UI using HTML, CSS, and JavaScript.",
        "Collaborated via GitLab for version control and code reviews."
      ],
    },
    {
      company: "DOJO Sports Pvt. Ltd.",
      role: "Data Analyst Intern → Full-Time",
      duration: "Feb 2020 – Dec 2020",
      description: [
        "Supervised 5 interns, improving productivity by 20%.",
        "Analyzed 50+ sports events with Google DB to generate insights."
      ],
    },
  ],

  resumeLink: "/resume.pdf",

  contact: {
    email: "rani98.supriya@gmail.com",
    linkedin: "https://linkedin.com/in/supriya-rani",
    github: "https://github.com/priya2710",
    phone: "+91 62024 26200",
  },
};

export default config;  