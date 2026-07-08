import React from "react";
import { profile } from "@/data/profile";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Quote, FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

export function RecommendationsSection() {
  return (
    <Section id="recommendations" title="Recommendations" className="bg-primary text-primary-foreground">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        {profile.recommendations.map((rec, idx) => (
          <motion.div
            key={idx}
            className="bg-card text-card-foreground p-8 rounded-2xl relative flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <Quote className="absolute top-6 right-6 w-12 h-12 text-muted opacity-50" />
            
            <div className="mb-6 relative z-10 pt-2">
              <p className="text-lg leading-relaxed text-foreground/90 italic">
                "{rec.summary}"
              </p>
            </div>
            
            <div className="mt-auto pt-8 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-serif font-bold text-lg">
                  {rec.name.split(" ")[1]?.[0] || rec.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{rec.name}</h4>
                  <p className="text-sm text-muted-foreground">{rec.title}</p>
                </div>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 shrink-0 px-3 py-2 rounded-md border border-border text-xs font-medium text-foreground/80 hover:border-secondary hover:text-secondary transition-colors"
                  >
                    <FileText size={14} />
                    View Letter
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="font-serif">
                      Letter of Recommendation — {rec.name}
                    </DialogTitle>
                    <DialogDescription>
                      {rec.title} · {rec.letterDate}
                    </DialogDescription>
                  </DialogHeader>
                  <img
                    src={rec.letterImage}
                    alt={`Scanned letter of recommendation for Annapareddy Adarsh Reddy from ${rec.name}`}
                    className="w-full rounded-md border border-border"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
