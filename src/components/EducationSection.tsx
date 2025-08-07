
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
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
    logo: "ACE"
  }, {
    school: "Mahatma Gandhi Vidyamandir",
    degree: "HSC, Science",
    duration: "Jul 2022 - Feb 2024",
    logo: "MGV"
  }];
  return <section id="education" className="section py-24 bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll">
          My <span className="text-gradient">Education</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((education, index) => <div key={index} className="animate-on-scroll" style={{
          transitionDelay: `${200 * index}ms`
        }}>
              <div className="relative bg-gradient-to-br from-card/95 via-card/85 to-card/75 backdrop-blur-xl border-2 border-primary/10 text-foreground rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 hover:shadow-primary/15 hover:shadow-3xl hover:border-primary/20 transition-all duration-700 group">
                {/* Premium gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/6 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-card/20 to-primary/5" />
                
                {/* Subtle animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-sm" />
                
                <div className="relative p-6 md:p-7 bg-gradient-to-br from-transparent via-card/10 to-transparent">
                  <div className="flex gap-4">
                    <div className="h-16 w-16 flex-shrink-0 bg-gradient-to-br from-primary/15 via-secondary/20 to-accent/10 rounded-2xl flex items-center justify-center ring-2 ring-primary/15 shadow-xl shadow-primary/10 group-hover:ring-primary/25 group-hover:shadow-primary/20 transition-all duration-500">
                      <span className="font-bold text-primary text-xl">{education.logo}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-3 text-foreground bg-gradient-to-r from-foreground via-primary/80 to-foreground bg-clip-text group-hover:text-transparent transition-all duration-500">{education.school}</h4>
                      <p className="text-muted-foreground/95 mb-4 leading-relaxed font-medium">{education.degree}</p>
                      <p className="text-muted-foreground/85 font-medium">{education.duration}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <ul className="text-sm space-y-2 text-muted-foreground/85">
                      {index === 0 ? <>
                          <li>• Second-year student focusing on electronics and telecommunications</li>
                          <li>• Exploring IoT and Embedded system</li>
                        </> : <>
                          <li>• Completed HSC with focus on science subjects</li>
                          <li>• Participated in various technical exhibitions</li>
                        </>}
                    </ul>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default EducationSection;
