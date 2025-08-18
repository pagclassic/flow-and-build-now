
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Eye, ChevronDown, ChevronUp, Zap, Camera, Wifi, Wrench } from "lucide-react";

const ProjectsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, {
      threshold: 0.1
    });
    document.querySelectorAll(".animate-on-scroll").forEach(el => {
      observer.observe(el);
    });
    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="projects" className="section bg-background py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll">
          Featured <span className="text-gradient">Project</span>
        </h2>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="overflow-hidden border-none shadow-lg dark-card animate-on-scroll hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 md:h-80 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop" 
                alt="Dipex Smart & Sustainable Highway" 
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-xs uppercase tracking-wide mb-1">🌍 Featured Project</div>
                <h3 className="text-2xl md:text-3xl font-bold">Dipex Smart & Sustainable Highway</h3>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="mb-6">
                <p className="text-lg text-muted-foreground mb-4">
                  Intelligent transport infrastructure that improves traffic management, enhances safety, and promotes sustainability through technology-driven solutions.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {["ESP32", "Arduino", "YOLO", "OpenCV", "Python", "IoT", "Blynk", "Computer Vision"].map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features Preview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Zap className="w-5 h-5 text-accent" />
                  <span className="text-sm">Smart Traffic Management</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Camera className="w-5 h-5 text-accent" />
                  <span className="text-sm">Vehicle Tracking & Recognition</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Wrench className="w-5 h-5 text-accent" />
                  <span className="text-sm">Adaptive Speed-Breaking</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Wifi className="w-5 h-5 text-accent" />
                  <span className="text-sm">IoT Integration</span>
                </div>
              </div>

              {/* Expandable Detailed Content */}
              {isExpanded && (
                <div className="space-y-6 border-t pt-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">🔹 Key Features</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>🚦 <strong>Smart Traffic Management</strong> – AI-based dynamic traffic signals for smoother vehicle flow</li>
                      <li>📷 <strong>Camera-Based Vehicle Tracking</strong> – Real-time car movement and number plate recognition using YOLO and computer vision</li>
                      <li>🛑 <strong>Adaptive Speed-Breaking System</strong> – Automated speed-breakers that rise during red signals and lower during green signals</li>
                      <li>🌱 <strong>Sustainability</strong> – Solar-powered signal systems and energy-efficient IoT sensors</li>
                      <li>📡 <strong>IoT Integration</strong> – ESP32 and Arduino-based system for data collection, signal control, and remote monitoring</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">🔹 Tech Stack</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium mb-2">Hardware:</p>
                        <p className="text-muted-foreground text-sm">ESP32, Arduino, Servo Motors, IR Sensors, Camera Modules</p>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Software:</p>
                        <p className="text-muted-foreground text-sm">Python, OpenCV, YOLO, Arduino IDE, Blynk IoT</p>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Communication:</p>
                        <p className="text-muted-foreground text-sm">WiFi / LoRa for real-time updates</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">🔹 Impact</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>🚗 Reduced traffic congestion and accidents</li>
                      <li>⚡ Energy-efficient with renewable power usage</li>
                      <li>🛡️ Enhanced road safety through automation and AI</li>
                      <li>📊 Scalable design for smart cities and national highways</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">🔹 My Role</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Designed the hardware architecture and IoT setup</li>
                      <li>• Implemented YOLO-based number plate recognition</li>
                      <li>• Developed the Arduino + ESP32 logic for automated signals and servo-based speed breakers</li>
                      <li>• Integrated the system with Blynk for remote monitoring</li>
                    </ul>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <Button 
                  onClick={toggleExpanded}
                  variant="outline" 
                  className="w-full sm:w-auto gap-2"
                >
                  {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  {isExpanded ? 'Show Less' : 'Read More'}
                </Button>
                <div className="flex gap-2 w-full sm:w-auto">
                  <a href="/projects/2" className="flex-1 sm:flex-none">
                    <Button className="w-full gap-2">
                      <Eye size={18} />
                      View Details
                    </Button>
                  </a>
                  <Button 
                    variant="outline" 
                    className="gap-2" 
                    onClick={() => window.open("#", "_blank")}
                  >
                    <Code size={18} />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
