import React from "react";
import { Wifi } from "lucide-react";

export default function VelocityRadar({ time }) {
  return (
    <div className="bg-[#0A1326] border border-cyan-900/40 rounded-xl p-4 sm:p-5 shadow-lg w-full">
      <h3 className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 flex items-center gap-2">
        <Wifi className="w-4 h-4 shrink-0" /> <span className="truncate">Velocity Radar (Trx/Min)</span>
      </h3>

      <div className="h-48 sm:h-64 w-full relative border-b border-l border-cyan-900/50">
        <div className="absolute inset-0 flex flex-col justify-between opacity-10">
          <div className="w-full h-px bg-cyan-400"></div>
          <div className="w-full h-px bg-cyan-400"></div>
          <div className="w-full h-px bg-cyan-400"></div>
          <div className="w-full h-px bg-cyan-400"></div>
          <div className="w-full h-px bg-cyan-400"></div>
        </div>

        <div className="absolute -left-7 sm:-left-10 inset-y-0 flex flex-col justify-between text-[8px] sm:text-[10px] text-cyan-600 font-mono py-1">
          <span>1000</span>
          <span>750</span>
          <span>500</span>
          <span>250</span>
          <span>0</span>
        </div>

        <div className="absolute -bottom-5 sm:-bottom-6 inset-x-0 flex justify-between text-[8px] sm:text-[10px] text-cyan-600 font-mono px-1 sm:px-2">
          <span>14:00</span>
          <span className="hidden sm:inline">14:05</span>
          <span>14:10</span>
          <span className="hidden sm:inline">14:15</span>
          <span>14:20</span>
          <span className="hidden sm:inline">14:25</span>
          <span className="text-red-400">{time}</span>
        </div>

        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1000 100"
        >
          <defs>
            <linearGradient id="lineColor" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="78%" stopColor="#22d3ee" />
              <stop offset="82%" stopColor="#ef4444" />
              <stop offset="85%" stopColor="#ef4444" />
              <stop offset="88%" stopColor="#ef4444" />
              <stop offset="90%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <path
            d="M 0 95 L 100 93 L 200 96 L 300 94 L 400 95 L 500 92 L 600 96 L 700 94 L 780 95 L 820 95 L 850 10 L 880 95 L 900 94 L 1000 95 L 1000 100 L 0 100 Z"
            fill="url(#lineColor)"
            fillOpacity="0.1"
          />
          <path
            d="M 0 95 L 100 93 L 200 96 L 300 94 L 400 95 L 500 92 L 600 96 L 700 94 L 780 95 L 820 95 L 850 10 L 880 95 L 900 94 L 1000 95"
            fill="none"
            stroke="url(#lineColor)"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
            filter="url(#glow)"
          />
          <circle cx="850" cy="10" r="4" sm:r="5" fill="#ef4444" className="animate-pulse" filter="url(#glow)" />
        </svg>
      </div>
    </div>
  );
}