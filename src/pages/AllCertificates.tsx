
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const AllCertificates = () => {
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

  const certificationData = [
    {
      name: "Dipex (State level competition cum exhibition)",
      issuer: "DIPEX Official",
      date: "DIPEX 2025",
      logo: "/lovable-uploads/87045168-7867-4479-bdd0-054f67d226d9.png",
      description: "State level competition and exhibition showcasing innovative projects and technical skills."
    },
    // Add more certificates here as needed
  ];

  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navbar />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-8 animate-on-scroll">
            <Button asChild variant="outline" size="sm">
              <Link to="/">
                <ArrowLeft size={16} />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="mb-12 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All <span className="text-gradient">Certificates</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              A comprehensive collection of my professional certifications and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationData.map((item, index) => (
              <div 
                key={index} 
                className="dark-card p-6 transition-all duration-300 animate-on-scroll hover:shadow-accent/10 hover:shadow-lg hover:scale-105"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col gap-4">
                  <div className="h-20 w-20 bg-secondary rounded-lg flex items-center justify-center p-3 mx-auto">
                    <img 
                      src={item.logo} 
                      alt={item.name} 
                      className="h-full w-full object-cover rounded-lg" 
                    />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-semibold text-xl mb-3">{item.name}</h3>
                    <p className="text-muted-foreground mb-4">{item.issuer}</p>
                    
                    <div className="flex items-center justify-center gap-2 mb-4 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      {item.date}
                    </div>
                    
                    {item.description && (
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                    
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a 
                        href="https://www.linkedin.com/in/pratik-a-gangurde/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        View Certificate
                        <ExternalLink size={14} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllCertificates;
