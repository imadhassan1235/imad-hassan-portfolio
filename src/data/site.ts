export const profile = {
  name: "Imad Hassan",
  email: "imadhassan668@gmail.com",
  instagram: "https://instagram.com/imad_extrasmart",
  github: "https://github.com/imadhassan1235",
};

export const nav = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/speaking" },
  { label: "Projects", to: "/courses" },
  { label: "Contact", to: "/contact" },
];

export const social = [
  { label: "GitHub", href: profile.github },
  { label: "Instagram", href: profile.instagram },
  { label: "Email", href: `mailto:${profile.email}` },
];

export const skills = [
  "React", "Node.js", "TypeScript", "Python", "Shopify", "n8n", "AI Agents", "Chatbots", "REST APIs", "Databases",
];

export const achievements = [
  { number: "Full-Stack", label: "Frontend, backend and databases — end to end" },
  { number: "AI", label: "Agents, bots and automated workflows on n8n" },
  { number: "ERP", label: "Custom systems for schools and businesses" },
  { number: "Many", label: "Client projects delivered on demand" },
];

export const projects = [
  {
    title: "AI Agents & Chatbots",
    tag: "AI AUTOMATION",
    description: "Smart bots and agents that answer customers, qualify leads and handle repetitive tasks around the clock.",
  },
  {
    title: "n8n AI Workflows",
    tag: "AUTOMATION",
    description: "Connected workflows that link your apps, data and AI models so routine work runs itself.",
  },
  {
    title: "ERP for Schools & Businesses",
    tag: "SOFTWARE",
    description: "Custom ERP systems covering records, operations and reporting, tailored to how each organisation works.",
  },
  {
    title: "Shopify E-commerce Stores",
    tag: "E-COMMERCE",
    description: "Fast, polished online stores built to sell, with the setup and customisation a growing brand needs.",
  },
  {
    title: "Personal Brand & Portfolio Sites",
    tag: "WEB DESIGN",
    description: "Portfolio and personal brand websites for clients, designed to stand out and convert visitors.",
  },
  {
    title: "Admin Panels & Secure Apps",
    tag: "FULL-STACK",
    description: "Full admin dashboards with complete CRUD, secure authentication and clean, protected designs.",
  },
];

export const services = [
  "AI Agents & Bot Development",
  "AI Workflow Automation (n8n)",
  "Full-Stack Web Applications",
  "ERP & Custom Business Software",
  "Shopify & E-commerce Websites",
  "Portfolio & Brand Websites",
];

export const process = [
  "Tell me what you need — a site, a bot, a system",
  "Clear plan, scope and timeline before any code",
  "Built secure, fast and easy for you to manage",
  "Delivered on demand, with support after launch",
];
