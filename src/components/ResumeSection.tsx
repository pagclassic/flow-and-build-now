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
              {educationData.map((item, index) => <div key={index} className="relative bg-gradient-to-br from-card/95 via-card/85 to-card/75 backdrop-blur-xl border-2 border-primary/10 text-foreground rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 hover:shadow-primary/15 hover:shadow-3xl hover:border-primary/20 transition-all duration-700 animate-on-scroll group" style={{
                transitionDelay: `${800 + index * 200}ms`
              }}>
                {/* Premium gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/6 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-card/20 to-primary/5" />
                
                {/* Subtle animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-sm" />
                
                <div className="relative p-6 md:p-7 bg-gradient-to-br from-transparent via-card/10 to-transparent">
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="h-18 w-18 sm:h-16 sm:w-16 flex-shrink-0 bg-gradient-to-br from-primary/15 via-secondary/20 to-accent/10 rounded-2xl flex items-center justify-center p-3 mx-auto sm:mx-0 ring-2 ring-primary/15 shadow-xl shadow-primary/10 group-hover:ring-primary/25 group-hover:shadow-primary/20 transition-all duration-500">
                      <img src={item.logo} alt={item.institution} className="h-full w-full object-cover rounded-xl" />
                    </div>
                    <div className="text-center sm:text-left flex-1">
                      <h4 className="font-bold text-xl mb-3 text-foreground bg-gradient-to-r from-foreground via-primary/80 to-foreground bg-clip-text group-hover:text-transparent transition-all duration-500">{item.institution}</h4>
                      <p className="text-muted-foreground/95 mb-4 leading-relaxed font-medium">{item.degree}</p>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-5 text-sm">
                        <span className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground/85 font-medium">
                          <Calendar size={16} className="text-primary/90" />
                          {item.duration}
                        </span>
                        <span className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground/85 font-medium">
                          <MapPin size={16} className="text-accent/90" />
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
              <div className="relative bg-gradient-to-br from-card/95 via-card/85 to-card/75 backdrop-blur-xl border-2 border-primary/10 text-foreground rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 hover:shadow-primary/15 hover:shadow-3xl hover:border-primary/20 transition-all duration-700 animate-on-scroll group" style={{
                transitionDelay: "800ms"
              }}>
                {/* Premium gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/6 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-card/20 to-primary/5" />
                
                {/* Subtle animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-sm" />
                
                <div className="relative p-6 md:p-7 bg-gradient-to-br from-transparent via-card/10 to-transparent">
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="h-18 w-18 sm:h-16 sm:w-16 flex-shrink-0 bg-gradient-to-br from-primary/15 via-secondary/20 to-accent/10 rounded-2xl flex items-center justify-center p-3 mx-auto sm:mx-0 ring-2 ring-primary/15 shadow-xl shadow-primary/10 group-hover:ring-primary/25 group-hover:shadow-primary/20 transition-all duration-500">
                      <img src={firstCertification.logo} alt={firstCertification.name} className="h-full w-full object-cover rounded-xl" />
                    </div>
                    <div className="text-center sm:text-left flex-1">
                      <h4 className="font-bold text-xl mb-3 text-foreground bg-gradient-to-r from-foreground via-primary/80 to-foreground bg-clip-text group-hover:text-transparent transition-all duration-500">{firstCertification.name}</h4>
                      <p className="text-muted-foreground/95 mb-4 leading-relaxed font-medium">{firstCertification.issuer}</p>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-5 mb-5 text-sm">
                        <span className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground/85 font-medium">
                          <Calendar size={16} className="text-primary/90" />
                          {firstCertification.date}
                        </span>
                      </div>
                      <div className="flex justify-center sm:justify-start">
                        <Button asChild size="sm" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold group/btn">
                          <a href="https://www.notion.so/My-Certificates-233fddb4a0ff804ea948ff872b0b2efc?source=copy_link" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <FileText size={16} />
                            View Certificate
                            <ArrowUpRight className="ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" size={16} />
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
              <div className="relative bg-gradient-to-br from-card/80 via-card/60 to-muted/40 backdrop-blur-xl border-2 border-border/40 rounded-2xl p-7 overflow-hidden shadow-2xl shadow-black/15">
                {/* Premium background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/5" />
                
                <div className="relative">
                  <h4 className="font-bold text-xl mb-4 text-foreground/95">Technical Skills</h4>
                  <ul className="list-disc list-inside space-y-3 text-muted-foreground/75 blur-sm font-medium">
                    <li>ESP32 & Arduino Development</li>
                    <li>IoT Systems & Sensor Integration</li>
                    <li>Embedded C/C++ Programming</li>
                    <li>Circuit Design & PCB Development</li>
                    <li>Wireless Communication (WiFi, Bluetooth)</li>
                    <li>Automation & Control Systems</li>
                  </ul>
                  
                  {/* Premium overlay message */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/40 via-black/30 to-black/40 backdrop-blur-[3px] rounded-xl">
                    <div className="text-center p-5">
                      <div className="text-xl font-bold text-white mb-3 drop-shadow-xl">
                        🚧 Potential Skills
                      </div>
                      <div className="text-sm text-gray-200/95 drop-shadow-lg font-medium">
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
