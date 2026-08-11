import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectItem } from '../types';
import { X, MapPin, Maximize2, Calendar, DollarSign, UserCheck, ChevronRight, ChevronLeft, ShieldCheck } from 'lucide-react';
import { useLenis } from './LenisProvider';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenCallModal: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenCallModal,
}) => {
  const lenis = useLenis();

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!project) return;
    setActiveImageIndex(0);
    lenis?.stop();
    return () => {
      lenis?.start();
    };
  }, [project, lenis]);

  if (!project) return null;

  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto" data-lenis-prevent>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#39424C] border border-[#C9A227]/40 rounded-3xl shadow-2xl text-white overflow-hidden z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer border border-white/20"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Main Gallery Slider */}
          <div className="relative h-72 sm:h-96 w-full bg-black">
            <img
              src={images[activeImageIndex]}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#39424C] via-transparent to-black/30" />

            {/* Slider Controls */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-[#116B43] text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-[#116B43] text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Thumbnails */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 p-2 rounded-2xl backdrop-blur-md">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-12 h-8 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImageIndex === idx ? 'border-[#C9A227] scale-110' : 'border-transparent opacity-60'
                      }`}
                    >
                      <img src={img} alt="صورة إضافية" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Category Tag */}
            <div className="absolute top-4 right-4 bg-[#116B43] text-white px-4 py-1.5 rounded-full text-xs font-bold border border-[#C9A227]/50 shadow-lg">
              {project.categoryLabel}
            </div>
          </div>

          {/* Project Details Content */}
          <div className="p-6 sm:p-8 space-y-6 text-right">
            <div>
              <h3 className="text-3xl font-black font-heading text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed font-medium">
                {project.description}
              </p>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-right">
                <div className="flex items-center gap-1.5 text-xs text-[#C9A227] font-bold mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>الموقع</span>
                </div>
                <div className="text-sm font-black text-white">{project.location}</div>
              </div>

              <div className="text-right">
                <div className="flex items-center gap-1.5 text-xs text-[#C9A227] font-bold mb-1">
                  <Maximize2 className="w-4 h-4" />
                  <span>المساحة</span>
                </div>
                <div className="text-sm font-black text-white">{project.area}</div>
              </div>

              <div className="text-right">
                <div className="flex items-center gap-1.5 text-xs text-[#C9A227] font-bold mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>تاريخ الإنجاز</span>
                </div>
                <div className="text-sm font-black text-white">{project.completionYear}</div>
              </div>

              <div className="text-right">
                <div className="flex items-center gap-1.5 text-xs text-[#C9A227] font-bold mb-1">
                  <UserCheck className="w-4 h-4" />
                  <span>العميل</span>
                </div>
                <div className="text-sm font-black text-white truncate">{project.client}</div>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-sm font-bold text-[#C9A227] mb-2 font-heading">
                أبرز المميزات والمواصفات الهندسية للمشروع:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#116B43]/20 border border-[#116B43]/50 text-xs text-gray-200 font-bold flex items-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
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
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#116B43] hover:bg-[#C9A227] hover:text-[#39424C] text-white font-extrabold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>استفسر عن مشروع مماثل</span>
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
