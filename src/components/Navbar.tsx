import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, Building2, ArrowLeft } from 'lucide-react';
import { CompanyLogo } from './CompanyLogo';
import { COMPANY_INFO } from '../data/companyData';
import { useLenis } from './LenisProvider';

interface NavbarProps {
  onOpenCallModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCallModal }) => {
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'hero', label: 'الرئيسية' },
    { id: 'about', label: 'من نحن' },
    { id: 'services', label: 'الخدمات' },
    { id: 'projects', label: 'المشاريع' },
    { id: 'why-us', label: 'لماذا دبل؟' },
    { id: 'contact', label: 'اتصل بنا' },
  ];

  useEffect(() => {
    if (!lenis) {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);

        // ScrollSpy
        const sections = navLinks.map((link) => document.getElementById(link.id));
        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }

    const onScroll = (e: any) => {
      const scroll = e.scroll;
      setScrolled(scroll > 50);

      // ScrollSpy
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = scroll + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    lenis.on('scroll', onScroll);
    onScroll({ scroll: lenis.scroll });

    return () => {
      lenis.off('scroll', onScroll);
    };
  }, [lenis]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element && lenis) {
      lenis.scrollTo(element, { offset: -80, duration: 1.5 });
    } else if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#39424C]/90 backdrop-blur-md py-3 shadow-2xl border-b border-white/10'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo on Right side (in RTL) */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('hero');
              }}
              className="group flex items-center gap-3 cursor-pointer"
            >
              <div className="h-12 w-12 sm:h-14 sm:w-14 p-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg group-hover:border-[#C9A227] transition-all duration-300 flex items-center justify-center">
                <CompanyLogo variant="white" showText={false} className="h-full w-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-white tracking-wide font-heading">
                  دبـــل
                </span>
                <span className="text-[10px] sm:text-xs text-[#C9A227] font-semibold tracking-wider">
                  للمقاولات والتجارة العامة
                </span>
              </div>
            </a>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/15 shadow-inner">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full cursor-pointer ${
                      isActive ? 'text-white font-bold' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-[#116B43] rounded-full -z-10 shadow-[0_0_15px_rgba(17,107,67,0.8)] border border-[#C9A227]/40"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Call Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenCallModal}
                className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-[#116B43] to-[#0D5233] text-white text-sm font-bold shadow-[0_4px_20px_rgba(17,107,67,0.4)] border border-[#C9A227]/50 hover:shadow-[0_6px_25px_rgba(201,162,39,0.5)] transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#C9A227] to-[#116B43] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Phone className="w-4 h-4 text-[#C9A227] group-hover:text-white transition-colors duration-300 relative z-10 animate-bounce" />
                <span className="relative z-10">اتصل الآن</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20 cursor-pointer"
                aria-label="القائمة"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[70px] left-0 right-0 z-30 lg:hidden bg-[#39424C]/98 backdrop-blur-2xl border-b border-[#116B43]/50 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-3 max-w-md mx-auto">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`w-full flex items-center justify-between px-5 py-3.5 rounded-xl text-right font-bold transition-all text-base ${
                    activeSection === link.id
                      ? 'bg-[#116B43] text-white border border-[#C9A227]/40 shadow-lg'
                      : 'text-gray-200 hover:bg-white/10'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowLeft className="w-4 h-4 opacity-70" />
                </button>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-[#C9A227] text-[#39424C] font-extrabold shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
