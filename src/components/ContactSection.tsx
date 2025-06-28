import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ContactSection = () => {
  const { toast } = useToast();
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: <Mail size={20} className="text-primary" />,
      label: "Email",
      value: "pratikabajigangurde@gmail.com",
      link: "mailto:pratikabajigangurde@gmail.com",
      showButton: false,
    },
    {
      icon: <Phone size={20} className="text-primary" />,
      label: "Phone",
      value: "+91 98*****687",
      showButton: true,
    },
    {
      icon: <MapPin size={20} className="text-primary" />,
      label: "Location",
      value: "Maharashtra, India",
      showButton: false,
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Let Formspree handle the actual submission
    const form = e.target as HTMLFormElement;
    const formData2 = new FormData(form);
    
    fetch(form.action, {
      method: form.method,
      body: formData2,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        console.log('Form submitted successfully');
      } else {
        console.log('Form submission failed');
      }
    }).catch(error => {
      console.error('Form submission error:', error);
    });
  };

  return (
    <>
      <section id="contact" className="section bg-background">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="animate-on-scroll" style={{ transitionDelay: "200ms" }}>
              <div className="glassmorphism p-6 md:p-8 rounded-b-xl rounded-tr-xl h-full">
                <h3 className="text-xl md:text-2xl font-medium mb-4 md:mb-6 text-center lg:text-left">Contact Information</h3>
                
                {contactInfo.map((item, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      {item.icon}
                      <span className="font-medium">{item.label}:</span>
                    </div>
                    <p className="text-sm">
                      {item.link ? (
                        <a href={item.link} className="text-accent hover:underline">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </p>
                    {item.showButton && (
                      <Button variant="secondary" size="sm" className="mt-2" onClick={() => setShowContactDialog(true)}>
                        Show Contact
                      </Button>
                    )}
                  </div>
                ))}
                
                <h4 className="text-lg font-medium mb-4 text-center lg:text-left">Connect With Me</h4>
                <div className="flex gap-4 justify-center lg:justify-start">
                  <a 
                    href="https://github.com/PRATIKABAJIGANGURDE" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/pratikabaji-gangurde" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll" style={{ transitionDelay: "400ms" }}>
              <form 
                action="https://formspree.io/f/mldbyrjz" 
                method="POST"
                onSubmit={handleSubmit} 
                className="glassmorphism p-6 md:p-8 rounded-b-xl rounded-tl-xl"
              >
                <h3 className="text-xl md:text-2xl font-medium mb-4 md:mb-6 text-center lg:text-left">Send a Message</h3>
                
                <Input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                  className="mb-4"
                  value={formData.name}
                  onChange={handleChange}
                />
                <Input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                  className="mb-4"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Textarea 
                  name="message" 
                  placeholder="Your Message" 
                  required 
                  className="mb-6"
                  value={formData.message}
                  onChange={handleChange}
                />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contact Information</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4 py-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <Phone size={24} className="text-primary" />
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Phone Number</p>
              <p className="text-lg font-medium">+91 9860767687</p>
            </div>
            <Button
              onClick={() => {
                navigator.clipboard.writeText("+91 9860767687");
                toast({
                  title: "Copied to clipboard!",
                  description: "Phone number has been copied to your clipboard.",
                });
              }}
              className="w-full"
            >
              Copy Phone Number
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactSection;
