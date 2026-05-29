import { Link } from "wouter";
import { Terminal, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black font-mono text-gray-100 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Terminal className="w-8 h-8 text-terminal-green" />
          <span className="text-terminal-green text-lg font-semibold">divyansh@portfolio:~$</span>
        </div>

        <div className="glow-border bg-gray-900 bg-opacity-40 rounded-2xl p-10 mb-8">
          <div className="text-8xl font-bold text-terminal-green mb-4 opacity-80">404</div>
          <h1 className="text-xl font-bold text-white mb-3">Page Not Found</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Looks like this route doesn't exist. Maybe it was moved, deleted, or you mistyped the URL.
          </p>
        </div>

        <Link
          href="/"
          className="glow-border bg-transparent px-6 py-3 rounded-lg text-terminal-green hover:bg-terminal-border hover:text-white transition-all inline-flex items-center gap-2 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
