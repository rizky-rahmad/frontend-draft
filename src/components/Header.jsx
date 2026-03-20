import React from "react";

export default function Header({ time }) {
  return (
    <header className="h-16 border-b border-cyan-900/30 bg-[#0A1326]/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-20">
      <div className="flex items-center gap-2 bg-[#050B14] px-4 py-1.5 rounded-full border border-slate-800">
        <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse"></div>
        <span className="text-xs font-mono text-white tracking-wide">
          Sentinel Engine: <span className="text-green-400">Online</span>{" "}
          <span className="text-slate-600 mx-1">|</span> Data Stream:{" "}
          <span className="text-cyan-400">Connected</span>
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <div className="text-sm font-semibold text-white">
            Analis BI - Divisi APU/PPT
          </div>
          <div className="text-xs text-cyan-500 font-mono">
            ID: OJK-AUTH-9921
          </div>
        </div>
        <div className="h-8 w-px bg-cyan-900/50"></div>
        <div className="text-sm font-mono text-white bg-cyan-950/30 px-3 py-1.5 rounded border border-cyan-900/50">
          {time} WIB
        </div>
      </div>
    </header>
  );
}