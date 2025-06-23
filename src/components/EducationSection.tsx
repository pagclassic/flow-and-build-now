import { useEffect } from "react";
import { Card } from "@/components/ui/card";
const EducationSection = () => {
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
  const educations = [{
    school: "Atharva College of Engineering",
    degree: "Bachelor of Engineering - BE, Electronics and Communications Engineering",
    duration: "Oct 2024 - May 2028",
    logo: "ACE"
  }, {
    school: "Mahatma Gandhi Vidyamandir",
    degree: "HSC, Science",
    duration: "Jul 2022 - Feb 2024",
    logo: "MGV"
  }];
  return <section id="education" className="section py-24 bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll">
          My <span className="text-gradient">Education</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((education, index) => <div key={index} className="animate-on-scroll" style={{
          transitionDelay: `${200 * index}ms`
        }}>
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="flex gap-4">
                  <div className="h-16 w-16 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary text-xl">{education.logo}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-xl">{education.school}</h4>
                    <p className="text-md text-gray-600 mt-1">{education.degree}</p>
                    <p className="text-sm text-gray-500 mt-2">{education.duration}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border/30">
                  <ul className="text-sm space-y-2 text-gray-600">
                    {index === 0 ? <>
                        <li>• Second-year student focusing on electronics and telecommunications</li>
                        <li>• Exploring IoT and Embedded system</li>
                      </> : <>
                        <li>• Completed HSC with focus on science subjects</li>
                        <li>• Participated in various technical exhibitions</li>
                      </>}
                  </ul>
                </div>
              </Card>
            </div>)}
        </div>
      </div>
    </section>;
};
export default EducationSection;