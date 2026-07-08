import React from "react";
import { profile } from "@/data/profile";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills & Expertise" className="bg-muted/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {profile.skills.map((skillGroup, idx) => (
          <motion.div
            key={idx}
            className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-3">
              <div className="w-2 h-6 bg-secondary rounded-full" />
              {skillGroup.category}
            </h3>
            
            <div className="flex flex-wrap gap-2 md:gap-3">
              {skillGroup.items.map((item, itemIdx) => (
                <span
                  key={itemIdx}
                  className="px-4 py-2 bg-background border text-sm font-medium rounded-lg hover:border-secondary hover:text-secondary transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
