import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/companyData';
import { ProjectItem } from '../types';
import { MapPin, Maximize2, Calendar, Eye, ArrowLeft, Sparkles, Building2 } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'villas', label: 'الفلل والقصور' },
    { id: 'towers', label: 'الأبراج والنطحات' },
    { id: 'malls', label: 'المولات والتجاري' },
    { id: 'residential', label: 'المجمعات السكنية' },
    { id: 'infrastructure', label: 'البنية التحتية' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-[#F5F7F8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#116B43]/10 text-[#116B43] text-sm font-extrabold border border-[#116B43]/20"
          >
            <Building2 className="w-4 h-4 text-[#C9A227]" />
            <span>معرض الأعمال والإنجازات</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-[#39424C] font-heading tracking-tight"
          >
            مشاريع رئيسية تُحاكي أعلى مستويات التطور الإنشائي
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg font-medium"
          >
            استعرض بعضاً من أهم المشاريع السكنية، التجارية، والمجتمعية التي نفذتها شركة دبل للمقاولات والتجارة العامة.
          </motion.p>
        </div>

        {/* Categories Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#116B43] text-white shadow-lg shadow-[#116B43]/30 border border-[#C9A227]/40'
                    : 'bg-white text-[#39424C] hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                onClick={() => onSelectProject(project)}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                {/* Image & Hover Effect */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#39424C] via-[#39424C]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Category Pill */}
                  <div className="absolute top-4 right-4 bg-[#116B43]/90 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full border border-[#C9A227]/40 backdrop-blur-md">
                    {project.categoryLabel}
                  </div>

                  {/* View Details Hover Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-5 py-2.5 rounded-full bg-[#C9A227] text-[#39424C] font-black text-sm shadow-2xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-4 h-4" />
                      <span>عرض معارض الصور والتفاصيل</span>
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 text-right flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black text-[#39424C] font-heading mb-3 group-hover:text-[#116B43] transition-colors">
                      {project.title}
                    </h3>

                    {/* Metadata Strip */}
                    <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-[#F5F7F8] border border-gray-100 text-xs mb-4">
                      <div className="flex flex-col items-start text-right">
                        <span className="text-gray-500 font-bold flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#116B43]" />
                          الموقع
                        </span>
                        <span className="font-extrabold text-[#39424C] truncate w-full">{project.location.split('-')[0]}</span>
                      </div>

                      <div className="flex flex-col items-start text-right">
                        <span className="text-gray-500 font-bold flex items-center gap-1">
                          <Maximize2 className="w-3.5 h-3.5 text-[#116B43]" />
                          المساحة
                        </span>
                        <span className="font-extrabold text-[#39424C]">{project.area}</span>
                      </div>

                      <div className="flex flex-col items-start text-right">
                        <span className="text-gray-500 font-bold flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#116B43]" />
                          التاريخ
                        </span>
                        <span className="font-extrabold text-[#39424C]">{project.completionYear}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#116B43]">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">استكشف مواصفات المشروع</span>
                    <ArrowLeft className="w-4 h-4 text-[#C9A227]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
