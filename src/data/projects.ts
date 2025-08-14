export interface Project {
  id: string;
  title: string;
  description: string;
  summary: string;
  technologies: string[];
  overview: string;
  features: string[];
  implementation: string;
  results: string[];
  imageSrc:string;
  liveLink:string;
  sourceCode:string;
}

export const projects: Project[] = [

  {
  id: "secureVault",
  title: "Secure Vault",
  description: "Zero-knowledge AWS-powered password manager",
  summary: "A fully serverless password manager with end-to-end encryption, master password security, and zero-knowledge architecture — ensuring no user data is accessible even to the system itself",
  technologies: ["AWS Lambda", "DynamoDB", "API Gateway","Cloud Front", "React", "Node.js"],
  overview: "Secure Vault is a secure, cloud-native password manager that stores user credentials using strong encryption and a zero-knowledge policy. It uses a client-defined master password to locally encrypt all data before it ever reaches the cloud. Built entirely using AWS serverless technologies, it ensures maximum scalability and privacy without compromising security.",
  features: [
    "Zero-knowledge architecture: Only the user can decrypt their data",
    "AES-256 encryption for all stored passwords",
    "Multi-factor authentication with AWS Cognito",
      "Master password-based encryption: all user data encrypted before upload",
  ],
  implementation: "The backend is entirely serverless using AWS Lambda functions, API Gateway, and DynamoDB. Frontend is built using React and hosted on S3 with CloudFront. User authentication and session management are handled through AWS Cognito, and encryption is managed client-side to ensure zero server access to sensitive data.",
  results: [
    "Achieved 100% compliance with zero-knowledge data policy",    
    "Implemented real-time alerts for unauthorized access attempts"
  ],
  imageSrc: "/securevault.png",  // Replace with your actual image path
  liveLink: "https://d1exuwh9hp95jz.cloudfront.net/",  // Replace with your actual deployed URL
  sourceCode: "https://github.com/divyansh122/passwordmanagerAWS"  // Replace with your GitHub repo URL
},
{
  id: "projectManagementRT",
  title: "Project Management SAAS",
  description: "A collaborative platform to manage projects, connect with mentors, track achievements, and monitor progress in real time.",
  summary: "A responsive and interactive project management platform that enables users to efficiently manage projects, collaborate with mentors, track milestones, and monitor achievements — all in real time. Designed for seamless teamwork with live updates and intuitive navigation.",
  technologies: ["Next.Js", "Node.js", "PostgreSQL", "Express.js","ShadCn UI" , "Tailwind CSS"],
  overview: "The Project Management SAAS provides a centralized hub for managing projects from start to finish. Users can search and connect with mentors, maintain personal dashboards, showcase achievements, and track project progress with real-time updates. Built with modern full-stack technologies, it ensures smooth collaboration and productivity.",
  features: [
    "Real-time project progress tracking",
    "Mentor search with filters based on skills, industry, and availability",
    "Live chat with mentors for instant communication",
    "Personalized dashboard to track active and completed projects",
    "Interactive Kanban board for task management",
    "Achievements display with badges, certificates, and sharing options",
    "Downloadable project completion certificates"
  ],
  implementation: "The frontend is built with Next Js, Tailwind CSS, Shadcn UI, offering a responsive and modern UI. The backend, powered by Node.js and Express, handles project data, mentor connections, and authentication. Real-time features are enabled via WebSockets (Socket.io) for instant updates and messaging. PostgreSQL stores project details, user profiles, and achievement data.",
  results: [
    "Enabled seamless real-time collaboration between project teams and mentors",
    "Improved project tracking efficiency with integrated Kanban board and progress charts"
  ],
  imageSrc: "/meritmess.png",  // Replace with your actual image path
  liveLink: null,  // Replace with your actual deployed URL
  sourceCode: "https://github.com/divyansh122/merit-mess-divyansh"  // Replace with your GitHub repo URL
},
{
  id: "pulseDeliveryEstimator",
  title: "Pulse Delivery Estimator",
  description: "A real-time delivery estimation feature integrated into a live Shopify app to enhance customer experience and improve merchant retention.",
  summary: "Developed and deployed a zipcode-based delivery estimator within a Shopify app, enabling customers to receive accurate delivery timelines before purchase. Leveraged a Gadget.dev backend for real-time data retrieval and Shopify Polaris for a consistent merchant-facing UI.",
  technologies: ["React.js", "Shopify Polaris", "JavaScript", "REST API", "Liquid", "CSS", "Gadget.dev"],
  overview: "The Pulse Delivery Estimator is a production-ready feature integrated into a Shopify merchant application. Customers can input their zipcode and instantly view delivery time estimates, enhancing trust and improving checkout conversion rates. Built with React.js and Shopify Polaris, it seamlessly connects to a Gadget.dev backend for fast and reliable data handling.",
  features: [
    "Real-time delivery estimate retrieval via zipcode validation",
    "Backend powered by Gadget.dev for efficient data processing",
    "Responsive merchant-facing UI built with Shopify Polaris",
    "Seamless integration into existing Shopify store infrastructure"
  ],
  implementation: "Frontend developed with React.js and Shopify Polaris, integrated into Shopify storefronts using Liquid templates. Backend logic implemented in Gadget.dev to handle API requests and manage delivery data in real time. Performance optimized for fast load times in production.",
  results: [
    "Launched feature within 1 month of onboarding",
    "Improved checkout confidence and merchant retention with live delivery insights"
  ],
  imageSrc: "/pulsedelivery.png",
  liveLink: "https://apps.shopify.com/pulse-delivery-estimator",
  sourceCode: null
},
{
  id: "serverlessUrlShortener",
  title: "Serverless URL Shortener",
  description: "A fully serverless URL shortener built with AWS services, allowing users to shorten URLs and optionally set expiration dates.",
  summary: "A cloud-native, serverless application that enables users to convert long URLs into short, shareable links with optional expiration dates. Built entirely on AWS, it ensures scalability, low cost, and minimal operational overhead.",
  technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "JavaScript", "React", "Tailwind CSS"],
  overview: "The Serverless URL Shortener is a microservices-based application that uses AWS Lambda for backend processing, API Gateway for request routing, and DynamoDB for storage of URL mappings and expiration details. The frontend is hosted on AWS S3, enabling seamless interaction with backend services through secure APIs.",
  features: [
    "CORS-enabled APIs for smooth frontend-backend communication",
    "Serverless architecture ensuring scalability and cost-efficiency"
  ],
  implementation: "Frontend built using React and Tailwind CSS, hosted on an AWS S3 bucket. API Gateway routes requests to AWS Lambda functions, which generate short IDs and store mapping data in DynamoDB. Expiration dates are stored alongside each entry, and Lambda checks validity before redirecting. Entirely serverless to reduce costs and simplify deployment.",
  results: [
    "Reduced hosting and infrastructure costs by leveraging AWS serverless services",
    "Achieved high availability and scalability without managing servers"
  ],
  imageSrc: null,  // Replace with your actual image path
  liveLink: "http://my-url-shortener-app.s3-website.ap-south-1.amazonaws.com/",  // Replace with actual live project link
  sourceCode: "https://github.com/divyansh122/urlshorteneraws"  // Replace with your GitHub repo URL
},
{
  id: "sanskriti",
  title: "Sanskriti – Cultural E-Commerce Platform",
  description: "A 24-hour hackathon prototype blending Indian states' culture, traditions, and products into a unified online store experience.",
  summary: "Built under intense time constraints during Tekathon 3.0, Sanskriti is a cultural e-commerce web app showcasing products, art, and traditions from across India. As the front-end developer, I coordinated closely with my team to design, develop, and deploy a functional prototype in just 24 hours. The project was later nominated for the Smart India Hackathon (SIH) 2024.",
  technologies: ["React.js", "Redux", "GSAP", "Tailwind CSS"],
  overview: "Sanskriti was conceived to promote Indian cultural diversity by offering a digital marketplace where users can explore and purchase state-specific cultural products. Built in a hackathon setting, the project required rapid decision-making, efficient task delegation, and seamless collaboration to meet the 24-hour deadline. Despite the time pressure, the platform delivered an engaging, visually rich experience through smooth animations and intuitive navigation.",
  features: [
    "State-wise categorization of cultural products and traditions",
    "Dynamic product listings with descriptive cultural information",
    "Smooth GSAP-powered animations for an immersive user experience",
    "Responsive UI built with Tailwind CSS for all device sizes"
  ],
  implementation: "Developed in React.js with Redux for state management, Tailwind CSS for styling, and GSAP for animations. Worked in parallel with backend and design teammates, ensuring clear communication and quick problem-solving under strict time limits. Delivered a visually appealing, functional prototype ready for backend integration.",
  results: [
    "Successfully delivered a functional front-end prototype within 24 hours",
    "Nominated for Smart India Hackathon (SIH) 2024 from Tekathon 3.0",
    "Demonstrated strong teamwork, leadership, and time management under pressure"
  ],
  imageSrc: "/sanskriti.png",  // Replace with your actual image or screenshot
  liveLink: "https://sanskrit-omega.vercel.app/",  // Replace with actual live project URL if available
  sourceCode: "https://github.com/divyansh122/sanskritisih"  // Replace with your GitHub repo URL if public
}

];
