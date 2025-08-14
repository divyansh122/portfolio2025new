import { useEffect } from "react";
import { X, ExternalLink, Github } from "lucide-react";
import { type Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 modal-overlay flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="bg-black bg-opacity-90 border border-terminal-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-terminal-green">
              {project.title}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-terminal-green text-2xl p-2"
            >
              <X size={24} />
            </button>
          </div>
          {project.imageSrc && (
            <img
              src={project.imageSrc}
              alt={`${project.title} preview`}
              className="w-full h-auto rounded-lg mb-6 border border-terminal-border"
            />
          )}

          <div className="space-y-6 text-gray-300">
            <div>
              <div className="terminal-prompt text-terminal-green mb-4">
                Project Overview
              </div>
              <p className="mb-6">{project.overview}</p>
            </div>

            <div>
              <div className="terminal-prompt text-terminal-green mb-4">
                Key Features
              </div>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-400">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="terminal-prompt text-terminal-green mb-4">
                Technical Implementation
              </div>
              <p className="mb-4">{project.implementation}</p>
            </div>

            <div>
              <div className="terminal-prompt text-terminal-green mb-4">
                Results & Impact
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                {project.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-terminal-border text-terminal-green px-3 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-700">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-border bg-transparent px-6 py-3 rounded text-terminal-green hover:bg-terminal-green  transition-all flex items-center justify-center gap-2 text-sm font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                View Live Project
              </a>
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 px-6 py-3 rounded text-gray-300 hover:text-terminal-green hover:border-terminal-green transition-all flex items-center justify-center gap-2 text-sm font-semibold"
              >
                <Github className="w-4 h-4" />
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
