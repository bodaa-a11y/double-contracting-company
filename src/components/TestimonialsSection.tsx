import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/companyData';
import { Star, Quote, MessageSquare } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F5F7F8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#116B43]/10 text-[#116B43] text-sm font-extrabold border border-[#116B43]/20"
          >
            <MessageSquare className="w-4 h-4 text-[#C9A227]" />
            <span>آراء العملاء والشركاء</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-[#39424C] font-heading tracking-tight"
          >
            شهادات نعتزُ بها من قادة الأعمال وكبار المستثمرين
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg font-medium"
          >
            الانطباعات الصادقة لشركائنا تعكس مدى التزام شركة رؤية الريادة بأعلى معايير الإنجاز والجودة الميدانية.
          </motion.p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl hover:border-[#116B43] hover:shadow-2xl transition-all duration-300 relative text-right flex flex-col justify-between"
            >
              <div className="mb-6">
                <Quote className="w-10 h-10 text-[#116B43]/20 mb-4" />

                {/* Stars Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C9A227] text-[#C9A227]" />
                  ))}
                </div>

                <p className="text-gray-700 text-base leading-relaxed font-medium italic">
                  "{test.comment}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#116B43]"
                  loading="lazy"
                />
                <div className="text-right">
                  <div className="font-extrabold text-[#39424C] text-lg font-heading">{test.name}</div>
                  <div className="text-xs text-[#116B43] font-bold">{test.role} - {test.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
