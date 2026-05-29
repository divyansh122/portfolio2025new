import { useEffect, useRef, useState } from "react";
import CursorGradient from "../components/CursorGradient";
import Navigation from "../components/Navigation";
import TypeWriter from "../components/TypeWriter";
import ScrollToTop from "../components/ScrollToTop";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { Download, ExternalLink, Github, Linkedin, Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
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
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="mb-16 text-center">
            <p className="text-terminal-green text-sm tracking-widest uppercase mb-4 opacity-70">Let's connect</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {visible && <TypeWriter text="./contact" speed={80} />}
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Have a project in mind, a job opportunity, or just want to say hi? My inbox is always open.
            </p>
          </div>

          {/* Availability badge */}
          <div className={`fade-in flex justify-center mb-12 ${visible ? "visible" : ""}`}>
            <div className="inline-flex items-center gap-2 bg-gray-900 bg-opacity-60 px-6 py-3 rounded-full border border-terminal-border">
              <div className="w-2.5 h-2.5 bg-terminal-green rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">
                <span className="text-terminal-green font-semibold">Available</span> · Usually responds within 24 hours
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Quick Contact */}
            <div className={`fade-in glow-border bg-gray-900 bg-opacity-40 p-8 rounded-2xl ${visible ? "visible" : ""}`}>
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-5 h-5 text-terminal-green" />
                <h2 className="text-lg font-semibold text-terminal-green">Quick Connect</h2>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:divyanshgupta335@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-800 bg-opacity-50 hover:bg-opacity-80 transition-all group border border-transparent hover:border-terminal-border"
                >
                  <div className="w-11 h-11 bg-terminal-border rounded-xl flex items-center justify-center group-hover:bg-gray-700 transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5 text-terminal-green" />
                  </div>
                  <div>
                    <div className="text-terminal-green font-semibold text-sm">Email</div>
                    <div className="text-gray-400 text-xs mt-0.5">divyanshgupta335@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/divyansh-gupta-3b57a1221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-800 bg-opacity-50 hover:bg-opacity-80 transition-all group border border-transparent hover:border-terminal-border"
                >
                  <div className="w-11 h-11 bg-terminal-border rounded-xl flex items-center justify-center group-hover:bg-gray-700 transition-colors flex-shrink-0">
                    <Linkedin className="w-5 h-5 text-terminal-green" />
                  </div>
                  <div>
                    <div className="text-terminal-green font-semibold text-sm">LinkedIn</div>
                    <div className="text-gray-400 text-xs mt-0.5">Professional network</div>
                  </div>
                </a>

                <a
                  href="https://github.com/divyansh122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-800 bg-opacity-50 hover:bg-opacity-80 transition-all group border border-transparent hover:border-terminal-border"
                >
                  <div className="w-11 h-11 bg-terminal-border rounded-xl flex items-center justify-center group-hover:bg-gray-700 transition-colors flex-shrink-0">
                    <Github className="w-5 h-5 text-terminal-green" />
                  </div>
                  <div>
                    <div className="text-terminal-green font-semibold text-sm">GitHub</div>
                    <div className="text-gray-400 text-xs mt-0.5">Check out my code</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Open For */}
            <div className={`fade-in glow-border bg-gray-900 bg-opacity-40 p-8 rounded-2xl ${visible ? "visible" : ""}`}>
              <div className="flex items-center gap-3 mb-6">
                <Send className="w-5 h-5 text-terminal-green" />
                <h2 className="text-lg font-semibold text-terminal-green">Open For</h2>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  "Full-time Frontend / Full-Stack Roles",
                  "Shopify App Development",
                  "Freelance Web Projects",
                  "SaaS Development",
                  "AWS Cloud Solutions",
                  "Open Source Collaboration",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-terminal-green rounded-full flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-800">
                <a
                  href="/Divyansh_Gupta_Resume.pdf"
                  download
                  className="border border-gray-700 px-5 py-2.5 rounded-lg text-gray-300 hover:text-terminal-green hover:border-terminal-green transition-all text-sm flex items-center gap-2 w-fit"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Big CTA */}
          <div className={`fade-in text-center ${visible ? "visible" : ""}`}>
            <div className="relative overflow-hidden glow-border bg-gray-900 bg-opacity-40 rounded-2xl p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-terminal-green/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Ready to build something great?
                </h3>
                <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
                  Let's turn your ideas into reality. Drop me an email and let's start the conversation.
                </p>
                <a
                  href={`mailto:divyanshgupta335@gmail.com?subject=Let's%20Build%20Something%20Amazing&body=Hi%20Divyansh,%0A%0AI'm%20interested%20in%20discussing%20a%20project%20with%20you.%0A%0AProject%20details:%0A%0A%0AThanks!`}
                  className="glow-border bg-transparent px-8 py-4 rounded-xl text-terminal-green hover:bg-terminal-border hover:text-white transition-all text-base font-semibold inline-flex items-center gap-3 group"
                >
                  <Mail className="w-5 h-5" />
                  Start a Conversation
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
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
