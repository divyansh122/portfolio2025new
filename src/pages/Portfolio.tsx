import { useEffect, useRef, useState } from "react";
import CursorGradient from "../components/CursorGradient";
import Navigation from "../components/Navigation";
import TypeWriter from "../components/TypeWriter";
import ProjectModal from "../components/ProjectModal";
import ProfileImage from "../components/ProfileImage";
import ScrollToTop from "../components/ScrollToTop";
import AnimatedCounter from "../components/AnimatedCounter";
import ProjectImage from "../components/ProjectImage";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { projects, type Project } from "../data/projects";
import {
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Star,
} from "lucide-react";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const heroVisible = useIntersectionObserver(heroRef, { threshold: 0.1 });
  const aboutVisible = useIntersectionObserver(aboutRef, { threshold: 0.1 });
  const experienceVisible = useIntersectionObserver(experienceRef, {
    threshold: 0.1,
  });
  const projectsVisible = useIntersectionObserver(projectsRef, {
    threshold: 0.1,
  });
  const contactVisible = useIntersectionObserver(contactRef, {
    threshold: 0.1,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleProjectClick = (projectId: string) => {
    const project = projects.find((p) => p.id === projectId);
    if (project) {
      setSelectedProject(project);
    }
  };

  const handleProjectCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleProjectCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <div className="font-mono text-gray-100 bg-black">
      <CursorGradient mousePosition={mousePosition} />
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="home"
        className="section flex items-center justify-center px-4 sm:px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-100">
              {heroVisible && <TypeWriter text="Divyansh Gupta" speed={120} />}
            </h1>
            <div
              className={`text-xl md:text-2xl text-gray-300 mb-8 fade-in ${
                heroVisible ? "visible" : ""
              }`}
            >
              <span className="terminal-prompt text-terminal-green">
                Software Engineer building impactful
              </span>
              <span className="text-terminal-green">
                {" "}
                Front-End Experiences, Shopify Apps & Cloud-Powered Solutions
              </span>
            </div>
          </div>
          <div className={`fade-in space-y-4 ${heroVisible ? "visible" : ""}`}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Mainly focused on front-end development, but also experienced with
              backend, AWS cloud, and Shopify app building. I enjoy creating
              seamless, user-friendly experiences that deliver real value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="#projects"
                className="glow-border bg-transparent px-6 sm:px-8 py-3 sm:py-4 rounded text-terminal-green hover:bg-gray-900 hover:text-terminal-green transition-all text-center"
              >
                View Projects
              </a>
              <a
                href="/Divyansh_Gupta_Resume.pdf"
                download
                className="border border-gray-600 px-6 sm:px-8 py-3 sm:py-4 rounded text-gray-300 hover:text-terminal-green hover:border-terminal-green transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        id="about"
        className="section py-16 sm:py-20 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 text-center">
            {aboutVisible && <TypeWriter text="./about_me" speed={80} />}
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Profile Image */}
            <div
              className={`fade-in order-1 lg:order-1 ${
                aboutVisible ? "visible" : ""
              }`}
            >
              <div className="flex justify-center lg:justify-start">
                <img
                  src="/Divyansh_Gupta.png"
                  alt="Divyansh Gupta"
                  className="w-72 h-72 sm:w-96 sm:h-96 lg:w-full lg:h-auto lg:max-w-md rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>

            {/* About Content */}
            <div
              className={`fade-in order-2 lg:order-2 ${
                aboutVisible ? "visible" : ""
              }`}
            >
              <div className="space-y-6 text-gray-300 mb-8">
                <p className="text-lg sm:text-xl leading-relaxed">
                  <span className="terminal-prompt"></span>As a fresher in
                  software engineering, I specialize in building robust Shopify
                  applications and scalable SaaS platforms.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  My expertise spans full-stack development, with a strong focus
                  on modern JavaScript frameworks, cloud architecture and
                  backend systems.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  I'm passionate about writing clean, maintainable code and
                  delivering solutions that scale with business growth.
                </p>
              </div>

              {/* Quick Stats */}
              {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                <div className="glow-border bg-gray-900 bg-opacity-40 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-terminal-green">4+</div>
                  <div className="text-xs text-gray-400">Years Experience</div>
                </div>
                <div className="glow-border bg-gray-900 bg-opacity-40 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-terminal-green">50+</div>
                  <div className="text-xs text-gray-400">Projects Delivered</div>
                </div>
                <div className="glow-border bg-gray-900 bg-opacity-40 p-4 rounded-lg text-center sm:col-span-1 col-span-2">
                  <div className="text-2xl font-bold text-terminal-green">15+</div>
                  <div className="text-xs text-gray-400">Technologies</div>
                </div>
              </div> */}

              {/* Core Technologies */}
              <div className="glow-border bg-gray-900 bg-opacity-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-terminal-green terminal-prompt">
                  Core Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "React.js",
                    "Next.js",
                    "TypeScript",
                    "JavaScript",
                    "Node.js",
                    "Express",
                    "GraphQL",
                    "REST API",
                    "Shopify",
                    "Shopify Polaris",
                    "Gadget.dev",
                    "PostgreSQL",
                    "AWS (Lambda, DynamoDB, API Gateway, S3, CloudFront)",
                    "Tailwind CSS",
                    "Redux",
                    "HTML5",
                    "CSS3",
                    "Shadcn UI",
                    "Git",
                    "Figma",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-terminal-border text-terminal-green px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        ref={experienceRef}
        id="experience"
        className="section py-16 sm:py-20 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 text-center">
            {experienceVisible && <TypeWriter text="./experience" speed={80} />}
          </h2>

          <div className="space-y-2 sm:space-y-12">
            <div
              className={`fade-in glow-border bg-gray-900 bg-opacity-30 p-6 sm:p-8 rounded-lg ${
                experienceVisible ? "visible" : ""
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-terminal-green">
                    Jr. Front End Developer
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">Catalys</p>
                </div>
                <span className="text-terminal-green-dark text-sm mt-2 sm:mt-0 bg-terminal-border px-3 py-1 rounded">
                  July 2025 - Present
                </span>
              </div>
              <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
                <li className="terminal-prompt flex items-start gap-3">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mt-2 flex-shrink-0"></span>
                  Promoted from Intern to Jr. Front End Developer for delivering
                  high-quality, production-ready features.
                </li>
                <li className="terminal-prompt flex items-start gap-3">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mt-2 flex-shrink-0"></span>
                  Built responsive, merchant-facing UI components using
                  React.js, Shopify Polaris, and Tailwind CSS.
                </li>
                <li className="terminal-prompt flex items-start gap-3">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mt-2 flex-shrink-0"></span>
                  Integrated Shopify REST/GraphQL APIs and optimized frontend
                  performance.
                </li>
                <li className="terminal-prompt flex items-start gap-3">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mt-2 flex-shrink-0"></span>
                  Collaborated with design, backend, and QA teams to ensure
                  seamless feature delivery.
                </li>
              </ul>
            </div>

            <div
              className={`fade-in glow-border bg-gray-900 bg-opacity-30 p-6 sm:p-8 rounded-lg ${
                experienceVisible ? "visible" : ""
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-terminal-green">
                    Software Developer Intern
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">Catalys</p>
                </div>
                <span className="text-terminal-green-dark text-sm mt-2 sm:mt-0 bg-terminal-border px-3 py-1 rounded">
                  April 2025 - July 2025
                </span>
              </div>
              <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
                <li className="terminal-prompt flex items-start gap-3">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mt-2 flex-shrink-0"></span>
                  Spearheaded the development of a Zipcode Checker feature for
                  Pulse Delivery Estimator , enabling customers to view
                  real-time delivery estimates based on their zip code.
                </li>
                <li className="terminal-prompt flex items-start gap-3">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mt-2 flex-shrink-0"></span>
                  Successfully launched the feature within 1 month of
                  onboarding, enhancing user experience and merchant retention.
                </li>
                <li className="terminal-prompt flex items-start gap-3">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mt-2 flex-shrink-0"></span>
                  Worked with Shopify Polaris, React.js, and Liquid to build
                  seamless UI components compatible with Shopify's merchant
                  dashboards, integrated Shopify APIs, and used Gadget.dev for
                  backend workflows and database modeling.
                </li>
                <li className="terminal-prompt flex items-start gap-3">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mt-2 flex-shrink-0"></span>
                  Collaborated cross-functionally with designers and QA to
                  ensure robust testing and optimized performance across
                  devices.
                </li>
              </ul>
            </div>

            {/* <div
              className={`fade-in glow-border bg-gray-900 bg-opacity-30 p-6 sm:p-8 rounded-lg ${
                experienceVisible ? "visible" : ""
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-terminal-green">
                    Junior Software Engineer
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    TechStart Solutions
                  </p>
                </div>
                <span className="text-terminal-green-dark text-sm mt-2 sm:mt-0 bg-terminal-border px-3 py-1 rounded">
                  2019 - 2020
                </span>
              </div>
              <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
                <li className="terminal-prompt flex items-start gap-3">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mt-2 flex-shrink-0"></span>
                  Contributed to React-based SaaS dashboard for client
                  management
                </li>
                <li className="terminal-prompt flex items-start gap-3">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mt-2 flex-shrink-0"></span>
                  Implemented responsive designs and cross-browser compatibility
                </li>
                <li className="terminal-prompt flex items-start gap-3">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mt-2 flex-shrink-0"></span>
                  Collaborated on API development using Node.js and Express
                </li>
                <li className="terminal-prompt flex items-start gap-3">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mt-2 flex-shrink-0"></span>
                  Participated in agile development processes and code reviews
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        id="projects"
        className="section py-16 sm:py-20 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 text-center">
            {projectsVisible && <TypeWriter text="./projects" speed={80} />}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`fade-in project-card glow-border bg-gray-900 bg-opacity-40 rounded-lg cursor-pointer group hover:bg-opacity-60 transition-all duration-300 overflow-hidden ${
                  projectsVisible ? "visible" : ""
                }`}
                onClick={() => handleProjectClick(project.id)}
                onMouseMove={handleProjectCardMouseMove}
                onMouseLeave={handleProjectCardMouseLeave}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Project Image */}
                <ProjectImage
                  title={project.title}
                  technologies={project.technologies}
                />

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg sm:text-xl font-semibold text-terminal-green group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-terminal-green transition-colors flex-shrink-0" />
                    </div>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-terminal-border text-terminal-green px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm line-clamp-3">
                      {project.summary}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-gray-700">
                      <span className="text-xs text-terminal-green-dark">
                        Click to learn more
                      </span>
                      <div className="flex gap-2">
                        <Github className="w-4 h-4 text-gray-500 hover:text-terminal-green transition-colors cursor-pointer" />
                        <ExternalLink className="w-4 h-4 text-gray-500 hover:text-terminal-green transition-colors cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className="section py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden"
      >
        <div className="parallax-bg"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
              {contactVisible && <TypeWriter text="./contact" speed={80} />}
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              <span className="terminal-prompt"></span>Let's build the future
              together.
            </p>
          </div>

          <div className={`fade-in ${contactVisible ? "visible" : ""}`}>
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {/* Quick Contact Card */}
              <div className="glow-border bg-gray-900 bg-opacity-50 p-8 rounded-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-terminal-green mb-2 terminal-prompt">
                    Quick Connect
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Get in touch for immediate response
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:divyanshgupta335@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 bg-opacity-50 hover:bg-opacity-80 transition-all group"
                  >
                    <div className="w-12 h-12 bg-terminal-border rounded-lg flex items-center justify-center group-hover:bg-terminal-green transition-colors">
                      <Mail className="w-6 h-6 text-terminal-green group-hover:text-black" />
                    </div>
                    <div>
                      <div className="text-terminal-green font-semibold">
                        Email
                      </div>
                      <div className="text-gray-400 text-sm">
                        divyanshgupta335@gmail.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/divyansh-gupta-3b57a1221/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 bg-opacity-50 hover:bg-opacity-80 transition-all group"
                  >
                    <div className="w-12 h-12 bg-terminal-border rounded-lg flex items-center justify-center group-hover:bg-terminal-green transition-colors">
                      <Linkedin className="w-6 h-6 text-terminal-green group-hover:text-black" />
                    </div>
                    <div>
                      <div className="text-terminal-green font-semibold">
                        LinkedIn
                      </div>
                      <div className="text-gray-400 text-sm">
                        Professional network
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Collaboration Card */}
              <div className="glow-border bg-gray-900 bg-opacity-50 p-8 rounded-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-terminal-green mb-2 terminal-prompt">
                    Let's Collaborate
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Open for exciting opportunities
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 bg-terminal-green rounded-full"></span>
                    <span className="text-sm">Shopify App Development</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 bg-terminal-green rounded-full"></span>
                    <span className="text-sm">SaaS Development</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 bg-terminal-green rounded-full"></span>
                    <span className="text-sm">Full-Stack Development</span>
                  </div>

                  <div className="pt-4 mt-6 border-t border-gray-700">
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/divyansh122"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glow-border bg-transparent px-4 py-2 rounded text-terminal-green hover:bg-gray-800 transition-all text-sm flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                      <a
                        download
                        href="/Divyansh_Gupta_Resume.pdf"
                        className="border border-gray-600 px-4 py-2 rounded text-gray-300 hover:text-terminal-green hover:border-terminal-green transition-all text-sm flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Info */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gray-900 bg-opacity-60 px-6 py-3 rounded-full border border-terminal-border">
                <div className="w-3 h-3 bg-terminal-green rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">
                  <span className="text-terminal-green font-semibold">
                    Available
                  </span>{" "}
                  • Usually responds within 24 hours
                </span>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="max-w-2xl mx-auto">
                <p className="text-gray-400 mb-8">
                  Ready to turn your ideas into reality? Let's discuss how we
                  can build something incredible together.
                </p>
                <a
                  href={`mailto:divyanshgupta335@gmail.com?subject=Let's%20Build%20Something%20Amazing&body=Hi%20Divyansh,%0A%0AI'm%20interested%20in%20discussing%20a%20project%20with%20you.%0A%0AProject%20details:%0A%0A%0AThanks!`}
                  className="glow-border bg-transparent px-8 py-4 rounded text-terminal-green hover:bg-gray-900 hover:text-terminal-green transition-all text-lg font-semibold inline-flex items-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  Start a Conversation
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-20 pt-8 border-t border-gray-800 text-center">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">
                  <span className="terminal-prompt text-terminal-green"></span>
                  Built with React, TypeScript & Tailwind CSS
                </p>
                <div className="flex items-center gap-6">
                  <a
                    href="https://github.com/divyansh122"
                    className="text-gray-500 hover:text-terminal-green transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/divyansh-gupta-3b57a1221/"
                    className="text-gray-500 hover:text-terminal-green transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:divyanshgupta335@gmail.com"
                    className="text-gray-500 hover:text-terminal-green transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-500 text-sm">© 2025 Divyansh Gupta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
