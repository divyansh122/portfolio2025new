export interface ClientWork {
  id: string;
  clientName: string;
  projectTitle: string;
  description: string;
  services: string[];
  technologies: string[];
  liveLink?: string | null;
  imageSrc?: string | null;
  testimonial?: string;
  testimonialAuthor?: string;
  testimonialRole?: string;
  year: string;
  category: string;
}

export const clientWorks: ClientWork[] = [
  {
    id: "rsk-india",
    clientName: "RSK India",
    projectTitle: "RSK India – Hardware E-Commerce Store",
    description:
      "Built a full Shopify store from scratch for a hardware business. Includes product catalog, collections, custom theme, mobile-optimized layout, and a seamless checkout experience tailored to their brand.",
    services: ["Shopify Store Development", "Theme Design", "Product Setup", "Mobile Optimization"],
    technologies: ["Shopify", "Shopify Liquid", "JavaScript", "CSS", "Shopify APIs"],
    liveLink: "https://rskindia.in/",
    imageSrc: null,
    year: "2025",
    category: "Shopify",
  },
  {
    id: "treadsafe",
    clientName: "TreadSafe (US Client)",
    projectTitle: "TreadSafe – Business Website",
    description:
      "Designed and developed a professional website for a US-based client. Also ran Google Ads campaigns to drive targeted traffic and improve online visibility. Clean, fast, and conversion-focused.",
    services: ["Web Development", "UI/UX Design", "Google Ads", "Performance Optimization"],
    technologies: ["React.js", "Tailwind CSS", "Netlify"],
    liveLink: "https://treadsafe.pro/",
    imageSrc: null,
    year: "2025",
    category: "Business Website",
  },
];

export interface ClientReview {
  id: string;
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number;
  projectId?: string;
}

export const clientReviews: ClientReview[] = [
  {
    id: "review-1",
    name: "Shakti Singh",
    role: "Owner",
    company: "RSK India",
    review:
      "Divyansh built our entire Shopify store from scratch and the result was beyond our expectations. The store looks professional, loads fast, and our customers love the experience. He understood our hardware business needs perfectly and delivered everything on time. Highly recommend him for any web or Shopify work.",
    rating: 5,
    projectId: "rsk-india",
  },
];
