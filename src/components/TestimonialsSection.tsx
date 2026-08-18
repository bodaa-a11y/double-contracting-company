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
            <span>آراء العملاء الحقيقية من موثقي جوجل</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-[#39424C] font-heading tracking-tight"
          >
            تقييمات وثقة عملاء شركة رؤية الريادة على الخريطة
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg font-medium"
          >
            آراء وانطباعات حقيقية وموثقة 100% لعملائنا الكرام من حسابنا الرسمي على مراجعات خرائط جوجل (Google Maps).
          </motion.p>
        </div>

        {/* Testimonials Cards Grid (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={test.avatar}
                      alt={test.name}
                      className="w-12 h-12 rounded-full border-2 border-[#116B43]/30 object-cover shadow-md"
                    />
                    <div>
                      <div className="font-extrabold text-[#39424C] text-lg font-heading">{test.name}</div>
                      <div className="text-xs text-[#116B43] font-bold">{test.company}</div>
                    </div>
                  </div>

                  {/* Stars Rating */}
                  <div className="flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C9A227] text-[#C9A227]" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 text-base leading-relaxed font-medium mb-4 bg-gray-50/70 p-4 rounded-2xl border border-gray-100">
                  "{test.comment}"
                </p>

                {/* Owner Reply Box */}
                {test.ownerReply && (
                  <div className="mt-4 p-4 rounded-2xl bg-[#116B43]/10 border border-[#116B43]/20 text-xs">
                    <div className="font-black text-[#116B43] mb-1 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#116B43]" />
                      <span>رد شركة رؤية الريادة للمقاولات (المالك):</span>
                    </div>
                    <p className="text-gray-800 font-bold">{test.ownerReply}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
