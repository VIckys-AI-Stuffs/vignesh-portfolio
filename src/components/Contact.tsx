import React, { useState } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Reveal from "./ui/Reveal";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_mtw1nwf',
        'template_aqvoa7i',
        { from_name: formData.name, from_email: formData.email, subject: formData.subject, message: formData.message },
        'LifyLbGoAq9mRm96c'
      );
      toast({ title: "Message sent!", description: "Thank you for contacting me. I'll get back to you soon." });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({ title: "Failed to send message", description: "There was an error sending your message. Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contacts = [
    { icon: <Mail className="text-portfolio-secondary h-5 w-5" />, label: "Email", value: "vigneshwaran.mutharasan@gmail.com", href: "mailto:vigneshwaran.mutharasan@gmail.com" },
    { icon: <Phone className="text-portfolio-secondary h-5 w-5" />, label: "Phone", value: "8667036252" },
    { icon: <Github className="text-portfolio-secondary h-5 w-5" />, label: "GitHub", value: "github.com/VigneshDev16", href: "https://github.com/VigneshDev16" },
    { icon: <Linkedin className="text-portfolio-secondary h-5 w-5" />, label: "LinkedIn", value: "linkedin.com/in/vigneshwaran-mutharasan", href: "https://linkedin.com/in/vigneshwaran-mutharasan" },
  ];

  const inputCls = "bg-white/[0.03] border-portfolio-secondary/20 text-portfolio-light focus:border-portfolio-secondary";

  return (
    <section id="contact" className="bg-transparent relative overflow-hidden">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title">Let&apos;s <span className="gradient-text">build</span> something</h2>
        </Reveal>

        <div className="flex flex-col md:flex-row gap-10 mt-8">
          <Reveal className="md:w-1/2 flex flex-col justify-center">
            <p className="text-lg text-portfolio-light/80 mb-8 leading-relaxed">
              I&apos;m always open to discussing new projects, senior roles, or freelance work.
              Reach out through any of the channels below — I usually reply within a day.
            </p>
            <div className="space-y-4">
              {contacts.map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(125,93,255,0.1)", border: "1px solid rgba(125,93,255,0.2)" }}>
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="text-xs text-portfolio-secondary uppercase tracking-wide">{c.label}</h3>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-portfolio-light hover:text-portfolio-secondary transition-colors break-all">{c.value}</a>
                    ) : (
                      <span className="text-portfolio-light">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="md:w-1/2" delay={0.1}>
            <form className="panel p-6 md:p-7 rounded-2xl" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-portfolio-light mb-1">Your Name</label>
                <Input type="text" id="name" className={inputCls} placeholder="John Doe" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-portfolio-light mb-1">Email Address</label>
                <Input type="email" id="email" className={inputCls} placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-portfolio-light mb-1">Subject</label>
                <Input type="text" id="subject" className={inputCls} placeholder="Project Inquiry" value={formData.subject} onChange={handleChange} required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-light mb-1">Message</label>
                <Textarea id="message" rows={4} className={`${inputCls} resize-none`} placeholder="Your message here..." value={formData.message} onChange={handleChange} required />
              </div>
              <Button type="submit" className="w-full bg-portfolio-secondary hover:bg-[#6b4ce0] text-white font-medium" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
