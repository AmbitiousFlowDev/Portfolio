import { theme } from "../../../constants/theme";

const { ACCENT_ON_DARK, BLACK, DISPLAY_FONT } = theme;

export function Footer() {
  return (
    <footer className="px-6 md:px-16 py-8" style={{ backgroundColor: BLACK }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span
          className="uppercase tracking-[0.1em] text-white"
          style={{
            fontFamily: DISPLAY_FONT,
            fontWeight: 900,
            fontSize: "22px",
          }}
        >
          MOHAMED LAFROUH
        </span>
        <span
          className="font-mono text-xs tracking-[0.25em] uppercase text-center font-medium"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          © 2024 — IT & Systems Engineering · Morocco
        </span>
        <div className="flex items-center gap-6">
          {[
            { label: "GITHUB", href: "https://github.com/AmbitiousFlowDev" },
            { label: "EMAIL", href: "mailto:m.lafrouh@example.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={label === "GITHUB" ? "_blank" : undefined}
              rel={label === "GITHUB" ? "noopener noreferrer" : undefined}
              className="font-mono text-xs tracking-[0.3em] uppercase transition-colors font-semibold"
              style={{ color: "rgba(255,255,255,0.5)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = ACCENT_ON_DARK)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
              }
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
