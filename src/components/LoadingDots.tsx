interface LoadingDotsProps {
  className?: string;
}

export default function LoadingDots({ className = "" }: LoadingDotsProps) {
  return (
    <span className={`loading-dots ${className}`}>
      <span className="inline-block w-1 h-1 bg-terminal-green rounded-full animate-pulse mx-1"></span>
      <span className="inline-block w-1 h-1 bg-terminal-green rounded-full animate-pulse mx-1" style={{ animationDelay: '0.2s' }}></span>
      <span className="inline-block w-1 h-1 bg-terminal-green rounded-full animate-pulse mx-1" style={{ animationDelay: '0.4s' }}></span>
    </span>
  );
}