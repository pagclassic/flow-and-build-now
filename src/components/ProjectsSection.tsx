
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye, Code, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

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
  
  const handleUnderDevelopment = () => {
    toast({
      title: "Under Development",
      description: "This project is currently under development.",
    });
  };
  
  // Display only the first two projects on the landing page
  const featuredProjects = [{
    id: 1,
    title: "FixYourLife",
    category: "ARTIFICIAL INTELLIGENCE",
    description: "A life optimization platform where users input their full personal situation, and the AI generates a step-by-step recovery plan with a daily schedule. It also tracks their progress over time, offering updated suggestions when needed.",
    tags: ["Next.js", "TypeScript", "LLM", "Supabase"],
    image: "https://images.unsplash.com/photo-1607988795691-3d0147b43231?q=80&w=2070&auto=format&fit=crop",
    codeUrl: "https://github.com/PRATIKABAJIGANGURDE/life-restructured",
    demoUrl: "https://fixyourlife.tech"
  }, {
    id: 2,
    title: "TuneMigrate",
    category: "ARTIFICIAL INTELLIGENCE",
    description: "A suite of online tools under one brand that help users manage and convert playlists between Spotify, YouTube, and other music platforms. Designed to be easy, fast, and free — similar to iLovePDF but focused on music needs.",
    tags: ["Next.js", "TypeScript", "LLM", "Supabase"],
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=2074&auto=format&fit=crop",
    codeUrl: "https://github.com/PRATIKABAJIGANGURDE/tunemigrate",
    demoUrl: "https://tunemigrate.vercel.app/app"
  }];

  return (
    <section id="projects" className="section bg-background py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll">
          My <span className="text-gradient">Projects</span>
        </h2>

        <div className="flex flex-col space-y-8">
          {featuredProjects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden border-none shadow-lg dark-card animate-on-scroll" style={{
              transitionDelay: `${index * 200}ms`
            }}>
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-60 lg:h-auto overflow-hidden">
                  <div className="h-full w-full relative">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center" />
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 text-xs rounded">
                      {project.id === 1 || project.id === 2 ? "Completed" : "In Development"}
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-4">
                    <Button variant="outline" className="gap-2 border-gray-700 hover:bg-gray-800" onClick={() => window.open(project.codeUrl, "_blank")}>
                      <Code size={18} />
                      View Code
                    </Button>
                    <Button className="gap-2" onClick={() => window.open(project.demoUrl, "_blank")}>
                      <Eye size={18} />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Link to="/projects">
            <Button variant="outline" className="gap-2">
              See All Projects
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
