import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS } from '../data/companyData';
import { CheckCircle2, Users, Award, HardHat, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  CheckCircle2: <CheckCircle2 className="w-8 h-8 text-[#C9A227]" />,
  Users: <Users className="w-8 h-8 text-[#C9A227]" />,
  Award: <Award className="w-8 h-8 text-[#C9A227]" />,
  HardHat: <HardHat className="w-8 h-8 text-[#C9A227]" />,
};

interface CounterProps {
  end: number;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const updateCounter = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const easeOutQuad = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutQuad * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return <span ref={nodeRef}>{count}</span>;
};

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#39424C] text-white relative overflow-hidden border-y border-[#C9A227]/30">
      {/* Glow Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(#116B43_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl glass-panel-dark border border-white/15 hover:border-[#C9A227] shadow-2xl text-center relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#116B43]/20 rounded-bl-full pointer-events-none" />

              {/* Icon */}
              <div className="inline-flex p-4 rounded-2xl bg-[#116B43]/30 border border-[#C9A227]/40 mb-4 group-hover:scale-110 transition-transform duration-300">
                {iconMap[stat.icon] || <Sparkles className="w-8 h-8 text-[#C9A227]" />}
              </div>

              {/* Number */}
              <div className="text-4xl sm:text-5xl font-black font-heading text-white mb-2 flex items-center justify-center gap-1">
                <AnimatedCounter end={stat.number} />
                <span className="text-[#C9A227]">{stat.suffix}</span>
              </div>

              {/* Label */}
              <h3 className="text-xl font-bold text-gray-100 font-heading mb-1">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-xs font-medium">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
