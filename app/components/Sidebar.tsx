'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Mail, Smartphone, Calendar, MapPin, 
  Facebook, Twitter, Instagram, ChevronDown 
} from 'lucide-react';


const Sidebar = () => {
  // State to handle the mobile dropdown toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="w-full h-auto lg:w-70 bg-[#1e1e1f] border border-[#383838] rounded-3xl p-6 shadow-2xl z-10 lg:sticky lg:top-10 transition-all duration-300 ease-in-out">
      
      {/* --- HEADER SECTION --- */}
      {/* Mobile: Row Layout | Desktop: Column Layout */}
      <div className="relative flex flex-row lg:flex-col items-center gap-4 lg:gap-6 pb-2 lg:pb-6 lg:border-b border-[#383838]">
        
        {/* Avatar */}
        <div className="relative w-20 h-20 lg:w-32 lg:h-32 shrink-0 rounded-2xl lg:rounded-3xl bg-[#2b2b2c] overflow-hidden shadow-lg">
          <Image 
            src="/images/prof.png" 
            alt="Akhilesh Sharma" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        
        {/* Name & Role */}
        <div className="text-left lg:text-center">
          <h1 className="text-xl lg:text-2xl font-bold text-white mb-2">Akhilesh Sharma</h1>
          <span className="bg-[#2b2b2c] text-xs text-white/70 px-3 py-1 lg:px-4 lg:py-1.5 rounded-lg border border-[#383838]">
            Web Developer
          </span>
        </div>

        {/* --- MOBILE TOGGLE BUTTON --- */}
        {/* Only visible on small screens (lg:hidden) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-0 right-0 lg:hidden p-2 rounded-xl bg-[#2b2b2c] border border-[#383838] text-[#ffdb70] hover:bg-[#383838] transition-colors"
        >
          <ChevronDown 
            size={20} 
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
          />
        </button>
      </div>

      {/* --- COLLAPSIBLE CONTENT --- */}
      {/* Mobile: Hidden unless isOpen is true | Desktop: Always Block */}
      <div className={`
        overflow-hidden transition-all duration-500 ease-in-out
        ${isOpen ? 'max-h-125 opacity-100 mt-6' : 'max-h-0 opacity-0 lg:max-h-none lg:opacity-100 lg:mt-0'}
      `}>
        
        {/* Divider (Desktop Only - separate from the flex column above) */}
        <div className="hidden lg:block w-full h-px bg-[#383838] mb-6"></div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <ContactItem 
            icon={<Mail size={18} className="text-[#ffdb70]" />} 
            title="EMAIL" 
            value="akhileshsh421@gmail.com" 
          />
          <ContactItem 
            icon={<Smartphone size={18} className="text-[#ffdb70]" />} 
            title="PHONE" 
            value="+91 88309-47118" 
          />
          <ContactItem 
            icon={<Calendar size={18} className="text-[#ffdb70]" />} 
            title="BIRTHDAY" 
            value="May 15, 2002" 
          />
          <ContactItem 
            icon={<MapPin size={18} className="text-[#ffdb70]" />} 
            title="LOCATION" 
            value="Akola, Maharashtra" 
          />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-8 pt-6 border-t border-[#383838] lg:border-none lg:pt-0 lg:mt-8">
          <SocialIcon icon={<Facebook size={18} />} />
          <SocialIcon icon={<Twitter size={18} />} />
          <SocialIcon icon={<Instagram size={18} />} />
        </div>
      </div>
    </aside>
  );
};

// --- Helper Components (No Changes) ---
const ContactItem = ({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) => (
  <div className="flex items-center gap-4">
    <div className="p-3 shrink-0 bg-linear-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#383838] rounded-xl shadow-sm">
      {icon}
    </div>
    <div className="text-left overflow-hidden">
      <p className="text-xs text-white/50 mb-1 font-medium">{title}</p>
      <p className="text-sm text-white font-medium truncate">{value}</p>
    </div>
  </div>
);

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="text-white/70 hover:text-[#ffdb70] transition-colors">
    {icon}
  </a>
);

export default Sidebar;