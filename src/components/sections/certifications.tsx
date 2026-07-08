import React from "react";
import { profile } from "@/data/profile";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export function CertificationsSection() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profile.certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            className="group relative p-6 rounded-2xl bg-card border hover:border-accent/50 hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
          >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all">
              <Award className="text-accent/30 w-16 h-16" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full justify-between gap-4">
              <h4 className="font-medium text-foreground/90 leading-snug group-hover:text-accent transition-colors">
                {cert.name}
              </h4>
              
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span>{cert.issuer}</span>
                <span className="px-2 py-1 rounded bg-muted text-foreground/70">
                  {cert.year}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
