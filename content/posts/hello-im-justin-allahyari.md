---
title: "Hi, I'm Justin Allahyari — Bridging Business Strategy & Enterprise IT Architecture"
description: "A look into my journey balancing Management Information Systems studies at San José State University with hands-on enterprise IT architecture, cloud migrations, and security compliance at Toray Advanced Composites."
pubDate: 2026-10-26
heroImage: "/images/justin-banner.svg"
tags: ["About Me", "IT Architecture", "Cloud Migration", "Security", "Career"]
draft: false
featured: true
---

Welcome to my personal site and blog! I’m **Justin Allahyari**, an IT professional and Systems Architect based in **Saratoga, California**. Currently, I balance full-time studies in **Management Information Systems (BBA)** at **San José State University** with my role as a **Help Desk Technician** at **Toray Advanced Composites**.

> My goal is simple: bridge the gap between complex enterprise infrastructure and the people who rely on it every day—making systems more secure, automated, and intuitive.

![Justin Allahyari Banner](/images/justin-banner.svg)

## How I Got Started in Enterprise IT

My academic foundation started at **Foothill College**, where I studied Business Administration and Management before transferring to **San José State University** to specialize in **Management Information Systems (MIS)**. Along the way, I earned both my **CompTIA Security+ ce** and **CompTIA Network+ ce** certifications in early 2024 to ground my business systems coursework in practical network defense and infrastructure security.

In August 2025, I joined **Toray Advanced Composites** as an **IT Intern**, where I led the company-wide migration from Windows 10 to Windows 11. Rather than performing manual upgrades machine by machine, I wrote automation scripts that streamlined deployment and cut migration overhead—an experience that sparked my passion for systems automation and enterprise architecture.

## Stepping Into Systems Architecture & Compliance

In January 2026, I was promoted to **Help Desk Technician** at Toray Advanced Composites, taking on broader ownership across enterprise applications, identity management, and regulatory compliance:

- **Identity & Access Management (RBAC & SSO):** Led the deployment of Role-Based Access Control, Single Sign-On (SSO) integrations with Okta and Entra ID, and automated user onboarding workflows.
- **CMMC Level 2 & DoD Compliance:** Authored compliance documentation and managed system and operational changes required to meet Department of Defense CMMC Level 2 cybersecurity standards.
- **End-to-End Project Delivery:** Guided projects from initial stakeholder charter and vendor coordination all the way through production cutover and end-user training.

## Recent Projects Highlights

### 1. Commercial-to-Government Azure Tenant Migration

One of the most rewarding technical challenges I've worked on has been migrating a **Commercial Azure tenant to an Azure Government tenant**:

- Established hybrid identity synchronization between an on-premises Active Directory domain controller and **Microsoft Entra ID**.
- Configured hybrid mail flow and migrated on-premises Exchange Server mailboxes to **Exchange Online**.
- Built PowerShell onboarding scripts to automatically scrub stale cached credentials during cutover:

```powershell
# Example: Clearing stale cached enterprise credentials during tenant migration
cmdkey /list | ForEach-Object {
    if ($_ -match "Target:\s*(.*)") {
        $target = $matches[1].Trim()
        if ($target -like "*microsoft*" -or $target -like "*office*") {
            cmdkey /delete:$target
            Write-Host "Removed cached credential: $target"
        }
    }
}
```

### 2. Enterprise DocuSign Migration & Zscaler Policy Architecture

When transitioning enterprise workflows from **Adobe Sign to DocuSign**, I served as System Architect from discovery to launch:

1. Configured **SSO and automated user provisioning** so employees had zero-friction access on day one.
2. Engineered **Zscaler rules and exceptions** to deprecate Adobe Sign while permitting authorized teams to upload sensitive documents securely into DocuSign.
3. Ran discovery sessions with key departments to guarantee every legacy workflow translated cleanly to the new platform.

### 3. Scalable Healthcare Database Design

At San José State University, I collaborated on designing a **3NF normalized relational database** for a therapy practice—modeling patient scheduling, clinical notes, and billing entities with strict referential integrity and room to scale.

## What I Value Outside the Terminal

Whether I’m troubleshooting a tricky endpoint issue, designing a normalized database schema, or writing compliance reports, I believe the best engineers are first and foremost **clear communicators**. Technology only succeeds when the people using it feel confident and supported.

If you'd like to connect, discuss enterprise IT, or collaborate on a project, feel free to reach out at [justinallahyari@yahoo.com](mailto:justinallahyari@yahoo.com)!
