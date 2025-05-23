import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 space-y-6 md:pr-10">
          <div className={`transform transition-all duration-1000 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-gradient">Pratik</span>
            </h1>
          </div>
          
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
              Web Developer & AI/ML Enthusiast
            </h2>
          </div>
          
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <p className="text-lg text-gray-600 mb-8">
              First-year B.Tech student at Atharva College of Engineering, passionate about building innovative 
              solutions and exploring new technologies.
            </p>
          </div>
          
          <div className={`flex flex-wrap gap-4 transform transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <a href="#contact">
              <Button>
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#projects">
              <Button variant="outline">View Projects</Button>
            </a>
            <div className="flex items-center gap-4 ml-2">
              <a href="https://github.com/PRATIKABAJIGANGURDE" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/pratik-a-gangurde/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 mt-12 md:mt-0">
          <div className={`relative transform transition-all duration-1000 delay-900 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}>
            <div className="relative z-10 animate-bounce-light">
              <img alt="Pratik A. Gangurde" className="w-4/5 max-w-sm mx-auto rounded-full bg-white p-2 shadow-lg aspect-square object-cover" src="/lovable-uploads/6a3d458b-b403-4389-ba2f-ec329232cde8.jpg" />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl rounded-full -z-10"></div>
          </div>
        </div>
      </div>
      
      <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
      
      <div className="absolute top-20 right-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl"></div>
      <div className="absolute bottom-20 left-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl"></div>
    </section>;
};
export default HeroSection;