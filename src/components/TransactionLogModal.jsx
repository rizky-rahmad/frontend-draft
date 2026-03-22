import React, { useMemo, useEffect } from "react";
import { Search, XCircle, AlertTriangle, ArrowDownUp, Download } from "lucide-react";
import { generateTransactionLog } from "../utils/mockData"; // Import fungsi

export default function TransactionLogModal({ onClose }) {
  // Data lebih rapi, tidak mengotori komponen
  const transactionLog = useMemo(() => generateTransactionLog(), []);

  // Aksesibilitas: Menutup modal dengan tombol 'Escape'
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={onClose}></div>

      <div className="relative w-full max-w-5xl bg-[#0A1326] border border-blue-500/50 rounded-xl shadow-[0_0_50px_rgba(37,99,235,0.2)] overflow-hidden flex flex-col max-h-[95vh] sm:max-h-[90vh]">
        
        {/* Header Modal Log */}
        <div className="bg-[#0F1C38] px-4 py-3 sm:px-6 sm:py-4 border-b border-blue-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between z-10 gap-4 sm:gap-0 shrink-0">
          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <div className="p-2 sm:p-2.5 bg-blue-500/20 rounded-lg border border-blue-500/50 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)] shrink-0">
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-sm sm:text-lg lg:text-xl font-bold text-white tracking-wide truncate">
                Log: Warung Nasi Bu Ani
              </h2>
              <p className="text-[10px] sm:text-xs text-blue-400 font-mono mt-0.5 truncate">
                {transactionLog.length} data | 24 Jam Terakhir
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-end w-full sm:w-auto gap-2 sm:gap-3">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold text-cyan-400 bg-cyan-950/50 border border-cyan-800 px-3 py-1.5 sm:py-2 rounded hover:bg-cyan-900 transition-colors">
              <Download className="w-3 h-3 sm:w-4 sm:h-4" /> <span className="whitespace-nowrap">Export CSV</span>
            </button>
            <div className="hidden sm:block w-px h-6 bg-slate-700 mx-1"></div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1.5 sm:p-2 hover:bg-slate-800 rounded-full transition-colors bg-slate-800/50 sm:bg-transparent shrink-0"
            >
              <XCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Area List/Tabel Log */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-[#050B14]">
          
          {/* Pesan Peringatan Pola AI */}
          <div className="mb-4 sm:mb-6 bg-gradient-to-r from-red-950/60 to-[#050B14] border-l-4 border-red-500 p-3 sm:p-4 rounded-r-lg shadow-[inset_0_0_20px_rgba(239,68,68,0.05)]">
            <h4 className="text-red-400 text-xs sm:text-sm font-bold flex items-center gap-2 mb-1.5 sm:mb-2">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse shrink-0" /> <span className="truncate">Pola Mesin (Sentinel Analytics):</span>
            </h4>
            <p className="text-[10px] sm:text-sm text-red-200/80 leading-relaxed max-w-4xl">
              Terdapat lonjakan <strong className="text-red-300">100+ transaksi beruntun</strong> di luar jam wajar. 
              Jarak antar transaksi <strong className="text-red-300">(2 - 12 detik)</strong>, dengan rotasi nominal bulat 
              berulang. Pola ini identik dengan penggunaan <em>bot</em> deposit massal Judi Online.
            </p>
          </div>

          <div className="border border-cyan-900/50 rounded-lg overflow-hidden bg-[#0A1326]">
            
            {/* --- TAMPILAN MOBILE & TABLET (CARDS) --- */}
            {/* Diubah dari md:hidden menjadi lg:hidden agar layar tablet tetap menggunakan mode card dan tidak perlu scroll ke samping */}
            <div className="block lg:hidden divide-y divide-cyan-900/30">
              {transactionLog.map((tx, index) => (
                <div key={index} className={`p-3 sm:p-4 flex flex-col gap-2.5 sm:gap-3 ${tx.isAnomaly ? "bg-red-500/5" : "bg-transparent"}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-[10px] text-slate-500 mb-0.5">Waktu Transaksi</div>
                      <div className={`text-xs sm:text-sm font-bold ${tx.isAnomaly ? "text-red-300" : "text-slate-300"}`}>
                        {tx.waktu}
                      </div>
                    </div>
                    <div>
                      {tx.isAnomaly ? (
                        <span className="inline-block px-2 py-1 bg-red-600/20 text-red-500 text-[9px] sm:text-[10px] uppercase font-bold rounded border border-red-600/30">
                          Suspicious
                        </span>
                      ) : (
                        <span className="inline-block px-2 py-1 bg-slate-800 text-slate-400 text-[9px] sm:text-[10px] uppercase font-bold rounded border border-slate-700">
                          Normal
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-end border-t border-cyan-900/20 pt-2.5 sm:pt-3">
                    <div className="min-w-0 pr-2">
                      <div className="text-[10px] text-slate-500 mb-0.5">ID Transaksi</div>
                      <div className="text-xs sm:text-sm text-slate-400 font-mono truncate">{tx.id}</div>
                      
                      <div className="text-[10px] text-slate-500 mb-0.5 mt-1.5 sm:mt-2">Sumber Dana</div>
                      <div className="text-xs sm:text-sm text-slate-300 truncate max-w-[130px] sm:max-w-xs">{tx.sumber}</div>
                    </div>
                    
                    <div className="text-right shrink-0">
                      <div className="text-[10px] text-slate-500 mb-1">Nominal</div>
                      <span className={`inline-block px-2 sm:px-3 py-1 sm:py-1.5 rounded font-bold text-xs sm:text-sm ${
                        tx.isAnomaly 
                          ? "bg-red-950/80 text-red-400 border border-red-900/50 shadow-[0_0_10px_rgba(239,68,68,0.1)]" 
                          : "text-green-400 bg-green-950/30 border border-green-900/30"
                      }`}>
                        {tx.nominal}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* --- TAMPILAN DESKTOP (TABLE) --- */}
            {/* Diubah dari md:block menjadi lg:block agar tabel panjang hanya dirender di layar PC/Laptop yang lebar */}
            <div className="hidden lg:block w-full">
              <table className="w-full text-left border-collapse table-auto">
                <thead className="sticky top-0 bg-[#0F1C38] z-10 shadow-md">
                  <tr className="text-cyan-500 text-xs tracking-wider uppercase border-b border-cyan-900/50">
                    <th className="px-5 py-4 font-medium w-[15%]">ID Transaksi</th>
                    <th className="px-5 py-4 font-medium flex items-center gap-1 w-[20%]">
                      Waktu <ArrowDownUp className="w-3 h-3"/>
                    </th>
                    <th className="px-5 py-4 font-medium w-[20%]">Nominal</th>
                    <th className="px-5 py-4 font-medium w-[30%]">Metode / Sumber Dana</th>
                    <th className="px-5 py-4 font-medium text-center w-[15%]">Indikasi AI</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-mono">
                  {transactionLog.map((tx, index) => (
                    <tr
                      key={index}
                      className={`border-b border-cyan-900/20 hover:bg-[#111F3D] transition-colors ${
                        tx.isAnomaly ? "bg-red-500/5" : "bg-[#050B14]/50"
                      }`}
                    >
                      <td className="px-5 py-3 text-slate-400">{tx.id}</td>
                      <td className={`px-5 py-3 whitespace-nowrap ${tx.isAnomaly ? "text-red-300 font-bold" : "text-slate-300"}`}>
                        {tx.waktu}
                      </td>
                      <td className="px-5 py-3 whitespace-nowrap">
                        <span className={`px-2.5 py-1 rounded font-bold ${
                          tx.isAnomaly 
                            ? "bg-red-950/80 text-red-400 border border-red-900/50 shadow-[0_0_10px_rgba(239,68,68,0.1)]" 
                            : "text-green-400"
                        }`}>
                          {tx.nominal}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-slate-300 truncate max-w-[200px]">{tx.sumber}</td>
                      <td className="px-5 py-3 text-center">
                        {tx.isAnomaly ? (
                          <span className="inline-block w-24 py-1 bg-red-600/20 text-red-500 text-[10px] uppercase font-bold rounded border border-red-600/30">
                            Suspicious
                          </span>
                        ) : (
                          <span className="inline-block w-24 py-1 bg-slate-800 text-slate-400 text-[10px] uppercase font-bold rounded border border-slate-700">
                            Normal
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

          <div className="mt-4 sm:mt-5 text-center pb-2">
            <p className="text-[10px] sm:text-xs text-slate-500 italic">
              Akhir dari log. Menampilkan total {transactionLog.length} transaksi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}