
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Zap, Camera, Wifi, Wrench, Target, Lightbulb, User, TrendingUp, Image } from "lucide-react";
import Navbar from "@/components/Navbar";

const ProjectDetail = () => {
  const { id } = useParams();

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

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Only show Dipex project details
  if (id !== "2") {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 md:px-6 pt-24 pb-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <Link to="/projects">
              <Button>Back to Projects</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-12">
        <div className="flex items-center justify-between mb-8">
          <Link to="/projects" className="mb-6">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft size={18} />
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Project Title */}
        <div className="mb-12 animate-on-scroll">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            🌍 Dipex Smart & Sustainable Highway
          </h1>
          <div className="h-64 md:h-80 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop" 
              alt="Dipex Smart & Sustainable Highway" 
              className="w-full h-full object-cover object-center" 
            />
          </div>
        </div>

        <div className="space-y-12">
          {/* Overview */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Overview</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              The Dipex Smart & Sustainable Highway project focuses on building an intelligent transport infrastructure that improves traffic management, enhances safety, and promotes sustainability through technology-driven solutions.
            </p>
          </Card>

          {/* Key Features */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Key Features</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                <Zap className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">🚦 Smart Traffic Management</h3>
                  <p className="text-muted-foreground text-sm">AI-based dynamic traffic signals for smoother vehicle flow.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                <Camera className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">📷 Camera-Based Vehicle Tracking</h3>
                  <p className="text-muted-foreground text-sm">Real-time car movement and number plate recognition using YOLO and computer vision.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                <Wrench className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">🛑 Sustainable Speed-Breaking System</h3>
                  <p className="text-muted-foreground text-sm">speed-breakers that can genrate energy when vehicle pass on.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                <Wifi className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">📡 IoT Integration</h3>
                  <p className="text-muted-foreground text-sm">Arduino-based system for data collection, signal control, and remote monitoring.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 rounded-lg bg-muted/30">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🌱</span>
                <div>
                  <h3 className="font-semibold mb-2">Sustainability</h3>
                  <p className="text-muted-foreground text-sm">Solar-powered signal systems and energy-efficient IoT sensors.</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Tech Stack */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Tech Stack</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-3">Hardware</h3>
                <div className="flex flex-wrap gap-2">
                  {[ "Arduino", "Servo Motors", "IR Sensors", "Camera Modules"].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Software</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "OpenCV", "YOLO", "Arduino IDE"].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Impact */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Impact</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚗</span>
                <span className="text-muted-foreground">Reduced traffic congestion and accidents</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span className="text-muted-foreground">Energy-efficient with renewable power usage</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                <span className="text-muted-foreground">Enhanced road safety through automation and AI</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <span className="text-muted-foreground">Scalable design for smart cities and national highways</span>
              </div>
            </div>
          </Card>

          {/* My Role */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">My Role</h2>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">🔧</span>
                <span className="text-muted-foreground">Designed the hardware architecture </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">🔧</span>
                <span className="text-muted-foreground">Implemented YOLO-based number plate recognition</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">🔧</span>
                <span className="text-muted-foreground">Developed the Arduino logic for automated signals and speed breakers</span>
              </li>
            </ul>
          </Card>

          {/* GitHub */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <Github className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">GitHub Repository</h2>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                className="gap-2" 
                onClick={() => window.open("https://github.com/username/dipex-smart-highway", "_blank")}
              >
                <Github size={18} />
                View Project on GitHub
              </Button>
            </div>
          </Card>

          {/* Project Gallery */}
          <Card className="p-6 md:p-8 border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <Image className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Project Gallery</h2>
            </div>
            <div className="flex items-center gap-4">
              <Button
                className="gap-2"
                onClick={() => window.open("", "_blank")}
              >
                <Image size={18} />
                View Project Gallery
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
