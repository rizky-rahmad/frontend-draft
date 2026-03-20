import React, { useMemo } from "react";
import { Search, XCircle, AlertTriangle, ArrowDownUp, Download } from "lucide-react";

export default function TransactionLogModal({ onClose }) {
  // Generator Data Dummy untuk 100+ Transaksi Pola Judi Online
  const transactionLog = useMemo(() => {
    const data = [];
    let currentTimestamp = new Date("2023-10-27T03:15:59"); 
    let txId = 99950;

    // Nominal bulat khas deposit Judol
    const nominals = ["Rp 25.000", "Rp 50.000", "Rp 50.000", "Rp 100.000", "Rp 150.000", "Rp 200.000"];
    const sources = [
      "E-Wallet (Dana)", 
      "E-Wallet (OVO)", 
      "E-Wallet (GoPay)", 
      "Bank Transfer (BCA)", 
      "Bank Transfer (BRI)", 
      "Bank Transfer (Mandiri)"
    ];

    // Generate 100 transaksi anomali (beruntun dalam hitungan detik)
    for (let i = 0; i < 100; i++) {
      // Jeda antar transaksi hanya 2 hingga 12 detik (sangat tidak wajar / bot)
      const subtractSeconds = Math.floor(Math.random() * 10) + 2;
      currentTimestamp.setSeconds(currentTimestamp.getSeconds() - subtractSeconds);

      const h = String(currentTimestamp.getHours()).padStart(2, '0');
      const m = String(currentTimestamp.getMinutes()).padStart(2, '0');
      const s = String(currentTimestamp.getSeconds()).padStart(2, '0');
      
      const nominal = nominals[Math.floor(Math.random() * nominals.length)];
      const sumber = sources[Math.floor(Math.random() * sources.length)];

      data.push({
        id: `TX-${txId--}`,
        waktu: `${h}:${m}:${s} WIB`,
        nominal: nominal,
        sumber: sumber,
        isAnomaly: true
      });
    }

    // Sisipkan beberapa transaksi normal di jam wajar (Makan Malam / Siang hari sebelumnya)
    data.push({ id: `TX-${txId--}`, waktu: "19:35:12 WIB", nominal: "Rp 42.000", sumber: "E-Wallet (GoPay)", isAnomaly: false });
    data.push({ id: `TX-${txId--}`, waktu: "19:10:05 WIB", nominal: "Rp 35.000", sumber: "E-Wallet (OVO)", isAnomaly: false });
    data.push({ id: `TX-${txId--}`, waktu: "12:45:30 WIB", nominal: "Rp 125.000", sumber: "Bank Transfer (BCA)", isAnomaly: false });
    data.push({ id: `TX-${txId--}`, waktu: "12:20:18 WIB", nominal: "Rp 28.000", sumber: "E-Wallet (Dana)", isAnomaly: false });

    return data;
  }, []);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 lg:p-12">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={onClose}></div>

      <div className="relative w-full max-w-5xl bg-[#0A1326] border border-blue-500/50 rounded-xl shadow-[0_0_50px_rgba(37,99,235,0.2)] overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Modal Log */}
        <div className="bg-[#0F1C38] px-6 py-4 border-b border-blue-900/50 flex items-center justify-between z-10">
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-blue-500/20 rounded-lg border border-blue-500/50 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-wide">
                Log Transaksi: Warung Nasi Bu Ani
              </h2>
              <p className="text-xs text-blue-400 font-mono mt-0.5">
                Menampilkan {transactionLog.length} transaksi terakhir | Filter: 24 Jam Terakhir
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 text-xs font-semibold text-cyan-400 bg-cyan-950/50 border border-cyan-800 px-3 py-1.5 rounded hover:bg-cyan-900 transition-colors">
              <Download className="w-4 h-4" /> Export CSV
            </button>
            <div className="w-px h-6 bg-slate-700 mx-1"></div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-2 hover:bg-slate-800 rounded-full transition-colors"
            >
              <XCircle className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Area Tabel Log */}
        <div className="flex-1 overflow-auto p-6 bg-[#050B14]">
          
          {/* Pesan Peringatan Pola AI */}
          <div className="mb-6 bg-gradient-to-r from-red-950/60 to-[#050B14] border-l-4 border-red-500 p-4 rounded-r-lg shadow-[inset_0_0_20px_rgba(239,68,68,0.05)]">
            <h4 className="text-red-400 text-sm font-bold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 animate-pulse" /> Deteksi Pola Mesin (Sentinel Analytics):
            </h4>
            <p className="text-sm text-red-200/80 leading-relaxed max-w-4xl">
              Terdapat lonjakan <strong className="text-red-300">100+ transaksi beruntun</strong> di luar jam operasional normal (03:00 - 04:00 WIB). 
              Jarak antar transaksi tercatat sangat tidak wajar <strong className="text-red-300">(2 - 12 detik)</strong>, dengan rotasi nominal bulat 
              berulang (Rp 25.000, Rp 50.000, Rp 100.000). Pola "High-Velocity" ini identik dengan penggunaan <em>script/bot</em> deposit massal Judi Online.
            </p>
          </div>

          <div className="border border-cyan-900/50 rounded-lg overflow-hidden bg-[#0A1326]">
            <table className="w-full text-left border-collapse relative">
              <thead className="sticky top-0 bg-[#0F1C38] z-10 shadow-md">
                <tr className="text-cyan-500 text-xs tracking-wider uppercase border-b border-cyan-900/50">
                  <th className="px-5 py-4 font-medium">ID Transaksi</th>
                  <th className="px-5 py-4 font-medium flex items-center gap-1">
                    Waktu <ArrowDownUp className="w-3 h-3"/>
                  </th>
                  <th className="px-5 py-4 font-medium">Nominal</th>
                  <th className="px-5 py-4 font-medium">Metode / Sumber Dana</th>
                  <th className="px-5 py-4 font-medium text-center">Indikasi AI</th>
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
                    <td className={`px-5 py-3 ${tx.isAnomaly ? "text-red-300 font-bold" : "text-slate-300"}`}>
                      {tx.waktu}
                    </td>
                    <td className="px-5 py-3">
                      <span className={`px-2.5 py-1 rounded font-bold ${
                        tx.isAnomaly 
                          ? "bg-red-950/80 text-red-400 border border-red-900/50 shadow-[0_0_10px_rgba(239,68,68,0.1)]" 
                          : "text-green-400"
                      }`}>
                        {tx.nominal}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-slate-300">{tx.sumber}</td>
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

          <div className="mt-5 text-center">
            <p className="text-xs text-slate-500 italic">
              Akhir dari log. Menampilkan total {transactionLog.length} transaksi dalam rentang 24 jam terakhir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}