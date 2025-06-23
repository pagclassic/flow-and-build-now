
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

        <div className="flex justify-center">
          <Card className="max-w-lg w-full p-8 text-center border-none shadow-lg dark-card animate-on-scroll">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-accent/10 rounded-full">
                <Wrench className="w-8 h-8 text-accent" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Currently Working on Projects</h3>
            <p className="text-muted-foreground mb-6">
              I'm currently developing exciting new projects that will be showcased here soon. 
              Stay tuned for updates!
            </p>
            
            <div className="flex justify-center">
              <Button variant="outline" className="gap-2">
                <Code size={18} />
                Check Back Soon
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
