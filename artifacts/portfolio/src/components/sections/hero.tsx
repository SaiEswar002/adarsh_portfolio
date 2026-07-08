import React from "react";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import headshot from "@assets/ChatGPT_Image_Jul_8,_2026,_12_50_49_PM_1783495259141.png";

export function HeroSection() {
  const handleScrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const about = document.getElementById("about");
    if (about) {
      const top = about.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-secondary blur-[120px]" />
        <div className="absolute bottom-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-accent blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                {profile.roleLine}
              </div>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              Hi, I'm {profile.name.split(" ")[1]} <br className="hidden md:block" />
              <span className="text-foreground/60">{profile.aspirationLine}</span>
            </motion.h1>

            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              {profile.heroSummary}
            </motion.p>

            <motion.div 
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                Let's connect
              </a>
              <a
                href={profile.resumeUrl}
                download="Annapareddy_Adarsh_Reddy_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-transparent border border-border text-foreground font-medium transition-all hover:bg-muted hover:scale-[1.02] active:scale-[0.98]"
              >
                Download Resume <Download size={18} />
              </a>
            </motion.div>
          </div>

          <motion.div 
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
              <div className="absolute inset-0 rounded-full border border-border/50 rotate-45 scale-[1.05]" />
              <div className="absolute inset-0 rounded-full border border-accent/20 -rotate-12 scale-[1.1]" />
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary/10 to-secondary/5 shadow-lg border-2 border-background overflow-hidden relative">
                <img
                  src={headshot}
                  alt="Portrait of Annapareddy Adarsh Reddy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={handleScrollToAbout}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ChevronDown className="animate-bounce" size={20} />
        </div>
      </motion.div>
    </section>
  );
}
