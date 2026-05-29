import { useEffect, useState } from "react";
import { Link } from "wouter";
import CursorGradient from "../components/CursorGradient";
import Navigation from "../components/Navigation";
import TypeWriter from "../components/TypeWriter";
import ScrollToTop from "../components/ScrollToTop";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useRef } from "react";
import { Download, ArrowRight, Github, Linkedin, Mail, Sparkles, Code2, Layers } from "lucide-react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const heroRef = useRef<HTMLElement>(null);
  const heroVisible = useIntersectionObserver(heroRef, { threshold: 0.1 });

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

  return (
    <div className="font-mono text-gray-100 bg-black min-h-screen">
      <CursorGradient mousePosition={mousePosition} />
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden"
      >
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-terminal-green opacity-5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-terminal-green opacity-3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Status badge */}
          <div className={`fade-in mb-8 ${heroVisible ? "visible" : ""}`}>
            <span className="inline-flex items-center gap-2 bg-terminal-border border border-terminal-green border-opacity-30 text-terminal-green text-xs px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-terminal-green rounded-full animate-pulse" />
              Available for freelance & full-time opportunities
            </span>
          </div>

          <div className="mb-6">
            <p className="text-terminal-green text-sm sm:text-base mb-4 tracking-widest uppercase opacity-70">
              Hi, I'm
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
              {heroVisible && (
                <TypeWriter text="Divyansh Gupta" speed={100} />
              )}
            </h1>
            <div className={`fade-in text-xl md:text-2xl lg:text-3xl text-gray-400 mt-4 ${heroVisible ? "visible" : ""}`}>
              <span className="text-terminal-green">Software Engineer</span>
              {" · "}
              <span>Front-End Specialist</span>
              {" · "}
              <span>Shopify Developer</span>
            </div>
          </div>

          <div className={`fade-in max-w-2xl mx-auto mb-10 ${heroVisible ? "visible" : ""}`}>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              I build fast, beautiful web experiences — from Shopify apps and SaaS platforms to
              client websites and cloud-powered solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`fade-in flex flex-col sm:flex-row gap-4 justify-center mb-16 ${heroVisible ? "visible" : ""}`}>
            <Link
              href="/projects"
              className="glow-border bg-transparent px-8 py-4 rounded-lg text-terminal-green hover:bg-terminal-border hover:text-white transition-all font-semibold flex items-center justify-center gap-2 group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="/Divyansh_Gupta_Resume.pdf"
              download
              className="border border-gray-700 px-8 py-4 rounded-lg text-gray-300 hover:text-terminal-green hover:border-terminal-green transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* Quick stats */}
          <div className={`fade-in grid grid-cols-3 gap-4 max-w-lg mx-auto mb-16 ${heroVisible ? "visible" : ""}`}>
            {[
              { icon: Code2, label: "Projects Built", value: "5+" },
              { icon: Layers, label: "Technologies", value: "20+" },
              { icon: Sparkles, label: "Client Sites", value: "2+" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="glow-border bg-gray-900 bg-opacity-40 p-4 rounded-lg text-center">
                <Icon className="w-5 h-5 text-terminal-green mx-auto mb-2" />
                <div className="text-xl font-bold text-terminal-green">{value}</div>
                <div className="text-xs text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className={`fade-in flex justify-center gap-6 ${heroVisible ? "visible" : ""}`}>
            <a href="https://github.com/divyansh122" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-terminal-green transition-colors p-2">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/divyansh-gupta-3b57a1221/" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-terminal-green transition-colors p-2">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:divyanshgupta335@gmail.com"
              className="text-gray-500 hover:text-terminal-green transition-colors p-2">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs">
          <span>scroll down</span>
          <div className="w-px h-12 bg-gradient-to-b from-terminal-green to-transparent animate-pulse" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-6 px-4 text-center">
        <p className="text-gray-600 text-xs">
          <span className="text-terminal-green">divyansh@portfolio:~$</span> Built with React, TypeScript & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
