---
title: "Hybrid Cloud, Identity, and Compliance: Notes from Enterprise IT Operations"
description: "What I have learned moving from company-wide Windows 11 endpoint migrations into Azure Government tenant migrations, Exchange Hybrid administration, IAM, and DoD CMMC Level 2 compliance."
pubDate: 2026-11-19
tags: ["Hybrid Cloud", "Azure Government", "IAM", "Exchange Hybrid", "CMMC"]
draft: false
---

I started this blog as a straightforward place to document my work in enterprise systems administration, hybrid cloud infrastructure, and identity and access management (IAM).

I am based in Saratoga, California, hold active **CompTIA Security+ ce** and **CompTIA Network+ ce** certifications, and earned a **BBA in Management Information Systems (MIS)** from **San José State University**. At **Toray Advanced Composites**, I started as an IT Intern supporting endpoints and was promoted to **Help Desk Technician (Systems & Cloud)**, where my day-to-day work sits at the intersection of hybrid cloud migrations, identity governance, security policy, and regulatory compliance.

Most of the work that keeps an enterprise environment dependable is unglamorous: keeping directories synchronized, keeping mail flowing during migrations, automating repetitive workstation setup, and translating security requirements into configurations people can actually work with. Here is an overview of the projects that have shaped how I approach infrastructure.

## Starting with Endpoint Operations and Automation

Between August and December 2025, I worked as an **IT Intern (Systems & Endpoint Support)** at Toray Advanced Composites in Saratoga, CA. My primary project was leading the company-wide upgrade from **Windows 10 to Windows 11** across corporate workstations.

When you are upgrading an entire fleet, manual post-install work quickly becomes the bottleneck and the main source of inconsistency. To keep downtime minimal and protect user data throughout the transition, I wrote deployment automation scripts to standardize post-install configurations and cut down manual technician provisioning time. Alongside the rollout, I handled Tier 1/2 systems, hardware, OS, network connectivity, and application support—turning recurring technical fixes into clear documentation and guidance for end-users.

That experience reinforced a habit I still rely on: before rolling out a change to the rest of the organization, standardize the repeatable steps first and write down what users need to expect.

## Azure Government Migration and Hybrid Exchange

After moving into my current role as **Help Desk Technician (Systems & Cloud)** in Morgan Hill, CA in January 2026, my focus expanded from workstations to core cloud and directory infrastructure.

Two closely connected efforts defined that transition:

- **Commercial-to-Government Azure Tenant Migration:** I engineered the migration from a Commercial Microsoft Azure tenant to an **Azure Government (GCC)** tenant and configured hybrid identity synchronization between on-premises **Active Directory Domain Controllers** and **Microsoft Entra ID** using **Azure AD Connect**.
- **Exchange Online Hybrid Administration:** I migrated an on-premises **Microsoft Exchange Server** environment into an **Exchange Online Hybrid** architecture, maintaining uninterrupted mail routing, mailbox integrity, and directory synchronization across both environments.

Tenant and mail migrations are as much about the last mile on the endpoint as they are about the directory backend. To keep onboarding and cutover predictable, I developed scripts to automate credential cache cleanup and endpoint onboarding, and managed delivery end-to-end from stakeholder discovery through deployment and user training.

## Identity Governance, Application Migrations, and Zscaler Policy

Good access management reduces friction for authorized users while tightening control over sensitive workflows. In my current role, I administer enterprise applications and access governance—architecting **Role-Based Access Control (RBAC)**, **Single Sign-On (SSO / SAML / OIDC)** integrations across **Okta** and **Microsoft Entra ID**, and automated user provisioning and onboarding workflows.

A concrete example of bringing identity and web security together was leading the end-to-end enterprise migration from **Adobe Sign** to **DocuSign**:

1. Configured SSO and automated user provisioning so access stayed tied to centralized identity lifecycle management rather than manual account administration.
2. Engineered **Zscaler** web security policy blocks and exceptions to restrict legacy tools while allowing authorized users to handle sensitive document workflows securely.
3. Coordinated with stakeholders and end-users through rollout so the cutover did not disrupt active business processes.

## Compliance and Structured System Design

Working in a regulated environment makes documentation and configuration discipline non-negotiable. As part of our **Department of Defense (DoD) CMMC Level 2** compliance initiatives, I have authored technical compliance reports and executed system and operational configuration changes to achieve and maintain security standards alongside system hardening and access audits.

That structured mindset also carries over from my systems architecture work outside of day-to-day operations:

- **Healthcare Relational Database Architecture:** Served as Database Designer and System Architect to design and implement a scalable **Third Normal Form (3NF)** relational database schema for a healthcare organization, working with stakeholders to align data integrity, access controls, and query performance with clinical workflow requirements.
- **Full-Lifecycle Implementations at San José State University:** Led full-lifecycle IT system implementations for client organizations across System Architect, Developer, and Project Manager roles, from initial project charter through production deployment.

## Looking Ahead

I plan to use this space to write clear, practical notes about hybrid cloud administration, identity and access management, automation, and compliance work.

If you are hiring for a Systems Administration, Hybrid Cloud, or IAM role—or just want to talk shop—you can reach me at [justinallahyari@yahoo.com](mailto:justinallahyari@yahoo.com) or download my resume using the button in the top right.
