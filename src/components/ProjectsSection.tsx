
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wrench, Code } from "lucide-react";

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
            <Card key={index} className="overflow-hidden border-none shadow-lg dark-card animate-on-scroll hover:shadow-xl transition-shadow duration-300" style={{
              transitionDelay: `${index * 200}ms`
            }}>
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className="text-xs text-accent mb-2 uppercase tracking-wide">{project.category}</div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
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
            </Card>
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
