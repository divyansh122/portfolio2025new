import { useEffect, useRef, useState } from "react";
import CursorGradient from "../components/CursorGradient";
import Navigation from "../components/Navigation";
import TypeWriter from "../components/TypeWriter";
import ScrollToTop from "../components/ScrollToTop";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { clientWorks, clientReviews } from "../data/clientWork";
import {
  ExternalLink,
  Quote,
  Briefcase,
  Globe,
  ShoppingBag,
  Layout,
  Star,
  MessageSquare,
  Mail,
  Monitor,
} from "lucide-react";
import { Link } from "wouter";

const categoryIcons: Record<string, React.ElementType> = {
  Shopify: ShoppingBag,
  "Business Website": Globe,
  "Landing Page": Layout,
  "Marketing Website": Layout,
};

const categoryColors: Record<string, string> = {
  Shopify: "from-green-500/15 to-emerald-500/5",
  "Business Website": "from-blue-500/15 to-cyan-500/5",
  "Landing Page": "from-purple-500/15 to-pink-500/5",
  "Marketing Website": "from-orange-500/15 to-yellow-500/5",
};

const categoryBadgeColors: Record<string, string> = {
  Shopify: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  "Business Website": "text-blue-400 bg-blue-400/10 border-blue-400/20",
  "Landing Page": "text-purple-400 bg-purple-400/10 border-purple-400/20",
  "Marketing Website": "text-orange-400 bg-orange-400/10 border-orange-400/20",
};

