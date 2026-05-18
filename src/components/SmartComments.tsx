import { ChevronLeft, Sparkles, ThumbsUp, MessageCircle, Shield, Star, ChevronDown } from "lucide-react";

export function SmartComments() {
  return (
    <div className="h-full flex flex-col bg-[#0f0f0f] text-white">
      {/* Top bar */}
      <div className="px-4 pt-2 pb-3 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 -ml-1 rounded-full flex items-center justify-center hover:bg-white/10">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div>
            <p className="text-[14px] font-semibold leading-tight">Comments</p>
            <p className="text-[10.5px] text-white/55">12,438 · Sorted by AI</p>
          </div>
        </div>
        <button className="flex items-center gap-1 text-[11px] text-white/80 px-2.5 h-7 rounded-full bg-[#1c1c1c] border border-white/5">
          Most helpful <ChevronDown className="w-3 h-3" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        {/* AI Summary */}
        <div className="m-3 rounded-2xl p-3 border border-white/10"
             style={{ background: "linear-gradient(135deg, rgba(66,133,244,0.10), rgba(155,109,255,0.10))" }}>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <p className="text-[12px] font-semibold ai-shimmer">Comment Summary</p>
          </div>
          <p className="text-[11.5px] text-white/80 leading-relaxed mt-2">
            Viewers loved the <span className="text-white font-medium">backprop visualization</span>. Many asked about the chain rule applied to softmax. A few advanced viewers shared further reading on Adam optimizer.
          </p>
        </div>

        {/* Topic groups */}
        <div className="px-3 pb-2">
          <p className="text-[10.5px] uppercase tracking-wider text-white/45 font-semibold mb-2">Grouped by topic</p>
          <div className="flex gap-1.5 flex-wrap">
            {[
              { l: "Backpropagation", n: 412, active: true },
              { l: "Chain rule", n: 188 },
              { l: "Optimizers", n: 96 },
              { l: "Math prereqs", n: 64 },
            ].map((t) => (
              <button key={t.l} className={`flex items-center gap-1.5 px-2.5 h-7 rounded-full text-[11px] font-medium ${
                t.active ? "bg-white text-black" : "bg-[#1a1a1a] text-white/80 border border-white/5"
              }`}>
                {t.l} <span className={`text-[10px] ${t.active ? "text-black/60" : "text-white/45"}`}>{t.n}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Creator highlight */}
        <div className="mx-3 mt-3 rounded-2xl p-3 border border-amber-400/30"
             style={{ background: "linear-gradient(135deg, rgba(251,191,36,0.10), rgba(255,75,145,0.06))" }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500" />
            <div>
              <div className="flex items-center gap-1">
                <span className="text-[12px] font-semibold">3Blue1Brown</span>
                <Star className="w-3 h-3 text-amber-300" fill="currentColor" />
                <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-amber-400/15 text-amber-300 border border-amber-400/30">CREATOR</span>
              </div>
              <p className="text-[10px] text-white/55">Pinned · 1 day ago</p>
            </div>
          </div>
          <p className="text-[11.5px] text-white/90 leading-relaxed">
            Thanks for all the great questions! I'll cover softmax + cross-entropy in detail in Part 4. Drop your topics below 👇
          </p>
        </div>

        {/* Most helpful section */}
        <div className="px-3 pt-4 pb-2">
          <div className="flex items-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-300" />
            <p className="text-[11.5px] font-semibold text-white">Most helpful</p>
          </div>
        </div>

        {/* Comments */}
        <div className="px-3 pb-4 space-y-3">
          {[
            {
              n: "Aiden Park",
              h: "2d",
              c: "The visualization at 5:24 finally made backprop click for me. I've been struggling with this for weeks 🙌",
              l: 1284,
              r: 32,
              best: true,
            },
            {
              n: "Mei Tanaka",
              h: "1d",
              c: "For anyone confused — think of partial derivatives as 'sensitivity'. How much does the loss change if I nudge this weight slightly?",
              l: 642,
              r: 14,
            },
            {
              n: "Dev Patel",
              h: "3h",
              c: "Could you do a follow-up on Adam vs SGD with momentum? The intuition behind adaptive learning rates would be amazing.",
              l: 89,
              r: 4,
            },
          ].map((c, i) => (
            <div key={i} className="flex gap-2.5">
              <div className={`w-9 h-9 rounded-full shrink-0 bg-gradient-to-br ${
                i === 0 ? "from-rose-400 to-orange-500" : i === 1 ? "from-emerald-400 to-cyan-500" : "from-indigo-400 to-purple-600"
              } flex items-center justify-center text-[12px] font-semibold`}>
                {c.n[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-[12px] font-medium">{c.n}</span>
                  <span className="text-[10px] text-white/45">· {c.h}</span>
                  {c.best && (
                    <span className="ml-auto text-[9px] font-semibold px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-400/30 flex items-center gap-0.5">
                      <Sparkles className="w-2 h-2" /> AI PICK
                    </span>
                  )}
                </div>
                <p className="text-[11.5px] text-white/85 leading-relaxed">{c.c}</p>
                <div className="mt-1.5 flex items-center gap-3">
                  <button className="flex items-center gap-1 text-[10.5px] text-white/65">
                    <ThumbsUp className="w-3 h-3" /> {c.l.toLocaleString()}
                  </button>
                  <button className="flex items-center gap-1 text-[10.5px] text-white/65">
                    <MessageCircle className="w-3 h-3" /> {c.r}
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Filtered indicator */}
          <div className="rounded-xl bg-[#161616] border border-white/5 p-2.5 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center">
              <Shield className="w-3.5 h-3.5 text-emerald-300" />
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-medium">214 comments filtered</p>
              <p className="text-[10px] text-white/55">Spam, harassment & toxicity hidden by Smart Filter</p>
            </div>
            <button className="text-[10.5px] text-blue-300 font-medium">Show</button>
          </div>
        </div>
      </div>
    </div>
  );
}
