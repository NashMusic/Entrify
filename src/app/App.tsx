import { useState } from "react";
import {
  ArrowRight,
  Menu,
  X,
  AlertTriangle,
  DollarSign,
  Search,
  Globe,
  CheckCircle,
  ChevronRight,
  Mail,
  MapPin,
  Clock,
  TrendingUp,
  Users,
  Shield,
  Zap,
  Scale,
  Layers,
} from "lucide-react";

// ── Brand tokens ──────────────────────────────────────────────────────────────
const CYAN = "#00E5CC";
const ORANGE = "#F45B1E";
const NAVY = "#0B1629";
const CARD = "#0F1E35";
const SURFACE = "#162340";
const TEXT = "#E8EDF5";
const MUTED = "#7A90B0";

function Logo({
  size = "md",
}: {
  onDark?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const h = size === "sm" ? 26 : size === "lg" ? 44 : 34;
  return (
    <img
      src="/logo.png"
      alt="Entrify"
      style={{ height: h, width: "auto", display: "block" }}
    />
  );
}

// ── Shared section label ──────────────────────────────────────────────────────
function Label({ children }: { children: string }) {
  return (
    <p
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 11,
        fontWeight: 700,
        color: CYAN,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        marginBottom: 12,
      }}
    >
      {children}
    </p>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const navLinks = ["Services", "How it works", "About", "Roadmap"];

const problems = [
  {
    icon: <AlertTriangle size={20} />,
    title: "Classification errors causing delays",
    desc: "Incorrect tariff codes trigger shipment holds, penalties, and costly corrections that slow your entire supply chain.",
  },
  {
    icon: <DollarSign size={20} />,
    title: "Overhead costs eating your margins",
    desc: "In-house customs teams are expensive to build, train, and retain — especially as fuel costs and logistics expenses continue to rise.",
  },
  {
    icon: <Search size={20} />,
    title: "Bulk submissions without quality checks",
    desc: "High volume entries processed without adequate review create compliance exposure and costly corrections.",
  },
  {
    icon: <Globe size={20} />,
    title: "SMEs locked out of global trade",
    desc: "Small and medium businesses lack access to the customs expertise they need to compete internationally — Entrify changes that.",
  },
];

const lossStats = [
  { label: "Entry errors and reworks", pct: "68%" },
  { label: "Overhead staff costs", pct: "54%" },
  { label: "Shipment delays and holds", pct: "47%" },
  { label: "Compliance penalties", pct: "31%" },
];

const steps = [
  {
    num: "01",
    title: "System access",
    badge: "Zero disruption",
    desc: "We gain secure access to your existing customs platform. No migration required — we work in your environment from day one.",
  },
  {
    num: "02",
    title: "Invoice interpretation",
    badge: "Human expertise",
    desc: "Our team reads and interprets your commercial invoices, applying the correct tariff codes, values, and classifications with expert precision.",
  },
  {
    num: "03",
    title: "Entry framing",
    badge: "Quality assured",
    desc: "We build a complete, quality-checked customs entry — ready for your authorised team to review. Every entry verified before handover.",
  },
  {
    num: "04",
    title: "You submit, you control",
    badge: "You stay in control",
    desc: "Your team does the final submission — you maintain full compliance accountability while Entrify carries the administrative burden.",
  },
];

const services = [
  {
    tag: "Live now",
    name: "Entrify BPO",
    subtitle: "Enterprise clearance outsourcing",
    desc: "Full customs entry administration for logistics companies, freight forwarders, and large volume importers and exporters. We become your embedded customs team — without the overhead.",
    features: [
      "Full entry framing and quality checking",
      "Per entry, retainer, or volume based pricing",
      "Works inside your existing customs system",
      "Significant reduction in overhead costs",
    ],
    cta: "Enquire now",
    accent: CYAN,
  },
  {
    tag: "Live now",
    name: "Entrify Consulting",
    subtitle: "Trade readiness and guidance",
    desc: "For businesses preparing to ship internationally — we guide your team through everything they need to trade with confidence and compliance from day one.",
    features: [
      "International shipping guidance",
      "Team upskilling and training",
      "Compliance framework setup",
    ],
    cta: "Learn more",
    accent: CYAN,
  },
  {
    tag: "Coming soon",
    name: "Entrify Trade Platform",
    subtitle: "Intelligent automation for SMEs",
    desc: "An automated, intelligent platform bringing enterprise-grade customs clearance to e-commerce businesses and SMEs across South Africa and Africa.",
    features: [],
    cta: "Join the waitlist",
    accent: ORANGE,
  },
];

const whyUs = [
  {
    icon: <Clock size={20} />,
    stat: "18",
    unit: "yrs",
    label: "Enterprise experience",
    desc: "Built inside one of the world's leading logistics companies — forged at the highest level of international trade operations.",
  },
  {
    icon: <Shield size={20} />,
    stat: "0",
    unit: "",
    label: "Disruption to your workflow",
    desc: "We work inside your existing systems. No migration, no retraining, no transition pain. We integrate with what you have.",
  },
  {
    icon: <CheckCircle size={20} />,
    stat: "100%",
    unit: "",
    label: "Quality checked every time",
    desc: "Every entry is reviewed before it reaches your team. Human oversight on classification means fewer errors and fewer delays.",
  },
  {
    icon: <Zap size={20} />,
    stat: "3×",
    unit: "",
    label: "Faster than in-house processing",
    desc: "Dedicated focus on entry framing means faster turnaround times than stretched in-house teams juggling multiple responsibilities.",
  },
  {
    icon: <TrendingUp size={20} />,
    stat: "↓",
    unit: "",
    label: "Significant cost reduction",
    desc: "Remove fixed salary, benefits, and training costs of an in-house customs team. Pay only for what you need, when you need it.",
  },
  {
    icon: <Layers size={20} />,
    stat: "∞",
    unit: "",
    label: "Scales with your business",
    desc: "Whether you process 10 entries a month or 10,000 — Entrify scales with your volume without adding headcount.",
  },
];

const roadmap = [
  {
    phase: "Phase 1",
    timing: "Now",
    status: "active",
    title: "BPO Foundation",
    desc: "Enterprise customs clearance outsourcing for South African logistics companies — building revenue, credibility, and operational excellence.",
  },
  {
    phase: "Phase 2",
    timing: "Q1 2027",
    status: "next",
    title: "Entrify Trade Platform",
    desc: "Automated, intelligent platform bringing customs clearance capability to e-commerce businesses and SMEs across South Africa.",
  },
  {
    phase: "Phase 3",
    timing: "2028+",
    status: "future",
    title: "Pan-African Expansion",
    desc: "Leveraging AfCFTA to expand across African markets — becoming the definitive trade facilitation infrastructure for African commerce.",
  },
];

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const display = { fontFamily: "'Barlow Condensed', sans-serif" };
  const body = { fontFamily: "'Inter', sans-serif" };

  return (
    <div style={{ background: NAVY, color: TEXT, ...body, minHeight: "100vh" }}>
      {/* ── NAV ──────────────────────────────────────────────────────────── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(11,22,41,0.95)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 66,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Logo />
          <div className="hidden md:flex" style={{ gap: 2 }}>
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/ /g, "-")}`}
                style={{
                  padding: "8px 18px",
                  fontSize: 14,
                  color: MUTED,
                  textDecoration: "none",
                  borderRadius: 4,
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = TEXT)}
                onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
              >
                {l}
              </a>
            ))}
          </div>
          <div
            className="hidden md:flex"
            style={{ alignItems: "center", gap: 10 }}
          >
            <a
              href="#get-in-touch"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "9px 20px",
                fontSize: 13,
                fontWeight: 700,
                background: CYAN,
                border: "none",
                borderRadius: 4,
                color: NAVY,
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Get in touch <ArrowRight size={14} />
            </a>
          </div>
          <button
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            style={{
              background: "none",
              border: "none",
              color: MUTED,
              cursor: "pointer",
              padding: 8,
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {mobileOpen && (
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              background: CARD,
              padding: "16px 24px",
            }}
          >
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/ /g, "-")}`}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "10px 0",
                  fontSize: 14,
                  color: MUTED,
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                {l}
              </a>
            ))}
            <a
              href="#get-in-touch"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                marginTop: 14,
                padding: "11px 0",
                textAlign: "center",
                background: CYAN,
                borderRadius: 4,
                fontSize: 13,
                fontWeight: 700,
                color: NAVY,
                textDecoration: "none",
              }}
            >
              Get in touch
            </a>
          </div>
        )}
      </nav>

      <div style={{ height: 66 }} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "100px 24px 90px",
        }}
      >
        {/* grid bg */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.03,
            backgroundImage: `linear-gradient(rgba(0,229,204,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,204,1) 1px, transparent 1px)`,
            backgroundSize: "52px 52px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(0,229,204,0.12) 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: 0,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(244,91,30,0.09) 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          {/* launch badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 100,
              marginBottom: 28,
              border: `1px solid rgba(0,229,204,0.3)`,
              background: "rgba(0,229,204,0.07)",
              color: CYAN,
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: CYAN,
                display: "inline-block",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            Now launching — South Africa
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
            }}
            className="hero-grid"
          >
            <div>
              <h1
                style={{
                  ...display,
                  fontSize: "clamp(3.6rem, 7vw, 6.5rem)",
                  fontWeight: 900,
                  lineHeight: 0.9,
                  letterSpacing: "-0.01em",
                  margin: "0 0 28px",
                }}
              >
                Trade without
                <br />
                <span style={{ color: CYAN }}>friction.</span>
              </h1>
              <p
                style={{
                  fontSize: 17,
                  color: MUTED,
                  lineHeight: 1.75,
                  maxWidth: 460,
                  margin: "0 0 40px",
                }}
              >
                Entrify is the intelligent customs clearance layer that
                eliminates administrative overhead, reduces errors, and gives
                businesses of every size the confidence to trade — locally,
                regionally, and across Africa.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href="#get-in-touch"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "14px 26px",
                    fontSize: 14,
                    fontWeight: 700,
                    background: CYAN,
                    border: "none",
                    borderRadius: 4,
                    color: NAVY,
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  Start trading smarter <ArrowRight size={15} />
                </a>
                <a
                  href="#how-it-works"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "14px 26px",
                    fontSize: 14,
                    fontWeight: 600,
                    background: "none",
                    border: "1px solid rgba(255,255,255,0.14)",
                    borderRadius: 4,
                    color: TEXT,
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  See how it works
                </a>
              </div>
            </div>

            {/* Hero stats card */}
            <div
              style={{
                background: CARD,
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 10,
                padding: 36,
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: MUTED,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 28,
                }}
              >
                Why businesses trust Entrify
              </p>
              {[
                {
                  stat: "18",
                  suffix: " yrs",
                  label: "of customs clearance expertise",
                  sub: "Built at enterprise level, inside global logistics",
                },
                {
                  stat: "54",
                  suffix: "",
                  label: "African nations under AfCFTA opportunity",
                  sub: "Your gateway to continental trade",
                },
                {
                  stat: "Zero",
                  suffix: "",
                  label: "disruption to your existing systems",
                  sub: "We work inside what you already use",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 20,
                    alignItems: "flex-start",
                    paddingBottom: i < 2 ? 24 : 0,
                    marginBottom: i < 2 ? 24 : 0,
                    borderBottom:
                      i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  }}
                >
                  <div
                    style={{
                      ...display,
                      fontSize: 42,
                      fontWeight: 900,
                      color: CYAN,
                      lineHeight: 1,
                      minWidth: 72,
                      flexShrink: 0,
                    }}
                  >
                    {s.stat}
                    <span style={{ fontSize: 24 }}>{s.suffix}</span>
                  </div>
                  <div>
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: 15,
                        lineHeight: 1.3,
                        marginBottom: 4,
                      }}
                    >
                      {s.label}
                    </p>
                    <p style={{ fontSize: 12, color: MUTED }}>{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ──────────────────────────────────────────────────── */}
      <section
        style={{
          background: CARD,
          borderTop: "1px solid rgba(255,255,255,0.07)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "90px 24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Label>The Problem</Label>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              alignItems: "start",
              marginBottom: 56,
            }}
            className="problem-header-grid"
          >
            <h2
              style={{
                ...display,
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 900,
                margin: 0,
                lineHeight: 1.05,
              }}
            >
              Cross-border trade is harder than it needs to be
            </h2>
            <p
              style={{
                fontSize: 16,
                color: MUTED,
                lineHeight: 1.75,
                margin: 0,
                paddingTop: 6,
              }}
            >
              South African businesses are losing time, money, and competitive
              edge to customs complexity that nobody has properly solved — until
              now.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16,
              marginBottom: 48,
            }}
            className="problems-grid"
          >
            {problems.map((p, i) => (
              <div
                key={i}
                style={{
                  background: NAVY,
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 8,
                  padding: 24,
                  display: "flex",
                  gap: 16,
                }}
              >
                <div style={{ color: ORANGE, flexShrink: 0, marginTop: 2 }}>
                  {p.icon}
                </div>
                <div>
                  <h3
                    style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.65 }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              background: NAVY,
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 8,
              padding: 32,
            }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: MUTED,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Where businesses lose the most
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 20,
              }}
              className="loss-grid"
            >
              {lossStats.map((s, i) => (
                <div key={i}>
                  <div
                    style={{
                      ...display,
                      fontSize: 48,
                      fontWeight: 900,
                      color: ORANGE,
                      lineHeight: 1,
                      marginBottom: 8,
                    }}
                  >
                    {s.pct}
                  </div>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.5 }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section id="how-it-works" style={{ padding: "90px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Label>How it works</Label>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              alignItems: "end",
              marginBottom: 56,
            }}
            className="section-header-grid"
          >
            <h2
              style={{
                ...display,
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 900,
                margin: 0,
              }}
            >
              Four steps to frictionless trade
            </h2>
            <p
              style={{
                fontSize: 15,
                color: MUTED,
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Entrify works inside your existing systems — no migration, no
              disruption, no learning curve for your team.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 2,
            }}
            className="steps-grid"
          >
            {steps.map((s, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius:
                    i === 0 ? "8px 0 0 8px" : i === 3 ? "0 8px 8px 0" : 0,
                  padding: 28,
                  position: "relative",
                  overflow: "hidden",
                }}
                className="step-card"
              >
                {/* accent top line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background:
                      i === 0 ? CYAN : `rgba(0,229,204,${0.6 - i * 0.1})`,
                  }}
                />
                <div
                  style={{
                    ...display,
                    fontSize: 40,
                    fontWeight: 900,
                    color: "rgba(0,229,204,0.18)",
                    lineHeight: 1,
                    marginBottom: 16,
                  }}
                >
                  {s.num}
                </div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    marginBottom: 10,
                    lineHeight: 1.3,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: MUTED,
                    lineHeight: 1.65,
                    marginBottom: 20,
                  }}
                >
                  {s.desc}
                </p>
                <span
                  style={{
                    display: "inline-block",
                    padding: "4px 10px",
                    fontSize: 11,
                    fontWeight: 700,
                    borderRadius: 3,
                    background: "rgba(0,229,204,0.1)",
                    color: CYAN,
                    letterSpacing: "0.04em",
                  }}
                >
                  {s.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: CARD,
          borderTop: "1px solid rgba(255,255,255,0.07)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "90px 24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Label>Our Services</Label>
          <div id="services">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 60,
                alignItems: "end",
                marginBottom: 52,
              }}
              className="section-header-grid"
            >
              <h2
                style={{
                  ...display,
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontWeight: 900,
                  margin: 0,
                }}
              >
                Built for every stage of your trade journey
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: MUTED,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                Whether you&apos;re preparing to ship internationally for the
                first time or processing thousands of entries monthly — Entrify
                has a solution built for you.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
            className="services-grid"
          >
            {services.map((svc, i) => (
              <div
                key={i}
                style={{
                  background: NAVY,
                  border: `1px solid ${svc.tag === "Coming soon" ? "rgba(244,91,30,0.2)" : "rgba(255,255,255,0.08)"}`,
                  borderRadius: 10,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* top accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: svc.accent,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 20,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: 3,
                      background:
                        svc.tag === "Coming soon"
                          ? "rgba(244,91,30,0.12)"
                          : "rgba(0,229,204,0.1)",
                      color: svc.tag === "Coming soon" ? ORANGE : CYAN,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {svc.tag.toUpperCase()}
                  </span>
                </div>
                <h3
                  style={{
                    ...display,
                    fontSize: 26,
                    fontWeight: 900,
                    marginBottom: 4,
                  }}
                >
                  {svc.name}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: MUTED,
                    marginBottom: 16,
                  }}
                >
                  {svc.subtitle}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: MUTED,
                    lineHeight: 1.7,
                    marginBottom: 24,
                    flex: 1,
                  }}
                >
                  {svc.desc}
                </p>
                {svc.features.length > 0 && (
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "0 0 28px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {svc.features.map((f, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          fontSize: 13,
                        }}
                      >
                        <CheckCircle
                          size={15}
                          style={{ color: CYAN, flexShrink: 0, marginTop: 2 }}
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <a
                  href="#get-in-touch"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    padding: "12px 0",
                    fontSize: 13,
                    fontWeight: 700,
                    borderRadius: 4,
                    textDecoration: "none",
                    border: "none",
                    cursor: "pointer",
                    background:
                      svc.tag === "Coming soon"
                        ? "rgba(244,91,30,0.12)"
                        : "rgba(0,229,204,0.1)",
                    color: svc.tag === "Coming soon" ? ORANGE : CYAN,
                    transition: "all 0.15s",
                  }}
                >
                  {svc.cta} <ChevronRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ENTRIFY ──────────────────────────────────────────────────── */}
      <section id="about" style={{ padding: "90px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Label>Why Entrify</Label>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              alignItems: "end",
              marginBottom: 52,
            }}
            className="section-header-grid"
          >
            <h2
              style={{
                ...display,
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 900,
                margin: 0,
              }}
            >
              The expertise others can&apos;t replicate
            </h2>
            <p
              style={{
                fontSize: 15,
                color: MUTED,
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Anyone can build a process. What takes 18 years to build is the
              judgment, the relationships, and the deep institutional knowledge
              that makes the difference when complexity strikes.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
              marginBottom: 56,
            }}
            className="why-grid"
          >
            {whyUs.map((w, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 8,
                  padding: 24,
                }}
              >
                <div
                  style={{
                    ...display,
                    fontSize: 44,
                    fontWeight: 900,
                    color: CYAN,
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {w.stat}
                </div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    marginBottom: 8,
                    color: TEXT,
                  }}
                >
                  {w.label}
                </h3>
                <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.65 }}>
                  {w.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Founder */}
          <div
            style={{
              background: CARD,
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 10,
              padding: "40px 40px",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 48,
              alignItems: "center",
            }}
            className="founder-grid"
          >
            <div>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: CYAN,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                The Founder
              </p>
              <blockquote
                style={{
                  ...display,
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  margin: "0 0 24px",
                  color: TEXT,
                }}
              >
                &ldquo;I spent 18 years watching businesses struggle with
                customs complexity that should never have been this hard.
                Entrify exists to change that.&rdquo;
              </blockquote>
              <p
                style={{
                  fontSize: 14,
                  color: MUTED,
                  lineHeight: 1.75,
                  maxWidth: 560,
                  marginBottom: 28,
                }}
              >
                Nash Kamaldien built his expertise inside the global logistics
                industry, spending nearly two decades understanding exactly
                where businesses lose time, money, and competitive edge in the
                customs clearance process. Entrify is the solution he always
                knew the market needed.
              </p>
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                {[
                  {
                    icon: <Clock size={14} />,
                    label: "18 yrs enterprise customs & logistics experience",
                  },
                  {
                    icon: <MapPin size={14} />,
                    label: "Founded and operated in South Africa",
                  },
                  {
                    icon: <Globe size={14} />,
                    label: "AfCFTA ready — built for African commerce",
                  },
                ].map((b, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 12,
                      color: MUTED,
                    }}
                  >
                    {" "}
                    {b.label}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ textAlign: "center", flexShrink: 0 }}>
              <div
                style={{
                  width: 88,
                  height: 88,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, rgba(0,229,204,0.2), rgba(0,229,204,0.05))`,
                  border: `2px solid rgba(0,229,204,0.3)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 12px",
                }}
              >
                <span
                  style={{
                    ...display,
                    fontSize: 28,
                    fontWeight: 900,
                    color: CYAN,
                  }}
                >
                  NK
                </span>
              </div>
              <p style={{ fontWeight: 700, fontSize: 15 }}>Nash Kamaldien</p>
              <p style={{ fontSize: 12, color: MUTED, marginTop: 2 }}>
                Founder, Entrify (Pty) Ltd
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROADMAP ──────────────────────────────────────────────────────── */}
      <section
        id="roadmap"
        style={{
          background: CARD,
          borderTop: "1px solid rgba(255,255,255,0.07)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "90px 24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Label>Roadmap</Label>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              alignItems: "end",
              marginBottom: 52,
            }}
            className="section-header-grid"
          >
            <h2
              style={{
                ...display,
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 900,
                margin: 0,
              }}
            >
              Building the trade infrastructure for African commerce
            </h2>
            <p
              style={{
                fontSize: 15,
                color: MUTED,
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Entrify is not just a service business — it&apos;s the foundation
              of something much bigger. Here&apos;s how we&apos;re building it.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 4,
              position: "relative",
            }}
            className="roadmap-grid"
          >
            {/* connector line */}
            <div
              style={{
                position: "absolute",
                top: 36,
                left: "16.66%",
                right: "16.66%",
                height: 2,
                background: `linear-gradient(90deg, ${CYAN}, rgba(0,229,204,0.2))`,
              }}
              className="hidden md:block"
            />

            {roadmap.map((r, i) => (
              <div
                key={i}
                style={{
                  background: NAVY,
                  border: `1px solid ${r.status === "active" ? `rgba(0,229,204,0.3)` : "rgba(255,255,255,0.07)"}`,
                  borderRadius: 8,
                  padding: 28,
                  position: "relative",
                }}
              >
                {/* phase dot */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      background:
                        r.status === "active"
                          ? CYAN
                          : r.status === "next"
                            ? `rgba(0,229,204,0.4)`
                            : "rgba(255,255,255,0.15)",
                      border:
                        r.status === "active"
                          ? `3px solid rgba(0,229,204,0.3)`
                          : "none",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: r.status === "active" ? CYAN : MUTED,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {r.phase}
                  </span>
                  <span
                    style={{
                      marginLeft: "auto",
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "3px 8px",
                      borderRadius: 3,
                      background:
                        r.status === "active"
                          ? "rgba(0,229,204,0.1)"
                          : "rgba(255,255,255,0.05)",
                      color: r.status === "active" ? CYAN : MUTED,
                    }}
                  >
                    {r.timing}
                  </span>
                </div>
                <h3
                  style={{
                    ...display,
                    fontSize: 22,
                    fontWeight: 900,
                    marginBottom: 10,
                  }}
                >
                  {r.title}
                </h3>
                <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.65 }}>
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / GET IN TOUCH ───────────────────────────────────────────── */}
      <section
        id="get-in-touch"
        style={{
          padding: "100px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(0,229,204,0.07) 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 700,
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          <Label>Ready to start?</Label>
          <h2
            style={{
              ...display,
              fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
              fontWeight: 900,
              lineHeight: 0.95,
              margin: "0 0 24px",
            }}
          >
            Ready to trade
            <br />
            <span style={{ color: CYAN }}>without friction?</span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: MUTED,
              lineHeight: 1.75,
              marginBottom: 40,
              maxWidth: 500,
              margin: "0 auto 40px",
            }}
          >
            Whether you&apos;re a large logistics company looking to reduce
            overhead or a business preparing to ship internationally for the
            first time — let&apos;s talk about what Entrify can do for you.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 24,
            }}
          >
            <a
              href="mailto:info@entrify.co.za"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "15px 28px",
                fontSize: 14,
                fontWeight: 700,
                background: CYAN,
                border: "none",
                borderRadius: 4,
                color: NAVY,
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Get in touch <ArrowRight size={15} />
            </a>
            <a
              href="#services"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "15px 28px",
                fontSize: 14,
                fontWeight: 600,
                background: "none",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 4,
                color: TEXT,
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Explore services
            </a>
          </div>
          <p style={{ fontSize: 13, color: MUTED }}>
            Or email us at{" "}
            <a
              href="mailto:info@entrify.co.za"
              style={{ color: CYAN, textDecoration: "none", fontWeight: 600 }}
            >
              info@entrify.co.za
            </a>
          </p>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer
        style={{
          background: CARD,
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "52px 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.8fr 1fr 1fr 1fr",
              gap: 40,
              marginBottom: 44,
            }}
            className="footer-grid"
          >
            <div>
              <Logo size="md" />
              <p
                style={{
                  fontSize: 13,
                  color: MUTED,
                  marginTop: 16,
                  lineHeight: 1.7,
                  maxWidth: 240,
                }}
              >
                The intelligent customs clearance layer for South African and
                African trade.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 20,
                  fontSize: 13,
                  color: MUTED,
                }}
              >
                <Mail size={14} style={{ color: CYAN }} />
                <a
                  href="mailto:info@entrify.co.za"
                  style={{ color: MUTED, textDecoration: "none" }}
                >
                  info@entrify.co.za
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 10,
                  fontSize: 13,
                  color: MUTED,
                }}
              >
                <MapPin size={14} style={{ color: CYAN }} />
                <span>South Africa</span>
              </div>
            </div>
            {[
              {
                heading: "Services",
                links: [
                  { label: "Entrify BPO", href: "#services" },
                  { label: "Entrify Consulting", href: "#services" },
                  { label: "Trade Platform", href: "#services" },
                  { label: "Request a quote", href: "#get-in-touch" },
                ],
              },
              {
                heading: "Company",
                links: [
                  { label: "About", href: "#about" },
                  { label: "How it works", href: "#how-it-works" },
                  { label: "Roadmap", href: "#roadmap" },
                ],
              },
              {
                heading: "Connect",
                links: [
                  { label: "Get in touch", href: "#get-in-touch" },
                  { label: "Email us", href: "mailto:info@entrify.co.za" },
                ],
              },
            ].map((col) => (
              <div key={col.heading}>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: TEXT,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 18,
                  }}
                >
                  {col.heading}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        style={{
                          fontSize: 13,
                          color: MUTED,
                          textDecoration: "none",
                        }}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 24,
              borderTop: "1px solid rgba(255,255,255,0.07)",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            <p style={{ fontSize: 12, color: MUTED }}>
              © 2025 Entrify (Pty) Ltd. Founded in South Africa. Built for
              African commerce.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: CYAN,
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              <span style={{ fontSize: 12, color: MUTED }}>
                Now live — South Africa
              </span>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.35} }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        section[id] { scroll-margin-top: 70px; }
        a:hover { opacity: 0.85; }
        @media (max-width: 960px) {
          .hero-grid, .problem-header-grid, .section-header-grid, .founder-grid, .brand-grid { grid-template-columns: 1fr !important; }
          .hero-grid { gap: 40px !important; }
          .problems-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr 1fr !important; }
          .steps-grid { grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
          .roadmap-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .loss-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
          .loss-grid { grid-template-columns: 1fr 1fr !important; }
        }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.07); border-radius: 3px; }
      `}</style>
    </div>
  );
}
