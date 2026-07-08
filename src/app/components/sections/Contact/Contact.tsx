import { FadeUp } from "../../animations/FadeUp";
import { ArrowUpRight, Github, Mail } from "lucide-react";

import { theme } from "../../../constants/theme";

const { ACCENT, BLACK, DISPLAY_FONT } = theme;

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ backgroundColor: ACCENT }}
    >
      {/* Geometric decorators */}
      <div
        className="absolute top-10 right-10 w-44 h-44 hidden md:block"
        style={{ border: "2px solid rgba(255,255,255,0.2)" }}
      />
      <div
        className="absolute top-10 right-[72px] w-44 h-44 hidden md:block"
        style={{ border: "2px solid rgba(255,255,255,0.09)" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-64 h-64 rotate-12 opacity-10"
        style={{ backgroundColor: BLACK }}
      />

      <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto">
        <FadeUp>
          <div className="flex items-center gap-4 mb-10">
            <span
              className="font-mono text-xs tracking-[0.45em] uppercase font-semibold"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              — 06 —
            </span>
            <span
              className="uppercase leading-none tracking-tight text-white"
              style={{
                fontFamily: DISPLAY_FONT,
                fontWeight: 900,
                fontSize: "clamp(36px, 6vw, 72px)",
              }}
            >
              CONTACT
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="uppercase text-white leading-none mb-8"
            style={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 900,
              fontSize: "clamp(44px, 8vw, 114px)",
            }}
          >
            LET'S BUILD
            <br />
            SOMETHING.
          </h2>
        </FadeUp>

        <FadeUp delay={0.18}>
          <p
            className="text-base md:text-lg leading-relaxed max-w-md mb-12 font-medium"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Open to internships, freelance projects, and collaborative research.
            Based in Morocco — working globally.
          </p>
        </FadeUp>

        <FadeUp delay={0.24}>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/AmbitiousFlowDev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold tracking-[0.25em] uppercase transition-colors"
              style={{ backgroundColor: "white", color: ACCENT }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = BLACK;
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = ACCENT;
              }}
            >
              <Github size={14} /> VIEW GITHUB
            </a>
            <a
              href="mailto:m.lafrouh@example.com"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold tracking-[0.25em] uppercase text-white transition-all"
              style={{ border: "2px solid rgba(255,255,255,0.75)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = ACCENT;
                e.currentTarget.style.borderColor = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.75)";
              }}
            >
              <Mail size={14} /> EMAIL ME <ArrowUpRight size={12} />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
