import React from "react";

export function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative mx-auto ${className}`} style={{ width: 360 }}>
      {/* Outer frame */}
      <div
        className="relative rounded-[44px] p-[10px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)]"
        style={{
          background: "linear-gradient(160deg, #2a2a2e 0%, #0f0f10 50%, #1a1a1c 100%)",
        }}
      >
        {/* Inner screen */}
        <div className="relative overflow-hidden rounded-[36px] bg-[#0f0f0f]" style={{ height: 760 }}>
          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-7 pt-3 pb-1 text-[12px] font-medium text-white">
            <span className="font-sans tracking-tight">9:41</span>
            <div className="flex items-center gap-1.5">
              {/* Signal */}
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                <rect x="0" y="7" width="2" height="3" rx="0.5" fill="white" />
                <rect x="4" y="5" width="2" height="5" rx="0.5" fill="white" />
                <rect x="8" y="3" width="2" height="7" rx="0.5" fill="white" />
                <rect x="12" y="0" width="2" height="10" rx="0.5" fill="white" />
              </svg>
              {/* Wifi */}
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M7 9.5L8.5 8c-.83-.83-2.17-.83-3 0L7 9.5z" fill="white" />
                <path d="M4 6.5L5.5 8C6.33 7.17 7.67 7.17 8.5 8L10 6.5c-1.66-1.66-4.34-1.66-6 0z" fill="white" />
                <path d="M1 3.5L2.5 5c2.49-2.49 6.51-2.49 9 0L13 3.5c-3.31-3.31-8.69-3.31-12 0z" fill="white" />
              </svg>
              {/* Battery */}
              <div className="flex items-center">
                <div className="w-6 h-3 rounded-[3px] border border-white/80 p-[1.5px]">
                  <div className="h-full w-[80%] rounded-[1px] bg-white" />
                </div>
                <div className="w-[1.5px] h-1.5 bg-white/80 rounded-r" />
              </div>
            </div>
          </div>
          {/* Notch / Dynamic Island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-50 w-[110px] h-[28px] rounded-full bg-black" />

          {/* Content */}
          <div className="relative h-full pt-7 overflow-hidden">{children}</div>
        </div>
      </div>
    </div>
  );
}
