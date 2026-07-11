import { useState, type JSX } from "react";
import { motion } from "motion/react";
import { theme } from "../../../constants/theme";
import { SkillBadge } from "./SkillBadge";

const { ACCENT_ON_DARK } = theme;

/**
 * Animation variants for a skill group.
 */
const SKILL_GROUP_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
} as const;

/**
 * Transition easing.
 */
const EASING = [0.16, 1, 0.3, 1] as const;

/**
 * Shared style for the category header.
 */
const CATEGORY_STYLE = {
  color: ACCENT_ON_DARK,
  borderBottom: `1px solid ${ACCENT_ON_DARK}55`,
} as const;

/**
 * Shared style for a skill badge.
 */
const SKILL_BADGE_STYLE = {
  color: "rgba(255,255,255,0.80)",
  border: "1px solid rgba(255,255,255,0.22)",
} as const;

/**
 * Properties for {@link SkillGroupCard}.
 */
export interface SkillGroupCardProps {
  /**
   * Skill category name.
   */
  readonly label: string;

  /**
   * Skills belonging to the category.
   */
  readonly items: readonly string[];

  /**
   * Delay before the animation starts.
   */
  readonly delay: number;
}

/**
 * Displays a category of related skills.
 *
 * @param props - Component properties.
 * @returns A motion-enabled skill category.
 */
export function SkillGroupCard({
  label,
  items,
  delay,
}: SkillGroupCardProps): JSX.Element {
  return (
    <motion.div
      variants={SKILL_GROUP_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.45,
        delay,
        ease: EASING,
      }}
    >
      <h3
        className="mb-4 border-b pb-3 font-mono text-xs font-bold uppercase tracking-[0.45em]"
        style={CATEGORY_STYLE}
      >
        {label}
      </h3>

      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <SkillBadge key={item} item={item} />
        ))}
      </div>
    </motion.div>
  );
}
