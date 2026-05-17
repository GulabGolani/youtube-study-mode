import { PhoneFrame } from "./components/PhoneFrame";
import { HomeFeed } from "./components/screens/HomeFeed";
import { SmartWatch } from "./components/screens/SmartWatch";
import { AINotes } from "./components/screens/AINotes";
import { SmartComments } from "./components/screens/SmartComments";
import { Dashboard } from "./components/screens/Dashboard";
import { SmartSearch } from "./components/screens/SmartSearch";
import { TabletScreen } from "./components/screens/TabletScreen";
import { Sparkles, Focus, BookOpen, BarChart3, Zap, Shield, Eye, Brain } from "lucide-react";

type SectionProps = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  children: React.ReactNode;
  reverse?: boolean;
  bg?: string;
};

function Section({ number, eyebrow, title, description, features, children, reverse, bg }: SectionProps) {
  return (
    <section className={`relative py-24 px-6 md:px-12 lg:px-20 ${bg ?? ""}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          {/* Text */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[11px] tracking-widest text-white/40">{number}</span>
              <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
              <span className="text-[10px] uppercase tracking-widest font-semibold text-blue-300">{eyebrow}</span>
            </div>
            <h2 className="text-[34px] md:text-[42px] font-semibold leading-[1.05] tracking-tight">{title}</h2>
            <p className="mt-5 text-[15px] text-white/65 leading-relaxed max-w-md">{description}</p>
            <ul className="mt-7 space-y-2.5">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[13.5px] text-white/80">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Visual */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-10 rounded-full opacity-40 blur-3xl"
                   style={{ background: "radial-gradient(circle, rgba(99,102,241,0.4), transparent 60%)" }} />
              <div className="relative">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#08080A] text-white selection:bg-blue-500/30">
      {/* Top nav */}
      <nav className="sticky top-0 z-40 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-5 rounded-[6px] bg-[#FF0033] flex items-center justify-center">
              <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5" />
            </div>
            <span className="font-semibold text-[14px] tracking-tight">YouTube Study Mode</span>
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-gradient-to-r from-blue-500 to-purple-500">CASE STUDY</span>
          </div>
          <div className="hidden md:flex items-center gap-7 text-[12px] text-white/70">
            <a href="#overview" className="hover:text-white">Overview</a>
            <a href="#screens" className="hover:text-white">Screens</a>
            <a href="#system" className="hover:text-white">System</a>
            <a href="#responsive" className="hover:text-white">Responsive</a>
          </div>
          <button className="h-8 px-4 rounded-full bg-white text-black text-[12px] font-semibold">Get in touch</button>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden pt-20 pb-16 px-6 md:px-12">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
             style={{ background: "radial-gradient(circle, #4285F4, transparent 60%)" }} />
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
             style={{ background: "radial-gradient(circle, #ff4b91, transparent 60%)" }} />

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 h-7 rounded-full glass border border-white/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 relative">
                <span className="absolute inset-0 rounded-full bg-emerald-400 pulse-ring" />
              </span>
              <span className="text-[11px] text-white/80 font-medium">Concept · Mobile UX/UI Case Study · 2026</span>
            </div>
            <h1 className="text-[52px] md:text-[88px] font-semibold leading-[0.95] tracking-tight max-w-5xl">
              YouTube{" "}
              <span className="ai-shimmer font-semibold">Study Mode</span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[19px] text-white/65 max-w-2xl leading-relaxed">
              Reimagining YouTube as a focused learning environment. AI summaries, smart notes,
              and distraction-free playback designed for students, professionals & self-learners.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {["Material Design 3", "Dark Mode", "AI-First", "Accessibility", "Cross-platform"].map((t) => (
                <span key={t} className="text-[11.5px] px-3 h-7 inline-flex items-center rounded-full bg-white/5 border border-white/10 text-white/75">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Hero phones cluster */}
          <div className="relative mt-20 flex justify-center items-end" style={{ minHeight: 820 }}>
            <div className="hidden lg:block float absolute left-1/2" style={{ transform: "translateX(-130%) translateY(40px) rotate(-7deg) scale(0.88)", animationDelay: "0.3s" }}>
              <PhoneFrame>
                <HomeFeed />
              </PhoneFrame>
            </div>
            <div className="relative z-10 float">
              <PhoneFrame>
                <SmartWatch />
              </PhoneFrame>
            </div>
            <div className="hidden lg:block float absolute left-1/2" style={{ transform: "translateX(30%) translateY(40px) rotate(7deg) scale(0.88)", animationDelay: "0.6s" }}>
              <PhoneFrame>
                <Dashboard />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </header>

      {/* Overview / Problem */}
      <section id="overview" className="relative py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-blue-300 font-semibold mb-3">The Problem</p>
              <h3 className="text-[28px] md:text-[36px] font-semibold leading-tight tracking-tight">
                Educational content is great. The viewing experience isn't built for learning.
              </h3>
            </div>
            <div>
              <p className="text-[15px] text-white/65 leading-relaxed">
                YouTube hosts the world's largest library of free education — yet the interface is optimized
                for entertainment. Students lose focus to recommendations, can't easily revisit key concepts,
                and have no way to capture insights without leaving the app.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { n: "73%", l: "of Gen Z learns via YouTube" },
                  { n: "2.4×", l: "more retention with notes" },
                  { n: "12 min", l: "avg. focus before distraction" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="text-[22px] md:text-[28px] font-semibold ai-shimmer">{s.n}</p>
                    <p className="text-[11px] text-white/55 mt-1 leading-snug">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="mt-20">
            <p className="text-[11px] uppercase tracking-widest text-blue-300 font-semibold mb-6">Design Pillars</p>
            <div className="grid md:grid-cols-4 gap-3">
              {[
                { I: Focus, t: "Distraction-free", d: "Recommendations & suggested videos are hidden. Just you and the lesson." },
                { I: Brain, t: "AI-augmented", d: "Summaries, notes, search and Q&A — generated and contextual." },
                { I: BookOpen, t: "Knowledge keeper", d: "Notes, highlights and timestamps live alongside every video." },
                { I: BarChart3, t: "Measured growth", d: "Track hours, streaks and skill progression like a workout app." },
              ].map(({ I, t, d }) => (
                <div key={t} className="rounded-2xl bg-[#101012] border border-white/8 p-5 hover:border-white/20 transition">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center mb-3">
                    <I className="w-4.5 h-4.5 text-white" strokeWidth={1.7} />
                  </div>
                  <p className="text-[14px] font-semibold mb-1.5">{t}</p>
                  <p className="text-[12px] text-white/60 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SCREENS */}
      <div id="screens" />

      <Section
        number="01 / 07"
        eyebrow="Home Feed"
        title="A feed curated for curiosity, not just clicks."
        description="The Study Mode home replaces the algorithm-driven entertainment feed with personalized educational content, AI-generated playlists and progress-aware 'Continue Learning' cards."
        features={[
          "Personalized recommendations by skill",
          "Resume any lesson with one tap",
          "AI-curated playlists update daily",
          "Smart categories: Coding, Design, AI, Business",
        ]}
      >
        <PhoneFrame>
          <HomeFeed />
        </PhoneFrame>
      </Section>

      <Section
        number="02 / 07"
        eyebrow="Hero Screen · Smart Watch"
        title="A learning surface around every video."
        description="The watch screen is the soul of Study Mode. AI summaries, chapter timelines, smart captions, distraction-free chrome, and an always-on AI assistant turn passive watching into active learning."
        features={[
          "On-device AI summary in 0.8s",
          "Interactive chapter timeline with progress",
          "One-tap timestamp save & quick notes",
          "Floating AI assistant for instant Q&A",
          "Focus Mode hides everything but the lesson",
        ]}
        reverse
        bg="bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"
      >
        <PhoneFrame>
          <SmartWatch />
        </PhoneFrame>
      </Section>

      <Section
        number="03 / 07"
        eyebrow="AI Notes & Highlights"
        title="Every insight, captured automatically."
        description="A built-in notebook stores timestamp-linked highlights, manual notes, and AI-generated key takeaways. Notes are searchable, taggable and synced across devices."
        features={[
          "Auto key-takeaways for every video",
          "Timestamp-linked highlights jump back into context",
          "Search across all notes with semantic AI",
          "Organized by tag, course or playlist",
        ]}
      >
        <PhoneFrame>
          <AINotes />
        </PhoneFrame>
      </Section>

      <Section
        number="04 / 07"
        eyebrow="Smart Comments"
        title="The signal, without the noise."
        description="Comments become useful again. AI groups discussion by topic, surfaces the most helpful answers, highlights creator replies, and filters toxicity by default."
        features={[
          "AI summary of 12,000+ comments",
          "Grouped by topic — find what matters",
          "Creator and 'AI Pick' badges for trust",
          "Toxicity filter on by default",
        ]}
        reverse
        bg="bg-gradient-to-b from-transparent via-purple-950/10 to-transparent"
      >
        <PhoneFrame>
          <SmartComments />
        </PhoneFrame>
      </Section>

      <Section
        number="05 / 07"
        eyebrow="Learning Dashboard"
        title="Make learning a habit you can see."
        description="A Duolingo-grade progress system. Streaks, weekly hours, skill levels and achievements turn watching videos into a measurable practice."
        features={[
          "Streaks & weekly learning chart",
          "Skill progression across topics",
          "XP, levels & achievement badges",
          "Personalized AI 'what to watch next'",
        ]}
      >
        <PhoneFrame>
          <Dashboard />
        </PhoneFrame>
      </Section>

      <Section
        number="06 / 07"
        eyebrow="Smart Search"
        title="Search inside videos, not just titles."
        description="Find the exact moment a concept is explained. Search results return timestamped clips, AI answers source from multiple videos, and voice search works hands-free."
        features={[
          "Search inside spoken video content",
          "Timestamp-precise results",
          "AI Answer aggregates across videos",
          "Voice search with live waveform",
        ]}
        reverse
        bg="bg-gradient-to-b from-transparent via-rose-950/10 to-transparent"
      >
        <PhoneFrame>
          <SmartSearch />
        </PhoneFrame>
      </Section>

      {/* DESIGN SYSTEM */}
      <section id="system" className="py-24 px-6 md:px-12 border-t border-white/5 dot-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[11px] uppercase tracking-widest text-blue-300 font-semibold mb-3">Design System</p>
            <h2 className="text-[36px] md:text-[48px] font-semibold leading-tight tracking-tight">Material 3 · Crafted for focus</h2>
            <p className="mt-4 text-[15px] text-white/65 leading-relaxed">
              A focused token system: deep dark surfaces, signature YouTube red, an AI gradient, and
              accessibility-first typography.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {/* Colors */}
            <div className="rounded-2xl bg-[#101012] border border-white/8 p-6">
              <p className="text-[11px] uppercase tracking-widest text-white/45 font-semibold mb-4">Color tokens</p>
              <div className="space-y-2.5">
                {[
                  { c: "#08080A", l: "Background" },
                  { c: "#171717", l: "Surface" },
                  { c: "#1F1F1F", l: "Surface Container" },
                  { c: "#FF0033", l: "Primary · YouTube" },
                  { c: "linear-gradient(135deg,#4285F4,#9b6dff,#ff4b91)", l: "AI Gradient" },
                  { c: "#10B981", l: "Success" },
                ].map((t) => (
                  <div key={t.l} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-md border border-white/10" style={{ background: t.c }} />
                    <div className="flex-1">
                      <p className="text-[12px]">{t.l}</p>
                      <p className="text-[10px] font-mono text-white/45">{t.c}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div className="rounded-2xl bg-[#101012] border border-white/8 p-6">
              <p className="text-[11px] uppercase tracking-widest text-white/45 font-semibold mb-4">Typography</p>
              <div className="space-y-4">
                <div>
                  <p className="text-[32px] font-semibold leading-tight tracking-tight">Display</p>
                  <p className="text-[10px] font-mono text-white/45 mt-1">Google Sans · 600 · 32/34</p>
                </div>
                <div>
                  <p className="text-[16px] font-semibold">Heading</p>
                  <p className="text-[10px] font-mono text-white/45 mt-1">Google Sans · 600 · 16/22</p>
                </div>
                <div>
                  <p className="text-[13px] text-white/85">Body — minimum 4.5:1 contrast for accessibility on every surface.</p>
                  <p className="text-[10px] font-mono text-white/45 mt-1">Roboto · 400 · 13/20</p>
                </div>
                <div>
                  <p className="text-[11px] font-mono text-amber-300">5:24 · monospace timestamps</p>
                  <p className="text-[10px] font-mono text-white/45 mt-1">JetBrains Mono · 500 · 11/16</p>
                </div>
              </div>
            </div>

            {/* Components */}
            <div className="rounded-2xl bg-[#101012] border border-white/8 p-6">
              <p className="text-[11px] uppercase tracking-widest text-white/45 font-semibold mb-4">Components</p>
              <div className="space-y-3">
                <button className="w-full h-9 rounded-full bg-white text-black text-[12px] font-semibold">Primary action</button>
                <button className="w-full h-9 rounded-full bg-[#FF0033] text-white text-[12px] font-semibold">YouTube CTA</button>
                <button className="w-full h-9 rounded-full text-[12px] font-semibold relative gradient-border bg-[#101012]">
                  <span className="ai-shimmer">AI Action</span>
                </button>
                <button className="w-full h-9 rounded-full bg-[#1f1f1f] border border-white/10 text-white text-[12px] font-medium">Secondary</button>
                <div className="flex gap-1.5">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">Success</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-400/30">Warning</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-400/30">AI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Microinteractions */}
          <div className="mt-12 rounded-2xl bg-[#101012] border border-white/8 p-6 md:p-8">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { I: Zap, t: "0.8s AI summary", d: "Streamed in <1s on-device for instant comprehension." },
                { I: Eye, t: "Focus Mode pulse", d: "Subtle pulse animation indicates active focus state." },
                { I: Shield, t: "Toxicity filter", d: "On by default. Hidden comments are easily inspectable." },
                { I: Sparkles, t: "AI shimmer", d: "Gradient text shimmer marks every AI-generated surface." },
              ].map(({ I, t, d }) => (
                <div key={t} className="flex gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center shrink-0">
                    <I className="w-4 h-4 text-white" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold">{t}</p>
                    <p className="text-[11.5px] text-white/60 mt-1 leading-relaxed">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSIVE / TABLET */}
      <section id="responsive" className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[11px] tracking-widest text-white/40">07 / 07</span>
                <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                <span className="text-[10px] uppercase tracking-widest font-semibold text-blue-300">Tablet · Desktop</span>
              </div>
              <h2 className="text-[34px] md:text-[42px] font-semibold leading-[1.05] tracking-tight">
                One product, three surfaces — built for deep work.
              </h2>
              <p className="mt-5 text-[15px] text-white/65 leading-relaxed max-w-md">
                On larger screens, Study Mode unfolds into a multi-panel workspace. The video, AI summary,
                chapters and live notes coexist — turning YouTube into a real learning environment.
              </p>
              <ul className="mt-7 space-y-2.5">
                {[
                  "Persistent left navigation with playlists",
                  "Video + AI panel + workspace notes in parallel",
                  "Live, contextual note-taking with AI assist",
                  "Same component system, larger canvas",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[13.5px] text-white/80">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7" />
          </div>

          <div className="relative">
            <div className="absolute -inset-16 rounded-full opacity-30 blur-3xl"
                 style={{ background: "radial-gradient(circle, rgba(99,102,241,0.3), transparent 60%)" }} />
            <div className="relative">
              <TabletScreen />
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-widest text-blue-300 font-semibold mb-3">Outcome</p>
          <h2 className="text-[34px] md:text-[44px] font-semibold leading-tight tracking-tight">
            A focused, AI-native learning layer that <span className="ai-shimmer">feels native to YouTube.</span>
          </h2>
          <p className="mt-5 text-[15px] text-white/65 leading-relaxed max-w-2xl mx-auto">
            7 screens. 1 cohesive system. A concept that scales from quick study sessions on mobile
            to multi-hour deep work on tablet — without ever losing the YouTube DNA.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { n: "7", l: "Hi-fi screens" },
              { n: "60+", l: "Components" },
              { n: "1", l: "Design system" },
              { n: "100%", l: "Dark mode" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-[#101012] border border-white/8 p-5">
                <p className="text-[36px] font-semibold ai-shimmer leading-none">{s.n}</p>
                <p className="text-[11.5px] text-white/55 mt-2">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-5 rounded-[6px] bg-[#FF0033] flex items-center justify-center">
              <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5" />
            </div>
            <span className="text-[12.5px] text-white/80 font-medium">YouTube Study Mode · UX Case Study</span>
          </div>
          <p className="text-[11.5px] text-white/45">
            Conceptual project · Not affiliated with Google or YouTube · Designed 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
