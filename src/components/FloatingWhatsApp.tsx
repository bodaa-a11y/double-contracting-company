import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
    'السلام عليكم، أود الاستفسار عن خدمات شركة رؤية الريادة للمقاولات والتطوير العقاري'
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-40 p-4 rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.5)] border-2 border-white flex items-center justify-center group cursor-pointer"
      aria-label="تواصل معنا عبر واتساب"
    >
      <div className="absolute -inset-2 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
      <MessageCircle className="w-7 h-7 fill-white text-[#25D366] relative z-10" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-bold text-white px-0 group-hover:px-2">
        محادثة واتساب مباشرة
      </span>
    </motion.a>
  );
};
