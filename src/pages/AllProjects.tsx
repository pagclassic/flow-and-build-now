
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Code, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const AllProjects = () => {
  useEffect(() => {
    // Initialize scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Real-Time Accelerometer Data Display",
      category: "HARDWARE PROJECT",
      description: "Arduino project using ADXL345 accelerometer and 16x2 LCD display to show real-time X, Y, Z axis data. Demonstrates I2C communication, LCD interfacing, and hardware debugging skills.",
      tags: ["Arduino", "ADXL345", "LCD", "I2C", "Hardware"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      codeUrl: "https://github.com/username/accelerometer-lcd-display",
      demoUrl: "",
      hardwareProject: true
    },
    {
      id: 2,
      title: "Dipex Smart & Sustainable Highway",
      category: "IOT & AI PROJECT",
      description: "Intelligent transport infrastructure with AI-based dynamic traffic signals, YOLO-powered vehicle tracking, and automated speed-breaking system. Features solar-powered signals and ESP32-based IoT integration for smart city applications.",
      tags: ["ESP32", "Arduino", "YOLO", "OpenCV", "Python", "IoT", "Blynk", "Computer Vision"],
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop",
      codeUrl: "https://github.com/username/dipex-smart-highway",
      demoUrl: "",
      hardwareProject: true
    }
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-12">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="mb-6">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft size={18} />
              Back to Home
            </Button>
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-12 animate-on-scroll">
          All <span className="text-gradient">Projects</span>
        </h1>
        
        <div className="flex flex-col space-y-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden border-none shadow-lg dark-card animate-on-scroll" style={{
              transitionDelay: `${index * 200}ms`
            }}>
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 h-60 lg:h-auto overflow-hidden">
                    <div className="h-full w-full relative">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center" />
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 text-xs rounded">
                        Completed
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      <p className="text-muted-foreground mb-6 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-4">
                      <Button 
                        variant="outline" 
                        className="gap-2 border-gray-700 hover:bg-gray-800" 
                        onClick={() => window.open(project.codeUrl, "_blank")}
                      >
                        <Code size={18} />
                        View Code
                      </Button>
                      <Link to={`/projects/${project.id}`}>
                        <Button className="gap-2">
                          <Eye size={18} />
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
