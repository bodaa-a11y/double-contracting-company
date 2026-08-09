import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ServiceItem } from '../types';
import { X, CheckCircle, ArrowLeft, PhoneCall, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLenis } from './LenisProvider';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenCallModal: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onOpenCallModal,
}) => {
  const lenis = useLenis();

  useEffect(() => {
    if (!service) return;
    lenis?.stop();
    return () => {
      lenis?.start();
    };
  }, [service, lenis]);

  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto" data-lenis-prevent>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#39424C] border border-[#C9A227]/40 rounded-3xl shadow-2xl text-white overflow-hidden z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer border border-white/20"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#39424C] via-[#39424C]/60 to-transparent" />
            
            <div className="absolute bottom-6 right-6 left-6 text-right">
              <span className="inline-block px-3 py-1 rounded-full bg-[#116B43] text-white text-xs font-bold mb-2 border border-[#C9A227]/50">
                شركة رؤية الريادة للمقاولات
              </span>
              <h3 className="text-3xl sm:text-4xl font-black font-heading text-white mb-1">
                {service.title}
              </h3>
              <p className="text-[#C9A227] text-sm font-semibold">
                {service.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6 text-right">
            <div>
              <h4 className="text-lg font-bold text-white mb-2 font-heading flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C9A227]" />
                <span>عن الخدمة</span>
              </h4>
              <p className="text-gray-300 text-base leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Detailed Scope */}
            <div>
              <h4 className="text-lg font-bold text-white mb-3 font-heading flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#116B43]" />
                <span>نطاق العمل والتنفيذ الهندسي</span>
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {service.detailedScope.map((scope, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#116B43] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-200 font-medium">{scope}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Tags */}
            <div>
              <h4 className="text-sm font-bold text-gray-300 mb-2 font-heading">
                المميزات الرئيسية:
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[#116B43]/20 border border-[#116B43]/50 text-[#C9A227] text-xs font-bold"
                  >
                    ✦ {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => {
                  onClose();
                  onOpenCallModal();
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#116B43] to-[#0D5233] hover:from-[#C9A227] hover:to-[#B08C1E] hover:text-[#39424C] text-white font-extrabold shadow-lg transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
              >
                <PhoneCall className="w-5 h-5" />
                <span>طلب تسعيرة أو استشارة هندسية</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 text-sm font-bold cursor-pointer"
              >
                إغلاق
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
