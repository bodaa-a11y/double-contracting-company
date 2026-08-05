import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CompanyLogo } from './CompanyLogo';
import { ArrowLeft, Building, ChevronDown, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroSectionProps {
  onOpenCallModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCallModal }) => {
  const [animationStep, setAnimationStep] = useState(0);

  const phrases = [
    'نبني المستقبل',
    'بجودة • احترافية • ثقة',
    'شركة دبل للمقاولات والتجارة العامة'
  ];

  useEffect(() => {
    // Sequentially advance text animation steps: step 0 -> step 1 -> step 2 -> step 3 (logo reveal)
    const timer1 = setTimeout(() => setAnimationStep(1), 2200);
    const timer2 = setTimeout(() => setAnimationStep(2), 4400);
    const timer3 = setTimeout(() => setAnimationStep(3), 6600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Letter split animation variant
  const letterContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      filter: 'blur(10px)',
      transition: { duration: 0.4 },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.8,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 18,
        stiffness: 120,
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#39424C]">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b2?auto=format&fit=crop&w=2000&q=90"
          alt="شركة دبل للمقاولات"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-10000"
          fetchPriority="high"
        />
        {/* Multi-layered Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#39424C] via-[#39424C]/75 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        {/* Subtle grid lines background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#116B43_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center flex flex-col items-center justify-center min-h-screen">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-[#C9A227]/40 shadow-2xl mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#C9A227] animate-spin" />
          <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
            الريادة والتميز المعماري في المقاولات العامة والتطوير العقاري
          </span>
          <span className="w-2 h-2 rounded-full bg-[#116B43] animate-ping" />
        </motion.div>

        {/* Apple-style Split-Text Animation Frame */}
        <div className="min-h-[140px] sm:min-h-[180px] flex items-center justify-center w-full my-4">
          <AnimatePresence mode="wait">
            {animationStep === 0 && (
              <motion.div
                key="phrase-0"
                variants={letterContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white font-heading tracking-tight drop-shadow-2xl flex flex-wrap justify-center gap-x-2"
              >
                {phrases[0].split(' ').map((word, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block mx-2">
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            )}

            {animationStep === 1 && (
              <motion.div
                key="phrase-1"
                variants={letterContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#C9A227] font-heading tracking-wide drop-shadow-2xl flex flex-wrap justify-center gap-x-2"
              >
                {phrases[1].split(' ').map((word, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block mx-2">
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            )}

            {animationStep === 2 && (
              <motion.div
                key="phrase-2"
                variants={letterContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white font-heading tracking-tight drop-shadow-2xl flex flex-wrap justify-center gap-x-2"
              >
                {phrases[2].split(' ').map((word, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block mx-2 text-[#116B43] bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-[#C9A227]">
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            )}

            {animationStep >= 3 && (
              <motion.div
                key="phrase-final"
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center"
              >
                {/* Reveal Official Logo with Glow */}
                <div className="relative mb-6 group">
                  <div className="absolute -inset-6 bg-gradient-to-r from-[#116B43] via-[#C9A227] to-[#116B43] rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 animate-pulse" />
                  <div className="relative bg-[#39424C]/80 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl border border-white/20 shadow-[0_0_50px_rgba(17,107,67,0.5)]">
                    <CompanyLogo variant="white" className="h-28 sm:h-36 md:h-44 w-auto" />
                  </div>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-heading tracking-tight mb-3">
                  شركة دبل للمقاولات والتجارة العامة
                </h1>

                <p className="text-base sm:text-xl text-gray-300 max-w-2xl font-medium leading-relaxed mb-8">
                  صرح معمارِي متكامل يجسد الجودة والاتقان في تنفيذ الفلل، الأبراج، والمشاريع التجارية الاستثمارية.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#projects"
                    className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#116B43] to-[#0D5233] text-white font-black text-base sm:text-lg shadow-[0_10px_30px_rgba(17,107,67,0.5)] border border-[#C9A227]/50 hover:scale-105 hover:shadow-[0_15px_40px_rgba(201,162,39,0.5)] transition-all duration-300 flex items-center gap-3 group cursor-pointer"
                  >
                    <span>استكشف المشاريع</span>
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                  </a>

                  <button
                    onClick={onOpenCallModal}
                    className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-black text-base sm:text-lg border border-white/30 hover:border-[#C9A227] shadow-xl transition-all duration-300 flex items-center gap-3 cursor-pointer"
                  >
                    <PhoneCall className="w-5 h-5 text-[#C9A227]" />
                    <span>اطلب استشارة مجانية</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Replay Text Animation Controls */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
          <button
            onClick={() => setAnimationStep(0)}
            className="hover:text-[#C9A227] transition-colors underline cursor-pointer"
          >
            إعادة تشغيل العرض السينمائي
          </button>
        </div>

        {/* Quick Highlights Badge Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl"
        >
          <div className="bg-white/5 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-right flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#116B43]/30 text-[#C9A227]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">20+ سنة خبرة</div>
              <div className="text-gray-400 text-xs">ثقة مستمرة</div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-right flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#116B43]/30 text-[#C9A227]">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">250+ مشروع منجز</div>
              <div className="text-gray-400 text-xs">جودة معتمدة</div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-right flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#116B43]/30 text-[#C9A227]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">100% تسليم بالموعد</div>
              <div className="text-gray-400 text-xs">التزام كامل</div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-right flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#116B43]/30 text-[#C9A227]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">حلول تمويلية</div>
              <div className="text-gray-400 text-xs">شراكات واسعة</div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.button
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 hover:text-white p-2 rounded-full cursor-pointer transition-colors"
          aria-label="الانتقال للأسفل"
        >
          <ChevronDown className="w-8 h-8 text-[#C9A227]" />
        </motion.button>
      </div>
    </section>
  );
};
