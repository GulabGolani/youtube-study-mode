import { Search, Bell, Home, Compass, BookOpen, BarChart3, User, Sparkles, Play, Clock } from "lucide-react";
import { Thumb } from "../Thumb";

export function HomeFeed() {
  return (
    <div className="h-full flex flex-col bg-[#0f0f0f] text-white">
      {/* Top bar */}
      <div className="px-4 pt-2 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-7 h-5 rounded-[6px] bg-[#FF0033] flex items-center justify-center">
            <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5" />
          </div>
          <span className="font-semibold text-[15px] tracking-tight">Study</span>
          <span className="ml-1 text-[9px] font-bold px-1.5 py-0.5 rounded bg-gradient-to-r from-blue-500 to-purple-500">BETA</span>
        </div>
        <div className="flex items-center gap-3">
          <Bell className="w-5 h-5 text-white/85" strokeWidth={1.8} />
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-[11px] font-semibold">M</div>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 pb-3">
        <div className="flex items-center gap-2 h-10 px-3 rounded-full bg-[#1f1f1f] border border-white/5">
          <Search className="w-4 h-4 text-white/60" />
          <span className="text-[13px] text-white/50">Search lessons, topics, channels…</span>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 pb-3 flex gap-2 overflow-x-auto no-scrollbar">
        {[
          { label: "All", active: true },
          { label: "Coding" },
          { label: "Design" },
          { label: "AI" },
          { label: "Business" },
          { label: "Math" },
        ].map((c) => (
          <button
            key={c.label}
            className={`shrink-0 px-3 h-7 rounded-lg text-[12px] font-medium transition ${
              c.active ? "bg-white text-black" : "bg-[#1f1f1f] text-white/85 border border-white/5"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-20">
        {/* Continue Learning */}
        <div className="px-4 pt-2 pb-3">
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-white/80" />
              <h3 className="text-[14px] font-semibold">Continue learning</h3>
            </div>
            <span className="text-[11px] text-white/50">See all</span>
          </div>

          <div className="rounded-2xl bg-[#171717] border border-white/5 p-3 flex gap-3">
            <Thumb variant="ai" className="w-[110px] h-[68px] shrink-0" rounded="rounded-lg" />
            <div className="flex-1 min-w-0">
              <p className="text-[12.5px] font-medium leading-snug line-clamp-2">Building neural networks from scratch — Part 3: Backpropagation</p>
              <div className="mt-1.5 flex items-center gap-1.5 text-[10.5px] text-white/55">
                <span>3Blue1Brown</span>
                <span>·</span>
                <span>18 min left</span>
              </div>
              <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-[62%] bg-[#FF0033] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* AI Playlist banner */}
        <div className="px-4 pb-4">
          <div className="relative rounded-2xl p-3.5 overflow-hidden border border-white/10"
               style={{ background: "linear-gradient(135deg, rgba(66,133,244,0.18), rgba(155,109,255,0.18) 50%, rgba(255,75,145,0.14))" }}>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0">
                <Sparkles className="w-4.5 h-4.5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="text-[12.5px] font-semibold">Your AI Playlist</p>
                  <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-white/10">UPDATED</span>
                </div>
                <p className="text-[11px] text-white/65 mt-0.5 leading-snug">
                  7 videos to master <span className="text-white">React Server Components</span> · 2h 14m
                </p>
                <button className="mt-2.5 inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-white text-black text-[11px] font-semibold">
                  <Play className="w-3 h-3 fill-black" /> Start session
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Smart categories */}
        <div className="px-4 pb-3">
          <h3 className="text-[14px] font-semibold mb-2.5">Explore by skill</h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              { v: "coding", t: "Coding", n: "1,240 videos", color: "from-blue-600/30 to-cyan-500/20" },
              { v: "design", t: "Design", n: "820 videos", color: "from-pink-500/30 to-amber-400/20" },
              { v: "ai", t: "AI / ML", n: "642 videos", color: "from-indigo-600/30 to-cyan-500/20" },
              { v: "business", t: "Business", n: "1,810 videos", color: "from-emerald-500/30 to-lime-400/20" },
            ].map((c) => (
              <div key={c.t} className={`relative rounded-xl bg-gradient-to-br ${c.color} border border-white/5 p-3 h-[78px] overflow-hidden`}>
                <Thumb variant={c.v as any} className="absolute -right-3 -bottom-3 w-14 h-14 opacity-90" rounded="rounded-lg" />
                <p className="text-[12.5px] font-semibold">{c.t}</p>
                <p className="text-[10.5px] text-white/55 mt-0.5">{c.n}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended */}
        <div className="px-4 pt-2">
          <h3 className="text-[14px] font-semibold mb-2.5">Recommended for you</h3>

          {[
            { v: "coding", t: "Master TypeScript generics in 22 minutes", ch: "Theo · t3.gg", meta: "284K views · 2d", badge: "Trending" },
            { v: "design", t: "Designing for accessibility — WCAG 2.2 essentials", ch: "Figma", meta: "98K views · 1w", badge: "New" },
            { v: "business", t: "Pricing strategy that doubled our MRR", ch: "Y Combinator", meta: "1.2M views · 3d" },
          ].map((card, i) => (
            <div key={i} className="mb-4">
              <div className="relative">
                <Thumb variant={card.v as any} className="w-full h-[180px]" rounded="rounded-xl" />
                <div className="absolute bottom-2 right-2 text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-black/80 text-white">12:48</div>
                {card.badge && (
                  <div className="absolute top-2 left-2 text-[9.5px] font-semibold px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" /> {card.badge}
                  </div>
                )}
              </div>
              <div className="flex gap-2.5 pt-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-[12.5px] font-medium leading-snug line-clamp-2">{card.t}</p>
                  <p className="text-[10.5px] text-white/55 mt-0.5">{card.ch} · {card.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 glass border-t border-white/5">
        <div className="flex items-center justify-around pt-2 pb-5">
          {[
            { I: Home, l: "Home", active: true },
            { I: Compass, l: "Explore" },
            { I: BookOpen, l: "Notes" },
            { I: BarChart3, l: "Progress" },
            { I: User, l: "You" },
          ].map(({ I, l, active }) => (
            <button key={l} className="flex flex-col items-center gap-1">
              <I className={`w-5 h-5 ${active ? "text-white" : "text-white/55"}`} strokeWidth={active ? 2.2 : 1.7} fill={active ? "white" : "none"} />
              <span className={`text-[9.5px] ${active ? "text-white font-semibold" : "text-white/55"}`}>{l}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
