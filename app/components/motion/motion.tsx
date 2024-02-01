"use client";

import { motion, useInView, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

export const MotionDiv = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: false });

  const [style, setStyle] = useState({
    overflow: "hidden",
  });

  useEffect(() => {
    const animateElement = async () => {
      if (isInView) {
        await animate(
          scope.current,
          { y: 0 },
          { ease: "linear", delay: delay, duration: 0.5 }
        );
      } else {
        await animate(
          scope.current,
          { y: "100%" },
          { ease: "linear", delay: delay, duration: 0.5 }
        );
      }
    };

    animateElement();
  }, [isInView, animate, delay, scope]);

  return (
    <span style={style}>
      <motion.div initial={{ y: "100%" }} ref={scope} className="inline-block">
        {children}
      </motion.div>
    </span>
  );
};

export const MotionTranslate = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  const [style, setStyle] = useState({
    overflow: "hidden",
  });

  useEffect(() => {
    const animateElement = async () => {
      if (isInView) {
        await animate(
          scope.current,
          { y: 0 },
          { ease: "linear", delay: delay, duration: 0.5 }
        );
      }
    };

    animateElement();
  }, [isInView, animate, delay, scope]);

  return (
    <span style={style}>
      <motion.div initial={{ y: "100%" }} ref={scope} className="inline-block">
        {children}
      </motion.div>
    </span>
  );
};
