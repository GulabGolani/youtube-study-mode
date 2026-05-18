import { Search, Home, Compass, BookOpen, BarChart3, User, Sparkles, Pause, SkipBack, SkipForward, Volume2, Maximize2, Bookmark, MessageSquare, Pencil, Bell, Settings, Focus } from "lucide-react";
import { Thumb } from "../Thumb";

export function TabletScreen() {
  return (
    <div
      className="relative mx-auto rounded-[24px] p-[12px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.06)]"
      style={{
        width: "100%",
        maxWidth: 1180,
        background: "linear-gradient(160deg, #2a2a2e 0%, #0f0f10 50%, #1a1a1c 100%)",
      }}
    >
      <div className="relative overflow-hidden rounded-[16px] bg-[#0f0f0f]" style={{ height: 720 }}>
        <div className="flex h-full text-white">
          {/* Sidebar */}
          <aside className="w-[220px] shrink-0 border-r border-white/5 flex flex-col py-4">
            <div className="px-5 flex items-center gap-2 mb-6">
              <div className="w-7 h-5 rounded-[6px] bg-[#FF0033] flex items-center justify-center">
                <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5" />
              </div>
              <span className="font-semibold text-[14px]">Study</span>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-gradient-to-r from-blue-500 to-purple-500">BETA</span>
            </div>

            <nav className="px-3 space-y-1">
              {[
                { I: Home, l: "Home" },
                { I: Compass, l: "Explore" },
                { I: BookOpen, l: "Notes", active: true },
                { I: BarChart3, l: "Progress" },
                { I: User, l: "You" },
              ].map(({ I, l, active }) => (
                <button key={l} className={`w-full flex items-center gap-3 h-9 px-3 rounded-lg text-[12.5px] ${
                  active ? "bg-white/8 text-white font-medium" : "text-white/70 hover:bg-white/5"
                }`}>
                  <I className="w-4 h-4" />
                  {l}
                </button>
              ))}
            </nav>

            <div className="mt-6 px-5">
              <p className="text-[10px] uppercase tracking-wider text-white/40 font-semibold mb-2">My Playlists</p>
              <div className="space-y-1.5">
                {[
                  { l: "ML Fundamentals", c: "bg-blue-500" },
                  { l: "React Mastery", c: "bg-cyan-500" },
                  { l: "Design Systems", c: "bg-pink-500" },
                  { l: "Startup Stories", c: "bg-emerald-500" },
                ].map((p) => (
                  <button key={p.l} className="w-full flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-white/5 text-left">
                    <span className={`w-1.5 h-1.5 rounded-full ${p.c}`} />
                    <span className="text-[11.5px] text-white/80 truncate">{p.l}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-auto px-3 pb-1">
              <div className="rounded-xl p-3 border border-white/10"
                   style={{ background: "linear-gradient(135deg, rgba(66,133,244,0.12), rgba(155,109,255,0.10))" }}>
                <div className="flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3 h-3 text-blue-300" />
                  <p className="text-[10.5px] font-semibold">Study Pro</p>
                </div>
                <p className="text-[10px] text-white/65 leading-snug">Unlimited AI summaries, notes & focus sessions.</p>
                <button className="mt-2 w-full h-7 rounded-md bg-white text-black text-[10.5px] font-semibold">Upgrade</button>
              </div>
            </div>
          </aside>

          {/* Main */}
          <main className="flex-1 flex flex-col min-w-0">
            {/* Top bar */}
            <div className="h-14 border-b border-white/5 px-5 flex items-center gap-3">
              <div className="flex-1 max-w-xl flex items-center gap-2 h-9 px-3 rounded-full bg-[#1c1c1c] border border-white/5">
                <Search className="w-4 h-4 text-white/55" />
                <span className="text-[12px] text-white/50">Search lessons, topics, channels…</span>
                <div className="ml-auto flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-blue-400" />
                  <span className="text-[10px] text-blue-300">AI</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 h-7 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30">
                <Focus className="w-3 h-3 text-emerald-400" />
                <span className="text-[10.5px] font-semibold">Focus Mode</span>
                <div className="w-7 h-3.5 rounded-full bg-emerald-500/40 relative ml-1">
                  <div className="absolute right-0.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
              </div>
              <Bell className="w-4.5 h-4.5 text-white/75" strokeWidth={1.7} />
              <Settings className="w-4.5 h-4.5 text-white/75" strokeWidth={1.7} />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-[11px] font-semibold">M</div>
            </div>

            {/* Workspace */}
            <div className="flex-1 grid grid-cols-12 gap-4 p-4 min-h-0">
              {/* Player + chapters */}
              <div className="col-span-7 flex flex-col gap-3 min-h-0">
                <div className="relative rounded-2xl overflow-hidden">
                  <Thumb variant="ai" className="w-full h-[300px]" rounded="rounded-2xl">
                    <div className="absolute bottom-12 left-4 right-4 flex justify-center">
                      <div className="px-3 py-1.5 rounded-md bg-black/75 backdrop-blur-sm text-[12px] font-medium text-white">
                        "…and that's how <span className="text-amber-300">gradient descent</span> finds the minimum."
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <div className="h-1 rounded-full bg-white/25 overflow-hidden">
                        <div className="h-full w-[42%] bg-[#FF0033] rounded-full relative">
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FF0033] shadow-[0_0_0_5px_rgba(255,0,51,0.25)]" />
                        </div>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <SkipBack className="w-4 h-4 text-white/90" fill="white" />
                          <button className="w-8 h-8 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
                            <Pause className="w-4 h-4 text-white" fill="white" />
                          </button>
                          <SkipForward className="w-4 h-4 text-white/90" fill="white" />
                          <span className="text-[11px] font-mono text-white/90 ml-1">5:24 / 12:48</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Volume2 className="w-4 h-4 text-white/90" />
                          <Maximize2 className="w-4 h-4 text-white/90" />
                        </div>
                      </div>
                    </div>
                  </Thumb>
                </div>

                <div>
                  <h2 className="text-[15px] font-semibold leading-snug">Neural Networks Explained — Backpropagation Visualized</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500" />
                    <span className="text-[11.5px] text-white/65">3Blue1Brown · 1.2M views · 2d</span>
                    <div className="ml-auto flex items-center gap-2">
                      <button className="flex items-center gap-1.5 h-7 px-3 rounded-full bg-[#1c1c1c] border border-white/8 text-[11px] font-medium">
                        <Bookmark className="w-3 h-3" /> Save timestamp
                      </button>
                      <button className="flex items-center gap-1.5 h-7 px-3 rounded-full bg-[#1c1c1c] border border-white/8 text-[11px] font-medium">
                        <Pencil className="w-3 h-3" /> Note
                      </button>
                    </div>
                  </div>
                </div>

                {/* Chapters horizontal */}
                <div className="rounded-2xl bg-[#171717] border border-white/5 p-3 flex-1 min-h-0 overflow-y-auto no-scrollbar">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[12px] font-semibold">Chapters</p>
                    <span className="text-[10.5px] text-white/55">3 / 8</span>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { t: "Intro to neural nets", time: "0:00", done: true },
                      { t: "What is a weight?", time: "2:14", done: true },
                      { t: "Backpropagation intuition", time: "5:24", active: true },
                      { t: "Chain rule in action", time: "8:02" },
                      { t: "Putting it all together", time: "11:30" },
                    ].map((c, i) => (
                      <div key={i} className={`flex items-center gap-2.5 p-2 rounded-lg ${c.active ? "bg-white/8 border border-white/10" : ""}`}>
                        <div className={`w-1 h-7 rounded-full ${c.active ? "bg-[#FF0033]" : c.done ? "bg-white/30" : "bg-white/10"}`} />
                        <span className={`text-[11.5px] flex-1 ${c.active ? "text-white font-medium" : c.done ? "text-white/55 line-through decoration-white/30" : "text-white/80"}`}>{c.t}</span>
                        <span className="text-[10px] font-mono text-white/55">{c.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right panel: AI + Notes */}
              <div className="col-span-5 flex flex-col gap-3 min-h-0">
                {/* AI Summary */}
                <div className="rounded-2xl p-3 border border-white/10"
                     style={{ background: "linear-gradient(135deg, rgba(66,133,244,0.10), rgba(155,109,255,0.10))" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-[12px] font-semibold ai-shimmer">AI Summary</p>
                    <span className="ml-auto text-[9.5px] text-white/45">Generated · 0.8s</span>
                  </div>
                  <p className="text-[11.5px] text-white/80 leading-relaxed">
                    This video walks through <span className="text-white font-medium">backpropagation</span> by visualizing how each weight contributes to the loss, then uses gradient descent to nudge weights in the direction that reduces error.
                  </p>
                  <div className="mt-2.5 flex gap-1.5 flex-wrap">
                    {["Gradient descent", "Chain rule", "Loss function", "Weights"].map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/8 border border-white/10">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Notes panel */}
                <div className="flex-1 rounded-2xl bg-[#171717] border border-white/5 flex flex-col min-h-0">
                  <div className="px-3 py-2.5 border-b border-white/5 flex items-center gap-2">
                    <Pencil className="w-3.5 h-3.5 text-white/85" />
                    <span className="text-[12px] font-semibold">Workspace Notes</span>
                    <div className="ml-auto flex items-center gap-1.5">
                      <span className="text-[10px] text-emerald-300">● Saved</span>
                    </div>
                  </div>
                  <div className="flex-1 p-3 overflow-y-auto no-scrollbar space-y-2.5">
                    <div className="p-2.5 rounded-lg bg-white/[0.04] border-l-2 border-amber-300">
                      <p className="text-[10px] font-mono text-amber-300 mb-1">5:24 · Backprop intuition</p>
                      <p className="text-[11.5px] text-white/85 leading-relaxed">
                        Each weight's gradient = how much loss changes if that weight nudges by ε. Multiply local derivatives backward — that's the chain rule.
                      </p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.04] border-l-2 border-blue-300">
                      <p className="text-[10px] font-mono text-blue-300 mb-1">8:02 · Chain rule</p>
                      <p className="text-[11.5px] text-white/85 leading-relaxed">
                        ∂L/∂w = ∂L/∂a · ∂a/∂z · ∂z/∂w — beautiful symmetry, propagates layer by layer.
                      </p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/20">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Sparkles className="w-3 h-3 text-blue-300" />
                        <p className="text-[10px] font-semibold text-blue-300">AI suggested follow-up</p>
                      </div>
                      <p className="text-[11px] text-white/80 leading-snug">
                        Watch: "Why Adam beats vanilla SGD" — 14 min, builds directly on this.
                      </p>
                    </div>
                  </div>
                  <div className="p-2.5 border-t border-white/5 flex items-center gap-2">
                    <div className="flex-1 h-8 rounded-lg bg-[#0f0f0f] border border-white/8 px-2.5 flex items-center text-[11px] text-white/55">
                      Type a note at 5:24…
                    </div>
                    <button className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5" />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-[#FF0033] flex items-center justify-center">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
