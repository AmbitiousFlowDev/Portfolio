import {theme} from "../../constants/theme";
import {JSX} from "react";

const {ACCENT, ACCENT_ON_DARK, BLACK, DISPLAY_FONT} = theme;

/**
 * Light mode divider color.
 */
const LIGHT_DIVIDER_COLOR = "rgba(0, 0, 0, 0.12)";

/**
 * Dark mode divider color.
 */
const DARK_DIVIDER_COLOR = "rgba(255, 255, 255, 0.15)";

/**
 * Props for the {@link SectionLabel} component.
 */
export interface SectionLabelProps {
    /**
     * Section number displayed before the title.
     *
     * Example: `"01"`.
     */
    readonly number: string;

    /**
     * Section heading.
     */
    readonly title: string;

    /**
     * Indicates whether the label is rendered on a dark background.
     *
     * @default false
     */
    readonly light?: boolean;
}

/**
 * Displays a numbered section heading with a decorative divider.
 *
 * This component is intended to provide consistent section titles
 * throughout the application.
 *
 * @param props - Component properties.
 * @returns A styled section label.
 */
export function SectionLabel({
                                 number,
                                 title,
                                 light = false,
                             }: SectionLabelProps): JSX.Element {
    const accentColor = light ? ACCENT_ON_DARK : ACCENT;
    const titleColor = light ? "#ffffff" : BLACK;
    const dividerColor = light ? DARK_DIVIDER_COLOR : LIGHT_DIVIDER_COLOR;

    return (
        <div className="mb-16 flex items-center gap-4">
            <span
                className="shrink-0 font-mono text-xs font-semibold uppercase tracking-[0.45em]"
                style={{color: accentColor}}
            >
                — {number} —
            </span>

            <span
                className="leading-none uppercase tracking-tight"
                style={{
                    fontFamily: DISPLAY_FONT,
                    fontWeight: 900,
                    fontSize: "clamp(36px, 6vw, 72px)",
                    color: titleColor,
                }}
            >
                {title}
            </span>

            <div
                aria-hidden="true"
                className="ml-4 h-px flex-1"
                style={{background: dividerColor}}
            />
        </div>
    );
}