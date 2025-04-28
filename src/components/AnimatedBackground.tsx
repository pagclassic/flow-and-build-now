
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
      const particleCount = Math.floor((windowWidth * windowHeight) / 20000);
      
      // Particle colors based on theme
      const isDarkMode = document.documentElement.classList.contains('dark');
      const colors = isDarkMode 
        ? ["#1a1a2e", "#16213e", "#1b2430", "#0f172a"] 
        : ["#e0e7ff", "#dbeafe", "#ede9fe", "#fae8ff"];
      
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * windowWidth,
        y: Math.random() * windowHeight,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));
      
      setParticles(newParticles);
    };
    
    generateParticles();
    
    const handleResize = () => {
      generateParticles();
    };
    
    // Regenerate particles when theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          generateParticles();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
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
            opacity: 0.6,
            transform: `translateY(${Math.sin(Date.now() * particle.speed * 0.001) * 10}px)`,
            transition: "transform 1s ease-in-out",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
