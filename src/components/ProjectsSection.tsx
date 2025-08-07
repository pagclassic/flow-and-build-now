
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

const ProjectsSection = () => {
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

  return (
    <section id="projects" className="section bg-background py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll">
          My <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              id: 1,
              title: "Arduino Accelerometer Display",
              category: "Hardware Project",
              description: "Real-time accelerometer data display using Arduino and LCD",
              tags: ["Arduino", "ADXL345", "Hardware"],
              image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
            }
          ].map((project, index) => (
            <div key={index} className="relative bg-gradient-to-br from-card/95 via-card/85 to-card/75 backdrop-blur-xl border-2 border-primary/10 text-foreground rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 hover:shadow-primary/15 hover:shadow-3xl hover:border-primary/20 transition-all duration-700 animate-on-scroll group" style={{
              transitionDelay: `${index * 200}ms`
            }}>
              {/* Premium gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/6 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-card/20 to-primary/5" />
              
              {/* Subtle animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-sm" />
              
              <div className="relative">
                <div className="h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6 bg-gradient-to-br from-transparent via-card/10 to-transparent">
                  <div className="text-xs text-accent mb-2 uppercase tracking-wide font-semibold">{project.category}</div>
                  <h3 className="font-bold text-xl mb-3 text-foreground bg-gradient-to-r from-foreground via-primary/80 to-foreground bg-clip-text group-hover:text-transparent transition-all duration-500">{project.title}</h3>
                  <p className="text-muted-foreground/95 mb-4 line-clamp-2 leading-relaxed font-medium">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <a href={`/projects/${project.id}`} className="flex-1">
                      <Button className="w-full gap-2">
                        <Code size={18} />
                        View Details
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <a href="/projects">
            <Button variant="outline" className="gap-2">
              <Code size={18} />
              View All Projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
