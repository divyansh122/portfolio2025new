interface CursorGradientProps {
  mousePosition: { x: number; y: number };
}

export default function CursorGradient({ mousePosition }: CursorGradientProps) {
  return (
    <div 
      className="cursor-gradient"
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`,
      } as React.CSSProperties}
    />
  );
}
