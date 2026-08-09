import React from 'react';
import { motion } from 'motion/react';
import { VALUES } from '../data/companyData';
import { ShieldCheck, Sparkles, UserCheck, CheckSquare, Target, Clock, Award } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#C9A227]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#C9A227]" />,
  UserCheck: <UserCheck className="w-6 h-6 text-[#C9A227]" />,
  CheckSquare: <CheckSquare className="w-6 h-6 text-[#C9A227]" />,
  Target: <Target className="w-6 h-6 text-[#C9A227]" />,
  Clock: <Clock className="w-6 h-6 text-[#C9A227]" />,
};

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-[#F5F7F8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#116B43]/10 text-[#116B43] text-sm font-extrabold border border-[#116B43]/20"
          >
            <Award className="w-4 h-4 text-[#C9A227]" />
            <span>لماذا تختار شركة رؤية الريادة؟</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-[#39424C] font-heading tracking-tight"
          >
            ركائز أساسية تبني ثقتكم بنا وتضمن النجاح المستدام
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg font-medium"
          >
            قيم عمل راسخة تقود كل خطوة في مشاريعنا بدءاً من التخطيط الأولي وحتى التسليم النهائي.
          </motion.p>
        </div>

        {/* Staggered Grid Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUES.map((val, index) => (
            <motion.div
              key={val.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl hover:border-[#116B43] hover:shadow-2xl transition-all duration-300 relative group overflow-hidden text-right flex flex-col justify-between"
            >
              {/* Top Step Number Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-[#116B43]/10 border border-[#116B43]/20 group-hover:bg-[#116B43] group-hover:text-white transition-colors duration-300">
                  {iconMap[val.icon] || <ShieldCheck className="w-6 h-6 text-[#C9A227]" />}
                </div>
                <span className="text-3xl font-black text-gray-300 font-heading group-hover:text-[#C9A227] transition-colors">
                  {val.stepNumber}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#39424C] font-heading mb-3 group-hover:text-[#116B43] transition-colors">
                  {val.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  {val.description}
                </p>
              </div>

              {/* Bottom Accent Bar */}
              <div className="mt-6 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#116B43] to-[#C9A227] w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
