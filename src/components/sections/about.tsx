import React from "react";
import { profile } from "@/data/profile";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import headshot from "@assets/ChatGPT_Image_Jul_8,_2026,_12_50_49_PM_1783495259141.png";

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Section id="about" title="About">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        <motion.div 
          className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-2xl bg-muted overflow-hidden">
            <img
              src={headshot}
              alt="Portrait of Annapareddy Adarsh Reddy"
              className="w-full h-full object-cover"
            />

            {/* Decorative accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-accent/20 rounded-bl-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-1 border-b-4 border-l-4 border-secondary/30 rounded-bl-xl" />
          </div>
        </motion.div>

        {/* Narrative */}
        <div className="md:col-span-7 lg:col-span-8 flex flex-col">
          <motion.div 
            className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-p:text-muted-foreground prose-p:leading-relaxed max-w-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-foreground font-medium mb-6">
              I am a Bachelor of Business Administration graduate from Woxsen University, specializing in Entrepreneurship Development.
            </p>
            <p>
              My academic journey has been defined by a rigorous focus on business strategy and applied research. I have built a strong foundation in entrepreneurial finance, research methodology, and corporate social responsibility (CSR) & sustainability coursework.
            </p>
            <p>
              Beyond coursework, I demonstrated leadership as a Class Representative for the School of Business, managing class administration and coordinating cross-functionally between students and faculty. My capability for structured problem-solving was further developed through comprehensive capstone and dissertation research projects, integrating theoretical knowledge with practical business challenges.
            </p>
          </motion.div>

          {/* Tags */}
          <motion.div 
            className="mt-10 flex flex-wrap gap-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {profile.aboutTags.map((tag) => (
              <motion.span 
                key={tag}
                variants={itemVariants}
                className="px-4 py-2 rounded-md bg-background border text-sm font-medium text-foreground/80 hover:border-secondary hover:text-secondary transition-colors"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
