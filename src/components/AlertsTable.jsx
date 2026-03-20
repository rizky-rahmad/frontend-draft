import React from "react";
import { AlertTriangle, ChevronRight } from "lucide-react";

export default function AlertsTable({ onOpenInvestigation }) {
  const alertData = [
    {
      id: 1,
      waktu: "14:28:05",
      merchant: "Warung Nasi Bu Ani",
      kategori: "F&B",
      totalAnomali: "850 Trx (Rp 42.500.000)",
      skorRisiko: 98,
      isHighPriority: true,
    },
    {
      id: 2,
      waktu: "14:15:22",
      merchant: "Toko Kelontong Makmur Jaya",
      kategori: "Retail",
      totalAnomali: "120 Trx (Rp 15.000.000)",
      skorRisiko: 82,
      isHighPriority: false,
    },
    {
      id: 3,
      waktu: "13:50:10",
      merchant: "Cafe Senja Indah",
      kategori: "F&B",
      totalAnomali: "45 Trx (Rp 8.200.000)",
      skorRisiko: 75,
      isHighPriority: false,
    },
  ];

  return (
    <div className="bg-[#0A1326] border border-cyan-900/40 rounded-xl shadow-lg overflow-hidden">
      <div className="p-5 border-b border-cyan-900/40 bg-gradient-to-r from-red-950/20 to-transparent">
        <h3 className="text-cyan-400 text-sm font-semibold tracking-wide uppercase flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-500" /> Daftar Deteksi
          Anomali (Prioritas Tinggi)
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#0F1C38] text-cyan-500 text-xs tracking-wider uppercase border-b border-cyan-900/50">
              <th className="px-5 py-4 font-medium">Waktu Deteksi</th>
              <th className="px-5 py-4 font-medium">Nama Merchant</th>
              <th className="px-5 py-4 font-medium">Total Transaksi Anomali</th>
              <th className="px-5 py-4 font-medium">Skor Risiko</th>
              <th className="px-5 py-4 font-medium text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {alertData.map((alert) => (
              <tr
                key={alert.id}
                className={`border-b border-cyan-900/20 hover:bg-[#111F3D] transition-colors ${
                  alert.isHighPriority ? "bg-red-500/5" : ""
                }`}
              >
                <td className="px-5 py-4 font-mono text-slate-400">
                  {alert.waktu}
                </td>
                <td className="px-5 py-4">
                  <div className={`font-semibold ${alert.isHighPriority ? "text-white" : "text-slate-300"}`}>
                    {alert.merchant}
                  </div>
                </td>
                <td className="px-5 py-4 text-slate-300">
                  {alert.totalAnomali}
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden w-24">
                      <div
                        className={`h-full rounded-full ${
                          alert.isHighPriority ? "bg-red-500 shadow-[0_0_8px_#ef4444]" : "bg-orange-500"
                        }`}
                        style={{ width: `${alert.skorRisiko}%` }}
                      ></div>
                    </div>
                    <span
                      className={`font-mono font-bold ${
                        alert.isHighPriority ? "text-red-400 drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]" : "text-orange-400"
                      }`}
                    >
                      {alert.skorRisiko}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4 text-right">
                  {alert.isHighPriority ? (
                    <button
                      onClick={onOpenInvestigation}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded shadow-[0_0_12px_rgba(37,99,235,0.4)] transition-all font-medium text-xs tracking-wide uppercase border border-blue-400/50"
                    >
                      Buka Investigasi <ChevronRight className="w-3 h-3" />
                    </button>
                  ) : (
                    <button className="inline-flex items-center gap-2 bg-[#1A2C54] hover:bg-[#233A6B] text-cyan-300 px-4 py-2 rounded transition-all font-medium text-xs tracking-wide uppercase border border-cyan-800">
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