import { useEffect, useRef, useState } from "react";
import CursorGradient from "../components/CursorGradient";
import Navigation from "../components/Navigation";
import TypeWriter from "../components/TypeWriter";
import ProjectModal from "../components/ProjectModal";
import ProjectImage from "../components/ProjectImage";
import ScrollToTop from "../components/ScrollToTop";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { projects, type Project } from "../data/projects";
import { ExternalLink, Github, Filter } from "lucide-react";

const allTags = ["All", "React", "AWS", "Shopify", "Next.js", "Node.js"];

export default function Projects() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);
  const visible = useIntersectionObserver(sectionRef, { threshold: 0.05 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) =>
        p.technologies.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()))
      );

  const handleProjectCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 12;
    const rotateY = (centerX - x) / 12;
    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
  };

  const handleProjectCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <div className="font-mono text-gray-100 bg-black min-h-screen">
      <CursorGradient mousePosition={mousePosition} />
      <Navigation />
      <ScrollToTop />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <section ref={sectionRef} className="pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-terminal-green text-sm tracking-widest uppercase mb-4 opacity-70">What I've built</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {visible && <TypeWriter text="./projects" speed={80} />}
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              A collection of personal projects, open-source work, and production features I've shipped.
            </p>
          </div>

          {/* Filter tabs */}
          <div className={`fade-in flex flex-wrap justify-center gap-3 mb-12 ${visible ? "visible" : ""}`}>
            <Filter className="w-4 h-4 text-gray-500 self-center" />
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeFilter === tag
                    ? "bg-terminal-green text-black font-semibold"
                    : "border border-gray-700 text-gray-400 hover:border-terminal-green hover:text-terminal-green"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`fade-in project-card glow-border bg-gray-900 bg-opacity-40 rounded-xl cursor-pointer group hover:bg-opacity-60 transition-all duration-300 overflow-hidden ${
                  visible ? "visible" : ""
                }`}
                onClick={() => setSelectedProject(project)}
                onMouseMove={handleProjectCardMouseMove}
                onMouseLeave={handleProjectCardMouseLeave}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <ProjectImage title={project.title} technologies={project.technologies} />

                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-terminal-green group-hover:text-white transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-terminal-green transition-colors flex-shrink-0 mt-0.5" />
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs bg-terminal-border text-terminal-green px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-gray-800 text-gray-500 px-2 py-0.5 rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                    <span className="text-xs text-gray-600">Click to explore</span>
                    <div className="flex gap-3">
                      {project.sourceCode && (
                        <a
                          href={project.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-500 hover:text-terminal-green transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-500 hover:text-terminal-green transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <p>No projects found for this filter.</p>
            </div>
          )}
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
