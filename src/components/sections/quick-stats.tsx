import React from "react";
import { profile } from "@/data/profile";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export function QuickStatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-12 bg-primary text-primary-foreground border-y border-border/10">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 divide-x divide-primary-foreground/10"
        >
          {profile.quickStats.map((stat, idx) => (
            <div 
              key={stat.label} 
              className={`flex flex-col items-center text-center px-4 ${idx % 2 === 0 ? "pl-0 lg:px-4" : ""} ${idx === 0 ? "pl-0 lg:pl-0" : ""}`}
            >
              <div className="font-serif text-4xl font-bold text-accent mb-2">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    decimals={stat.decimals}
                    duration={2.5}
                    separator=","
                    useEasing={true}
                  />
                ) : (
                  "0"
                )}
                {stat.suffix}
              </div>
              <div className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
