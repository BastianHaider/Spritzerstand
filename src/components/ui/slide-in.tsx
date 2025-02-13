import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SlideInProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  delay?: number;
}

export function SlideIn({
  children,
  direction = "left",
  delay = 0,
}: SlideInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: direction === "left" ? -50 : 50,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
            }
          : {
              opacity: 0,
              x: direction === "left" ? -50 : 50,
            }
      }
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
