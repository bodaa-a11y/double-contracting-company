import React from 'react';
import { CompanyLogo } from './CompanyLogo';
import { COMPANY_INFO, SERVICES } from '../data/companyData';
import { Phone, Mail, MapPin, ArrowUp, Linkedin, Twitter, Facebook } from 'lucide-react';

const TiktokIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2B323A] text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10 text-right">
          
          {/* Column 1: Large Logo & Brief (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-16 w-16 p-1 rounded-2xl bg-white border border-[#116B43]/50 shadow-[0_0_15px_rgba(17,107,67,0.5)] flex items-center justify-center">
                <CompanyLogo variant="full" showText={false} className="h-full w-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white font-heading">شركة رؤية الريادة</span>
                <span className="text-xs text-[#C9A227] font-bold">للمقاولات والتطوير العقاري</span>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed font-medium">
              {COMPANY_INFO.shortDesc}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-white/10 hover:bg-[#116B43] text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={COMPANY_INFO.social.twitter} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-white/10 hover:bg-[#116B43] text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={COMPANY_INFO.social.tiktok} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-white/10 hover:bg-[#116B43] text-white transition-colors" aria-label="TikTok">
                <TiktokIcon className="w-5 h-5" />
              </a>
              <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-white/10 hover:bg-[#116B43] text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-base font-extrabold text-[#C9A227] font-heading mb-4">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-gray-300">
              <li><a href="#hero" className="hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">خدماتنا</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">المشاريع</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">لماذا رؤية الريادة؟</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-extrabold text-[#C9A227] font-heading mb-4">
              مجالات الاختصاص
            </h4>
            <ul className="space-y-2 text-xs font-medium text-gray-300">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id} className="hover:text-white transition-colors">
                  • {service.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs text-gray-300">
            <h4 className="text-base font-extrabold text-[#C9A227] font-heading mb-4">
              معلومات الاتصال
            </h4>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#116B43]" />
              <span className="dir-ltr">{COMPANY_INFO.phone}</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#116B43]" />
              <span className="dir-ltr">{COMPANY_INFO.email}</span>
            </p>
            <p className="flex items-start gap-2 leading-relaxed">
              <MapPin className="w-4 h-4 text-[#116B43] flex-shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}</span>
            </p>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 شركة رؤية الريادة للمقاولات والتطوير العقاري. جميع الحقوق محفوظة.</p>
          
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/10 hover:bg-[#116B43] text-white transition-colors cursor-pointer flex items-center gap-1 text-xs font-bold"
          >
            <span>أعلى الصفحة</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
