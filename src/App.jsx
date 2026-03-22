import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import KpiCards from "./components/KpiCards";
import VelocityRadar from "./components/VelocityRadar";
import AlertsTable from "./components/AlertsTable";
import InvestigationModal from "./components/InvestigationModal";
import TransactionLogModal from "./components/TransactionLogModal";
import "tailwindcss";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTxModalOpen, setIsTxModalOpen] = useState(false);
  const [time, setTime] = useState("");
  
  // STATE BARU: Untuk kontrol buka/tutup Sidebar di mode Mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Update jam real-time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setTime(`${hours}.${minutes}`);
    };
    updateTime();
    const timerId = setInterval(updateTime, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="flex h-screen bg-[#050B14] text-slate-300 font-sans overflow-hidden selection:bg-cyan-900 selection:text-cyan-50">
      {/* Mengirim state isSidebarOpen dan fungsi untuk menutup ke Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main className="flex-1 flex flex-col h-full relative overflow-y-auto w-full">
        {/* Mengirim fungsi onMenuClick ke Header untuk membuka Sidebar */}
        <Header time={time} onMenuClick={() => setIsSidebarOpen(true)} />

        <div className="p-4 sm:p-6 space-y-6">
          <KpiCards />
          <VelocityRadar time={time} />
          <AlertsTable onOpenInvestigation={() => setIsModalOpen(true)} />
        </div>
      </main>

      {isModalOpen && (
        <InvestigationModal 
          onClose={() => setIsModalOpen(false)} 
          onOpenTxLog={() => setIsTxModalOpen(true)} 
        />
      )}

      {isTxModalOpen && (
        <TransactionLogModal 
          onClose={() => setIsTxModalOpen(false)} 
        />
      )}
    </div>
  );
}