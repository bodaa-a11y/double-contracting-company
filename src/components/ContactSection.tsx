import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, Building2, Sparkles, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'المقاولات العامة',
    city: 'الرياض',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);

    const text = `طلب استشارة جديد:
الاسم: ${formData.name}
الهاتف: ${formData.phone}
البريد: ${formData.email || '—'}
الخدمة: ${formData.serviceType}
المدينة: ${formData.city}
الرسالة: ${formData.message || '—'}`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#39424C] text-white relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#116B43]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#C9A227] text-sm font-extrabold border border-[#C9A227]/30"
          >
            <Phone className="w-4 h-4" />
            <span>تواصل معنا اليوم</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight"
          >
            يسعدنا مناقشة مشروعك القادم وتقديم الاستشارة الهندسية
          </motion.h2>

          <p className="text-gray-300 text-base sm:text-lg font-medium">
            فريق المهندسين والمستشارين جاهز للرد على استفساراتكم وتقديم العروض الفنية والمالية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (Modern Arabic Contact Form) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white/5 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/15 shadow-2xl text-right"
          >
            <h3 className="text-2xl font-black font-heading text-white mb-6 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-[#C9A227]" />
              <span>طلب تسعيرة أو استشارة هندسية</span>
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-[#116B43]/30 border border-[#C9A227] text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#116B43] text-[#C9A227] flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-black font-heading text-white">
                  تم استلام طلبك بنجاح!
                </h4>
                <p className="text-gray-200 text-sm leading-relaxed">
                  شكراً لتواصلك مع <strong>شركة دبل للمقاولات والتجارة العامة</strong>. سيتواصل معك أحد مهندسينا الاستشاريين خلال أقل من 24 ساعة.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      serviceType: 'المقاولات العامة',
                      city: 'الرياض',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs cursor-pointer"
                >
                  إرسال طلب جديد
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-200 mb-2">
                      الاسم الكامل <span className="text-[#C9A227]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="أدخل اسمك الكريم"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C9A227] focus:bg-black/30 transition-all font-medium text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-200 mb-2">
                      رقم الجوال / الهاتف <span className="text-[#C9A227]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0500000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C9A227] focus:bg-black/30 transition-all font-medium text-sm dir-ltr text-right"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-200 mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      placeholder="example@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C9A227] focus:bg-black/30 transition-all font-medium text-sm dir-ltr text-right"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-200 mb-2">
                      نوع الخدمة المطلوبة
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#39424C] border border-white/20 text-white focus:outline-none focus:border-[#C9A227] transition-all font-medium text-sm cursor-pointer"
                    >
                      <option value="المقاولات العامة">المقاولات العامة</option>
                      <option value="بناء الفلل والقصور">بناء الفلل والقصور</option>
                      <option value="بناء الأبراج والناطحات">بناء الأبراج والناطحات</option>
                      <option value="التطوير العقاري">التطوير العقاري</option>
                      <option value="التشطيبات والديكور">التشطيبات والديكور</option>
                      <option value="إدارة المشاريع">إدارة المشاريع</option>
                      <option value="البنية التحتية">البنية التحتية</option>
                      <option value="الأعمال التجارية والتوريد">الأعمال التجارية والتوريد</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-200 mb-2">
                    تفاصيل المشروع / الرسالة
                  </label>
                  <textarea
                    rows={4}
                    placeholder="اكتب تفاصيل مشروعك والموقع والمساحة التقريبية..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C9A227] focus:bg-black/30 transition-all font-medium text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#116B43] to-[#0D5233] hover:from-[#C9A227] hover:to-[#B08C1E] hover:text-[#39424C] text-white font-black text-base shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <span>جاري إرسال الطلب...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>إرسال الطلب الآن</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column (Info Cards & Interactive Map Placeholder) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6 text-right"
          >
            {/* Contact Information Cards */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/15 space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-[#116B43] text-white shadow-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#C9A227] font-bold">الهاتف المباشر</div>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-lg font-black text-white hover:text-[#C9A227] dir-ltr block text-right">
                    {COMPANY_INFO.phone}
                  </a>
                  <a href={`tel:${COMPANY_INFO.phoneAlt}`} className="text-sm font-bold text-gray-300 hover:text-[#C9A227] dir-ltr block text-right">
                    {COMPANY_INFO.phoneAlt}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-[#116B43] text-white shadow-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#C9A227] font-bold">البريد الإلكتروني الرسمى</div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-base font-bold text-white hover:text-[#C9A227] dir-ltr block text-right">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-[#116B43] text-white shadow-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#C9A227] font-bold">المقر الرئيسي والفروع</div>
                  <p className="text-sm font-medium text-gray-200 leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-[#116B43] text-white shadow-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#C9A227] font-bold">ساعات العمل الرسمية</div>
                  <p className="text-sm font-medium text-gray-200">
                    الأحد - الخميس: 8:00 صباحاً - 5:00 مساءً
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder Frame */}
            <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative h-64 bg-slate-800 group">
              <iframe
                title="موقع شركة دبل للمقاولات"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.562728!2d46.6375!3d24.8125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ4JzQ1LjAiTiA0NsKwMzgnMTU2LjAiRQ!5e0!3m2!1sar!2s!4v1650000000000!5m2!1sar!2s"
                className="w-full h-full filter grayscale contrast-125 opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 bg-[#39424C]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-xs font-bold text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C9A227]" />
                <span>الرياض - حي الصحافة</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
