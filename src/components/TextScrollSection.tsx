import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { TEXT_SCROLL_ITEMS } from '../data/companyData';
import { Sparkles, ArrowLeft, Building2 } from 'lucide-react';

export const TextScrollSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], ['10%', '-30%']);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-[#39424C] text-white overflow-hidden border-y border-[#116B43]/30"
    >
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#116B43]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-[#C9A227]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#116B43]/30 text-[#C9A227] text-sm font-extrabold border border-[#C9A227]/30 mb-4"
        >
          <Building2 className="w-4 h-4" />
          <span>تطوير وإنجاز لا يحدّه أفق</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black font-heading tracking-tight mb-4 text-white"
        >
          رؤية معمارية تشمل كافة القطاعات الإنشائية
        </motion.h2>

        <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg font-medium">
          مرّر واستكشف النماذج المعمارية والقطاعات الرئيسية التي نبنيها بأعلى درجات الاحترافية والتطور الهيكلي.
        </p>
      </div>

      {/* Animated Horizontal Track Showcase */}
      <motion.div style={{ opacity: opacityTransform }} className="w-full overflow-x-auto no-scrollbar py-6">
        <motion.div style={{ x: xTransform }} className="flex items-stretch gap-6 px-8 min-w-max">
          {TEXT_SCROLL_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="w-80 sm:w-96 rounded-3xl overflow-hidden glass-panel-dark border border-white/15 hover:border-[#C9A227]/60 shadow-2xl transition-all duration-500 group flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#39424C] via-[#39424C]/40 to-transparent" />

                <div className="absolute top-4 right-4 bg-[#116B43]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-white border border-[#C9A227]/50 shadow-lg">
                  {item.sub}
                </div>
              </div>

              <div className="p-6 text-right flex-1 flex flex-col justify-between bg-[#39424C]/90">
                <div>
                  <h3 className="text-2xl font-black text-white font-heading mb-2 group-hover:text-[#C9A227] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium">
                    {item.desc}
                  </p>
                </div>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 text-[#C9A227] hover:text-white font-extrabold text-sm group/btn cursor-pointer"
                >
                  <span>استعرض المشاريع المنجزة</span>
                  <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
