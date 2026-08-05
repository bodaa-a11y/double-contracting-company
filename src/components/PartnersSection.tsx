import React from 'react';
import { motion } from 'motion/react';
import { PARTNERS } from '../data/companyData';
import { Handshake } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  // Duplicate array for seamless infinite marquee loop
  const marqueePartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="py-20 bg-[#39424C] text-white relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#C9A227] text-sm font-extrabold border border-[#C9A227]/30 mb-3"
        >
          <Handshake className="w-4 h-4" />
          <span>شركاء النجاح والاعتمادات</span>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl font-black font-heading text-white">
          نعتزُ بشراكاتنا الاستراتيجية مع كبرى الوزارات والشركات
        </h2>
      </div>

      {/* Infinite Horizontal Marquee Track */}
      <div className="relative w-full overflow-hidden flex items-center py-4">
        {/* Vignette Gradients on edges */}
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#39424C] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#39424C] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-6 min-w-max"
        >
          {marqueePartners.map((partner, idx) => (
            <div
              key={`${partner.id}-${idx}`}
              className="px-6 py-4 rounded-2xl glass-panel-dark border border-white/15 hover:border-[#C9A227] shadow-xl flex items-center gap-4 transition-all hover:scale-105"
            >
              <div className="text-3xl p-2 rounded-xl bg-white/10">{partner.logo}</div>
              <div className="text-right">
                <div className="text-sm font-black text-white">{partner.name}</div>
                <div className="text-xs text-[#C9A227] font-semibold">{partner.category}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
