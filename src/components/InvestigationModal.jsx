import React from "react";
import { XCircle, FileText, CheckCircle2, History } from "lucide-react";

export default function InvestigationModal({ onClose, onOpenTxLog }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-12">
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-5xl bg-[#0A1326] border border-cyan-800 rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col max-h-[95vh] sm:max-h-[90vh]">
        <div className="bg-[#0F1C38] px-4 py-3 sm:px-6 sm:py-4 border-b border-cyan-800/80 flex items-start sm:items-center justify-between shrink-0">
          <div className="pr-4">
            <h2 className="text-sm sm:text-lg lg:text-xl font-bold text-white tracking-wide leading-tight">
              Investigasi Merchant: Warung Nasi Bu Ani
            </h2>
            <div className="mt-1.5 sm:mt-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-red-500/20 text-red-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 animate-pulse"></span>
                Risiko Tinggi
              </span>
              <span className="text-slate-500 text-[10px] sm:text-xs font-mono hidden xs:inline-block">
                INV-8821-QRIS
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup investigasi"
            className="text-slate-400 hover:text-white p-1 sm:p-2 hover:bg-slate-800 rounded-full transition-colors shrink-0"
          >
            <XCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <div className="flex-1 p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 overflow-y-auto">
          <div className="space-y-4 sm:space-y-6 flex flex-col">
            <div className="bg-[#050B14] border border-cyan-900/50 rounded-lg p-4 sm:p-5">
              <h4 className="text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 border-b border-cyan-900/50 pb-2">
                Data Profil
              </h4>
              <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-800/50 pb-2 gap-1 sm:gap-0">
                  <span className="text-slate-400">Nama Merchant</span>
                  <span className="text-white font-medium">
                    Warung Nasi Bu Ani
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-800/50 pb-2 gap-1 sm:gap-0">
                  <span className="text-slate-400">Kategori Usaha</span>
                  <span className="text-cyan-300 font-medium">
                    F&B (Food & Beverage)
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-800/50 pb-2 gap-1 sm:gap-0">
                  <span className="text-slate-400">NMID</span>
                  <span className="text-slate-300 font-mono">
                    ID1029384756102
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between pb-1 gap-1 sm:gap-0">
                  <span className="text-slate-400">Lokasi Terdaftar</span>
                  <span className="text-slate-300">Jakarta Selatan, DKI</span>
                </div>
              </div>
            </div>

            <div className="bg-[#1A0B14] border border-red-900/50 rounded-lg p-4 sm:p-5 flex-1">
              <h4 className="text-red-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 border-b border-red-900/50 pb-2">
                Rincian Pelanggaran (Rules)
              </h4>
              <ul className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                <li className="flex items-start gap-2.5 sm:gap-3 text-red-300 text-xs sm:text-sm bg-red-950/30 p-2 sm:p-2.5 rounded border border-red-900/30">
                  <XCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-red-400 block sm:inline">
                      Kecepatan:{" "}
                    </span>{" "}
                    850 trx / 5 menit
                  </div>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-3 text-red-300 text-xs sm:text-sm bg-red-950/30 p-2 sm:p-2.5 rounded border border-red-900/30">
                  <XCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-red-400 block sm:inline">
                      Keseragaman:{" "}
                    </span>{" "}
                    98% trx persis Rp 50.000
                  </div>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-3 text-red-300 text-xs sm:text-sm bg-red-950/30 p-2 sm:p-2.5 rounded border border-red-900/30">
                  <XCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-red-400 block sm:inline">
                      Waktu Ops:{" "}
                    </span>{" "}
                    Trx puncak jam 03:00 WIB
                  </div>
                </li>
              </ul>

              <button
                onClick={onOpenTxLog}
                className="w-full flex items-center justify-center gap-2 bg-[#0F1C38] hover:bg-[#1A2C54] text-cyan-400 font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all border border-cyan-800 shadow-[0_0_10px_rgba(6,182,212,0.1)] group text-xs sm:text-sm"
              >
                <History className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-rotate-12 transition-transform shrink-0" />
                <span>Lihat Log (24 Jam)</span>
              </button>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 flex flex-col">
            <div className="bg-gradient-to-br from-[#0A1326] to-[#0A1A3A] border border-blue-500/30 rounded-lg p-4 sm:p-5 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
              <h4 className="text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2.5 sm:mb-3 flex items-center gap-2">
                <span className="text-lg sm:text-xl">🤖</span> Analisis Sentinel
                Gen-AI
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed border-l-2 border-blue-500 pl-3 sm:pl-4 py-1 italic">
                "Pola ketiadaan variasi harga dan lonjakan ekstrem di luar jam
                operasional wajar mengindikasikan kuat bahwa QRIS F&B ini
                digunakan sebagai loket deposit Judi Online."
              </p>
            </div>

            <div className="bg-[#050B14] border border-cyan-900/50 rounded-lg p-4 sm:p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-4">
                  Tindakan Administratif
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-400 mb-4 sm:mb-6">
                  Pilih tindakan berdasarkan SOP Penanganan Anomali QRIS (Pasal
                  12.B).
                </p>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                <button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold py-2.5 sm:py-3 px-4 rounded-lg shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all border border-red-400 text-xs sm:text-sm">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span className="truncate">Generate BAP (PDF)</span>
                </button>

                <button className="w-full flex items-center justify-center gap-2 bg-[#1A2035] hover:bg-[#252D4A] text-slate-300 font-medium py-2.5 sm:py-3 px-4 rounded-lg transition-all border border-slate-700 hover:border-slate-500 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0" />
                  <span className="truncate">Tandai Normal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
