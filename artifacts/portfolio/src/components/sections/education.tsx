import React, { useRef, useEffect } from "react";
import { profile } from "@/data/profile";
import { Section } from "@/components/ui/section";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function EducationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    // Timeline line drawing animation
    gsap.fromTo(
      lineRef.current,
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      }
    );

    // Node reveals
    const nodes = gsap.utils.toArray('.edu-node') as HTMLElement[];
    nodes.forEach((node, i) => {
      gsap.fromTo(
        node,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: node,
            start: "top 80%",
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <Section id="education" title="Education" className="bg-muted/30">
      <div className="max-w-3xl mx-auto relative" ref={containerRef}>
        
        {/* Timeline Line */}
        <div className="absolute left-6 md:left-[39px] top-4 bottom-4 w-[2px] bg-border overflow-hidden rounded-full">
          <div ref={lineRef} className="w-full bg-accent origin-top" />
        </div>

        <div className="space-y-12 relative">
          {profile.education.map((edu, idx) => (
            <div key={idx} className="edu-node flex gap-6 md:gap-10 relative">
              
              {/* Timeline Icon */}
              <div className="relative z-10 shrink-0 w-12 h-12 md:w-20 md:h-20 rounded-full bg-background border-2 border-accent flex items-center justify-center shadow-sm">
                <GraduationCap className="text-accent w-5 h-5 md:w-8 md:h-8" />
              </div>
              
              {/* Content */}
              <div className="flex-1 pt-2 md:pt-4 pb-8 border-b border-border/50 last:border-0 last:pb-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-2">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground">
                    {edu.degree}
                  </h3>
                  <span className="text-sm font-medium px-3 py-1 bg-secondary/10 text-secondary rounded-full inline-block w-fit">
                    {edu.period}
                  </span>
                </div>
                
                <h4 className="text-lg text-foreground/80 font-medium mb-3">
                  {edu.institution}
                </h4>
                
                {edu.cgpa && (
                  <div className="font-semibold text-accent mb-4">
                    {edu.cgpa}
                  </div>
                )}
                
                {edu.note && (
                  <div className="p-4 bg-background rounded-lg border border-border/60 text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground block mb-1">Curriculum Note:</span>
                    {edu.note}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