/** Renders a live screenshot of the site using a screenshot API, with a fallback placeholder */
function SitePreview({ url, title }: { url: string; title: string }) {
  const [imgError, setImgError] = useState(false);
  // Use a free screenshot service — no API key needed
  const screenshotUrl = `https://api.screenshotmachine.com/?url=${encodeURIComponent(url)}&dimension=1280x800&format=jpg&cacheLimit=0`;
  // Fallback: use a simple iframe-based preview approach via a public service
  const fallbackUrl = `https://image.thum.io/get/width/1280/crop/800/noanimate/${url}`;

  return (
    <div className="relative w-full aspect-video bg-gray-900 overflow-hidden rounded-t-2xl border-b border-gray-800 group-hover:border-terminal-border transition-colors">
      {/* Browser chrome bar */}
      <div className="absolute top-0 left-0 right-0 h-7 bg-gray-950 flex items-center px-3 gap-1.5 z-10 border-b border-gray-800">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <div className="ml-2 flex-1 bg-gray-800 rounded text-gray-500 text-xs px-2 py-0.5 truncate max-w-xs">
          {url.replace("https://", "").replace("http://", "")}
        </div>
        <Monitor className="w-3 h-3 text-gray-600 ml-auto" />
      </div>

      {/* Screenshot */}
      {!imgError ? (
        <img
          src={fallbackUrl}
          alt={`${title} website preview`}
          className="w-full h-full object-cover object-top mt-7"
          onError={() => setImgError(true)}
          loading="lazy"
        />
      ) : (
        /* Fallback: stylised placeholder */
        <div className="w-full h-full mt-7 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950 gap-3">
          <Globe className="w-10 h-10 text-terminal-green opacity-30" />
          <span className="text-gray-600 text-xs">{url.replace("https://", "")}</span>
        </div>
      )}

      {/* Hover overlay with visit button */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center mt-7">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-2 bg-terminal-green text-black text-xs font-bold px-4 py-2 rounded-lg hover:bg-white transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Visit Site
        </a>
      </div>
    </div>
  );
}

export default function ClientWork() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const sectionRef = useRef<HTMLElement>(null);
  const reviewRef = useRef<HTMLElement>(null);
  const visible = useIntersectionObserver(sectionRef, { threshold: 0.05 });
  const reviewVisible = useIntersectionObserver(reviewRef, { threshold: 0.1 });

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

      {/* ── Client Work Section ── */}
      <section ref={sectionRef} className="pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-14 text-center">
            <p className="text-terminal-green text-xs tracking-widest uppercase mb-4 opacity-60">
              Freelance & Client Projects
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
              {visible && <TypeWriter text="./client_work" speed={80} />}
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Beyond my full-time role, I help businesses build their online presence — from Shopify stores built from scratch to custom websites for international clients.
            </p>
          </div>

          {/* Stats */}
          <div className={`fade-in grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14 ${visible ? "visible" : ""}`}>
            {[
              { label: "Clients Served", value: "2+" },
              { label: "Countries", value: "2" },
              { label: "Technologies", value: "8+" },
              { label: "Satisfaction", value: "100%" },
            ].map(({ label, value }) => (
              <div key={label} className="glow-border bg-gray-900 bg-opacity-40 p-5 rounded-xl text-center">
                <div className="text-2xl sm:text-3xl font-bold text-terminal-green mb-1">{value}</div>
                <div className="text-xs text-gray-500">{label}</div>
              </div>
            ))}
          </div>

          {/* Client Work Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {clientWorks.map((work, index) => {
              const Icon = categoryIcons[work.category] || Briefcase;
              const gradientClass = categoryColors[work.category] || "from-gray-500/10 to-gray-600/5";
              const badgeClass = categoryBadgeColors[work.category] || "text-terminal-green bg-terminal-border border-terminal-border";

              return (
                <div
                  key={work.id}
                  className={`fade-in group glow-border bg-gray-900 bg-opacity-40 rounded-2xl overflow-hidden hover:bg-opacity-60 transition-all duration-300 flex flex-col ${visible ? "visible" : ""}`}
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  {/* Site screenshot preview */}
                  {work.liveLink && (
                    <SitePreview url={work.liveLink} title={work.projectTitle} />
                  )}

                  {/* Gradient header strip */}
                  <div className={`bg-gradient-to-br ${gradientClass} px-6 pt-5 pb-4 border-b border-gray-800/60`}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-black/40 rounded-xl flex items-center justify-center border border-gray-700 group-hover:border-terminal-border transition-colors flex-shrink-0">
                          <Icon className="w-5 h-5 text-terminal-green" />
                        </div>
                        <div>
                          <span className={`text-xs px-2 py-0.5 rounded-full border ${badgeClass}`}>
                            {work.category}
                          </span>
                          <h3 className="text-base font-bold text-white mt-1 leading-tight">
                            {work.projectTitle}
                          </h3>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-800/80 px-2 py-1 rounded-full flex-shrink-0">
                        {work.year}
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-gray-500">Client:</span>
                      <span className="text-gray-300 text-sm font-medium">{work.clientName}</span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {work.description}
                    </p>

                    {/* Services */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Services</p>
                      <div className="flex flex-wrap gap-2">
                        {work.services.map((service) => (
                          <span
                            key={service}
                            className="text-xs border border-terminal-border text-terminal-green px-2.5 py-1 rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-5">
                      <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Built With</p>
                      <div className="flex flex-wrap gap-1.5">
                        {work.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-terminal-border text-terminal-green px-2 py-0.5 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Footer: live link */}
                    {work.liveLink && (
                      <div className="pt-4 border-t border-gray-800">
                        <a
                          href={work.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-terminal-green text-sm font-medium hover:text-white transition-colors group/link"
                        >
                          <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                          {work.liveLink.replace("https://", "").replace(/\/$/, "")}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className={`fade-in text-center ${visible ? "visible" : ""}`}>
            <div className="relative overflow-hidden glow-border bg-gray-900 bg-opacity-40 rounded-2xl p-10 max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-terminal-green/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-terminal-border rounded-full flex items-center justify-center mx-auto mb-5">
                  <Briefcase className="w-7 h-7 text-terminal-green" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Need a Website?</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md mx-auto">
                  I'm available for freelance projects — landing pages, full web apps, Shopify stores, and more. Let's talk.
                </p>
                <Link
                  href="/contact"
                  className="glow-border bg-transparent px-8 py-3 rounded-lg text-terminal-green hover:bg-terminal-border hover:text-white transition-all font-semibold inline-flex items-center gap-2"
                >
                  Get in Touch
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Client Reviews Section ── */}
      <section ref={reviewRef} className="py-20 px-4 sm:px-6 border-t border-gray-900">
        <div className="max-w-6xl mx-auto">

          <div className="mb-12 text-center">
            <p className="text-terminal-green text-xs tracking-widest uppercase mb-4 opacity-60">
              What Clients Say
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {reviewVisible && <TypeWriter text="./reviews" speed={80} />}
            </h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Real feedback from people I've worked with. More reviews coming soon.
            </p>
          </div>

          {clientReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {clientReviews.map((review, index) => (
                <div
                  key={review.id}
                  className={`fade-in glow-border bg-gray-900 bg-opacity-40 rounded-2xl p-6 ${reviewVisible ? "visible" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "text-terminal-green fill-terminal-green" : "text-gray-700"}`}
                      />
                    ))}
                  </div>

                  <Quote className="w-5 h-5 text-terminal-green opacity-40 mb-3" />
                  <p className="text-gray-300 text-sm leading-relaxed italic mb-5">
                    "{review.review}"
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                    <div className="w-9 h-9 rounded-full bg-terminal-border flex items-center justify-center text-terminal-green font-bold text-sm flex-shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{review.name}</p>
                      <p className="text-gray-500 text-xs">{review.role} · {review.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty state — reviews coming soon */
            <div className={`fade-in mb-16 ${reviewVisible ? "visible" : ""}`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                {/* Placeholder skeleton cards */}
                {[
                  { name: "RSK India", role: "Store Owner", company: "RSK India", note: "Review coming soon..." },
                  { name: "TreadSafe", role: "Founder", company: "TreadSafe", note: "Review coming soon..." },
                  { name: "Your Name", role: "Your Role", company: "Your Company", note: "Be the next to leave a review!" },
                ].map((placeholder, i) => (
                  <div
                    key={i}
                    className="glow-border bg-gray-900 bg-opacity-30 rounded-2xl p-6 border-dashed opacity-60"
                  >
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-gray-700" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-gray-700 mb-3" />
                    <p className="text-gray-600 text-sm italic mb-5">{placeholder.note}</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                      <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-600 font-bold text-sm flex-shrink-0">
                        {placeholder.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm font-semibold">{placeholder.name}</p>
                        <p className="text-gray-600 text-xs">{placeholder.role} · {placeholder.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Leave a review CTA */}
          <div className={`fade-in ${reviewVisible ? "visible" : ""}`}>
            <div className="relative overflow-hidden glow-border bg-gray-900 bg-opacity-40 rounded-2xl p-8 max-w-2xl mx-auto text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-terminal-green/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-terminal-border rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-terminal-green" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Worked with me?</h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  I'd love to hear your feedback. Drop me a message and I'll add your review here.
                </p>
                <a
                  href="mailto:divyanshgupta335@gmail.com?subject=Review%20for%20Divyansh&body=Hi%20Divyansh,%0A%0AHere's%20my%20review%20for%20your%20work:%0A%0A"
                  className="inline-flex items-center gap-2 border border-terminal-border text-terminal-green px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-terminal-border hover:text-white transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Leave a Review
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
