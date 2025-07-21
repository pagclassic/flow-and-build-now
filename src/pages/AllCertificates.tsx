import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, ExternalLink, Award, Trophy, BookOpen } from "lucide-react";
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
  const certificationData = [{
    name: "Dipex 2025",
    issuer: "DIPEX Official",
    date: "2-6 April 2025",
    type: "competition",
    logo: "/lovable-uploads/87045168-7867-4479-bdd0-054f67d226d9.png",
    description: "State level competition and exhibition showcasing innovative projects and technical skills.",
    status: "Upcoming"
  }, {
    name: "CodeCraft UI/UX",
    issuer: "Computer Society India - ACOE",
    date: "21st January 2025",
    type: "hackathon",
    logo: "/lovable-uploads/csi.png",
    description: "Participated in the CodeCraft UI/UX Hackathon at Atharva College of Engineering, designing user-centric solutions under time constraints.",
    status: "Completed"
  }, {
    name: "IoT And Embedded System",
    issuer: "Adverk Technologies",
    date: "16th July 2025",
    type: "course",
    logo: "/lovable-uploads/adverk.jpeg",
    description: "Completed a hands-on course in IoT and Embedded Systems, covering microcontrollers, sensors, and communication protocols.",
    status: "Upcoming"
  }];
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "hackathon":
        return <Trophy className="w-4 h-4" />;
      case "competition":
        return <Award className="w-4 h-4" />;
      case "course":
        return <BookOpen className="w-4 h-4" />;
      default:
        return <Award className="w-4 h-4" />;
    }
  };
  const getTypeColor = (type: string) => {
    switch (type) {
      case "hackathon":
        return "bg-blue-500/10 text-blue-400 border-blue-500/30";
      case "competition":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "course":
        return "bg-purple-500/10 text-purple-400 border-purple-500/30";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/30";
    }
  };
  const getStatusColor = (status: string) => {
    return status === "Completed" ? "bg-green-500/10 text-green-400 border-green-500/30" : "bg-orange-500/10 text-orange-400 border-orange-500/30";
  };
  return <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navbar />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Header Section */}
          <div className="flex items-center gap-4 mb-8 animate-on-scroll">
            <Button asChild variant="outline" size="sm" className="gap-2">
              <Link to="/">
                <ArrowLeft size={16} />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="text-center mb-16 animate-on-scroll">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My <span className="text-gradient">Certifications</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              A comprehensive collection of my professional achievements, certifications, and learning milestones
            </p>
            <div className="flex justify-center gap-6 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                <span>{certificationData.filter(cert => cert.type === 'competition').length} Competitions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span>{certificationData.filter(cert => cert.type === 'hackathon').length} Hackathons</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span>{certificationData.filter(cert => cert.type === 'course').length} Courses</span>
              </div>
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationData.map((item, index) => <Card key={index} className="group relative overflow-hidden border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 animate-on-scroll hover:-translate-y-2" style={{
            transitionDelay: `${index * 150}ms`
          }}>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="pb-4 relative">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300 border border-accent/20">
                        <img src={item.logo} alt={item.name} className="w-full h-full object-contain rounded-lg" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge variant="outline" className={`capitalize text-xs font-medium ${getTypeColor(item.type)} flex items-center gap-1`}>
                        {getTypeIcon(item.type)}
                        {item.type}
                      </Badge>
                      
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-semibold leading-tight group-hover:text-accent transition-colors duration-300">
                    {item.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground font-medium">
                    {item.issuer}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0 relative">
                  <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1 bg-secondary/50 rounded-md px-2 py-1">
                      <Calendar size={14} className="text-accent" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <Button asChild variant="outline" size="sm" className="w-full bg-gradient-to-r from-accent/10 to-primary/10 hover:from-accent hover:to-primary hover:text-white group-hover:scale-105 transition-all duration-300 border border-accent/30">
                    <a href="https://www.notion.so/My-Certificates-233fddb4a0ff804ea948ff872b0b2efc?source=copy_link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2">
                      <span>View Certificate</span>
                      <ExternalLink size={14} />
                    </a>
                  </Button>
                </CardContent>
              </Card>)}
          </div>

          {/* Call to Action Section */}
          <div className="text-center mt-16 animate-on-scroll">
            <Card className="relative overflow-hidden border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />
              
              <CardContent className="p-8 relative">
                <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-accent to-primary"></div>
                  Continuous Learning Journey
                </h3>
                <p className="text-muted-foreground mb-6">
                  I'm always exploring new technologies and participating in competitions to expand my knowledge and skills in electronics and IoT.
                </p>
                <Button asChild className="gap-2 bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white">
                  <Link to="/#contact">
                    Get In Touch
                    <ExternalLink size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default AllCertificates;