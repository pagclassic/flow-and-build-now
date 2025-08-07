
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, MapPin, Building, ArrowUpRight, Eye } from "lucide-react";
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
              {educationData.map((item, index) => <div key={index} className="relative bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border border-border/40 text-foreground rounded-xl overflow-hidden shadow-2xl shadow-black/20 hover:shadow-accent/20 hover:shadow-2xl transition-all duration-500 animate-on-scroll group" style={{
                transitionDelay: `${800 + index * 200}ms`
              }}>
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-5 md:p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="h-16 w-16 sm:h-14 sm:w-14 flex-shrink-0 bg-gradient-to-br from-secondary/80 to-muted/60 rounded-xl flex items-center justify-center p-2.5 mx-auto sm:mx-0 ring-1 ring-border/30 shadow-lg">
                      <img src={item.logo} alt={item.institution} className="h-full w-full object-cover rounded-lg" />
                    </div>
                    <div className="text-center sm:text-left flex-1">
                      <h4 className="font-semibold text-lg mb-2 text-foreground/95">{item.institution}</h4>
                      <p className="text-muted-foreground/90 mb-3 leading-relaxed">{item.degree}</p>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm text-muted-foreground/80">
                        <span className="flex items-center justify-center sm:justify-start gap-1.5">
                          <Calendar size={14} className="text-accent/80" />
                          {item.duration}
                        </span>
                        <span className="flex items-center justify-center sm:justify-start gap-1.5">
                          <MapPin size={14} className="text-primary/80" />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold flex items-center animate-on-scroll" style={{
                transitionDelay: "600ms"
              }}>
                <FileText className="mr-2" />
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

            <div className="space-y-6">
              <div className="relative bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border border-border/40 text-foreground rounded-xl overflow-hidden shadow-2xl shadow-black/20 hover:shadow-accent/20 hover:shadow-2xl transition-all duration-500 animate-on-scroll group" style={{
                transitionDelay: "800ms"
              }}>
                {/* Premium gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-5 md:p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="h-16 w-16 sm:h-14 sm:w-14 flex-shrink-0 bg-gradient-to-br from-secondary/80 to-muted/60 rounded-xl flex items-center justify-center p-2.5 mx-auto sm:mx-0 ring-1 ring-border/30 shadow-lg">
                      <img src={firstCertification.logo} alt={firstCertification.name} className="h-full w-full object-cover rounded-lg" />
                    </div>
                    <div className="text-center sm:text-left flex-1">
                      <h4 className="font-semibold text-lg mb-2 text-foreground/95">{firstCertification.name}</h4>
                      <p className="text-muted-foreground/90 mb-3 leading-relaxed">{firstCertification.issuer}</p>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mb-4 text-sm text-muted-foreground/80">
                        <span className="flex items-center justify-center sm:justify-start gap-1.5">
                          <Calendar size={14} className="text-accent/80" />
                          {firstCertification.date}
                        </span>
                      </div>
                      <div className="flex justify-center sm:justify-start">
                        <Button asChild variant="link" className="px-0 text-primary/90 hover:text-primary font-medium">
                          <a href="https://www.notion.so/My-Certificates-233fddb4a0ff804ea948ff872b0b2efc?source=copy_link" target="_blank" rel="noopener noreferrer">
                            View Certificate
                            <ArrowUpRight className="ml-1.5" size={14} />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 animate-on-scroll" style={{
              transitionDelay: "1000ms"
            }}>
              <div className="relative bg-gradient-to-br from-card/60 via-card/40 to-muted/30 backdrop-blur-xl border border-border/30 rounded-xl p-6 overflow-hidden shadow-xl shadow-black/10">
                {/* Premium background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-primary/3" />
                
                <div className="relative">
                  <h4 className="font-semibold text-lg mb-3 text-foreground/95">Technical Skills</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground/70 blur-sm">
                    <li>ESP32 & Arduino Development</li>
                    <li>IoT Systems & Sensor Integration</li>
                    <li>Embedded C/C++ Programming</li>
                    <li>Circuit Design & PCB Development</li>
                    <li>Wireless Communication (WiFi, Bluetooth)</li>
                    <li>Automation & Control Systems</li>
                  </ul>
                  
                  {/* Premium overlay message */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/30 via-black/20 to-black/30 backdrop-blur-[2px] rounded-lg">
                    <div className="text-center p-4">
                      <div className="text-lg font-semibold text-white mb-2 drop-shadow-lg">
                        🚧 Potential Skills
                      </div>
                      <div className="text-sm text-gray-200/90 drop-shadow">
                        Currently working on mastering these technologies
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
