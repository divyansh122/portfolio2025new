interface ProfileImageProps {
  className?: string;
}

export default function ProfileImage({ className = "" }: ProfileImageProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="glow-border bg-gray-900 bg-opacity-50 rounded-lg p-1 overflow-hidden">
        <div className="bg-gradient-to-br from-terminal-green to-terminal-green-dark rounded-lg p-8 text-center">
          <div className="text-6xl font-bold text-black mb-2">DG</div>
          <div className="text-sm text-black font-semibold">Software Engineer</div>
        </div>
      </div>
      <div className="absolute -inset-1 bg-gradient-to-r from-terminal-green to-terminal-green-dark rounded-lg opacity-20 blur-sm"></div>
    </div>
  );
}