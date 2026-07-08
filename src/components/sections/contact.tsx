import React from "react";
import { profile } from "@/data/profile";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Send } from "lucide-react";

export function ContactSection() {
  return (
    <Section id="contact" title="Get in Touch" className="bg-primary text-primary-foreground border-y border-border/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Left side: Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-serif font-bold text-white mb-6">
            Let's Collaborate
          </h3>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10 max-w-md">
            {profile.contact.invite}
          </p>

          <div className="space-y-6">
            <a href={`mailto:${profile.contact.email}`} className="flex items-center gap-4 text-primary-foreground/90 hover:text-accent transition-colors group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Mail size={20} />
              </div>
              <span className="font-medium text-lg">{profile.contact.email}</span>
            </a>
            
            <a href={`tel:${profile.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 text-primary-foreground/90 hover:text-accent transition-colors group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Phone size={20} />
              </div>
              <span className="font-medium text-lg">{profile.contact.phone}</span>
            </a>
            
            <a href={`https://${profile.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-primary-foreground/90 hover:text-accent transition-colors group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Linkedin size={20} />
              </div>
              <span className="font-medium text-lg">{profile.contact.linkedin}</span>
            </a>
            
            <div className="flex items-center gap-4 text-primary-foreground/90">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <span className="font-medium text-lg">{profile.contact.address}</span>
            </div>
          </div>
        </motion.div>

        {/* Right side: Contact Form (Mailto variant) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-card text-card-foreground p-8 rounded-2xl shadow-xl">
            <h4 className="text-xl font-bold mb-6">Send a Message</h4>
            <form 
              action={`mailto:${profile.contact.email}`} 
              method="GET" 
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject" 
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                  placeholder="Opportunity / Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="body" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                <textarea 
                  id="body"
                  name="body" 
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none"
                  placeholder="Hello Adarsh, I am reaching out regarding..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-3 mt-2 rounded-md bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-sm"
              >
                Open Email Client <Send size={16} />
              </button>
              <p className="text-xs text-center text-muted-foreground mt-4">
                This will open your default email application.
              </p>
            </form>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
