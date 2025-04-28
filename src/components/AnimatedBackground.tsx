
import { useState, useEffect } from "react";

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    color: string;
  }>>([]);

  useEffect(() => {
    // Generate random particles
    const generateParticles = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const particleCount = Math.floor((windowWidth * windowHeight) / 25000); // Slightly fewer particles
      
      // Dark mode particle colors
      const colors = ["#1a1a2e", "#16213e", "#1b2430", "#0f172a", "#312e81", "#1e1b4b"];
      
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * windowWidth,
        y: Math.random() * windowHeight,
        size: Math.random() * 3 + 1, // Slightly smaller particles
        speed: Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));
      
      setParticles(newParticles);
    };
    
    generateParticles();
    
    const handleResize = () => {
      generateParticles();
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950"></div>
      
      {/* Glassmorphism blur elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            backgroundColor: particle.color,
            opacity: 0.4,
            transform: `translateY(${Math.sin(Date.now() * particle.speed * 0.001) * 10}px)`,
            transition: "transform 1s ease-in-out",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
