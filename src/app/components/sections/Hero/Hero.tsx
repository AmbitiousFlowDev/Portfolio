import { ArrowUpRight, Download, Github, MapPin } from "lucide-react";
import { theme } from "../../../constants/theme";
import { motion } from "motion/react";

const { ACCENT, BLACK, DISPLAY_FONT } = theme;

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white pt-[72px]">
      {/* Diagonal accent panel */}
      <div
        className="absolute top-0 right-0 hidden md:block"
        style={{
          width: "38vw",
          height: "58vh",
          backgroundColor: ACCENT,
          clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* Subtle grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[25, 50, 75].map((p) => (
          <div
            key={p}
            className="absolute w-full border-t"
            style={{ top: `${p}%`, borderColor: "rgba(0,0,0,0.04)" }}
          />
        ))}
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto w-full py-12">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span
            className="font-mono text-xs tracking-[0.45em] uppercase font-semibold"
            style={{ color: ACCENT }}
          >
            ◼ INFORMATION TECHNOLOGY & SYSTEMS ENGINEERING · MOROCCO
          </span>
        </motion.div>

        {/* MOHAMED */}
        <div className="overflow-hidden mb-1">
          <motion.div
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="block uppercase leading-none"
              style={{
                fontFamily: DISPLAY_FONT,
                fontWeight: 900,
                fontSize: "clamp(68px, 13vw, 185px)",
                letterSpacing: "-0.025em",
                color: BLACK,
              }}
            >
              MOHAMED
            </span>
          </motion.div>
        </div>

        {/* LAFROUH */}
        <div className="overflow-hidden mb-10">
          <motion.div
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span
              className="block uppercase leading-none"
              style={{
                fontFamily: DISPLAY_FONT,
                fontWeight: 900,
                fontSize: "clamp(68px, 13vw, 185px)",
                letterSpacing: "-0.025em",
                color: ACCENT,
              }}
            >
              LAFROUH
            </span>
          </motion.div>
        </div>

        {/* Descriptor row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap items-center gap-4 mb-10"
        >
          <div className="w-10 h-0.5" style={{ backgroundColor: ACCENT }} />
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-black">
            Full-Stack Engineer
          </span>
          <span className="text-black/40">·</span>
          <span className="flex items-center gap-1.5 font-mono text-xs tracking-[0.2em] uppercase text-black/60">
            <MapPin size={12} /> Morocco
          </span>
          <span className="text-black/40">·</span>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-black/60">
            Open to Opportunities
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.58 }}
          className="flex flex-wrap gap-3"
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 text-sm font-bold tracking-[0.25em] uppercase text-white transition-colors"
            style={{ backgroundColor: BLACK }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = ACCENT)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = BLACK)
            }
          >
            VIEW PROJECTS
          </button>
          <button
  onClick={() => !disabled && window.print()}
  disabled={disabled}
  className="flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-[0.25em] uppercase text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
  style={{ backgroundColor: disabled ? "#999" : ACCENT }}
  onMouseEnter={(e) => {
    if (!disabled) e.currentTarget.style.backgroundColor = BLACK;
  }}
  onMouseLeave={(e) => {
    if (!disabled) e.currentTarget.style.backgroundColor = ACCENT;
  }}
>
  <Download size={14} /> DOWNLOAD CV
</button>
          <a
            href="https://github.com/AmbitiousFlowDev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-[0.25em] uppercase border-2 transition-colors"
            style={{ borderColor: BLACK, color: BLACK }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = ACCENT;
              e.currentTarget.style.color = ACCENT;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = BLACK;
              e.currentTarget.style.color = BLACK;
            }}
          >
            <Github size={14} /> GITHUB <ArrowUpRight size={12} />
          </a>
        </motion.div>
      </div>

      {/* Bottom status bar */}
      <div
        className="relative z-10"
        style={{ borderTop: `2px solid ${BLACK}` }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: ACCENT }}
            />
            <span className="font-mono text-xs tracking-[0.35em] uppercase text-black/60">
              Available for Internships & Collaboration
            </span>
          </div>
          <span className="font-mono text-xs tracking-[0.25em] text-black/40">
            PORTFOLIO 2026
          </span>
        </div>
      </div>
    </section>
  );
}
