interface ProjectImageProps {
  title: string;
  technologies: string[];
  className?: string;
}

export default function ProjectImage({ title, technologies, className = "" }: ProjectImageProps) {
  // Create a color scheme based on the first technology
  const getColorScheme = (tech: string) => {
    const colorMap: { [key: string]: { primary: string; secondary: string; bg: string } } = {
      'React': { primary: '#61DAFB', secondary: '#20232A', bg: 'from-blue-900 to-cyan-900' },
      'Next.js': { primary: '#FFFFFF', secondary: '#000000', bg: 'from-gray-900 to-black' },
      'Vue.js': { primary: '#4FC08D', secondary: '#34495E', bg: 'from-green-900 to-emerald-900' },
      'Python': { primary: '#3776AB', secondary: '#FFD43B', bg: 'from-blue-900 to-yellow-900' },
      'Node.js': { primary: '#339933', secondary: '#68A063', bg: 'from-green-900 to-lime-900' },
      'TypeScript': { primary: '#3178C6', secondary: '#235A97', bg: 'from-blue-900 to-indigo-900' },
      'Laravel': { primary: '#FF2D20', secondary: '#FB7185', bg: 'from-red-900 to-pink-900' },
      'Shopify': { primary: '#96BF48', secondary: '#5E8E3E', bg: 'from-green-900 to-lime-900' },
      'FastAPI': { primary: '#009688', secondary: '#4DB6AC', bg: 'from-teal-900 to-cyan-900' }
    };

    const firstTech = technologies[0] || 'React';
    const matchedTech = Object.keys(colorMap).find(key => firstTech.includes(key));
    return colorMap[matchedTech || 'React'];
  };

  const colors = getColorScheme(technologies[0] || 'React');
  
  return (
    <div className={`relative overflow-hidden rounded-t-lg ${className}`}>
      <div className={`w-full h-48 bg-gradient-to-br ${colors.bg} flex items-center justify-center relative`}>
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(rgba(0,255,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,0,0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        {/* Main Content */}
        <div className="text-center z-10 p-6">
          <div className="text-3xl font-bold text-terminal-green mb-3 font-mono">
            {title.split(' ').map(word => word[0]).join('').toUpperCase()}
          </div>
          <div className="text-xs text-gray-300 opacity-80">
            {technologies.slice(0, 2).join(' • ')}
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-terminal-green rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-terminal-green rounded-full"></div>
        <div className="absolute top-1/2 left-8 w-1 h-8 bg-terminal-green opacity-30 transform -rotate-45"></div>
        <div className="absolute top-1/3 right-8 w-1 h-6 bg-terminal-green opacity-20 transform rotate-45"></div>
      </div>
    </div>
  );
}