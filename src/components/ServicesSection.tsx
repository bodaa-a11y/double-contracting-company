import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/companyData';
import { ServiceItem } from '../types';
import {
  Building2,
  Home,
  Building,
  TrendingUp,
  Sparkles,
  Briefcase,
  HardHat,
  Truck,
  ArrowLeft,
  CheckCircle,
  X
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-8 h-8" />,
  Home: <Home className="w-8 h-8" />,
  Building: <Building className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
  Sparkles: <Sparkles className="w-8 h-8" />,
  Briefcase: <Briefcase className="w-8 h-8" />,
  HardHat: <HardHat className="w-8 h-8" />,
  Truck: <Truck className="w-8 h-8" />,
};

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-[#39424C] text-white relative overflow-hidden">
      {/* Background Lighting Effects */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#116B43]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#C9A227] text-sm font-extrabold border border-[#C9A227]/30"
          >
            <Sparkles className="w-4 h-4" />
            <span>خدماتنا المتخصصة</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white"
          >
            منظومة خدمات هندسية وإنشائية فاخرة ومتكاملة
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg font-medium leading-relaxed"
          >
            نقدم حلولاً احترافية تشمل جميع مراحل التخطيط والتنفيذ لمشاريعك بأسلوب عصري يضمن المتانة والجمال المعماري.
          </motion.p>
        </div>

        {/* Services Grid (8 Luxury Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => onSelectService(service)}
              className="group relative rounded-3xl overflow-hidden glass-panel-dark border border-white/15 hover:border-[#C9A227]/70 shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              {/* Shimmer Glowing Gradient Top Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#39424C] via-[#39424C]/60 to-transparent" />

                {service.badge && (
                  <div className="absolute top-4 right-4 bg-[#116B43] text-white text-xs font-bold px-3 py-1 rounded-full border border-[#C9A227]/50 shadow-lg">
                    {service.badge}
                  </div>
                )}

                {/* Floating Icon Box */}
                <div className="absolute -bottom-6 right-6 p-3.5 rounded-2xl bg-[#39424C] border border-[#C9A227]/50 text-[#C9A227] shadow-2xl group-hover:bg-[#116B43] group-hover:text-white transition-all duration-300">
                  {iconMap[service.iconName] || <Building2 className="w-8 h-8" />}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-10 text-right flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-white font-heading mb-2 group-hover:text-[#C9A227] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#C9A227] text-xs font-bold mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-gray-300 group-hover:text-white">
                  <span className="group-hover:translate-x-1 transition-transform duration-300 text-[#C9A227]">
                    التفاصيل ونطاق العمل
                  </span>
                  <div className="p-2 rounded-full bg-white/10 group-hover:bg-[#116B43] transition-colors">
                    <ArrowLeft className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
