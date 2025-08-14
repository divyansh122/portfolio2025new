import { projects } from "../data/projects";

interface ProjectImageProps {
  title: string;
  technologies: string[];
  className?: string;
}

export default function ProjectImage({
  title,
  technologies,
  className = "",
}: ProjectImageProps) {
  const getColorScheme = (tech: string) => {
    // ... your existing colorMap code
  };

  const colors = getColorScheme(technologies[0] || "React");
  const project = projects.find((p) => p.title === title);
  const imageSrc = project?.imageSrc || "/fallback-image.png";

  return (
    <div className={`relative overflow-hidden rounded-t-lg ${className}`}>
      {/* Header area height — tweak as needed */}
      <div className="relative w-full h-48 md:h-56 bg-black">
        {/* Image fills the whole area */}
        <img
          src={imageSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        {/* Optional gradient/overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />

        {/* Grid/decoration layer (keep your effects) */}
        <div className="absolute inset-0 opacity-10"></div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-terminal-green rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-terminal-green rounded-full"></div>
        <div className="absolute top-1/2 left-8 w-1 h-8 bg-terminal-green opacity-30 -rotate-45"></div>
        <div className="absolute top-1/3 right-8 w-1 h-6 bg-terminal-green opacity-20 rotate-45"></div>
      </div>
    </div>
  );
}
