import React, { useState } from 'react';
import { LenisProvider } from './components/LenisProvider';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TextScrollSection } from './components/TextScrollSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { StatsSection } from './components/StatsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { PartnersSection } from './components/PartnersSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceModal } from './components/ServiceModal';
import { ProjectModal } from './components/ProjectModal';
import { CallModal } from './components/CallModal';
import { ServiceItem, ProjectItem } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [callModalOpen, setCallModalOpen] = useState(false);

  return (
    <LenisProvider>
      <div className="min-h-screen bg-[#F5F7F8] text-[#39424C] font-tajawal dir-rtl text-right overflow-x-hidden selection:bg-[#116B43] selection:text-white">
        {/* Top Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Floating Header */}
        <Navbar onOpenCallModal={() => setCallModalOpen(true)} />

        {/* Main Content Layout */}
        <main>
          {/* Fullscreen Cinematic Hero with Apple-style Character Reveal Text Animation */}
          <HeroSection onOpenCallModal={() => setCallModalOpen(true)} />

          {/* Interactive Text Scroll Showcase for Construction Types */}
          <TextScrollSection />

          {/* About Section (من نحن) */}
          <AboutSection />

          {/* Services Section (الخدمات) */}
          <ServicesSection onSelectService={(service) => setSelectedService(service)} />

          {/* Projects Masonry Showcase (المشاريع) */}
          <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

          {/* Viewport Animated Statistics Counters */}
          <StatsSection />

          {/* Why Choose Us (لماذا دبل؟) */}
          <WhyChooseUsSection />

          {/* Partners Infinite Marquee */}
          <PartnersSection />

          {/* Testimonials */}
          <TestimonialsSection />

          {/* Contact Us Form & Interactive Map */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <FloatingWhatsApp />

        {/* Modals */}
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onOpenCallModal={() => setCallModalOpen(true)}
        />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenCallModal={() => setCallModalOpen(true)}
        />

        <CallModal
          isOpen={callModalOpen}
          onClose={() => setCallModalOpen(false)}
        />
      </div>
    </LenisProvider>
  );
}
