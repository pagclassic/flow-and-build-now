
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Github, Eye } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showContactDialog, setShowContactDialog] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    setIsSubmitting(true);
    
    // Show immediate feedback
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" />,
      label: "Email",
      value: "pratikgangurde35@gmail.com",
      link: "mailto:pratikgangurde35@gmail.com"
    },
    {
      icon: <Phone className="text-primary" />,
      label: "Phone",
      value: "+91 97667 XXXXX",
      showButton: true
    },
    {
      icon: <MapPin className="text-primary" />,
      label: "Location",
      value: "Mumbai, Maharashtra, India",
      link: "https://maps.google.com/?q=Mumbai,Maharashtra,India"
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="animate-on-scroll" style={{ transitionDelay: "200ms" }}>
            <div className="glassmorphism p-6 md:p-8 rounded-xl h-full">
              <h3 className="text-xl md:text-2xl font-medium mb-4 md:mb-6 text-center lg:text-left">Contact Information</h3>
              
              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">{item.label}</h4>
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
                        {item.link ? (
                          <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition-colors break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-foreground">{item.value}</span>
                        )}
                        {item.showButton && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setShowContactDialog(true)}
                            className="h-7 px-2 text-xs flex-shrink-0"
                          >
                            <Eye size={12} className="mr-1" />
                            Show
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <h4 className="text-lg font-medium mb-4 text-center lg:text-left">Connect With Me</h4>
              <div className="flex gap-4 justify-center lg:justify-start">
                <a 
                  href="https://github.com/PRATIKABAJIGANGURDE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-full hover:bg-primary/10 transition-colors"
                >
                  <Github size={20} className="text-foreground" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/pratik-a-gangurde/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-full hover:bg-primary/10 transition-colors"
                >
                  <Mail size={20} className="text-foreground" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll" style={{ transitionDelay: "400ms" }}>
            <form 
              action="https://formspree.io/f/mldbyrjz" 
              method="POST"
              onSubmit={handleSubmit} 
              className="glassmorphism p-6 md:p-8 rounded-xl"
            >
              <h3 className="text-xl md:text-2xl font-medium mb-4 md:mb-6 text-center lg:text-left">Send a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-secondary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-secondary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={4}
                    required
                    className="bg-secondary"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Enhanced Contact Dialog */}
      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <DialogContent className="sm:max-w-md border-0 bg-gradient-to-br from-gray-900/95 via-slate-900/95 to-gray-800/95 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 animate-pulse" />
          <div className="relative z-10">
            <DialogHeader className="text-center pb-6 pt-4">
              <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-2xl">🤔</span>
              </div>
              <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent leading-tight">
                Wait a minute!
              </DialogTitle>
            </DialogHeader>
            
            <div className="text-center space-y-6 py-6 px-2">
              <div className="text-lg text-gray-100 leading-relaxed font-medium">
                Do you really want to see his contact? He is a developer, probably he is lonely. 
                <br />
                <span className="text-gradient font-bold text-xl">Keep him lonely, no need to call! 😅</span>
              </div>
              
              <Button 
                onClick={() => setShowContactDialog(false)}
                className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-white/20"
              >
                <span className="text-lg">Understood 😔</span>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
