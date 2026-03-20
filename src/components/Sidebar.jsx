import React from "react";
import { RadioReceiver, FolderArchive, ShieldAlert } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0A1326] border-r border-cyan-900/30 flex flex-col z-10 shadow-[4px_0_24px_rgba(0,0,0,0.5)]">
      <div className="h-16 flex items-center px-6 border-b border-cyan-900/30">
        <div className="flex items-center gap-3">
          <ShieldAlert className="text-cyan-400 w-6 h-6" />
          <h1 className="font-bold text-lg text-white tracking-wide">
            QRIS Sentinel AI
          </h1>
        </div>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-2">
        <button className="w-full flex items-center gap-3 px-3 py-3 bg-cyan-950/40 text-cyan-300 rounded-lg border border-cyan-800/50 shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all">
          <RadioReceiver className="w-5 h-5" />
          <span className="font-medium tracking-wide text-sm">
            Command Center
          </span>
          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_#22d3ee]"></div>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-3 text-slate-400 hover:text-cyan-200 hover:bg-[#0F1C38] rounded-lg transition-all">
          <FolderArchive className="w-5 h-5" />
          <span className="font-medium tracking-wide text-sm">
            Arsip Laporan BAP
          </span>
        </button>
      </nav>

      <div className="p-4 border-t border-cyan-900/30">
        <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">
          System Version
        </div>
        <div className="text-xs text-cyan-600 font-mono">
          v1.0.0-STABLE (OJK-BI)
        </div>
      </div>
    </aside>
  );
}