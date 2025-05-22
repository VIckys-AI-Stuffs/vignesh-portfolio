
import React, { useState } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS with the updated template ID
      await emailjs.send(
        'service_mtw1nwf', // Service ID
        'template_aqvoa7i', // Updated Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'LifyLbGoAq9mRm96c' // Public Key
      );

      toast({
        title: "Message sent!",
        description: "Thank you for contacting me. I'll get back to you soon.",
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-portfolio-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-portfolio-secondary/5 blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-lg text-portfolio-light mb-8">
              I'm always open to discussing new projects, opportunities, or partnerships. 
              Feel free to reach out to me using any of the following contact methods.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-primary/80 w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail className="text-portfolio-secondary h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm text-portfolio-muted">Email</h3>
                  <a 
                    href="mailto:vigneshwaran.mutharasan@gmail.com" 
                    className="text-portfolio-light hover:text-portfolio-secondary transition-colors"
                  >
                    vigneshwaran.mutharasan@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-primary/80 w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone className="text-portfolio-secondary h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm text-portfolio-muted">Phone</h3>
                  <span className="text-portfolio-light">8667036252</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-primary/80 w-12 h-12 rounded-full flex items-center justify-center">
                  <Github className="text-portfolio-secondary h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm text-portfolio-muted">GitHub</h3>
                  <a 
                    href="https://github.com/VigneshDev16" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-light hover:text-portfolio-secondary transition-colors"
                  >
                    github.com/VigneshDev16
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-primary/80 w-12 h-12 rounded-full flex items-center justify-center">
                  <Linkedin className="text-portfolio-secondary h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm text-portfolio-muted">LinkedIn</h3>
                  <a 
                    href="https://linkedin.com/in/vigneshwaran-mutharasan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-light hover:text-portfolio-secondary transition-colors"
                  >
                    linkedin.com/in/vigneshwaran-mutharasan
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <form className="glass-card p-6 rounded-lg" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-portfolio-light mb-1">
                  Your Name
                </label>
                <Input 
                  type="text" 
                  id="name" 
                  className="bg-portfolio-primary/30 border-portfolio-secondary/20 text-portfolio-light focus:border-portfolio-secondary" 
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-portfolio-light mb-1">
                  Email Address
                </label>
                <Input 
                  type="email" 
                  id="email" 
                  className="bg-portfolio-primary/30 border-portfolio-secondary/20 text-portfolio-light focus:border-portfolio-secondary" 
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-portfolio-light mb-1">
                  Subject
                </label>
                <Input 
                  type="text" 
                  id="subject" 
                  className="bg-portfolio-primary/30 border-portfolio-secondary/20 text-portfolio-light focus:border-portfolio-secondary" 
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-light mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  rows={4} 
                  className="bg-portfolio-primary/30 border-portfolio-secondary/20 text-portfolio-light focus:border-portfolio-secondary resize-none" 
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-portfolio-secondary hover:bg-blue-600 text-portfolio-dark font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
