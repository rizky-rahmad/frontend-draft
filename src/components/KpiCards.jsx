import React from "react";
import { Activity, Cpu, AlertTriangle } from "lucide-react";

export default function KpiCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      <div className="bg-[#0A1326] border border-cyan-900/40 rounded-xl p-4 sm:p-5 shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-cyan-500/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <h3 className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-2 flex items-center gap-2">
          <Activity className="w-4 h-4 shrink-0" /> <span className="truncate">Total Trx Terproses</span>
        </h3>
        <div className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
          1,205,430
        </div>
        <div className="mt-2 text-[10px] sm:text-xs text-slate-400 font-mono truncate">
          +12.4% dari jam sebelumnya
        </div>
      </div>

      <div className="bg-[#0A1326] border border-cyan-900/40 rounded-xl p-4 sm:p-5 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-cyan-500/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <h3 className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-2 flex items-center gap-2">
          <Cpu className="w-4 h-4 shrink-0" /> <span className="truncate">Vol Rupiah Terpantau</span>
        </h3>
        <div className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
          Rp 45.2 M
        </div>
        <div className="mt-2 text-[10px] sm:text-xs text-slate-400 font-mono truncate">
          Dalam siklus 24 jam terakhir
        </div>
      </div>

      <div className="bg-[#1A0B14] border border-red-500/40 rounded-xl p-4 sm:p-5 shadow-[0_0_20px_rgba(239,68,68,0.15)] relative overflow-hidden sm:col-span-2 md:col-span-1">
        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-red-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-400 to-red-600 shadow-[0_0_10px_#ef4444]"></div>
        <h3 className="text-red-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-2 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" /> <span className="truncate">Antrean Investigasi</span>
        </h3>
        <div className="text-2xl sm:text-4xl font-bold text-red-500 tracking-tight drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
          3 Kasus
        </div>
        <div className="mt-2 text-[10px] sm:text-xs text-red-400/70 font-mono flex items-center gap-1.5 truncate">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping shrink-0"></div>
          Menunggu tindakan segera
        </div>
      </div>
    </div>
  );
}