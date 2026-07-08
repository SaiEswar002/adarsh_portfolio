import React, { useEffect } from "react";
import Lenis from "lenis";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// Sections
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { QuickStatsSection } from "@/components/sections/quick-stats";
import { EducationSection } from "@/components/sections/education";
import { AcademicPerformanceSection } from "@/components/sections/academic-performance";
import { ExperienceSection } from "@/components/sections/experience";
import { LeadershipSection } from "@/components/sections/leadership";
import { RecommendationsSection } from "@/components/sections/recommendations";
import { CertificationsSection } from "@/components/sections/certifications";
import { SkillsSection } from "@/components/sections/skills";
import { AchievementsSection } from "@/components/sections/achievements";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  useEffect(() => {
    // Initialize smooth scrolling with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-secondary/30 selection:text-foreground">
        <ScrollProgress />
        <Navbar />
        
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <QuickStatsSection />
          <EducationSection />
          <AcademicPerformanceSection />
          <ExperienceSection />
          <LeadershipSection />
          <RecommendationsSection />
          <CertificationsSection />
          <SkillsSection />
          <AchievementsSection />
          <ContactSection />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}
