import { ChevronLeft, MoreVertical, Sparkles, Bookmark, MessageSquare, Pencil, Volume2, Maximize2, Pause, SkipBack, SkipForward, Focus, Captions } from "lucide-react";
import { Thumb } from "../Thumb";

export function SmartWatch() {
  return (
    <div className="h-full flex flex-col bg-[#0a0a0a] text-white">
      {/* Top bar */}
      <div className="px-3 pt-2 pb-2 flex items-center justify-between">
        <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-1.5 px-2.5 h-7 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 relative">
            <div className="absolute inset-0 rounded-full bg-emerald-400 pulse-ring" />
          </div>
          <span className="text-[10.5px] font-semibold">Focus Mode ON</span>
        </div>
        <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      {/* Video player */}
      <div className="relative mx-3 rounded-2xl overflow-hidden">
        <Thumb variant="ai" className="w-full h-[200px]" rounded="rounded-2xl">
          {/* Caption */}
          <div className="absolute bottom-12 left-3 right-3 flex justify-center">
            <div className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm text-[11px] font-medium text-white">
              "…and that's how <span className="text-amber-300">gradient descent</span> finds the minimum."
            </div>
          </div>
          {/* Bottom controls */}
          <div className="absolute bottom-0 left-0 right-0 p-2.5">
            <div className="h-1 rounded-full bg-white/25 overflow-hidden">
              <div className="h-full w-[42%] bg-[#FF0033] rounded-full relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#FF0033] shadow-[0_0_0_4px_rgba(255,0,51,0.25)]" />
              </div>
            </div>
            <div className="mt-1.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SkipBack className="w-3.5 h-3.5 text-white/90" fill="white" />
                <button className="w-7 h-7 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
                  <Pause className="w-3.5 h-3.5 text-white" fill="white" />
                </button>
                <SkipForward className="w-3.5 h-3.5 text-white/90" fill="white" />
                <span className="text-[10px] font-mono text-white/90 ml-1">5:24 / 12:48</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Captions className="w-3.5 h-3.5 text-white" />
                <Volume2 className="w-3.5 h-3.5 text-white/90" />
                <Maximize2 className="w-3.5 h-3.5 text-white/90" />
              </div>
            </div>
          </div>
        </Thumb>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar mt-3 px-4 pb-4">
        {/* Title */}
        <h2 className="text-[15px] font-semibold leading-snug">Neural Networks Explained — Backpropagation Visualized</h2>
        <div className="flex items-center gap-2 mt-1.5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500" />
          <span className="text-[11px] text-white/65">3Blue1Brown</span>
          <span className="text-[11px] text-white/40">·</span>
          <span className="text-[11px] text-white/65">1.2M views</span>
        </div>

        {/* AI Summary */}
        <div className="mt-3.5 rounded-2xl p-3 border border-white/10 gradient-border"
             style={{ background: "linear-gradient(135deg, rgba(66,133,244,0.10), rgba(155,109,255,0.10))" }}>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <p className="text-[12px] font-semibold ai-shimmer">AI Summary</p>
            <span className="ml-auto text-[9.5px] text-white/45">Generated · 0.8s</span>
          </div>
          <p className="text-[11.5px] text-white/80 leading-relaxed mt-2">
            This video walks through <span className="text-white font-medium">backpropagation</span> by visualizing how each weight contributes to the loss. Gradient descent is then used to nudge weights in the direction that reduces error.
          </p>
          <div className="mt-2.5 flex gap-1.5 flex-wrap">
            {["Gradient descent", "Chain rule", "Loss function", "Weights"].map((t) => (
              <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/8 border border-white/10 text-white/80">{t}</span>
            ))}
          </div>
        </div>

        {/* Chapter timeline */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[12px] font-semibold">Chapters</p>
            <span className="text-[10.5px] text-white/50">5 / 8</span>
          </div>
          <div className="space-y-1.5">
            {[
              { t: "Intro to neural nets", time: "0:00", done: true },
              { t: "What is a weight?", time: "2:14", done: true },
              { t: "Backpropagation intuition", time: "5:24", active: true },
              { t: "Chain rule in action", time: "8:02" },
              { t: "Wrap-up & resources", time: "11:30" },
            ].map((c, i) => (
              <div key={i} className={`flex items-center gap-2.5 p-2 rounded-lg ${c.active ? "bg-white/8 border border-white/10" : ""}`}>
                <div className={`w-1 h-7 rounded-full ${c.active ? "bg-[#FF0033]" : c.done ? "bg-white/30" : "bg-white/10"}`} />
                <span className={`text-[11.5px] flex-1 ${c.active ? "text-white font-medium" : c.done ? "text-white/55 line-through decoration-white/30" : "text-white/80"}`}>{c.t}</span>
                <span className="text-[10px] font-mono text-white/55">{c.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { I: Bookmark, l: "Timestamp", note: "5:24" },
            { I: Pencil, l: "Quick note" },
            { I: MessageSquare, l: "Ask AI" },
          ].map(({ I, l, note }) => (
            <button key={l} className="flex flex-col items-center justify-center gap-1 h-16 rounded-xl bg-[#1a1a1a] border border-white/5 hover:bg-[#222]">
              <I className="w-4 h-4 text-white/85" />
              <span className="text-[10.5px] font-medium">{l}</span>
              {note && <span className="text-[9px] text-amber-300 font-mono">{note}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Floating AI assistant */}
      <div className="absolute bottom-5 right-4 float">
        <button className="relative w-13 h-13 rounded-full p-[2px] shadow-[0_8px_24px_-4px_rgba(99,102,241,0.6)]"
                style={{ background: "linear-gradient(135deg,#4285F4,#9b6dff,#ff4b91)" }}>
          <div className="w-12 h-12 rounded-full bg-[#0a0a0a] flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0a0a0a]" />
        </button>
      </div>

      {/* Focus pill bottom */}
      <div className="absolute bottom-6 left-4">
        <div className="flex items-center gap-1.5 px-2.5 h-8 rounded-full glass border border-white/10">
          <Focus className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[10.5px] font-medium">No distractions</span>
        </div>
      </div>
    </div>
  );
}
