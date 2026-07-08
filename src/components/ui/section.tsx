import React from "react";
import { motion } from "framer-motion";

export const Section = ({ 
  id, 
  title, 
  children, 
  className = "", 
  containerClass = "container mx-auto px-4 md:px-6"
}: { 
  id: string; 
  title?: string; 
  children: React.ReactNode; 
  className?: string;
  containerClass?: string;
}) => {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <div className={containerClass}>
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 flex items-center gap-4"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              {title}
            </h2>
            <div className="h-[2px] flex-1 max-w-[100px] bg-accent/40" />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};
