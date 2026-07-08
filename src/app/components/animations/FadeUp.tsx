import { motion } from "motion/react";
import { JSX, type ReactNode } from "react";

/**
 * Cubic Bézier easing used for the fade-up animation.
 */
const FADE_UP_EASING = [0.16, 1, 0.3, 1] as const;

/**
 * Initial animation state.
 */
const INITIAL_ANIMATION = {
  opacity: 0,
  y: 36,
} as const;

/**
 * Final animation state when the component enters the viewport.
 */
const VISIBLE_ANIMATION = {
  opacity: 1,
  y: 0,
} as const;

/**
 * Props for the {@link FadeUp} component.
 */
export interface FadeUpProps {
  /**
   * Content to animate.
   */
  readonly children: ReactNode;

  /**
   * Animation delay in seconds.
   *
   * @default 0
   */
  readonly delay?: number;

  /**
   * Optional CSS class names applied to the wrapper element.
   *
   * @default ""
   */
  readonly className?: string;
}

/**
 * Animates its children with a smooth fade-in and upward motion
 * the first time they enter the viewport.
 *
 * The animation is only triggered once to improve performance and
 * prevent repeated animations during scrolling.
 *
 * @param props - Component properties.
 * @returns A motion-enabled wrapper containing the animated content.
 */
export function FadeUp({
  children,
  delay = 0,
  className = "",
}: FadeUpProps): JSX.Element {
  return (
    <motion.div
      initial={INITIAL_ANIMATION}
      whileInView={VISIBLE_ANIMATION}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
        ease: FADE_UP_EASING,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
