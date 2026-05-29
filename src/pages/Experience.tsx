import { useEffect, useRef, useState } from "react";
import CursorGradient from "../components/CursorGradient";
import Navigation from "../components/Navigation";
import TypeWriter from "../components/TypeWriter";
import ScrollToTop from "../components/ScrollToTop";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Jr. Front End Developer",
    company: "Catalys",
    period: "July 2025 – Present",
    type: "Full-time",
    color: "from-terminal-green to-green-400",
    points: [
      "Promoted from Intern to Jr. Front End Developer for delivering high-quality, production-ready features.",
      "Built responsive, merchant-facing UI components using React.js, Shopify Polaris, and Tailwind CSS.",
      "Integrated Shopify REST/GraphQL APIs and optimized frontend performance across devices.",
      "Collaborated with design, backend, and QA teams to ensure seamless feature delivery.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Catalys",
    period: "April 2025 – July 2025",
    type: "Internship",
    color: "from-green-600 to-terminal-green",
    points: [
      "Spearheaded the development of a Zipcode Checker feature for Pulse Delivery Estimator, enabling customers to view real-time delivery estimates based on their zip code.",
      "Successfully launched the feature within 1 month of onboarding, enhancing user experience and merchant retention.",
      "Worked with Shopify Polaris, React.js, and Liquid to build seamless UI components compatible with Shopify's merchant dashboards.",
      "Integrated Shopify APIs and used Gadget.dev for backend workflows and database modeling.",
      "Collaborated cross-functionally with designers and QA to ensure robust testing and optimized performance.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Technology – Computer Science",
    institution: "Your University Name",
    period: "2021 – 2025",
    details: "Focused on software engineering, data structures, algorithms, and web development.",
  },
];

export default function Experience() {
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
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-terminal-green text-sm tracking-widest uppercase mb-4 opacity-70">Career journey</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {visible && <TypeWriter text="./experience" speed={80} />}
            </h1>
          </div>

          {/* Work Experience */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-5 h-5 text-terminal-green" />
              <h2 className="text-xl font-semibold text-terminal-green">Work Experience</h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-terminal-border hidden sm:block" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`fade-in relative sm:pl-16 ${visible ? "visible" : ""}`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-terminal-green border-2 border-black hidden sm:block shadow-lg shadow-terminal-green/30" />

                    <div className="glow-border bg-gray-900 bg-opacity-40 p-6 sm:p-8 rounded-xl hover:bg-opacity-60 transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-terminal-green mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-gray-300 font-medium">{exp.company}</p>
                        </div>
                        <div className="flex flex-col sm:items-end gap-2">
                          <span className="inline-flex items-center gap-1.5 text-terminal-green text-xs bg-terminal-border px-3 py-1.5 rounded-full">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </span>
                          <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {exp.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                            <span className="w-1.5 h-1.5 bg-terminal-green rounded-full mt-2 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className={`fade-in ${visible ? "visible" : ""}`}>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-5 h-5 text-terminal-green" />
              <h2 className="text-xl font-semibold text-terminal-green">Education</h2>
            </div>

            {education.map((edu, index) => (
              <div key={index} className="glow-border bg-gray-900 bg-opacity-40 p-6 sm:p-8 rounded-xl">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-terminal-green mb-1">{edu.degree}</h3>
                    <p className="text-gray-300">{edu.institution}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-terminal-green text-xs bg-terminal-border px-3 py-1.5 rounded-full self-start">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{edu.details}</p>
              </div>
            ))}
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
