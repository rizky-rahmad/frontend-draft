import React, { useEffect, useState, useCallback, Suspense, lazy } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import KpiCards from "./components/KpiCards";
import VelocityRadar from "./components/VelocityRadar";
import AlertsTable from "./components/AlertsTable";
import "tailwindcss";

// Lazy load modals
const InvestigationModal = lazy(() => import("./components/InvestigationModal"));
const TransactionLogModal = lazy(() => import("./components/TransactionLogModal"));

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTxModalOpen, setIsTxModalOpen] = useState(false);
  const [time, setTime] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setTime(`${hours}.${minutes}`);
    };
    updateTime();
    const timerId = setInterval(updateTime, 1000); // Perbarui setiap detik
    return () => clearInterval(timerId);
  }, []);

  // Gunakan useCallback agar referensi fungsi tidak berubah setiap App render
  const handleOpenModal = useCallback(() => setIsModalOpen(true), []);
  const handleCloseModal = useCallback(() => setIsModalOpen(false), []);
  const handleOpenTxModal = useCallback(() => setIsTxModalOpen(true), []);
  const handleCloseTxModal = useCallback(() => setIsTxModalOpen(false), []);
  const toggleSidebar = useCallback(() => setIsSidebarOpen((prev) => !prev), []);

  return (
    <div className="flex h-screen bg-[#050B14] text-slate-300 font-sans overflow-hidden selection:bg-cyan-900 selection:text-cyan-50">
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

      <main className="flex-1 flex flex-col h-full relative overflow-y-auto w-full">
        <Header time={time} onMenuClick={toggleSidebar} />

        <div className="p-4 sm:p-6 space-y-6">
          <KpiCards />
          <VelocityRadar time={time} />
          {/* Kirim handle yang sudah di-memoize */}
          <AlertsTable onOpenInvestigation={handleOpenModal} />
        </div>
      </main>

      {/* Gunakan Suspense untuk fallback loading state */}
      <Suspense fallback={<div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50">Loading...</div>}>
        {isModalOpen && (
          <InvestigationModal 
            onClose={handleCloseModal} 
            onOpenTxLog={handleOpenTxModal} 
          />
        )}
        {isTxModalOpen && (
          <TransactionLogModal 
            onClose={handleCloseTxModal} 
          />
        )}
      </Suspense>
    </div>
  );
}