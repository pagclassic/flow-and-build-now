
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Code, Brain, Globe, CheckCircle } from "lucide-react";

const AboutSection = () => {
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

  const skills = [
    { name: "HTML5", icon: <Code className="text-primary" /> },
    { name: "CSS3", icon: <Code className="text-primary" /> },
    { name: "JavaScript", icon: <Code className="text-primary" /> },
    { name: "React", icon: <Code className="text-primary" /> },
    { name: "AI/ML Basics", icon: <Brain className="text-accent" /> },
    { name: "Web Development", icon: <Globe className="text-accent" /> },
  ];

  return (
    <section id="about" className="section py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <div className="space-y-4 animate-on-scroll" style={{ transitionDelay: "200ms" }}>
              <p className="text-gray-700">
                I am a first-year Electronics and Telecommunication (EXTC) engineering student at Atharva College of Engineering. With a passion for web development and a growing interest in artificial intelligence and machine learning, I am committed to building a strong foundation in technology and innovation.
              </p>
              
              <p className="text-gray-700">
                Currently, I am honing my communication skills and enjoy connecting with tech enthusiasts to exchange ideas and insights. I believe in continuous learning and thrive in collaborative environments that foster creativity and growth.
              </p>
              
              <p className="font-medium">
                Let's connect and explore opportunities to innovate together!
              </p>
            </div>
            
            <div className="mt-8 animate-on-scroll" style={{ transitionDelay: "400ms" }}>
              <h3 className="text-xl font-medium mb-4">Education</h3>
              
              <div className="space-y-4">
                <Card className="p-4">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-primary">ACE</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Atharva College of Engineering</h4>
                      <p className="text-sm text-gray-600">Bachelor of Engineering - BE, Electronics and Communications Engineering</p>
                      <p className="text-xs text-gray-500">Oct 2024 - May 2028</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-primary">MGV</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Mahatma Gandhi Vidyamandir</h4>
                      <p className="text-sm text-gray-600">HSC, Science</p>
                      <p className="text-xs text-gray-500">Jul 2022 - Feb 2024</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-on-scroll h-full" style={{ transitionDelay: "600ms" }}>
            <Card className="p-6 h-full flex flex-col">
              <h3 className="text-xl font-medium mb-6">Skills & Expertise</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto pt-8">
                <h4 className="text-lg font-medium mb-3">Certifications</h4>
                <Card className="p-4 bg-gray-50">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
                      <CheckCircle className="text-primary" />
                    </div>
                    <div>
                      <h5 className="font-medium">Dipex (State level competition cum exhibition)</h5>
                      <p className="text-sm text-gray-600">DIPEX Official</p>
                      <p className="text-xs text-gray-500">DIPEX 2025</p>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
