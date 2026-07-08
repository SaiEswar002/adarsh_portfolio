import React from "react";
import { profile } from "@/data/profile";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Users, Target, Clock, MessageSquare, ListTodo, Presentation } from "lucide-react";

const ICONS = [
  Users, Target, Clock, MessageSquare, ListTodo, Presentation, Users
];

export function LeadershipSection() {
  const { leadership } = profile;

  return (
    <Section id="leadership" title="Leadership">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        <motion.div 
          className="lg:col-span-5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-secondary/10 text-secondary mb-6">
            <Users size={32} />
          </div>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            {leadership.role}
          </h3>
          <p className="text-xl text-muted-foreground font-medium mb-8">
            {leadership.organization}
          </p>
          <div className="p-6 rounded-xl bg-card border shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 w-1 h-full bg-accent" />
            <p className="text-foreground/80 leading-relaxed italic relative z-10">
              "Demonstrated reliable leadership by serving as the vital bridge between the student body and faculty, ensuring smooth academic operations and clear communication."
            </p>
          </div>
        </motion.div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {leadership.responsibilities.map((resp, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <motion.div
                key={idx}
                className="bg-card p-5 rounded-xl border hover:border-secondary/30 transition-colors flex items-start gap-4 hover:shadow-sm"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="p-2 rounded-lg bg-muted text-foreground/60 shrink-0">
                  <Icon size={20} />
                </div>
                <p className="text-sm font-medium text-foreground/90 mt-0.5 leading-snug">
                  {resp}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </Section>
  );
}
