import { Project } from '../models/project'

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment processing",
    imageUrl: "/images/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    responsibilities: [
      "Developed product catalog system",
      "Implemented secure checkout flow",
      "Optimized database queries",
      "Created admin dashboard"
    ],
    client: "Confidential Retail Client",
    duration: "6 months"
  },
  // Add more projects...
]