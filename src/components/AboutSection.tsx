import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Target, Eye, Users, CheckCircle2, ArrowLeft } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#F5F7F8] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#39424C_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Right Side (Arabic Intro Text) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-right"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#116B43]/10 text-[#116B43] text-sm font-extrabold border border-[#116B43]/20">
              <Award className="w-4 h-4 text-[#C9A227]" />
              <span>من نحن • شركة دبل للمقاولات والتجارة العامة</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#39424C] font-heading tracking-tight leading-tight">
              نصنع معالم إنشائية تشهدُ على قوة الإتقان والابتكار
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
              تأسست <strong className="text-[#116B43]">شركة دبل للمقاولات والتجارة العامة</strong> لتمثل نموذجاً قيادياً فريداً في قطاع البناء والتشييد والتطوير العقاري. نحن نتكامل بين الخبرات الهندسية العالمية والتنفيذ الميداني المحترف لتسليم مشاريع عملاقة تتخطى توقعات العملاء.
            </p>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-md hover:border-[#116B43] transition-all group">
                <div className="p-3 rounded-xl bg-[#116B43]/10 text-[#116B43] w-fit mb-3 group-hover:bg-[#116B43] group-hover:text-white transition-colors">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#39424C] mb-1">رؤيتنا</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  أن نكون الخيار الأول والشركة الأجدر بالثقة في الشرق الأوسط في المقاولات العامة والإنشاءات الكبرى.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-md hover:border-[#C9A227] transition-all group">
                <div className="p-3 rounded-xl bg-[#C9A227]/15 text-[#C9A227] w-fit mb-3 group-hover:bg-[#C9A227] group-hover:text-white transition-colors">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#39424C] mb-1">رسالتنا</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  توفير حلول هندسية وإنشائية مستدامة مع الالتزام التام بالجودة، معايير السلامة، والمواعيد المحددة.
                </p>
              </div>
            </div>

            {/* Core Competencies List */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-gray-800 font-bold">
                <CheckCircle2 className="w-5 h-5 text-[#116B43] flex-shrink-0" />
                <span>إشراف هندسي متكامل من طاقم يمتلك خبرة تتجاوز 20 عاماً</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800 font-bold">
                <CheckCircle2 className="w-5 h-5 text-[#116B43] flex-shrink-0" />
                <span>استخدام أحدث الآليات والتقنيات الهيدروليكية ونظم الذكاء المعماري</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800 font-bold">
                <CheckCircle2 className="w-5 h-5 text-[#116B43] flex-shrink-0" />
                <span>حاصلون على شهادات الاعتماد والآيزو في السلامة وجودة التنفيذ الإنشائي</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#39424C] text-white font-black hover:bg-[#116B43] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                <span>تعرّف على الشركاء وشهادات الجودة</span>
                <ArrowLeft className="w-5 h-5 text-[#C9A227]" />
              </a>
            </div>
          </motion.div>

          {/* Left Side (Premium Construction Image & Animated Floating Badges) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#116B43] to-[#C9A227] opacity-20 blur-2xl" />

              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b2?auto=format&fit=crop&w=1200&q=80"
                  alt="موقع عمل شركة دبل"
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating Badge 1: Top Right */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-xl p-4 rounded-2xl border border-gray-200 shadow-2xl flex items-center gap-3 text-right"
              >
                <div className="p-3 rounded-xl bg-[#116B43] text-white shadow-md">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[#39424C] font-black text-lg">أعلى معايير الأمان</div>
                  <div className="text-gray-500 text-xs">مطابقة للمواصفات العالمية</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Left */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-[#39424C] text-white p-5 rounded-2xl border border-[#C9A227]/40 shadow-2xl flex items-center gap-4 text-right"
              >
                <div className="p-3.5 rounded-xl bg-[#C9A227] text-[#39424C] font-black text-2xl font-heading shadow-md">
                  20+
                </div>
                <div>
                  <div className="font-black text-base text-white">عاماً من التميز والابتكار</div>
                  <div className="text-[#C9A227] text-xs font-semibold">شركة دبل للمقاولات والتجارة</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
