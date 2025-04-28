
import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Pratik A. Gangurde</h2>
            <p className="text-gray-400 max-w-md">
              B.Tech Student | Aspiring Web Developer | AI & ML Enthusiast
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-medium mb-2">Connect With Me</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Pratik Gangurde. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-400 flex items-center">
              Made with <Heart size={14} className="mx-1 text-red-500" /> in Mumbai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
