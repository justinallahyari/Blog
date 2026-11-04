export const siteConfig = {
  name: "Justin Allahyari — IT Systems Architect & Enterprise Technologist",
  shortName: "Justin Allahyari",
  description:
    "Portfolio, resume, and blog of Justin Allahyari — Help Desk Technician at Toray Advanced Composites and Management Information Systems student at San José State University.",
  url: "https://justinallahyari.dev",
  author: {
    name: "Justin Allahyari",
    role: "Help Desk Technician & IT System Architect",
    subtitle: "MIS @ San José State University · Toray Advanced Composites",
    bio: "I'm currently balancing full-time Business Management (MIS) studies at San José State University with a role as a Help Desk Technician at Toray Advanced Composites. I get hands-on with technical support, enterprise application architecture, RBAC/SSO integrations, and DoD compliance while leading end-to-end IT deployments.",
    avatar: "/images/justin-avatar.jpg",
    location: "Saratoga, California, USA",
    phone: "(408) 442-0741",
    email: "justinallahyari@yahoo.com",
    resumeUrl: "/resume.pdf",
    github: "https://github.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://x.com",
    rss: "/rss.xml",
  },
  experience: [
    {
      period: "01/2026 – Present",
      role: "Help Desk Technician",
      company: "Toray Advanced Composites",
      location: "Morgan Hill, California, United States",
      sections: [
        {
          heading: "Enterprise Application Management",
          bullets: [
            "Promoted to Help Desk Technician → Managed enterprise applications and environments.",
            "Led deployment of Role-Based Access Control (RBAC), SSO integration, and user onboarding → Architected enterprise applications for seamless final deployment and user training.",
          ],
        },
        {
          heading: "Project Execution & Training",
          bullets: [
            "Facilitated end-to-end IT project delivery → From initial conception through deployment and user training.",
          ],
        },
        {
          heading: "Compliance & Certification",
          bullets: [
            "CMMC Level 2 certification → Authored compliance reports and managed system/operational changes to maintain standards and ensure compliance with standards set by the DoD.",
          ],
        },
      ],
    },
    {
      period: "08/2025 – 12/2025",
      role: "IT Internship",
      company: "Toray Advanced Composites",
      location: "Saratoga, California, United States",
      sections: [
        {
          heading: "System Upgrade & Automation",
          bullets: [
            "Led the upgrade of all company computers from Windows 10 to Windows 11.",
            "Learned to write scripts that sped up and automated the migration process, making it more efficient.",
          ],
        },
        {
          heading: "User Support & Communication",
          bullets: [
            "Worked directly with end-users to troubleshoot and resolve issues quickly.",
            "Improved communication skills by explaining technical solutions in clear, straightforward terms.",
          ],
        },
      ],
    },
  ],
  projects: [
    {
      period: "07/2026 – Present",
      title: "Azure Migration to Government Tenant",
      role: "Technician and System Architect",
      summary: "Worked to migrate a Commercial Azure tenant to a Government tenant.",
      tags: ["Azure Gov", "Entra ID", "Exchange Online", "PowerShell", "Hybrid AD"],
      bullets: [
        "Created a connection between an on-site domain controller and Entra ID.",
        "Migrated on-site Exchange server to have a hybrid connection with Exchange Online.",
        "Made scripts to automate aspects of user onboarding such as the removal of old cached credentials.",
        "Managed user training to ensure a smooth migration.",
      ],
    },
    {
      period: "06/2026 – 08/2026",
      title: "DocuSign Migration",
      role: "System Architect",
      summary:
        "Migrated users from Adobe Sign to DocuSign, managing the deployment from start to finish including web application configuration.",
      tags: ["DocuSign", "SSO", "Zscaler", "Enterprise Provisioning"],
      bullets: [
        "Configured SSO, user provisioning, and application settings to ensure DocuSign integrated smoothly into the company environment.",
        "Made exceptions and blocks in Zscaler to block Adobe Sign and allow authorized users to upload sensitive documents into DocuSign.",
        "Handled user training and discovery to ensure all features used in Adobe Sign were supported in DocuSign.",
      ],
    },
    {
      period: "01/2026 – 06/2026",
      title: "Healthcare Database Design",
      role: "Database Designer",
      summary:
        "Collaborated on a team project to design a relational database for a therapy company.",
      tags: ["3NF Normalization", "SQL Schema", "Scalable Architecture"],
      bullets: [
        "Engineered a 3NF normalized relational database.",
        "Implemented a scalable schema tailored for clinical and operational workflows.",
      ],
    },
  ],
  education: [
    {
      period: "01/2025 – 12/2026",
      degree: "Management Information Systems, General | Bachelor of Business Administration (BBA)",
      institution: "San José State University",
      bullets: [
        "Led end-to-end IT system implementations → Collaborated with stakeholders to charter projects from conception through final deployment.",
        "Delivered practical information system solutions → Architected and executed projects for real companies.",
        "Adapted to diverse team roles → Contributed as Developer, System Architect, and Project Manager.",
      ],
    },
    {
      period: "01/2021 – 12/2024",
      degree: "Business Administration and Management, General",
      institution: "Foothill College",
      bullets: [],
    },
  ],
  certificates: [
    {
      date: "04/2024",
      name: "CompTIA Network+ ce Certification",
      issuer: "CompTIA",
      url: "https://www.credly.com/badges/f9e56351-6bfa-4edf-a0ff-90e07e291519/linked_in_profile",
    },
    {
      date: "02/2024",
      name: "CompTIA Security+ ce Certification",
      issuer: "CompTIA",
      url: "https://www.credly.com/badges/2c993214-760e-41a9-8618-a6f4d290a379/linked_in_profile",
    },
  ],
  skills: [
    "Project Management",
    "System Architecture",
    "Enterprise Application Management",
    "Role-Based Access Control (RBAC)",
    "Single Sign-On (SSO) Integration",
    "Okta",
    "Active Directory & Entra ID",
    "Migration Planning",
    "Compliance Reporting (CMMC Level 2)",
    "Scripting & Automation",
    "Stakeholder Collaboration",
    "User Training",
    "Troubleshooting",
  ],
  strengths: [
    "Communication",
    "Leadership",
    "Adaptability",
    "Teamwork",
    "Problem Solving",
  ],
};
