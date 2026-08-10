import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  FileText,
  Download,
  BookOpen,
  Award,
  Compass,
  Heart,
  CheckCircle2,
  Building2,
  ExternalLink,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { useLenis } from './LenisProvider';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const lenis = useLenis();
  const [activeTab, setActiveTab] = useState<'browse' | 'pdf'>('browse');
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    lenis?.stop();
    return () => {
      lenis?.start();
    };
  }, [isOpen, lenis]);

  if (!isOpen) return null;

  // Data representing the key pages of the profile for the interactive quick-browse view
  const slides = [
    {
      title: 'من نحن',
      subtitle: 'الريادة والتميز الإنشائي',
      icon: <Building2 className="w-8 h-8 text-[#C9A227]" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-200 text-base leading-relaxed">
            شركة <strong>رؤية الريادة للمقاولات</strong> هي واحدة من الشركات السعودية الرائدة في المجالات المتعلقة بالمقاولات والأعمال الهندسية.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            نتميز بتوفير طيف واسع من الخدمات الهندسية التخصصية الموثوقة التي تواكب التطورات الحديثة لتحقيق المتطلبات المتغيرة للقطاعات المختلفة، من خلال تقديم حلول عقارية إبداعية وبطرق مبتكرة وغير تقليدية تلبي احتياجات العملاء وتتجاوز توقعاتهم.
          </p>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-400">
            • نبني استراتيجية ثابتة تنطلق من إنتقاء أجود خامات البناء والتشطيب وإعتماد المعايير الأكثر دقة وصرامة في التنفيذ.
          </div>
        </div>
      )
    },
    {
      title: 'رؤيتنا ورسالتنا',
      subtitle: 'بناء المستقبل برؤية 2030',
      icon: <Compass className="w-8 h-8 text-[#C9A227]" />,
      content: (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-white/5 border-r-4 border-[#C9A227] space-y-2">
            <h4 className="text-base font-extrabold text-[#C9A227] font-heading">رؤيتنا</h4>
            <p className="text-gray-200 text-sm leading-relaxed">
              كسب ثقة عملائنا الكرام وتوسيع قاعدة المستفيدين من خدماتنا المتميزة عبر تزويدهم بميزة تنافسية وقيمة مضافة وتجربة إستثنائية والتركيز على تحقيق رضاهم التام.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border-r-4 border-[#116B43] space-y-2">
            <h4 className="text-base font-extrabold text-[#116B43] font-heading">رسالتنا</h4>
            <p className="text-gray-200 text-sm leading-relaxed">
              تقديم خدمات مقاولات متكاملة تواكب تطلعات العملاء وتدعم التنمية الوطنية ورؤية المملكة (2030).
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'قيمنا الأساسية',
      subtitle: 'المبادئ التي توجه كل مشروع',
      icon: <Heart className="w-8 h-8 text-[#C9A227]" />,
      content: (
        <div className="grid grid-cols-2 gap-3 text-right">
          {[
            'المصداقية والأمانة',
            'الإخلاص والتفاني بالعمل',
            'الجودة والتميز',
            'الأصالة والعراقة',
            'الريادة والإبداع والابتكار',
            'التجديد والتحديث',
            'الاحترافية والتخصصية',
            'العمل بروح الفريق الواحد',
            'السلامة المهنية',
            'الاستدامة'
          ].map((val, idx) => (
            <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-200">
              <CheckCircle2 className="w-4 h-4 text-[#116B43] flex-shrink-0" />
              <span>{val}</span>
            </div>
          ))}
        </div>
      )
    },
    {
      title: 'لماذا تختارنا؟',
      subtitle: 'عوامل التفوق والريادة',
      icon: <Award className="w-8 h-8 text-[#C9A227]" />,
      content: (
        <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1 text-xs sm:text-sm text-gray-300">
          {[
            'الالتزام بتسليم المشاريع في الوقت المحدد وبأعلى معايير الإتقان.',
            'تزويد العملاء بخدمات شخصية مصممة خصيصاً لتحقيق رغباتهم وطموحاتهم.',
            'التحسين المستمر والتطوير الدائم لأساليب ومنهجيات العمل الهندسي.',
            'توفير العزل الحراري والمائي والعزل ضد الرطوبة والصوت في كافة المباني.',
            'استخدام أفضل الخامات وأجود مواد البناء المعتمدة.',
            'توفير خيارات دفع مرنة ومدروسة تناسب تطلعات العملاء.'
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 p-2 rounded-xl bg-white/5">
              <CheckCircle2 className="w-4 h-4 text-[#C9A227] flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      title: 'خدماتنا الرئيسية',
      subtitle: 'باقات متكاملة وموثوقة',
      icon: <Building2 className="w-8 h-8 text-[#C9A227]" />,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          {[
            { t: 'الإنشاءات العامة', d: 'المباني السكنية وغير السكنية والمجمعات التجارية.' },
            { t: 'أعمال التشطيب والديكورات', d: 'تصميم وتنفيذ الديكور الداخلي وتسليم مفتاح.' },
            { t: 'البنية التحتية', d: 'شبكات المياه والصرف الصحي والكهرباء والاتصالات.' },
            { t: 'صيانة وتشغيل المباني', d: 'حلول صيانة شاملة للمباني والمرافق.' }
          ].map((item, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <h5 className="font-extrabold text-[#C9A227]">{item.t}</h5>
              <p className="text-gray-400 text-[11px] leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      title: 'الاعتمادات والتراخيص',
      subtitle: 'الشهادات الرسمية والاعتمادات',
      icon: <Award className="w-8 h-8 text-[#C9A227]" />,
      content: (
        <div className="space-y-4 text-center">
          <p className="text-gray-300 text-xs sm:text-sm">
            نفخر بحصولنا على التراخيص والاعتمادات الرسمية التي تؤكد التزامنا بالمعايير النظامية والمهنية في المملكة.
          </p>
          <div className="grid grid-cols-3 gap-2">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-[10px] text-gray-400">رخصة النشاط التجاري</div>
              <div className="text-[#C9A227] font-black text-[10px] mt-1">بلدي Balady</div>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-[10px] text-gray-400">عضوية الهيئة السعودية</div>
              <div className="text-[#C9A227] font-black text-[10px] mt-1">المقاولين SCA</div>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-[10px] text-gray-400">السجل التجاري الرسمي</div>
              <div className="text-[#C9A227] font-black text-[10px] mt-1">رقم الموحد</div>
            </div>
          </div>
          <div className="text-[10px] text-gray-400">الرقم الموحد المعتمد: 7048788603</div>
        </div>
      )
    }
  ];

  const handleNextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto" data-lenis-prevent>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl h-[85vh] md:h-[80vh] bg-[#2B323A] border border-[#C9A227]/40 rounded-3xl text-white shadow-2xl z-10 flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-white/10 bg-[#343C46]/50 flex items-center justify-between">
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-[#C9A227]" />
              <div className="text-right">
                <h3 className="text-lg sm:text-xl font-black font-heading">الملف التعريفي للشركة</h3>
                <p className="text-[10px] sm:text-xs text-[#C9A227] font-semibold">رؤية الريادة للمقاولات والتطوير العقاري</p>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-white/10 bg-[#343C46]/20">
            <button
              onClick={() => setActiveTab('browse')}
              className={`flex-1 py-3 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
                activeTab === 'browse'
                  ? 'border-[#C9A227] text-[#C9A227] bg-white/5'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>تصفح سريع وركائز الشركة</span>
            </button>
            <button
              onClick={() => setActiveTab('pdf')}
              className={`flex-1 py-3 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
                activeTab === 'pdf'
                  ? 'border-[#C9A227] text-[#C9A227] bg-white/5'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>الملف الكامل التفاعلي (PDF)</span>
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 flex flex-col">
            {activeTab === 'browse' ? (
              // Tab 1: Beautiful Quick Browse Carousel
              <div className="flex-1 flex flex-col justify-between gap-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center flex-1">
                  
                  {/* Left Side: Illustration / Large Icon */}
                  <div className="md:col-span-5 hidden md:flex flex-col items-center justify-center p-8 rounded-3xl bg-[#343C46]/40 border border-white/5 text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-[#116B43]/15 text-[#116B43] flex items-center justify-center shadow-inner border border-[#116B43]/20">
                      {slides[slideIndex].icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-white font-heading">{slides[slideIndex].title}</h4>
                      <p className="text-xs text-[#C9A227] font-semibold">{slides[slideIndex].subtitle}</p>
                    </div>
                  </div>

                  {/* Right Side: Interactive Content */}
                  <div className="md:col-span-7 flex flex-col justify-center space-y-4 min-h-[250px] text-right">
                    <div className="md:hidden flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-xl bg-[#116B43]/15 text-[#116B43]">
                        {slides[slideIndex].icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-white font-heading">{slides[slideIndex].title}</h4>
                        <p className="text-[10px] text-[#C9A227] font-semibold">{slides[slideIndex].subtitle}</p>
                      </div>
                    </div>
                    <motion.div
                      key={slideIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1"
                    >
                      {slides[slideIndex].content}
                    </motion.div>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <button
                    onClick={handlePrevSlide}
                    className="p-2 rounded-xl bg-[#343C46] hover:bg-[#116B43] hover:text-white text-gray-300 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                  >
                    <ChevronRight className="w-4 h-4" />
                    <span>السابق</span>
                  </button>

                  <div className="flex gap-1.5">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSlideIndex(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                          slideIndex === idx ? 'bg-[#C9A227] w-6' : 'bg-white/20'
                        }`}
                        aria-label={`شريحة ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNextSlide}
                    className="p-2 rounded-xl bg-[#343C46] hover:bg-[#116B43] hover:text-white text-gray-300 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                  >
                    <span>التالي</span>
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              // Tab 2: Embedded PDF Viewer
              <div className="flex-1 flex flex-col gap-4 h-full min-h-[350px]">
                <div className="flex-1 bg-black/20 rounded-2xl overflow-hidden border border-white/10 relative">
                  <iframe
                    src="/profile.pdf#toolbar=1"
                    className="w-full h-full"
                    title="البروفايل الكامل لشركة رؤية الريادة"
                  />
                </div>
                <div className="text-center p-3 rounded-2xl bg-white/5 border border-white/5 text-xs text-gray-300 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span>
                    💡 إذا لم يظهر الملف التفاعلي تلقائياً على هاتفك، يمكنك الضغط على زر التحميل المباشر لتصفحه بجهازك.
                  </span>
                  <a
                    href="/profile.pdf"
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-[#116B43] hover:bg-[#0D5233] text-white font-extrabold text-xs flex items-center gap-2 border border-[#C9A227]/30 transition-all cursor-pointer shadow-md"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>فتح في نافذة جديدة</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Footer Action Bar */}
          <div className="p-4 sm:p-6 border-t border-white/10 bg-[#343C46]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-400 text-center sm:text-right">
              حجم الملف: 1.3 ميجابايت • تنسيق PDF جاهز للمعاينة والطباعة
            </div>
            
            <a
              href="/profile.pdf"
              download="البروفايل التعريفي - شركة رؤية الريادة للمقاولات.pdf"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#C9A227] to-[#B08D1E] hover:scale-105 text-[#39424C] font-black text-sm flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-lg shadow-[#C9A227]/10"
            >
              <Download className="w-5 h-5 text-[#39424C]" />
              <span>تحميل البروفايل الكامل (PDF)</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
