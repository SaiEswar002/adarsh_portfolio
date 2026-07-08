import React from "react";
import { profile } from "@/data/profile";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function ExperienceSection() {
  const { experience } = profile;

  return (
    <Section id="experience" title="Experience" className="bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          className="bg-card rounded-2xl p-6 md:p-10 border shadow-sm relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative background element */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative z-10">
            
            <div className="hidden md:flex w-16 h-16 shrink-0 rounded-xl bg-primary/5 border items-center justify-center text-primary">
              <Briefcase size={28} />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2">
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  {experience.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary/10 text-secondary text-xs font-medium">
                  <Calendar size={14} />
                  {experience.period}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-foreground/80 font-medium mb-6">
                <MapPin size={16} className="text-muted-foreground" />
                {experience.organization}
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Key Responsibilities
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {experience.responsibilities.map((task, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * idx }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-foreground/80 leading-snug">
                        {task}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
