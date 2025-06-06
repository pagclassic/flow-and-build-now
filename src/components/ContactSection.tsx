
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll" style={{ transitionDelay: "200ms" }}>
            <div className="glassmorphism p-8 rounded-xl h-full">
              <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-primary/10 rounded-lg">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-muted-foreground">{item.label}</h4>
                      <div className="flex items-center gap-3">
                        {item.link ? (
                          <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition-colors"
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
                            className="ml-2 h-8 px-3 text-xs"
                          >
                            <Eye size={14} className="mr-1" />
                            Show Contact
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
              <div className="flex gap-4">
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
              className="glassmorphism p-8 rounded-xl"
            >
              <h3 className="text-2xl font-medium mb-6">Send a Message</h3>
              
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
                    rows={5}
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

      {/* Contact Dialog */}
      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-card/90 to-secondary/90 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl">
          <DialogHeader className="text-center pb-4">
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Wait a minute! 🤔
            </DialogTitle>
          </DialogHeader>
          
          <div className="text-center space-y-6 py-4">
            <div className="text-lg text-foreground leading-relaxed">
              Do you really want to see his contact? He is a developer, probably he is lonely. 
              <br />
              <span className="text-primary font-semibold">Keep him lonely, no need to call! 😅</span>
            </div>
            
            <Button 
              onClick={() => setShowContactDialog(false)}
              className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Understood 😔
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
