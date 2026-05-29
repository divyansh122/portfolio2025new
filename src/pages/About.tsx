import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import CursorGradient from "../components/CursorGradient";
import Navigation from "../components/Navigation";
import TypeWriter from "../components/TypeWriter";
import ScrollToTop from "../components/ScrollToTop";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { ArrowRight, Download } from "lucide-react";

const techStack = [
  { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Redux", "Shadcn UI"] },
  { category: "Backend", items: ["Node.js", "Express", "GraphQL", "REST API", "PostgreSQL"] },
  { category: "Cloud & DevOps", items: ["AWS Lambda", "DynamoDB", "API Gateway", "S3", "CloudFront"] },
  { category: "Shopify", items: ["Shopify Polaris", "Shopify APIs", "Gadget.dev", "Liquid"] },
  { category: "Tools", items: ["Git", "Figma", "VS Code"] },
];

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const sectionRef = useRef<HTMLElement>(null);
  const visible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="font-mono text-gray-100 bg-black min-h-screen">
      <CursorGradient mousePosition={mousePosition} />
      <Navigation />
      <ScrollToTop />

      <section ref={sectionRef} className="pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-terminal-green text-sm tracking-widest uppercase mb-4 opacity-70">Get to know me</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {visible && <TypeWriter text="./about_me" speed={80} />}
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
            {/* Image + quick info */}
            <div className={`fade-in ${visible ? "visible" : ""}`}>
              <div className="relative mb-8">
                <div className="absolute -inset-1 bg-gradient-to-br from-terminal-green to-transparent opacity-20 rounded-2xl blur-sm" />
                <img
                  src="/Divyansh_Gupta.png"
                  alt="Divyansh Gupta"
                  className="relative w-full max-w-sm mx-auto lg:mx-0 rounded-2xl object-cover shadow-2xl"
                />
              </div>

              {/* Quick info cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Role", value: "Jr. Front End Dev" },
                  { label: "Company", value: "Catalys" },
                  { label: "Location", value: "India" },
                  { label: "Status", value: "Working" },
                ].map(({ label, value }) => (
                  <div key={label} className="glow-border bg-gray-900 bg-opacity-40 p-4 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">{label}</div>
                    <div className="text-sm text-terminal-green font-semibold">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div className={`fade-in ${visible ? "visible" : ""}`}>
              <div className="space-y-6 text-gray-300 mb-10">
                <p className="text-lg leading-relaxed">
                  I'm a software engineer specializing in <span className="text-terminal-green">front-end development</span>, with a strong focus on building Shopify applications, SaaS platforms, and client-facing web experiences.
                </p>
                <p className="leading-relaxed">
                  Currently working as a <span className="text-terminal-green">Jr. Front End Developer at Catalys</span>, where I was promoted from intern for delivering high-quality, production-ready features. I've shipped real features used by merchants on the Shopify App Store.
                </p>
                <p className="leading-relaxed">
                  Beyond my day job, I take on freelance projects — building websites and web apps for clients ranging from local businesses to startups. I care deeply about clean code, great UX, and delivering real value.
                </p>
                <p className="leading-relaxed">
                  I'm also experienced with <span className="text-terminal-green">AWS cloud services</span> and have built fully serverless applications using Lambda, DynamoDB, API Gateway, and more.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/experience"
                  className="glow-border bg-transparent px-6 py-3 rounded-lg text-terminal-green hover:bg-terminal-border hover:text-white transition-all flex items-center gap-2 group text-sm"
                >
                  View Experience
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="/Divyansh_Gupta_Resume.pdf"
                  download
                  className="border border-gray-700 px-6 py-3 rounded-lg text-gray-300 hover:text-terminal-green hover:border-terminal-green transition-all flex items-center gap-2 text-sm"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className={`fade-in ${visible ? "visible" : ""}`}>
            <h2 className="text-2xl font-bold mb-8 text-center">
              <span className="text-terminal-green terminal-prompt">Tech Stack</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {techStack.map(({ category, items }) => (
                <div key={category} className="glow-border bg-gray-900 bg-opacity-40 p-5 rounded-xl">
                  <h3 className="text-terminal-green text-sm font-semibold mb-4 pb-2 border-b border-terminal-border">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((tech) => (
                      <span key={tech} className="bg-terminal-border text-terminal-green px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-900 py-6 px-4 text-center">
        <p className="text-gray-600 text-xs">
          <span className="text-terminal-green">divyansh@portfolio:~$</span> Built with React, TypeScript & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
