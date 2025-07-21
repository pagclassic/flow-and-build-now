
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar, MapPin, Building, ArrowUpRight, Eye, Award } from "lucide-react";
import { Link } from "react-router-dom";

const ResumeSection = () => {
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

  const educationData = [{
    institution: "Atharva College of Engineering",
    degree: "Bachelor of Engineering - BE, Electronics and Communications Engineering",
    duration: "Oct 2024 - May 2028",
    location: "Mumbai, Maharashtra",
    logo: "/lovable-uploads/35908cfa-bda5-4dbc-82fa-094de855dab6.png"
  }, {
    institution: "Mahatma Gandhi Vidyamandir's Loknete Vyankatrao Hiray Arts, Science & Commerce",
    degree: "HSC, Science",
    duration: "Jul 2022 - Feb 2024",
    location: "Nashik, Maharashtra",
    logo: "/lovable-uploads/7298afb2-69a5-468a-ad26-de1373dfedd9.png"
  }];

  // Only show the first certificate in resume section
  const firstCertification = {
    name: "Dipex 2025",
    issuer: "DIPEX Official",
    date: "2-6 April 2025",
    logo: "/lovable-uploads/87045168-7867-4479-bdd0-054f67d226d9.png"
  };

  // Total count for the "View All" button
  const totalCertifications = 3;

  return (
    <section id="resume" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
              My <span className="text-gradient">Resume</span>
            </h2>
            <p className="text-muted-foreground animate-on-scroll" style={{
              transitionDelay: "200ms"
            }}>
              A summary of my education, experience and certifications
            </p>
          </div>
          <div className="mt-6 md:mt-0 animate-on-scroll" style={{
            transitionDelay: "400ms"
          }}>
            <Button className="flex items-center gap-2">
              <FileText size={18} />
              <span>Download CV</span>
              <Download className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center animate-on-scroll" style={{
              transitionDelay: "600ms"
            }}>
              <Building className="mr-2" />
              <span>Education</span>
            </h3>

            <div className="space-y-6">
              {educationData.map((item, index) => (
                <Card key={index} className="group border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 animate-on-scroll overflow-hidden" style={{
                  transitionDelay: `${800 + index * 200}ms`
                }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-6 relative">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative">
                        <div className="h-16 w-16 sm:h-12 sm:w-12 flex-shrink-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center p-2 mx-auto sm:mx-0 border border-accent/20">
                          <img src={item.logo} alt={item.institution} className="h-full w-full object-cover rounded-lg" />
                        </div>
                      </div>
                      
                      <div className="text-center sm:text-left flex-1">
                        <h4 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300">{item.institution}</h4>
                        <p className="text-muted-foreground mb-3 font-medium">{item.degree}</p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center justify-center sm:justify-start gap-1 bg-secondary/50 rounded-md px-2 py-1">
                            <Calendar size={14} className="text-accent" />
                            <span>{item.duration}</span>
                          </div>
                          <div className="flex items-center justify-center sm:justify-start gap-1 bg-secondary/50 rounded-md px-2 py-1">
                            <MapPin size={14} className="text-accent" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold flex items-center animate-on-scroll" style={{
                transitionDelay: "600ms"
              }}>
                <Award className="mr-2" />
                <span>Certifications</span>
              </h3>
              
              <Button asChild variant="outline" size="sm" className="animate-on-scroll" style={{
                transitionDelay: "700ms"
              }}>
                <Link to="/certificates" className="flex items-center gap-2">
                  <Eye size={16} />
                  View All ({totalCertifications})
                </Link>
              </Button>
            </div>

            <div className="flex flex-col flex-1 gap-6">
              <Card className="group relative overflow-hidden border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 animate-on-scroll flex-1" style={{
                transitionDelay: "800ms"
              }}>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-6 relative h-full flex flex-col">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="relative">
                      <div className="h-16 w-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center p-3 border border-accent/20 group-hover:scale-110 transition-transform duration-300">
                        <img src={firstCertification.logo} alt={firstCertification.name} className="h-full w-full object-cover rounded-lg" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <h4 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors duration-300">
                          {firstCertification.name}
                        </h4>
                        <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 text-xs">
                          Competition
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 font-medium">
                        {firstCertification.issuer}
                      </p>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground bg-secondary/50 rounded-md px-2 py-1">
                          <Calendar size={14} className="text-accent" />
                          <span>{firstCertification.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button asChild size="sm" className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white border-0 group-hover:scale-105 transition-transform duration-300 mt-auto">
                    <a href="https://www.notion.so/My-Certificates-233fddb4a0ff804ea948ff872b0b2efc?source=copy_link" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Eye size={16} />
                      <span>View Certificate</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm animate-on-scroll flex-1" style={{
                transitionDelay: "1000ms"
              }}>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />
                
                <CardContent className="p-6 relative h-full flex flex-col">
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-accent to-primary"></div>
                    Technical Skills
                  </h4>
                  <ul className="list-none space-y-3 text-muted-foreground blur-sm flex-1">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent/50"></div>
                      ESP32 & Arduino Development
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary/50"></div>
                      IoT Systems & Sensor Integration
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent/50"></div>
                      Embedded C/C++ Programming
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary/50"></div>
                      Circuit Design & PCB Development
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent/50"></div>
                      Wireless Communication (WiFi, Bluetooth)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary/50"></div>
                      Automation & Control Systems
                    </li>
                  </ul>
                  
                  {/* Overlay message */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px] rounded-lg">
                    <div className="text-center p-4">
                      <div className="text-lg font-semibold text-white mb-2 flex items-center justify-center gap-2">
                        <div className="animate-pulse">🚧</div>
                        Potential Skills
                      </div>
                      <div className="text-sm text-gray-300">
                        Currently working on mastering these technologies
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
