
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const projects = [
    {
      id: 1,
      name: "FixYourLife",
      description: "A life optimization platform where users input their full personal situation, and the AI generates a step-by-step recovery plan with a daily schedule. It also tracks their progress over time, offering updated suggestions when needed.",
      tags: ["AI", "Web Development", "React", "Personal Development"],
      image: "https://images.unsplash.com/photo-1607988795691-3d0147b43231?q=80&w=2070&auto=format&fit=crop",
      url: "https://fixyourlife.tech",
      github: "https://github.com/"
    },
    {
      id: 2,
      name: "TuneMigrate",
      description: "A suite of online tools under one brand that help users manage and convert playlists between Spotify, YouTube, and other music platforms. Designed to be easy, fast, and free — similar to iLovePDF but focused on music needs.",
      tags: ["API Integration", "Music", "Utility", "Frontend"],
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=2074&auto=format&fit=crop",
      url: "https://tunemigrate.com",
      github: "https://github.com/"
    },
    {
      id: 3,
      name: "Transport Portal",
      description: "A web-based service for transport businesses to digitally store, manage, and analyze their trip entries, which are traditionally maintained in physical registers or Excel. It provides easy, secure, and globally accessible storage.",
      tags: ["Business Solution", "Data Management", "React", "Database"],
      image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop",
      url: "https://transportportal.com",
      github: "https://github.com/"
    },
    {
      id: 4,
      name: "HearWrite",
      description: "An app that helps students complete handwritten assignments faster by converting uploaded documents (PDFs, Word files, or images) into audio. Students can listen to the content and write it easily, saving time and reducing reading fatigue.",
      tags: ["Education", "Accessibility", "Audio Processing", "PDF Conversion"],
      image: "https://images.unsplash.com/photo-1512236258305-32fb136ae01c?q=80&w=2070&auto=format&fit=crop",
      url: "https://hearwrite.app",
      github: "https://github.com/"
    }
  ];

  return (
    <section id="projects" className="section bg-gray-50 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll">
          My <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow animate-on-scroll bg-white rounded-xl"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <a 
                    href={project.url}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline flex items-center gap-1 text-sm font-medium"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={14} />
                  </a>
                  <a 
                    href={project.github}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll" style={{ transitionDelay: "800ms" }}>
          <Button>
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
