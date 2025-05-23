
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Code, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const AllProjects = () => {
  useEffect(() => {
    // Initialize scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const projects = [{
    id: 1,
    title: "FixYourLife",
    category: "ARTIFICIAL INTELLIGENCE",
    description: "A life optimization platform where users input their full personal situation, and the AI generates a step-by-step recovery plan with a daily schedule. It also tracks their progress over time, offering updated suggestions when needed.",
    tags: ["Next.js", "TypeScript", "LLM", "Supabase"],
    image: "https://images.unsplash.com/photo-1607988795691-3d0147b43231?q=80&w=2070&auto=format&fit=crop",
    codeUrl: "https://github.com/",
    demoUrl: "https://fixyourlife.tech"
  }, {
    id: 2,
    title: "TuneMigrate",
    category: "ARTIFICIAL INTELLIGENCE",
    description: "A suite of online tools under one brand that help users manage and convert playlists between Spotify, YouTube, and other music platforms. Designed to be easy, fast, and free — similar to iLovePDF but focused on music needs.",
    tags: ["Next.js", "TypeScript", "LLM", "Supabase"],
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=2074&auto=format&fit=crop",
    codeUrl: "https://github.com/",
    demoUrl: "https://tunemigrate.com"
  }, {
    id: 3,
    title: "Transport Portal",
    category: "NEXT.JS, NODE.JS, EXPRESS.JS, MONGODB",
    description: "A web-based service for transport businesses to digitally store, manage, and analyze their trip entries, which are traditionally maintained in physical registers or Excel. It provides easy, secure, and globally accessible storage.",
    tags: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop",
    codeUrl: "https://github.com/",
    demoUrl: "https://transportportal.com"
  }, {
    id: 4,
    title: "HearWrite",
    category: "NEXT.JS, NODE.JS, EXPRESS.JS, MONGODB",
    description: "An app that helps students complete handwritten assignments faster by converting uploaded documents (PDFs, Word files, or images) into audio. Students can listen to the content and write it easily, saving time and reducing reading fatigue.",
    tags: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1512236258305-32fb136ae01c?q=80&w=2070&auto=format&fit=crop",
    codeUrl: "https://github.com/",
    demoUrl: "https://hearwrite.app"
  }];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-12">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="mb-6">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft size={18} />
              Back to Home
            </Button>
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-12 animate-on-scroll">
          All <span className="text-gradient">Projects</span>
        </h1>
        
        <div className="flex flex-col space-y-8">
          {projects.map((project, index) => (
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
      </div>
    </div>
  );
};

export default AllProjects;
