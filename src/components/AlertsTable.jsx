import React from "react";
import { AlertTriangle, ChevronRight } from "lucide-react";

export default function AlertsTable({ onOpenInvestigation }) {
  const alertData = [
    {
      id: 1,
      waktu: "14:28:05",
      merchant: "Warung Nasi Bu Ani",
      kategori: "F&B",
      totalAnomali: "850 Trx (Rp 42.5 M)",
      skorRisiko: 98,
      isHighPriority: true,
    },
    {
      id: 2,
      waktu: "14:15:22",
      merchant: "Toko Kelontong Makmur Jaya",
      kategori: "Retail",
      totalAnomali: "120 Trx (Rp 15.0 M)",
      skorRisiko: 82,
      isHighPriority: false,
    },
    {
      id: 3,
      waktu: "13:50:10",
      merchant: "Cafe Senja Indah",
      kategori: "F&B",
      totalAnomali: "45 Trx (Rp 8.2 M)",
      skorRisiko: 75,
      isHighPriority: false,
    },
  ];

  return (
    <div className="bg-[#0A1326] border border-cyan-900/40 rounded-xl shadow-lg overflow-hidden w-full">
      <div className="p-4 sm:p-5 border-b border-cyan-900/40 bg-gradient-to-r from-red-950/20 to-transparent flex justify-between items-center">
        <h3 className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide uppercase flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" /> 
          <span className="truncate">Deteksi Anomali Prioritas</span>
        </h3>
      </div>

      {/* --- TAMPILAN MOBILE (CARDS) --- */}
      {/* Ini akan menggantikan tabel menjadi layout kartu menurun di layar HP sehingga tidak perlu scroll ke samping */}
      <div className="block md:hidden divide-y divide-cyan-900/40">
        {alertData.map((alert) => (
          <div key={alert.id} className={`p-4 flex flex-col gap-3 ${alert.isHighPriority ? 'bg-red-500/5' : ''}`}>
            
            <div className="flex justify-between items-center">
              <span className="text-xs font-mono text-slate-400">{alert.waktu}</span>
              <span className="text-[10px] text-cyan-400 px-2 py-0.5 bg-cyan-950/40 rounded border border-cyan-900/50">
                {alert.kategori}
              </span>
            </div>
            
            <div>
              <div className={`font-bold text-sm leading-tight ${alert.isHighPriority ? "text-white" : "text-slate-300"}`}>
                {alert.merchant}
              </div>
              <div className="text-xs text-slate-400 mt-1">{alert.totalAnomali}</div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400">Risiko:</span>
              <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${alert.isHighPriority ? "bg-red-500 shadow-[0_0_8px_#ef4444]" : "bg-orange-500"}`}
                  style={{ width: `${alert.skorRisiko}%` }}
                ></div>
              </div>
              <span className={`font-mono font-bold text-xs ${alert.isHighPriority ? "text-red-400" : "text-orange-400"}`}>
                {alert.skorRisiko}
              </span>
            </div>
            
            <div className="flex gap-2 mt-1">
              {alert.isHighPriority ? (
                <button
                  onClick={onOpenInvestigation}
                  className="flex-1 flex justify-center items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white py-2 rounded shadow-[0_0_12px_rgba(37,99,235,0.4)] transition-all font-medium text-[11px] uppercase border border-blue-400/50"
                >
                  Investigasi <ChevronRight className="w-3 h-3" />
                </button>
              ) : (
                <button className="flex-1 flex justify-center items-center gap-1.5 bg-[#1A2C54] hover:bg-[#233A6B] text-cyan-300 py-2 rounded transition-all font-medium text-[11px] uppercase border border-cyan-800">
                  Review
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* --- TAMPILAN DESKTOP & TABLET BESAR (TABLE) --- */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#0F1C38] text-cyan-500 text-[10px] sm:text-xs tracking-wider uppercase border-b border-cyan-900/50">
              <th className="px-4 py-3 sm:px-5 sm:py-4 font-medium whitespace-nowrap w-[15%]">Waktu</th>
              <th className="px-4 py-3 sm:px-5 sm:py-4 font-medium whitespace-nowrap w-[30%]">Nama Merchant</th>
              <th className="px-4 py-3 sm:px-5 sm:py-4 font-medium whitespace-nowrap w-[20%]">Total Anomali</th>
              <th className="px-4 py-3 sm:px-5 sm:py-4 font-medium whitespace-nowrap w-[15%]">Risiko</th>
              <th className="px-4 py-3 sm:px-5 sm:py-4 font-medium text-right whitespace-nowrap w-[20%]">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-xs sm:text-sm">
            {alertData.map((alert) => (
              <tr key={alert.id} className={`border-b border-cyan-900/20 hover:bg-[#111F3D] transition-colors ${alert.isHighPriority ? "bg-red-500/5" : ""}`}>
                <td className="px-4 py-3 sm:px-5 sm:py-4 font-mono text-slate-400 whitespace-nowrap">
                  {alert.waktu}
                </td>
                <td className="px-4 py-3 sm:px-5 sm:py-4 whitespace-nowrap">
                  <div className={`font-semibold truncate ${alert.isHighPriority ? "text-white" : "text-slate-300"}`}>
                    {alert.merchant}
                  </div>
                </td>
                <td className="px-4 py-3 sm:px-5 sm:py-4 text-slate-300 whitespace-nowrap">
                  {alert.totalAnomali}
                </td>
                <td className="px-4 py-3 sm:px-5 sm:py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-16 sm:w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${alert.isHighPriority ? "bg-red-500 shadow-[0_0_8px_#ef4444]" : "bg-orange-500"}`}
                        style={{ width: `${alert.skorRisiko}%` }}
                      ></div>
                    </div>
                    <span className={`font-mono font-bold text-[10px] sm:text-xs ${alert.isHighPriority ? "text-red-400 drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]" : "text-orange-400"}`}>
                      {alert.skorRisiko}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 sm:px-5 sm:py-4 text-right whitespace-nowrap">
                  {alert.isHighPriority ? (
                    <button
                      onClick={onOpenInvestigation}
                      className="inline-flex items-center gap-1.5 sm:gap-2 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 sm:px-4 sm:py-1.5 rounded shadow-[0_0_12px_rgba(37,99,235,0.4)] transition-all font-medium text-[10px] sm:text-xs tracking-wide uppercase border border-blue-400/50"
                    >
                      Investigasi <ChevronRight className="w-3 h-3" />
                    </button>
                  ) : (
                    <button className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#1A2C54] hover:bg-[#233A6B] text-cyan-300 px-3 py-1.5 sm:px-4 sm:py-1.5 rounded transition-all font-medium text-[10px] sm:text-xs tracking-wide uppercase border border-cyan-800">
                      Review
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}