"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion-transitions";

export type MotionTransitionProps = {
  children: React.ReactNode;
  className?: string;
  position: "right" | "bottom";
};

export function MotionTransition({
  children,
  className,
  position,
}: MotionTransitionProps) {
  const variants = fadeIn(position);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
