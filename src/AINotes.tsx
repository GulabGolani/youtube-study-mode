import { ChevronLeft, Search, Filter, Bookmark, Sparkles, Hash, Clock, MoreHorizontal } from "lucide-react";
import { Thumb } from "../Thumb";

export function AINotes() {
  return (
    <div className="h-full flex flex-col bg-[#0f0f0f] text-white">
      {/* Top bar */}
      <div className="px-4 pt-2 pb-3 flex items-center justify-between">
        <button className="w-8 h-8 -ml-1 rounded-full flex items-center justify-center hover:bg-white/10">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-[14px] font-semibold">My Notebook</span>
        <button className="w-8 h-8 rounded-full flex items-center justify-center">
          <Filter className="w-4.5 h-4.5 text-white/85" />
        </button>
      </div>

      {/* Search */}
      <div className="px-4 pb-3">
        <div className="flex items-center gap-2 h-10 px-3 rounded-full bg-[#1c1c1c] border border-white/5">
          <Search className="w-4 h-4 text-white/60" />
          <span className="text-[13px] text-white/50">Search notes & highlights…</span>
          <div className="ml-auto flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[10px] text-blue-300">AI</span>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="px-4 pb-3 grid grid-cols-3 gap-2">
        {[
          { v: "124", l: "Notes" },
          { v: "38", l: "Videos" },
          { v: "9", l: "Topics" },
        ].map((s) => (
          <div key={s.l} className="rounded-xl bg-[#181818] border border-white/5 p-2.5">
            <p className="text-[16px] font-semibold leading-tight">{s.v}</p>
            <p className="text-[10px] text-white/55 mt-0.5">{s.l}</p>
          </div>
        ))}
      </div>

      {/* Tag chips */}
      <div className="px-4 pb-3 flex gap-1.5 overflow-x-auto no-scrollbar">
        {[
          { l: "All", active: true },
          { l: "#machine-learning" },
          { l: "#react" },
          { l: "#design-systems" },
          { l: "#startups" },
        ].map((t) => (
          <button
            key={t.l}
            className={`shrink-0 px-2.5 h-7 rounded-lg text-[11px] font-medium ${
              t.active ? "bg-white text-black" : "bg-[#1a1a1a] text-white/75 border border-white/5"
            }`}
          >
            {t.l}
          </button>
        ))}
      </div>

      {/* Notes list */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-6 space-y-3">
        {/* Note 1 — AI Takeaways */}
        <div className="rounded-2xl bg-[#171717] border border-white/5 overflow-hidden">
          <div className="flex gap-3 p-3">
            <Thumb variant="ai" className="w-[80px] h-[50px] shrink-0" rounded="rounded-lg" />
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-medium leading-snug line-clamp-1">Backpropagation Visualized</p>
              <p className="text-[10.5px] text-white/50 mt-0.5">3Blue1Brown · Yesterday</p>
            </div>
            <MoreHorizontal className="w-4 h-4 text-white/50" />
          </div>
          <div className="mx-3 mb-3 p-2.5 rounded-xl border border-blue-400/20"
               style={{ background: "linear-gradient(135deg, rgba(66,133,244,0.10), rgba(155,109,255,0.08))" }}>
            <div className="flex items-center gap-1.5 mb-1.5">
              <Sparkles className="w-3 h-3 text-blue-300" />
              <span className="text-[10px] font-semibold text-blue-300">Auto Key Takeaways</span>
            </div>
            <ul className="space-y-1.5">
              {[
                "Gradient descent moves weights in the direction that lowers loss.",
                "Chain rule lets us compute partial derivatives layer-by-layer.",
                "Visualizing gradients makes black-box networks understandable.",
              ].map((t, i) => (
                <li key={i} className="flex gap-1.5 text-[11px] text-white/85 leading-snug">
                  <span className="text-blue-300 font-semibold shrink-0">{i + 1}.</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-3 pb-3 flex flex-wrap gap-1.5">
            {/* Timestamped highlights */}
            {[
              { t: "5:24", c: "Backprop intuition" },
              { t: "8:02", c: "Chain rule example" },
            ].map((h) => (
              <div key={h.t} className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/8">
                <Clock className="w-2.5 h-2.5 text-amber-300" />
                <span className="text-[10px] font-mono text-amber-300">{h.t}</span>
                <span className="text-[10px] text-white/80">· {h.c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Note 2 — manual note */}
        <div className="rounded-2xl bg-[#171717] border border-white/5 p-3">
          <div className="flex gap-3">
            <Thumb variant="coding" className="w-[80px] h-[50px] shrink-0" rounded="rounded-lg" />
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-medium leading-snug line-clamp-1">React Server Components Deep Dive</p>
              <p className="text-[10.5px] text-white/50 mt-0.5">Theo · 2 days ago</p>
            </div>
            <Bookmark className="w-4 h-4 text-amber-300" fill="currentColor" />
          </div>
          <div className="mt-2.5 p-2.5 rounded-xl bg-white/[0.04] border-l-2 border-amber-300">
            <p className="text-[11.5px] text-white/85 leading-relaxed">
              <span className="text-amber-300 font-mono text-[10px]">12:08 →</span> RSC removes the need for a client-side data fetching layer when you can colocate data with the component. Big win for bundle size.
            </p>
          </div>
          <div className="mt-2 flex gap-1.5">
            <span className="text-[10px] text-white/60 flex items-center gap-1"><Hash className="w-2.5 h-2.5" />react</span>
            <span className="text-[10px] text-white/60 flex items-center gap-1"><Hash className="w-2.5 h-2.5" />server-components</span>
          </div>
        </div>

        {/* Note 3 */}
        <div className="rounded-2xl bg-[#171717] border border-white/5 p-3">
          <div className="flex gap-3">
            <Thumb variant="design" className="w-[80px] h-[50px] shrink-0" rounded="rounded-lg" />
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-medium leading-snug line-clamp-1">WCAG 2.2 — Color Contrast Essentials</p>
              <p className="text-[10.5px] text-white/50 mt-0.5">Figma · 3 days ago</p>
            </div>
          </div>
          <p className="text-[11.5px] text-white/80 leading-relaxed mt-2.5">
            Body text needs <span className="font-mono text-emerald-300">4.5:1</span> contrast against background. Large text only needs 3:1.
          </p>
        </div>
      </div>

      {/* FAB */}
      <button className="absolute bottom-5 right-4 h-12 px-4 rounded-2xl flex items-center gap-2 shadow-[0_8px_24px_-4px_rgba(255,0,51,0.55)] bg-[#FF0033] text-white text-[12.5px] font-semibold">
        <Sparkles className="w-4 h-4" /> New AI note
      </button>
    </div>
  );
}
