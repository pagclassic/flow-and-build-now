
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

const EducationSection = () => {
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

  const educations = [{
    school: "Atharva College of Engineering",
    degree: "Bachelor of Engineering - BE, Electronics and Communications Engineering",
    duration: "Oct 2024 - May 2028",
    logo: "ACE",
    type: "Engineering",
    status: "Current",
    location: "Mumbai, Maharashtra"
  }, {
    school: "Mahatma Gandhi Vidyamandir",
    degree: "HSC, Science",
    duration: "Jul 2022 - Feb 2024",
    logo: "MGV",
    type: "Higher Secondary",
    status: "Completed",
    location: "Nashik, Maharashtra"
  }];

  const getStatusColor = (status: string) => {
    return status === "Current" 
      ? "bg-blue-500/10 text-blue-400 border-blue-500/30" 
      : "bg-green-500/10 text-green-400 border-green-500/30";
  };

  const getTypeColor = (type: string) => {
    return type === "Engineering" 
      ? "bg-purple-500/10 text-purple-400 border-purple-500/30"
      : "bg-orange-500/10 text-orange-400 border-orange-500/30";
  };

  return (
    <section id="education" className="section py-24 bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll">
          My <span className="text-gradient">Education</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((education, index) => (
            <div key={index} className="animate-on-scroll" style={{
              transitionDelay: `${200 * index}ms`
            }}>
              <Card className="group relative overflow-hidden border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-6 relative">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300 border border-accent/20">
                        <span className="font-bold text-accent text-xl">{education.logo}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge variant="outline" className={`capitalize text-xs font-medium ${getTypeColor(education.type)} flex items-center gap-1`}>
                        <GraduationCap className="w-3 h-3" />
                        {education.type}
                      </Badge>
                      <Badge variant="outline" className={`capitalize text-xs font-medium ${getStatusColor(education.status)}`}>
                        {education.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-xl mb-2 group-hover:text-accent transition-colors duration-300 leading-tight">
                    {education.school}
                  </h4>
                  <p className="text-muted-foreground font-medium mb-4 leading-relaxed">
                    {education.degree}
                  </p>
                  
                  <div className="flex flex-col gap-2 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1 bg-secondary/50 rounded-md px-2 py-1 w-fit">
                      <Calendar size={14} className="text-accent" />
                      <span>{education.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-secondary/50 rounded-md px-2 py-1 w-fit">
                      <MapPin size={14} className="text-accent" />
                      <span>{education.location}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border/30">
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      {index === 0 ? (
                        <>
                          <li className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-accent/60 mt-2 flex-shrink-0"></div>
                            <span>Second-year student focusing on electronics and telecommunications</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0"></div>
                            <span>Exploring IoT and Embedded systems with hands-on projects</span>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-accent/60 mt-2 flex-shrink-0"></div>
                            <span>Completed HSC with focus on science subjects</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0"></div>
                            <span>Participated in various technical exhibitions and competitions</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
