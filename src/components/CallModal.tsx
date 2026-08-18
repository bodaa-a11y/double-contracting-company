import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, PhoneCall, MessageCircle, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLenis } from './LenisProvider';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallModal: React.FC<CallModalProps> = ({ isOpen, onClose }) => {
  const lenis = useLenis();

  useEffect(() => {
    if (!isOpen) return;
    lenis?.stop();
    return () => {
      lenis?.start();
    };
  }, [isOpen, lenis]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto" data-lenis-prevent>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-[#39424C] border border-[#C9A227]/50 rounded-3xl p-6 sm:p-8 text-white shadow-2xl z-10 text-right space-y-6"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="text-center space-y-2 pt-2">
            <div className="w-16 h-16 rounded-full bg-[#116B43] text-[#C9A227] flex items-center justify-center mx-auto shadow-xl border border-[#C9A227]/40">
              <PhoneCall className="w-8 h-8 animate-pulse" />
            </div>
            <h3 className="text-2xl font-black font-heading text-white">
              تواصل مباشر مع شركة رؤية الريادة للمقاولات والتطوير العقاري
            </h3>
            <p className="text-xs text-gray-300 font-medium">
              اختر الوسيلة المناسبة للتواصل مع فريق الاستشارات الهندسية والمبيعات
            </p>
          </div>

          {/* Phone Numbers List */}
          <div className="space-y-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="p-4 rounded-2xl bg-white/10 hover:bg-[#116B43] border border-white/15 hover:border-[#C9A227] transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <div className="p-3 rounded-xl bg-white/10 text-[#C9A227] group-hover:bg-white group-hover:text-[#116B43]">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="text-right">
                <div dir="ltr" className="text-lg font-black text-white font-heading inline-block">{COMPANY_INFO.phoneDisplay}</div>
              </div>
            </a>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                'السلام عليكم، أود الاستفسار عن خدمات شركة رؤية الريادة للمقاولات والتطوير العقاري'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl bg-[#25D366]/20 hover:bg-[#25D366] border border-[#25D366]/50 transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <div className="p-3 rounded-xl bg-[#25D366] text-white">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-200 group-hover:text-white font-bold">واتساب فوري</div>
                <div className="text-base font-black text-white font-heading">محادثة مباشرة مع المستشار الهندسِي</div>
              </div>
            </a>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
            <span>فريقنا متواجد لخدمتكم من الأحد إلى الخميس (8:00 ص - 5:00 م)</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
