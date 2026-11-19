export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://justinallahyari.github.io/Website";

export const siteConfig = {
  name: "Justin Allahyari — System Administrator",
  shortName: "Justin Allahyari",
  description:
    "Personal blog and background of Justin Allahyari — System Administrator focused on hybrid cloud infrastructure, identity and access management (IAM), endpoint operations, and DoD CMMC Level 2 compliance.",
  url: rawSiteUrl.replace(/\/+$/, ""),
  author: {
    name: "Justin Allahyari",
    headline:
      "System Administrator | Hybrid Cloud, Identity (IAM) & Infrastructure Operations",
    summary:
      "CompTIA Security+ and Network+ certified IT professional with hands-on enterprise experience administering hybrid cloud infrastructure, identity and access management (IAM), and endpoint operations. Proven track record executing Microsoft Azure Commercial-to-Government tenant migrations, on-premises Active Directory to Microsoft Entra ID synchronization, Exchange Hybrid deployments, and DoD CMMC Level 2 compliance initiatives.",
    location: "Saratoga, CA",
    phone: "(408) 442-0741",
    email: "justinallahyari@yahoo.com",
    resumeUrl: `${basePath}/Justin_Allahyari_Resume.pdf`,
    resumeFilename: "Justin_Allahyari_Resume.pdf",
    rssUrl: `${basePath}/rss.xml`,
  },
  skillGroups: [
    {
      category: "Systems & Cloud Administration",
      items: [
        "Microsoft Azure (Commercial & Government / GCC)",
        "Microsoft 365 (M365)",
        "Windows Server",
        "Active Directory (On-Premises Domain Controllers, Group Policy / GPO)",
        "Microsoft Entra ID (Azure AD Connect)",
        "Exchange Server & Exchange Online (Hybrid)",
        "Windows 10/11 Administration",
      ],
    },
    {
      category: "Identity, Security & Compliance",
      items: [
        "Single Sign-On (SSO / SAML / OIDC)",
        "Okta Administration",
        "Role-Based Access Control (RBAC)",
        "Automated User Provisioning & Onboarding",
        "Zscaler Web Security & Policy Configuration",
        "DoD CMMC Level 2 Compliance",
        "System Hardening",
        "Access Audits",
      ],
    },
    {
      category: "Networking, Automation & Support",
      items: [
        "PowerShell & Migration Scripting",
        "TCP/IP, DNS, DHCP, VPN, LAN/WAN Troubleshooting",
        "OS Imaging & Endpoint Deployment",
        "Relational Database Design (SQL, 3NF Schema)",
        "Tier 1–3 Escalation Support",
        "Stakeholder & Vendor Management",
        "Technical Documentation",
      ],
    },
  ],
  certifications: [
    {
      name: "CompTIA Security+ ce Certification",
      issuer: "CompTIA",
      status: "Active",
      date: "02/2024",
    },
    {
      name: "CompTIA Network+ ce Certification",
      issuer: "CompTIA",
      status: "Active",
      date: "04/2024",
    },
  ],
  experience: [
    {
      period: "01/2026 – Present",
      role: "Help Desk Technician (Systems & Cloud)",
      company: "Toray Advanced Composites",
      location: "Morgan Hill, CA",
      highlights: [
        {
          label: "Azure Government Tenant Migration",
          detail:
            "Engineered the migration from a Commercial Microsoft Azure tenant to an Azure Government tenant, configuring hybrid identity synchronization between on-premises Active Directory Domain Controllers and Microsoft Entra ID.",
        },
        {
          label: "Hybrid Exchange Administration",
          detail:
            "Migrated on-premises Microsoft Exchange Server to an Exchange Online Hybrid architecture, maintaining uninterrupted mail routing, mailbox integrity, and directory synchronization.",
        },
        {
          label: "Identity & Access Management (IAM)",
          detail:
            "Promoted from IT Intern to administer enterprise applications and access governance; architected Role-Based Access Control (RBAC), Single Sign-On (SSO) integrations (Okta / Entra ID), and automated user onboarding workflows.",
        },
        {
          label: "Enterprise Application & Zscaler Security Deployment",
          detail:
            "Spearheaded the end-to-end enterprise migration from Adobe Sign to DocuSign; configured SSO and automated user provisioning, and engineered Zscaler policy blocks and exceptions to restrict legacy tools while securing sensitive document workflows.",
        },
        {
          label: "DoD CMMC Level 2 Compliance",
          detail:
            "Authored technical compliance reports and executed system and operational configuration changes to achieve and maintain Department of Defense (DoD) CMMC Level 2 security standards.",
        },
        {
          label: "Automation & IT Project Delivery",
          detail:
            "Developed scripts to automate credential cache cleanup and endpoint onboarding, and led end-to-end IT project delivery from stakeholder discovery through deployment and user training.",
        },
      ],
    },
    {
      period: "08/2025 – 12/2025",
      role: "IT Intern (Systems & Endpoint Support)",
      company: "Toray Advanced Composites",
      location: "Saratoga, CA",
      highlights: [
        {
          label: "Enterprise Windows 11 Migration",
          detail:
            "Led the company-wide operating system upgrade from Windows 10 to Windows 11 across all corporate workstations, ensuring zero data loss and minimal operational downtime.",
        },
        {
          label: "Deployment Scripting & Automation",
          detail:
            "Created automation scripts to standardize post-install configurations and accelerate the endpoint migration lifecycle, significantly reducing manual technician provisioning time.",
        },
        {
          label: "Tier 1/2 Systems & Network Support",
          detail:
            "Diagnosed and resolved hardware, OS, network connectivity, and application issues for end-users, translating complex technical fixes into clear documentation and user guidance.",
        },
      ],
    },
  ],
  projects: [
    {
      title: "Healthcare Relational Database Architecture",
      role: "Database Designer & System Architect",
      detail:
        "Designed and implemented a scalable Third Normal Form (3NF) relational database schema for a healthcare organization, partnering with stakeholders to align data integrity, access controls, and query performance with clinical workflow requirements.",
    },
  ],
  education: [
    {
      degree:
        "Bachelor of Business Administration (BBA), Management Information Systems (MIS)",
      institution: "San José State University",
      location: "San Jose, CA",
      detailLabel: "Applied Systems Engineering & Architecture",
      detail:
        "Led full-lifecycle IT system implementations for client organizations, operating across System Architect, Developer, and Project Manager roles from project charter through production deployment.",
    },
  ],
};
