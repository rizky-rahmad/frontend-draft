import React, { useState } from 'react';
import { 
  RadioReceiver, 
  FolderArchive, 
  Activity, 
  AlertTriangle, 
  XCircle, 
  FileText, 
  CheckCircle2, 
  Cpu, 
  Wifi, 
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import "tailwindcss";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Data Dummy untuk Tabel Alert
  const alertData = [
    {
      id: 1,
      waktu: '14:28:05',
      merchant: 'Warung Nasi Bu Ani',
      kategori: 'F&B',
      totalAnomali: '850 Trx (Rp 42.500.000)',
      skorRisiko: 98,
      isHighPriority: true,
    },
    {
      id: 2,
      waktu: '14:15:22',
      merchant: 'Toko Kelontong Makmur Jaya',
      kategori: 'Retail',
      totalAnomali: '120 Trx (Rp 15.000.000)',
      skorRisiko: 82,
      isHighPriority: false,
    },
    {
      id: 3,
      waktu: '13:50:10',
      merchant: 'Cafe Senja Indah',
      kategori: 'F&B',
      totalAnomali: '45 Trx (Rp 8.200.000)',
      skorRisiko: 75,
      isHighPriority: false,
    }
  ];

  return (
    <div className="flex h-screen bg-[#050B14] text-slate-300 font-sans overflow-hidden selection:bg-cyan-900 selection:text-cyan-50">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0A1326] border-r border-cyan-900/30 flex flex-col z-10 shadow-[4px_0_24px_rgba(0,0,0,0.5)]">
        <div className="h-16 flex items-center px-6 border-b border-cyan-900/30">
          <div className="flex items-center gap-3">
            <ShieldAlert className="text-cyan-400 w-6 h-6" />
            <h1 className="font-bold text-lg text-white tracking-wide">QRIS Sentinel AI</h1>
          </div>
        </div>
        
        <nav className="flex-1 py-6 px-3 space-y-2">
          {/* Active Menu */}
          <button className="w-full flex items-center gap-3 px-3 py-3 bg-cyan-950/40 text-cyan-300 rounded-lg border border-cyan-800/50 shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all">
            <RadioReceiver className="w-5 h-5" />
            <span className="font-medium tracking-wide text-sm">Command Center</span>
            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_#22d3ee]"></div>
          </button>
          
          {/* Inactive Menu */}
          <button className="w-full flex items-center gap-3 px-3 py-3 text-slate-400 hover:text-cyan-200 hover:bg-[#0F1C38] rounded-lg transition-all">
            <FolderArchive className="w-5 h-5" />
            <span className="font-medium tracking-wide text-sm">Arsip Laporan BAP</span>
          </button>
        </nav>
        
        <div className="p-4 border-t border-cyan-900/30">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">System Version</div>
          <div className="text-xs text-cyan-600 font-mono">v4.2.0-STABLE (OJK-BI)</div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col h-full relative overflow-y-auto">
        
        {/* TOP HEADER */}
        <header className="h-16 border-b border-cyan-900/30 bg-[#0A1326]/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-20">
          <div className="flex items-center gap-2 bg-[#050B14] px-4 py-1.5 rounded-full border border-slate-800">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse"></div>
            <span className="text-xs font-mono text-white tracking-wide">
              Sentinel Engine: <span className="text-green-400">Online</span> <span className="text-slate-600 mx-1">|</span> Data Stream: <span className="text-cyan-400">Connected</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm font-semibold text-white">Analis BI - Divisi APU/PPT</div>
              <div className="text-xs text-cyan-500 font-mono">ID: OJK-AUTH-9921</div>
            </div>
            <div className="h-8 w-px bg-cyan-900/50"></div>
            <div className="text-sm font-mono text-white bg-cyan-950/30 px-3 py-1.5 rounded border border-cyan-900/50">
              14:30 WIB
            </div>
          </div>
        </header>

        {/* DASHBOARD CONTENT */}
        <div className="p-6 space-y-6">
          
          {/* TOP ROW: 3 KPI CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0A1326] border border-cyan-900/40 rounded-xl p-5 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <h3 className="text-cyan-400 text-sm font-semibold tracking-wide uppercase mb-2 flex items-center gap-2">
                <Activity className="w-4 h-4" /> Total Transaksi Terproses
              </h3>
              <div className="text-4xl font-bold text-white tracking-tight">1,205,430</div>
              <div className="mt-2 text-xs text-slate-400 font-mono">+12.4% dari jam sebelumnya</div>
            </div>

            <div className="bg-[#0A1326] border border-cyan-900/40 rounded-xl p-5 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <h3 className="text-cyan-400 text-sm font-semibold tracking-wide uppercase mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4" /> Volume Rupiah Terpantau
              </h3>
              <div className="text-4xl font-bold text-white tracking-tight">Rp 45.2 Miliar</div>
              <div className="mt-2 text-xs text-slate-400 font-mono">Dalam siklus 24 jam terakhir</div>
            </div>

            <div className="bg-[#1A0B14] border border-red-500/40 rounded-xl p-5 shadow-[0_0_20px_rgba(239,68,68,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-400 to-red-600 shadow-[0_0_10px_#ef4444]"></div>
              <h3 className="text-red-400 text-sm font-semibold tracking-wide uppercase mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-500" /> Antrean Investigasi (Red Flag)
              </h3>
              <div className="text-4xl font-bold text-red-500 tracking-tight drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
                3 Kasus
              </div>
              <div className="mt-2 text-xs text-red-400/70 font-mono flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></div>
                Menunggu tindakan segera
              </div>
            </div>
          </div>

          {/* MIDDLE ROW: VELOCITY RADAR CHART */}
          <div className="bg-[#0A1326] border border-cyan-900/40 rounded-xl p-5 shadow-lg">
            <h3 className="text-cyan-400 text-sm font-semibold tracking-wide uppercase mb-4 flex items-center gap-2">
              <Wifi className="w-4 h-4" /> Kecepatan Transaksi per Menit (Velocity Radar)
            </h3>
            
            <div className="h-64 w-full relative border-b border-l border-cyan-900/50">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between opacity-10">
                <div className="w-full h-px bg-cyan-400"></div>
                <div className="w-full h-px bg-cyan-400"></div>
                <div className="w-full h-px bg-cyan-400"></div>
                <div className="w-full h-px bg-cyan-400"></div>
                <div className="w-full h-px bg-cyan-400"></div>
              </div>

              {/* Y-Axis Labels */}
              <div className="absolute -left-10 inset-y-0 flex flex-col justify-between text-[10px] text-cyan-600 font-mono py-1">
                <span>1000</span>
                <span>750</span>
                <span>500</span>
                <span>250</span>
                <span>0</span>
              </div>

              {/* X-Axis Labels */}
              <div className="absolute -bottom-6 inset-x-0 flex justify-between text-[10px] text-cyan-600 font-mono px-2">
                <span>14:00</span>
                <span>14:05</span>
                <span>14:10</span>
                <span>14:15</span>
                <span>14:20</span>
                <span>14:25</span>
                <span className="text-red-400">14:30 (Now)</span>
              </div>

              {/* Custom SVG Line Chart */}
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
                <defs>
                  <linearGradient id="lineColor" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22d3ee" />   {/* Cyan */}
                    <stop offset="78%" stopColor="#22d3ee" />  {/* Cyan */}
                    <stop offset="82%" stopColor="#ef4444" />  {/* Red Start */}
                    <stop offset="85%" stopColor="#ef4444" />  {/* Red Peak */}
                    <stop offset="88%" stopColor="#ef4444" />  {/* Red End */}
                    <stop offset="90%" stopColor="#22d3ee" />  {/* Cyan */}
                    <stop offset="100%" stopColor="#22d3ee" /> {/* Cyan */}
                  </linearGradient>
                  
                  {/* Glowing effect for the red spike */}
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                
                {/* The Anomaly Spike Area fill */}
                <path 
                  d="M 0 95 L 100 93 L 200 96 L 300 94 L 400 95 L 500 92 L 600 96 L 700 94 L 780 95 L 820 95 L 850 10 L 880 95 L 900 94 L 1000 95 L 1000 100 L 0 100 Z" 
                  fill="url(#lineColor)" 
                  fillOpacity="0.1"
                />
                
                {/* The Main Line */}
                <path 
                  d="M 0 95 L 100 93 L 200 96 L 300 94 L 400 95 L 500 92 L 600 96 L 700 94 L 780 95 L 820 95 L 850 10 L 880 95 L 900 94 L 1000 95" 
                  fill="none" 
                  stroke="url(#lineColor)" 
                  strokeWidth="2.5"
                  vectorEffect="non-scaling-stroke"
                  filter="url(#glow)"
                />
                
                {/* Highlight Point for Anomaly */}
                <circle cx="850" cy="10" r="4" fill="#ef4444" className="animate-pulse" filter="url(#glow)" />
              </svg>
            </div>
          </div>

          {/* BOTTOM ROW: LIVE ALERTS TABLE */}
          <div className="bg-[#0A1326] border border-cyan-900/40 rounded-xl shadow-lg overflow-hidden">
            <div className="p-5 border-b border-cyan-900/40 bg-gradient-to-r from-red-950/20 to-transparent">
              <h3 className="text-cyan-400 text-sm font-semibold tracking-wide uppercase flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-500" /> Daftar Deteksi Anomali (Prioritas Tinggi)
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
                      className={`border-b border-cyan-900/20 hover:bg-[#111F3D] transition-colors ${alert.isHighPriority ? 'bg-red-500/5' : ''}`}
                    >
                      <td className="px-5 py-4 font-mono text-slate-400">{alert.waktu}</td>
                      <td className="px-5 py-4">
                        <div className={`font-semibold ${alert.isHighPriority ? 'text-white' : 'text-slate-300'}`}>
                          {alert.merchant}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-slate-300">{alert.totalAnomali}</td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden w-24">
                            <div 
                              className={`h-full rounded-full ${alert.isHighPriority ? 'bg-red-500 shadow-[0_0_8px_#ef4444]' : 'bg-orange-500'}`} 
                              style={{ width: `${alert.skorRisiko}%` }}
                            ></div>
                          </div>
                          <span className={`font-mono font-bold ${alert.isHighPriority ? 'text-red-400 drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]' : 'text-orange-400'}`}>
                            {alert.skorRisiko}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-right">
                        {alert.isHighPriority ? (
                          <button 
                            onClick={() => setIsModalOpen(true)}
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

        </div>
      </main>

      {/* FULL-SCREEN MODAL OVERLAY */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12">
          {/* Dimmed Background */}
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-5xl bg-[#0A1326] border border-cyan-800 rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col max-h-full">
            
            {/* Modal Header */}
            <div className="bg-[#0F1C38] px-6 py-4 border-b border-cyan-800/80 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white tracking-wide">Detail Investigasi Merchant: Warung Nasi Bu Ani</h2>
                <div className="mt-1 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider border border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    Risiko Tinggi (Judol)
                  </span>
                  <span className="text-slate-500 text-xs font-mono">ID Investigasi: INV-8821-QRIS</span>
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white p-2 hover:bg-slate-800 rounded-full transition-colors"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-y-auto">
              
              {/* Left Side: Data Fakta */}
              <div className="space-y-6">
                <div className="bg-[#050B14] border border-cyan-900/50 rounded-lg p-5">
                  <h4 className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-4 border-b border-cyan-900/50 pb-2">Data Profil</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between border-b border-slate-800/50 pb-2">
                      <span className="text-slate-400">Nama Merchant</span>
                      <span className="text-white font-medium">Warung Nasi Bu Ani</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/50 pb-2">
                      <span className="text-slate-400">Kategori Usaha</span>
                      <span className="text-cyan-300 font-medium">F&B (Food & Beverage)</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/50 pb-2">
                      <span className="text-slate-400">NMID</span>
                      <span className="text-slate-300 font-mono">ID1029384756102</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="text-slate-400">Lokasi Terdaftar</span>
                      <span className="text-slate-300">Jakarta Selatan, DKI Jakarta</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1A0B14] border border-red-900/50 rounded-lg p-5">
                  <h4 className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-4 border-b border-red-900/50 pb-2">Rincian Pelanggaran (Rules)</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-red-300 text-sm bg-red-950/30 p-2.5 rounded border border-red-900/30">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-red-400">Kecepatan:</span> 850 trx / 5 menit
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-red-300 text-sm bg-red-950/30 p-2.5 rounded border border-red-900/30">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-red-400">Keseragaman:</span> 98% trx persis Rp 50.000
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-red-300 text-sm bg-red-950/30 p-2.5 rounded border border-red-900/30">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-red-400">Waktu Operasional:</span> Trx puncak jam 03:00 WIB
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Side: Analisis & Aksi */}
              <div className="space-y-6 flex flex-col">
                
                {/* Top Box: AI Analysis */}
                <div className="bg-gradient-to-br from-[#0A1326] to-[#0A1A3A] border border-blue-500/30 rounded-lg p-5 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
                  <h4 className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="text-xl">🤖</span> Analisis Sentinel Gen-AI
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-blue-500 pl-4 py-1 italic">
                    "Pola ketiadaan variasi harga dan lonjakan ekstrem di luar jam operasional wajar mengindikasikan kuat bahwa QRIS F&B ini digunakan sebagai loket deposit Judi Online. Tidak ditemukan bukti pembelian barang riil."
                  </p>
                </div>

                {/* Bottom Box: Actions */}
                <div className="bg-[#050B14] border border-cyan-900/50 rounded-lg p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-4">Tindakan Administratif Diperlukan</h4>
                    <p className="text-sm text-slate-400 mb-6">Pilih tindakan berdasarkan SOP Penanganan Anomali QRIS (Pasal 12.B).</p>
                  </div>
                  
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold py-3 px-4 rounded-lg shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all border border-red-400">
                      <FileText className="w-5 h-5" />
                      Generate Draft BAP (PDF)
                    </button>
                    
                    <button className="w-full flex items-center justify-center gap-2 bg-[#1A2035] hover:bg-[#252D4A] text-slate-300 font-medium py-3 px-4 rounded-lg transition-all border border-slate-700 hover:border-slate-500">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Tandai Normal / Abaikan
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}