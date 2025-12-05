import { Project } from '../models/project'

export const projects: Project[] = [
  {
  id: 1,
  title: "Loan Channeling",
  description: "End-to-end loan management system",
  imageUrl: "/images/scb.jpeg",
  technologies: ["SQL Server", "SSIS", "SSRS", ".Net Framework", "C#", "VB.NET"],
  responsibilities: [
    "Led the development team during the tech lead’s absence, managing priorities and delegating tasks effectively",
    "Collaborated with clients to clarify requirements, resolve issues, and present project progress",
    "Developed and maintained complex SSIS packages and RDL reports for data processing and analytics",
    "Optimized SQL queries and stored procedures to improve system reliability and performance",
    "Enhanced onboarding workflows and loan processing features across multiple modules"
  ],
  client: "Standard Chartered Bank",
  duration: "1 Year 6 Months"
},
{
  id: 2,
  title: "Collateral Management System",
  description: "Comprehensive collateral management platform",
  imageUrl: "/images/cimb.jpeg",
  technologies: ["React.js", ".Net Framework", "C#", "VB.NET", "SQL Server"],
  responsibilities: [
    "Enhanced legacy modules and performed end-to-end testing across all system features",
    "Led partial migration from VB.NET to C# and React.js for improved performance and maintainability",
    "Developed UI components and integrated APIs using React.js for the first production rollout",
    "Provided C# training and technical support to teammates transitioning from VB.NET"
  ],
  client: "CIMB Niaga",
  duration: "9 months"
},
  {
  id: 3,
  title: "D-Net KTB After Sales",
  description: "Managing after-sales services",
  imageUrl: "/images/ktb.jpeg",
  technologies: ["SQL Server", ".Net Framework", "C#", "VB.NET"],
  responsibilities: [
    "Enhanced API validation and business logic",
    "Optimized SQL views and stored procedures for better performance",
    "Implemented email broadcast and notification features",
    "Refined Work Order and Free Service validation processes",
    "Improved error handling and exception management"
  ],
  client: "Kramayudha Tiga Berlian Motors",
  duration: "6 months"
},
{
  id: 4,
  title: "D-Net MMKSI ITD",
  description: "Managing sales and after-sales services",
  imageUrl: "/images/mmksi.jpeg",
  technologies: ["SQL Server", ".Net Framework", "C#", "VB.NET", "Windows Service"],
  responsibilities: [
    "Developed and maintained modules for Warranty, Reporting, and Call Center systems",
    "Optimized database queries and backend performance",
    "Resolved data inconsistencies between SAP, DNet, and dealer systems",
    "Implemented logging, validation, and error-handling improvements",
    "Refactored legacy VB.NET code for better maintainability"
  ],
  client: "Mitsubishi Motors Krama Yudha Sales Indonesia",
  duration: "6 months"
},
{
  id: 5,
  title: "D-Net MMKSI CX After Sales",
  description: "Managing customer experience for after-sales services",
  imageUrl: "/images/mmksi.jpeg",
  technologies: ["SQL Server", ".Net Framework", "C#", "VB.NET", "Windows Service"],
  responsibilities: [
    "Enhanced Vehicle Information and Work Order modules with new data fields",
    "Developed Windows Scheduler for automated Service Reminder updates",
    "Improved Mobile Service Reminder and Extended Warranty features",
    "Optimized stored procedures and Hangfire validation logic",
    "Investigated and resolved data sync issues between API and DMS"
  ],
  client: "Mitsubishi Motors Krama Yudha Sales Indonesia",
  duration: "3 months"
}

]