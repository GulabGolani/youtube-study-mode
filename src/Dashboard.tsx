import { ChevronLeft, Flame, Clock, Trophy, TrendingUp, Play, Award, Sparkles } from "lucide-react";
import { Thumb } from "../Thumb";

export function Dashboard() {
  // bar chart heights
  const days = [
    { d: "M", h: 45 },
    { d: "T", h: 78 },
    { d: "W", h: 62 },
    { d: "T", h: 88 },
    { d: "F", h: 55 },
    { d: "S", h: 95, today: true },
    { d: "S", h: 30 },
  ];

  return (
    <div className="h-full flex flex-col bg-[#0f0f0f] text-white">
      {/* Top bar */}
      <div className="px-4 pt-2 pb-3 flex items-center justify-between">
        <button className="w-8 h-8 -ml-1 rounded-full flex items-center justify-center hover:bg-white/10">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-[14px] font-semibold">Learning Dashboard</span>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-[11px] font-semibold">M</div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-6">
        {/* Streak hero */}
        <div className="relative rounded-2xl p-4 border border-white/10 overflow-hidden"
             style={{ background: "linear-gradient(135deg, rgba(255,107,53,0.18), rgba(251,191,36,0.10), rgba(255,0,51,0.10))" }}>
          <div className="flex items-center gap-3">
            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-600 flex items-center justify-center shadow-[0_8px_20px_-4px_rgba(255,107,53,0.6)]">
              <Flame className="w-7 h-7 text-white" fill="currentColor" />
            </div>
            <div className="flex-1">
              <p className="text-[10.5px] text-white/65 uppercase tracking-wider">Current streak</p>
              <p className="text-[24px] font-semibold leading-tight">12 days 🔥</p>
              <p className="text-[10.5px] text-white/65">Beat your record of 9 days!</p>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-2xl bg-[#171717] border border-white/5 p-3">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-300" />
              <span className="text-[10.5px] text-white/65">Hours learned</span>
            </div>
            <p className="text-[20px] font-semibold leading-tight">38.4<span className="text-[12px] text-white/55">h</span></p>
            <div className="mt-1 flex items-center gap-1 text-[10px] text-emerald-300">
              <TrendingUp className="w-2.5 h-2.5" /> +18% this week
            </div>
          </div>
          <div className="rounded-2xl bg-[#171717] border border-white/5 p-3">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Trophy className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-[10.5px] text-white/65">XP earned</span>
            </div>
            <p className="text-[20px] font-semibold leading-tight">4,820</p>
            <div className="mt-1 flex items-center gap-1 text-[10px] text-amber-300">
              <Award className="w-2.5 h-2.5" /> Level 12
            </div>
          </div>
        </div>

        {/* Weekly chart */}
        <div className="mt-3 rounded-2xl bg-[#171717] border border-white/5 p-3.5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[12px] font-semibold">This week</p>
            <span className="text-[10.5px] text-white/55">9h 42m</span>
          </div>
          <div className="flex items-end justify-between gap-1.5 h-[90px]">
            {days.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                <div className="w-full flex-1 flex items-end">
                  <div
                    className={`w-full rounded-md ${
                      d.today
                        ? "bg-gradient-to-t from-[#FF0033] to-[#ff4b91] shadow-[0_0_12px_rgba(255,0,51,0.5)]"
                        : "bg-white/12"
                    }`}
                    style={{ height: `${d.h}%` }}
                  />
                </div>
                <span className={`text-[9.5px] ${d.today ? "text-white font-semibold" : "text-white/45"}`}>{d.d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill progress */}
        <div className="mt-3 rounded-2xl bg-[#171717] border border-white/5 p-3.5">
          <p className="text-[12px] font-semibold mb-2.5">Skill progress</p>
          <div className="space-y-2.5">
            {[
              { l: "Machine Learning", v: 78, c: "from-blue-500 to-purple-500" },
              { l: "React & TypeScript", v: 62, c: "from-cyan-500 to-emerald-500" },
              { l: "Product Design", v: 44, c: "from-pink-500 to-rose-500" },
            ].map((s) => (
              <div key={s.l}>
                <div className="flex justify-between mb-1">
                  <span className="text-[11px] text-white/85">{s.l}</span>
                  <span className="text-[10px] font-mono text-white/55">{s.v}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
                  <div className={`h-full rounded-full bg-gradient-to-r ${s.c}`} style={{ width: `${s.v}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resume */}
        <div className="mt-3">
          <p className="text-[12px] font-semibold mb-2">Resume watching</p>
          <div className="rounded-2xl bg-[#171717] border border-white/5 p-2.5 flex items-center gap-2.5">
            <div className="relative">
              <Thumb variant="ai" className="w-[78px] h-[48px]" rounded="rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-black/60 backdrop-blur flex items-center justify-center">
                  <Play className="w-3 h-3 text-white" fill="white" />
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11.5px] font-medium leading-snug line-clamp-1">Backpropagation Visualized</p>
              <p className="text-[10px] text-white/55 mt-0.5">3Blue1Brown · 18m left</p>
              <div className="mt-1.5 h-1 rounded-full bg-white/8 overflow-hidden">
                <div className="h-full w-[62%] bg-[#FF0033] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-3 rounded-2xl bg-[#171717] border border-white/5 p-3.5">
          <div className="flex items-center justify-between mb-2.5">
            <p className="text-[12px] font-semibold">Recent achievements</p>
            <span className="text-[10.5px] text-blue-300">View all</span>
          </div>
          <div className="flex gap-2.5">
            {[
              { e: "🎯", l: "Focused", s: "from-blue-500/20 to-cyan-500/10" },
              { e: "🔥", l: "On fire", s: "from-orange-500/20 to-rose-500/10" },
              { e: "🧠", l: "Curious", s: "from-purple-500/20 to-pink-500/10" },
              { e: "⚡", l: "Speedy", s: "from-amber-500/20 to-yellow-500/10" },
            ].map((a) => (
              <div key={a.l} className={`flex-1 flex flex-col items-center gap-1.5 py-2.5 rounded-xl border border-white/8 bg-gradient-to-br ${a.s}`}>
                <span className="text-[20px]">{a.e}</span>
                <span className="text-[9.5px] text-white/80">{a.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Recommend */}
        <div className="mt-3 rounded-2xl p-3 border border-blue-400/20"
             style={{ background: "linear-gradient(135deg, rgba(66,133,244,0.12), rgba(155,109,255,0.10))" }}>
          <div className="flex items-center gap-2 mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-300" />
            <p className="text-[11.5px] font-semibold">AI suggestion</p>
          </div>
          <p className="text-[11px] text-white/80 leading-relaxed">
            You've spent 78% on ML basics. Try a hands-on PyTorch playlist to level up — 1h 40m.
          </p>
        </div>
      </div>
    </div>
  );
}
