
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, User, Folder, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "#hero", icon: <Home size={18} /> },
    { name: "About", path: "#about", icon: <User size={18} /> },
    { name: "Projects", path: "#projects", icon: <Folder size={18} /> },
    { name: "Resume", path: "#resume", icon: <FileText size={18} /> },
    { name: "Contact", path: "#contact", icon: <Mail size={18} /> },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-heading text-2xl font-bold text-gradient">Pratik</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(link.path);
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {link.name}
            </a>
          ))}
          <Button className="ml-4">Resume</Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="flex items-center space-x-2 text-xl font-medium hover:text-primary transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(link.path);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                  closeMenu();
                }
              }}
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
          <Button className="mt-4">Resume</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
