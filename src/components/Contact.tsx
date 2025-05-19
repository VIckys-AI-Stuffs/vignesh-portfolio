
import React, { useState } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

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
      // Send email using EmailJS
      await emailjs.send(
        'service_mtw1nwf', // Service ID
        'template_default', // Template ID (you'll need to create this in EmailJS)
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
    <section id="contact" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-lg text-gray-700 mb-8">
              I'm always open to discussing new projects, opportunities, or partnerships. 
              Feel free to reach out to me using any of the following contact methods.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                  <Mail className="text-portfolio-secondary h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm text-portfolio-muted">Email</h3>
                  <a 
                    href="mailto:vigneshwaran.mutharasan@gmail.com" 
                    className="text-portfolio-primary hover:text-portfolio-secondary transition-colors"
                  >
                    vigneshwaran.mutharasan@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                  <Phone className="text-portfolio-secondary h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm text-portfolio-muted">Phone</h3>
                  <span className="text-portfolio-primary">8667036252</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                  <Github className="text-portfolio-secondary h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm text-portfolio-muted">GitHub</h3>
                  <a 
                    href="https://github.com/VigneshDev16" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-primary hover:text-portfolio-secondary transition-colors"
                  >
                    github.com/VigneshDev16
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                  <Linkedin className="text-portfolio-secondary h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm text-portfolio-muted">LinkedIn</h3>
                  <a 
                    href="https://linkedin.com/in/vigneshwaran-mutharasan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-primary hover:text-portfolio-secondary transition-colors"
                  >
                    linkedin.com/in/vigneshwaran-mutharasan
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <form className="bg-gray-50 p-6 rounded-lg shadow-sm" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-portfolio-secondary hover:bg-blue-600"
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
