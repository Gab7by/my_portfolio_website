export const projectCategories = ["All", "Design", "Data", "Development"];

export const projects = [
  {
    id: "brand-identity-nova",
    title: "Nova Skincare Brand Identity",
    description:
      "Complete visual identity for a skincare startup — logo, color system, packaging mockups, and social templates.",
    longDescription:
      "Designed a full brand identity system including logo suite, color palette, packaging mockups, and a library of social media templates to keep the brand consistent across channels.",
    category: "Design",
    tags: ["Photoshop", "Branding", "Social Media"],
    image: "https://picsum.photos/seed/nova-brand/800/600",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: "urban-eats-social-kit",
    title: "Urban Eats Social Media Kit",
    description:
      "A cohesive set of Instagram post, story, and banner templates for a restaurant chain's launch campaign.",
    longDescription:
      "Created a scalable set of social templates covering posts, stories, and promotional banners, designed for quick reuse by the client's in-house marketing team.",
    category: "Design",
    tags: ["Photoshop", "Social Media", "Marketing"],
    image: "https://picsum.photos/seed/urban-eats/800/600",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: "retail-sales-dashboard",
    title: "Retail Sales Performance Dashboard",
    description:
      "Interactive Power BI dashboard tracking regional sales, inventory turnover, and profit margins in real time.",
    longDescription:
      "Built a multi-page Power BI dashboard connected to a SQL data warehouse, giving stakeholders drill-down visibility into regional sales trends and inventory health.",
    category: "Data",
    tags: ["Power BI", "SQL", "DAX"],
    image: "https://picsum.photos/seed/retail-dashboard/800/600",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "customer-churn-analysis",
    title: "Customer Churn Analysis",
    description:
      "Cleaned and analyzed a 50k-row customer dataset to identify churn drivers and build a retention scorecard.",
    longDescription:
      "Performed end-to-end data cleaning, exploratory analysis, and visualization in Excel and SQL to surface the top predictors of customer churn for a subscription business.",
    category: "Data",
    tags: ["Excel", "SQL", "Data Cleaning"],
    image: "https://picsum.photos/seed/churn-analysis/800/600",
    liveUrl: null,
    githubUrl: "#",
    featured: false,
  },
  {
    id: "portfolio-site",
    title: "Personal Portfolio Website",
    description:
      "This site — a responsive React + Tailwind portfolio with dark mode, animations, and a fully accessible UI.",
    longDescription:
      "Built with React 19, Vite, Tailwind CSS v4, and Framer Motion. Features a light/dark theme, scroll-spy navigation, and a modular, data-driven content structure.",
    category: "Development",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    image: "https://picsum.photos/seed/portfolio-site/800/600",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "task-manager-django",
    title: "Django Task Management API",
    description:
      "A REST API for a team task manager with authentication, role-based permissions, and activity logging.",
    longDescription:
      "Designed and built a Django REST Framework API with JWT authentication, role-based access control, and a full test suite, deployed with CI/CD.",
    category: "Development",
    tags: ["Python", "Django", "REST API", "PostgreSQL"],
    image: "https://picsum.photos/seed/django-api/800/600",
    liveUrl: null,
    githubUrl: "#",
    featured: false,
  },
];
