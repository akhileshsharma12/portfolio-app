import React from 'react';
import { BookOpen, Briefcase } from 'lucide-react';

// 1. Define the type for a single timeline item
interface TimelineItemProps {
  title: string;
  date: string;
  description: string;
}

// 2. Define the props for the main section
interface TimelineSectionProps {
  title: string;
  icon: 'education' | 'experience'; // Helper to choose the icon
  items: TimelineItemProps[];
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ title, icon, items }) => {
  return (
    <section className="mb-8">
      {/* Header with Icon Box */}
      <div className="flex items-center gap-4 mb-6">
        <div className="p-2.5 bg-[#2b2b2c] rounded-xl border border-[#383838] shadow-sm flex items-center justify-center">
          {icon === 'education' ? (
            <BookOpen size={20} className="text-[#ffdb70]" />
          ) : (
            <Briefcase size={20} className="text-[#ffdb70]" />
          )}
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l border-[#383838] ml-4.5 space-y-8 pb-2">
        {items.map((item, index) => (
          <div key={index} className="pl-8 relative group">
            
            {/* The Dot Design (Matches your screenshot) */}
            {/* 1. Outer shadow ring to create distance from the line */}
            <span className="absolute -left-1.25 top-1.5 h-2.5 w-2.5 rounded-full bg-[#1e1e1f] shadow-[0_0_0_4px_#1e1e1f] z-10"></span>
            {/* 2. The inner gold dot */}
            <span className="absolute -left-1.25 top-1.5 h-2.5 w-2.5 rounded-full bg-[#ffdb70] z-20 shadow-[0_0_10px_rgba(255,219,112,0.4)]"></span>

            {/* Content */}
            <h4 className="text-white text-lg font-semibold mb-1">{item.title}</h4>
            <span className="text-[#ffdb70] text-sm font-medium mb-3 block">{item.date}</span>
            <p className="text-white/70 text-[15px] leading-relaxed font-light">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;