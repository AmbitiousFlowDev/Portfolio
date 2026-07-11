import { theme } from "../../../constants/theme";
import { useState, type JSX } from "react";
const { ACCENT_ON_DARK } = theme;

export function SkillBadge({ item }: { readonly item: string }): JSX.Element {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="inline-flex h-6 items-center whitespace-nowrap rounded-sm border px-2.5 text-xs font-mono font-medium tracking-wide transition-colors duration-200"
      style={{
        color: hovered ? "#ffffff" : "rgba(255,255,255,0.80)",
        border: `1px solid ${
          hovered ? ACCENT_ON_DARK : "rgba(255,255,255,0.22)"
        }`,
        backgroundColor: hovered ? `${ACCENT_ON_DARK}22` : "transparent",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {item}
    </span>
  );
}
