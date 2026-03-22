import React from "react";
import { RadioReceiver, FolderArchive, ShieldAlert, X } from "lucide-react";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile Backdrop */}
      {/* Tambahan a11y: aria-hidden="true" agar screen reader mengabaikan elemen visual ini */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/80 z-40 md:hidden backdrop-blur-sm" 
          onClick={onClose}
          aria-hidden="true"
        ></div>
      )}

      {/* Sidebar Panel */}
      {/* Tambahan a11y: aria-label untuk mendeskripsikan area aside */}
      <aside 
        aria-label="Sidebar Navigasi Utama"
        className={`fixed md:static top-0 left-0 h-full z-50 w-64 bg-[#0A1326] border-r border-cyan-900/30 flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-cyan-900/30 shrink-0">
          <div className="flex items-center gap-3">
            {/* Tambahan a11y: aria-hidden pada icon yang bersifat dekoratif */}
            <ShieldAlert className="text-cyan-400 w-6 h-6 shrink-0" aria-hidden="true" />
            <h1 className="font-bold text-lg text-white tracking-wide truncate">
              QRIS Sentinel AI
            </h1>
          </div>
          
          {/* Tombol Tutup hanya untuk Mobile */}
          {/* Tambahan a11y: aria-label dan state focus untuk navigasi keyboard */}
          <button 
            className="md:hidden text-slate-400 hover:text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow"
            onClick={onClose}
            aria-label="Tutup menu navigasi"
            title="Tutup Menu"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Navigasi Utama */}
        {/* Tambahan a11y: aria-label pada nav jika ada lebih dari satu navigasi di aplikasi */}
        <nav aria-label="Menu Utama" className="flex-1 py-6 px-3 space-y-2 overflow-y-auto">
          
          {/* Menu Aktif */}
          {/* Tambahan a11y: aria-current="page" untuk menandakan ini adalah halaman aktif saat ini */}
          <button 
            aria-current="page"
            className="w-full flex items-center gap-3 px-3 py-3 bg-cyan-950/40 text-cyan-300 rounded-lg border border-cyan-800/50 shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <RadioReceiver className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span className="font-medium tracking-wide text-sm truncate">
              Command Center
            </span>
            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_#22d3ee] shrink-0" aria-hidden="true"></div>
          </button>
          
          {/* Menu Tidak Aktif */}
          <button className="w-full flex items-center gap-3 px-3 py-3 text-slate-400 hover:text-cyan-200 hover:bg-[#0F1C38] rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400">
            <FolderArchive className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span className="font-medium tracking-wide text-sm truncate">
              Arsip Laporan BAP
            </span>
          </button>
        </nav>

        <div className="p-4 border-t border-cyan-900/30 shrink-0">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">
            System Version
          </div>
          <div className="text-xs text-cyan-600 font-mono">
            v4.2.0-STABLE (OJK-BI)
          </div>
        </div>
      </aside>
    </>
  );
}