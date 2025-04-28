
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, MapPin, Building, ArrowUpRight } from "lucide-react";

const ResumeSection = () => {
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

  const educationData = [
    {
      institution: "Atharva College of Engineering",
      degree: "Bachelor of Engineering - BE, Electronics and Communications Engineering",
      duration: "Oct 2024 - May 2028",
      location: "Mumbai, Maharashtra",
      logo: "public/lovable-uploads/122e74e6-7f31-4ea8-acfe-31cce26d0c0e.png"
    },
    {
      institution: "Mahatma Gandhi Vidyamandir's Loknete Vyankatrao Hiray Arts, Science & Commerce",
      degree: "HSC, Science",
      duration: "Jul 2022 - Feb 2024",
      location: "Nashik, Maharashtra",
      logo: "public/lovable-uploads/c8982e4a-4a4a-4111-8d02-747a22898cf8.png"
    }
  ];

  const certificationData = [
    {
      name: "Dipex (State level competition cum exhibition)",
      issuer: "DIPEX Official",
      date: "DIPEX 2025",
      logo: "public/lovable-uploads/2728574f-fd94-49ea-8d5f-d8625c54c420.png"
    }
  ];

  return (
    <section id="resume" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
              My <span className="text-gradient">Resume</span>
            </h2>
            <p className="text-muted-foreground animate-on-scroll" style={{ transitionDelay: "200ms" }}>
              A summary of my education, experience and certifications
            </p>
          </div>
          <div className="mt-6 md:mt-0 animate-on-scroll" style={{ transitionDelay: "400ms" }}>
            <Button className="flex items-center gap-2">
              <FileText size={18} />
              <span>Download CV</span>
              <Download className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center animate-on-scroll" style={{ transitionDelay: "600ms" }}>
              <Building className="mr-2" />
              <span>Education</span>
            </h3>

            <div className="space-y-6">
              {educationData.map((item, index) => (
                <div 
                  key={index} 
                  className="dark-card p-5 transition-shadow animate-on-scroll hover:shadow-accent/10 hover:shadow-lg"
                  style={{ transitionDelay: `${800 + index * 200}ms` }}
                >
                  <div className="flex gap-4">
                    <div className="h-12 w-12 flex-shrink-0 bg-secondary rounded-md flex items-center justify-center p-2">
                      <img 
                        src={item.logo} 
                        alt={item.institution} 
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">{item.institution}</h4>
                      <p className="text-muted-foreground">{item.degree}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {item.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center animate-on-scroll" style={{ transitionDelay: "600ms" }}>
              <FileText className="mr-2" />
              <span>Certifications</span>
            </h3>

            <div className="space-y-6">
              {certificationData.map((item, index) => (
                <div 
                  key={index} 
                  className="dark-card p-5 transition-shadow animate-on-scroll hover:shadow-accent/10 hover:shadow-lg"
                  style={{ transitionDelay: `${800 + index * 200}ms` }}
                >
                  <div className="flex gap-4">
                    <div className="h-12 w-12 flex-shrink-0 bg-secondary rounded-md flex items-center justify-center p-2">
                      <img 
                        src={item.logo} 
                        alt={item.name} 
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">{item.name}</h4>
                      <p className="text-muted-foreground">{item.issuer}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {item.date}
                        </span>
                      </div>
                      <Button variant="link" className="p-0 h-auto text-primary mt-2 flex items-center gap-1">
                        View Certificate
                        <ArrowUpRight size={14} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 animate-on-scroll" style={{ transitionDelay: "1000ms" }}>
              <div className="glassmorphism p-5 rounded-lg border border-border/50">
                <h4 className="font-medium text-lg mb-2">Technical Skills</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>HTML5, CSS3, JavaScript</li>
                  <li>React.js, Tailwind CSS</li>
                  <li>Basic Python & Machine Learning concepts</li>
                  <li>UI/UX Design Principles</li>
                  <li>Version Control (Git)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
