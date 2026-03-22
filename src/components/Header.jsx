import React from "react";
import { Menu } from "lucide-react";

// Menerima prop onMenuClick dari App.jsx
export default function Header({ time, onMenuClick }) {
  return (
    <header className="h-16 shrink-0 border-b border-cyan-900/30 bg-[#0A1326]/80 backdrop-blur-md flex items-center justify-between px-4 sm:px-6 sticky top-0 z-20">
      
      {/* Kiri: Hamburger Menu & Status Engine */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Tombol Hamburger dengan event onClick */}
        <button 
          onClick={onMenuClick}
          className="md:hidden text-cyan-400 p-1.5 bg-cyan-950/30 border border-cyan-900/50 rounded-md hover:bg-cyan-900/50 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 bg-[#050B14] px-3 py-1.5 sm:px-4 rounded-full border border-slate-800 shrink-0">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse shrink-0"></div>
          <span className="text-[10px] sm:text-xs font-mono text-white tracking-wide truncate">
            <span className="hidden sm:inline">Sentinel Engine: </span>
            <span className="text-green-400">Online</span> 
            <span className="text-slate-600 mx-1.5 sm:mx-2">|</span> 
            <span className="hidden md:inline">Data Stream: </span>
            <span className="text-cyan-400">Connected</span>
          </span>
        </div>
      </div>

      {/* Kanan: Profil & Jam */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="text-right hidden sm:block">
          <div className="text-xs sm:text-sm font-semibold text-white">
            Analis BI <span className="hidden md:inline">- Divisi APU/PPT</span>
          </div>
          <div className="text-[10px] sm:text-xs text-cyan-500 font-mono">
            ID: OJK-9921
          </div>
        </div>
        <div className="h-6 w-px bg-cyan-900/50 hidden sm:block shrink-0"></div>
        <div className="text-xs sm:text-sm font-mono text-white bg-cyan-950/30 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded border border-cyan-900/50 shrink-0">
          {time} <span className="hidden sm:inline">WIB</span>
        </div>
      </div>
    </header>
  );
}