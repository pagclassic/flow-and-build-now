
import { useEffect } from "react";
import { CheckCircle, Code, Brain, Globe } from "lucide-react";

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
    <section id="about" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
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
                <div className="flex gap-4 p-4 rounded-lg bg-white shadow-sm">
                  <div className="h-12 w-12 flex-shrink-0">
                    <img 
                      src="public/lovable-uploads/122e74e6-7f31-4ea8-acfe-31cce26d0c0e.png" 
                      alt="Atharva College" 
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Atharva College of Engineering</h4>
                    <p className="text-sm text-gray-600">Bachelor of Engineering - BE, Electronics and Communications Engineering</p>
                    <p className="text-xs text-gray-500">Oct 2024 - May 2028</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 rounded-lg bg-white shadow-sm">
                  <div className="h-12 w-12 flex-shrink-0">
                    <img 
                      src="public/lovable-uploads/c8982e4a-4a4a-4111-8d02-747a22898cf8.png" 
                      alt="Mahatma Gandhi Vidyamandir" 
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Mahatma Gandhi Vidyamandir's Loknete Vyankatrao Hiray Arts, Science & Commerce</h4>
                    <p className="text-sm text-gray-600">HSC, Science</p>
                    <p className="text-xs text-gray-500">Jul 2022 - Feb 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-on-scroll" style={{ transitionDelay: "600ms" }}>
            <div className="bg-white rounded-xl shadow-md p-6 card-gradient">
              <h3 className="text-xl font-medium mb-6">Skills & Expertise</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-3">Certifications</h4>
                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 flex-shrink-0">
                      <img 
                        src="public/lovable-uploads/2728574f-fd94-49ea-8d5f-d8625c54c420.png" 
                        alt="DIPEX Certificate" 
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <h5 className="font-medium">Dipex (State level competition cum exhibition)</h5>
                      <p className="text-sm text-gray-600">DIPEX Official</p>
                      <p className="text-xs text-gray-500">DIPEX 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
