import { ChevronLeft, Mic, X, Sparkles, TrendingUp, Clock, Play } from "lucide-react";
import { Thumb } from "../Thumb";

export function SmartSearch() {
  return (
    <div className="h-full flex flex-col bg-[#0f0f0f] text-white">
      {/* Search header */}
      <div className="px-4 pt-2 pb-3 flex items-center gap-2">
        <button className="w-8 h-8 -ml-1 rounded-full flex items-center justify-center hover:bg-white/10">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex-1 flex items-center gap-2 h-10 px-3 rounded-full bg-[#1c1c1c] border border-blue-400/40">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-[13px] text-white">backprop chain rule</span>
          <span className="w-px h-3.5 bg-white/30 ml-0.5 animate-pulse" />
          <X className="ml-auto w-4 h-4 text-white/55" />
        </div>
        <button className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_4px_12px_-2px_rgba(99,102,241,0.6)]">
          <Mic className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* AI bar */}
      <div className="px-4 pb-3">
        <div className="rounded-2xl p-3 border border-white/10"
             style={{ background: "linear-gradient(135deg, rgba(66,133,244,0.12), rgba(155,109,255,0.10))" }}>
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Sparkles className="w-3 h-3" />
            </div>
            <p className="text-[11px] font-semibold ai-shimmer">AI Answer</p>
          </div>
          <p className="text-[11.5px] text-white/85 leading-relaxed">
            The chain rule lets you compute how a small change in any weight affects the final loss by multiplying local derivatives backward through the network.
          </p>
          <div className="mt-2 flex items-center gap-1.5 text-[10px] text-white/55">
            <span>Sourced from</span>
            <span className="px-1.5 py-0.5 rounded bg-white/8 text-white/80">3 videos</span>
          </div>
        </div>
      </div>

      {/* Inside-video results */}
      <div className="px-4 pb-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-white/55">Inside videos</p>
          <span className="text-[10px] text-white/45">4 timestamps</span>
        </div>

        <div className="space-y-2">
          {[
            { v: "ai", t: "Neural Networks Explained", ch: "3Blue1Brown", time: "8:02", quote: "...applying the <b>chain rule</b> across layers gives us the gradient w.r.t. each <b>weight</b>..." },
            { v: "coding", t: "Build a Neural Net in Python", ch: "Sentdex", time: "14:35", quote: "The <b>chain rule</b> is how we propagate error from the output layer back to the input." },
          ].map((r, i) => (
            <div key={i} className="rounded-2xl bg-[#171717] border border-white/5 p-2.5 flex gap-2.5">
              <div className="relative shrink-0">
                <Thumb variant={r.v as any} className="w-[88px] h-[56px]" rounded="rounded-lg" />
                <div className="absolute bottom-1 right-1 text-[9px] font-mono px-1 py-px rounded bg-black/85 text-white">{r.time}</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-black/65 backdrop-blur flex items-center justify-center">
                    <Play className="w-2.5 h-2.5 text-white" fill="white" />
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11.5px] font-medium leading-snug line-clamp-1">{r.t}</p>
                <p className="text-[10px] text-white/50 mt-0.5">{r.ch}</p>
                <p
                  className="mt-1 text-[10.5px] text-white/75 leading-snug line-clamp-2 [&_b]:text-amber-300 [&_b]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: r.quote }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending */}
      <div className="px-4 pb-3">
        <div className="flex items-center gap-1.5 mb-2">
          <TrendingUp className="w-3.5 h-3.5 text-white/70" />
          <p className="text-[11px] font-semibold uppercase tracking-wider text-white/55">Trending in learning</p>
        </div>
        <div className="space-y-0">
          {[
            "Vibe coding with Claude",
            "Transformer architecture explained",
            "Figma Variables 2026",
            "Indie hacker pricing strategies",
          ].map((t, i) => (
            <button key={t} className="w-full flex items-center gap-3 py-2.5 border-b border-white/5 last:border-0">
              <span className="text-[10px] text-white/40 font-mono w-4">{i + 1}</span>
              <span className="text-[12px] text-white/90 flex-1 text-left">{t}</span>
              <TrendingUp className="w-3 h-3 text-emerald-400" />
            </button>
          ))}
        </div>
      </div>

      {/* Recent */}
      <div className="px-4 pb-6">
        <div className="flex items-center gap-1.5 mb-2">
          <Clock className="w-3.5 h-3.5 text-white/70" />
          <p className="text-[11px] font-semibold uppercase tracking-wider text-white/55">Recent searches</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["pytorch tutorial", "design tokens", "react server actions", "saas onboarding", "css grid"].map((t) => (
            <span key={t} className="px-2.5 h-7 inline-flex items-center rounded-full bg-[#1a1a1a] border border-white/5 text-[11px] text-white/80">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Voice modal hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 h-9 rounded-full glass border border-white/10">
        <div className="flex items-end gap-0.5 h-3.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-0.5 bg-blue-400 rounded-full wave-bar" style={{ height: "100%", animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
        <span className="text-[10.5px] text-white/80">Listening… tap to stop</span>
      </div>
    </div>
  );
}
