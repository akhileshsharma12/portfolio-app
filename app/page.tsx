"use client";

import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import MainContent from "@/app/components/MainContent";
import TopNav from "./components/TopNav";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("About");

  return (
    <main className="min-h-screen bg-[#121212] text-white py-6 px-10 flex justify-center pb-24 lg:pb-6">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6">
        {/* LEFT SIDEBAR */}
        <div className="w-full lg:w-70 shrink-0">
          <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a]">
          <TopNav activeTab={activeSection} setActiveTab={setActiveSection} />
          <div className="mt-10">
            <MainContent active={activeSection} />
          </div>
        </div>
      </div>
    </main>
  );
}
