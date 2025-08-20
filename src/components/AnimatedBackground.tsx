import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const particleCount = 20;
    const newParticles = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2
      });
    }
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float-slow"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-primary opacity-10 rounded-full animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-secondary opacity-10 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-2/3 left-1/3 w-20 h-20 bg-gradient-accent opacity-10 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      {/* DNA helix animation */}
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2">
        <div className="relative w-4 h-32">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-dna-helix"
              style={{
                top: `${i * 12.5}%`,
                left: '0',
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <div
              key={i + 8}
              className="absolute w-2 h-2 bg-secondary/30 rounded-full animate-dna-helix-reverse"
              style={{
                top: `${i * 12.5}%`,
                right: '0',
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;