import React, { useRef, useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { Section } from "@/components/ui/section";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from "recharts";
import { useInView } from "react-intersection-observer";

export function AcademicPerformanceSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Slight delay to ensure the chart renders with animation after layout
    if (inView) {
      setTimeout(() => setShouldRender(true), 100);
    }
  }, [inView]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border shadow-lg rounded-lg p-3">
          <p className="font-medium text-sm text-muted-foreground mb-1">{label}</p>
          <p className="font-bold text-accent">SGPA: {payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  const CustomizedLabel = (props: any) => {
    const { x, y, value, index } = props;
    // Don't show label for first point to avoid overlap with y-axis, 
    // or adjust positioning based on the slope
    return (
      <text 
        x={x} 
        y={y - 15} 
        fill="hsl(var(--foreground))" 
        fontSize={12} 
        fontWeight={600}
        textAnchor="middle"
      >
        {value}
      </text>
    );
  };

  return (
    <Section id="academic-performance" title="Academic Performance">
      <div className="max-w-4xl mx-auto">
        <div 
          className="text-center mb-10 p-6 rounded-2xl bg-card border shadow-sm"
          ref={ref}
        >
          <p className="text-lg md:text-xl font-medium text-foreground/80 leading-relaxed font-serif italic">
            "{profile.academicPerformance.caption}"
          </p>
        </div>

        <div className="h-[400px] w-full bg-card rounded-2xl p-4 md:p-8 border shadow-sm flex items-center justify-center">
          {shouldRender ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={profile.academicPerformance.data}
                margin={{ top: 30, right: 30, left: 0, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="semester" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  domain={[6, 10]} 
                  ticks={[6, 7, 8, 9, 10]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  dx={-10}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="sgpa" 
                  stroke="hsl(var(--accent))" 
                  strokeWidth={3}
                  dot={{ r: 6, fill: "hsl(var(--background))", stroke: "hsl(var(--accent))", strokeWidth: 2 }}
                  activeDot={{ r: 8, fill: "hsl(var(--accent))", stroke: "hsl(var(--background))", strokeWidth: 2 }}
                  animationDuration={1500}
                  animationEasing="ease-in-out"
                >
                  <LabelList content={<CustomizedLabel />} />
                </Line>
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-4 border-accent border-t-transparent animate-spin" />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
