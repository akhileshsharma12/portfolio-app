import React from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TopNav = ({ activeTab, setActiveTab }: NavbarProps) => {
  const navItems = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];

  return (
    <>
      {/* MOBILE NAVBAR (Fixed Bottom) */}
      <nav className="lg:hidden fixed bottom-0 right-5.5 z-50 p-4 flex justify-center w-full">
        <ul className="flex items-center justify-between gap-2 bg-[#2b2b2c]/90 backdrop-blur-md border border-[#383838] px-5 py-4 rounded-2xl shadow-2xl w-full max-w-sm">
          {navItems.map((item) => (
            <li key={item}>
              <button 
                onClick={() => setActiveTab(item)}
                className={`text-xs font-medium transition-colors ${
                  activeTab === item ? 'text-[#ffdb70]' : 'text-white/70'
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* DESKTOP NAVBAR (Top Right of Card) */}
      <nav className="hidden lg:block fixed top-0 right-4 p-6 w-auto z-20">
        <ul className="flex flex-wrap justify-end gap-6 bg-[#2b2b2c] border border-[#383838] px-6 py-3 rounded-tr-2xl rounded-bl-2xl">
          {navItems.map((item) => (
            <li key={item}>
              <button 
                onClick={() => setActiveTab(item)}
                className={`text-base font-medium transition-colors hover:text-white ${
                  activeTab === item ? 'text-[#ffdb70]' : 'text-white/70'
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default TopNav;