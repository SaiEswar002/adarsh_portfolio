import React from "react";
import { profile } from "@/data/profile";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export function AchievementsSection() {
  return (
    <Section id="achievements" title="Achievements">
      <div className="max-w-4xl mx-auto">
        <p className="text-muted-foreground mb-10 font-medium">
          Demonstrated competitive excellence and team-oriented success at the Under-16 & Under-19 player levels.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {profile.achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-xl border bg-card hover:border-accent/40 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="p-3 rounded-full bg-accent/10 text-accent shrink-0">
                <Trophy size={20} />
              </div>
              
              <div>
                <h4 className="font-bold text-foreground text-lg mb-1">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground font-medium">
                  {achievement.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
