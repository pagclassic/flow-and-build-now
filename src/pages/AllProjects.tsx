
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Code, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const AllProjects = () => {
  useEffect(() => {
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

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const project = {
    id: 2,
    title: "🌍 Dipex Smart & Sustainable Highway",
    category: "IOT & AI PROJECT",
    description: "Intelligent transport infrastructure that improves traffic management, enhances safety, and promotes sustainability through technology-driven solutions. Features AI-based dynamic traffic signals, YOLO-powered vehicle tracking, automated speed-breaking system, solar-powered signals, and ESP32-based IoT integration for smart city applications.",
    tags: ["ESP32", "Arduino", "YOLO", "OpenCV", "Python", "IoT", "Blynk", "Computer Vision", "AI", "Sustainability"],
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop",
    codeUrl: "#",
    demoUrl: "",
    hardwareProject: true,
    keyFeatures: [
      "🚦 Smart Traffic Management – AI-based dynamic traffic signals",
      "📷 Camera-Based Vehicle Tracking – Real-time car movement and number plate recognition",
      "🛑 Adaptive Speed-Breaking System – Automated speed-breakers",
      "🌱 Sustainability – Solar-powered signal systems",
      "📡 IoT Integration – ESP32 and Arduino-based system"
    ],
    impact: [
      "🚗 Reduced traffic congestion and accidents",
      "⚡ Energy-efficient with renewable power usage",
      "🛡️ Enhanced road safety through automation and AI",
      "📊 Scalable design for smart cities and national highways"
    ]
  };
  
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
          Featured <span className="text-gradient">Project</span>
        </h1>
        
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 h-80 lg:h-auto overflow-hidden">
                <div className="h-full w-full relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center" />
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-2 text-sm rounded">
                    Completed
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded">
                    <span className="text-xs uppercase tracking-wide">{project.category}</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-6">{project.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {project.keyFeatures.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Project Impact</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {project.impact.map((impact, i) => (
                        <li key={i}>{impact}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mt-6">
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
                      Full Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
