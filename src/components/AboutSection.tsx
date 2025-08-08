
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Cpu, Zap, Wifi, Cog, Wrench, Lightbulb } from "lucide-react";

const AboutSection = () => {
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

  const skills = [
    {
      name: "ESP32",
      icon: <Cpu className="text-primary" />
    },
    {
      name: "IoT Systems",
      icon: <Wifi className="text-primary" />
    },
    {
      name: "Embedded Systems",
      icon: <Zap className="text-accent" />
    },
    {
      name: "Sensor Integration",
      icon: <Cog className="text-accent" />
    },
    {
      name: "Automation",
      icon: <Wrench className="text-primary" />
    },
    {
      name: "Smart Solutions",
      icon: <Lightbulb className="text-accent" />
    }
  ];

  return (
    <section id="about" className="section py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <div className="space-y-4 animate-on-scroll" style={{
              transitionDelay: "200ms"
            }}>
              <p className="text-gray-700">I'm a 2nd year B.Tech Electronics & Telecommunication student passionate about IoT, embedded systems, and solving real-world problems through smart technology. I enjoy working with microcontrollers like the ESP32, integrating sensors, and building automation-based projects.

My learning is mostly hands-on — from automating water supply systems to experimenting with new modules and wireless communication protocols. I'm always exploring how hardware and software come together to create efficient and innovative solutions.

I'm excited to keep learning, building impactful projects, and growing in the field of electronics and smart systems.</p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-on-scroll h-full" style={{
            transitionDelay: "600ms"
          }}>
            <div className="relative bg-gradient-to-br from-card/95 via-card/85 to-card/75 backdrop-blur-xl border-2 border-primary/10 text-foreground rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 hover:shadow-primary/15 hover:shadow-3xl hover:border-primary/20 transition-all duration-700 group h-full flex flex-col my-[45px]">
              {/* Premium gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/6 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-card/20 to-primary/5" />
              
              {/* Subtle animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-sm" />
              
              <div className="relative p-6 bg-gradient-to-br from-transparent via-card/10 to-transparent flex-1">
                <h3 className="text-xl font-semibold mb-6 font-bold text-foreground bg-gradient-to-r from-foreground via-primary/80 to-foreground bg-clip-text">Skills & Expertise</h3>
                
                <div className="grid grid-cols-2 gap-4 blur-sm">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 rounded-lg transition-colors bg-zinc-900">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
                
                {/* Overlay message */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
                  <div className="text-center p-4">
                    <div className="text-lg font-semibold text-white mb-2">
                      🚧 Potential Skills
                    </div>
                    <div className="text-sm text-gray-300">
                      Currently working on mastering these technologies
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

export default AboutSection;
