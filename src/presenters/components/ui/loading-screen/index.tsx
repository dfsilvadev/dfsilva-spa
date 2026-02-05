import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import "./styles.scss";

const isTouchDevice = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(pointer: coarse)").matches;

const LOADING_DURATION_MS = 2500;
const LOADING_STEPS = 100;
const GLITCH_TIMES = [0, 0.1, 0.12, 0.3, 0.32, 0.5, 0.52, 0.7, 0.85, 1];
const GLITCH_OPACITY = [1, 0.8, 1, 0.9, 1, 0.7, 1, 1, 0.85, 1];
const GLITCH_OPACITY_OFF = [0, 0.8, 0, 0.6, 0, 0.7, 0, 0, 0.5, 0];
const GLITCH_X_LEFT = [0, -3, 0, 2, 0, -2, 0, 0, 1, 0];
const GLITCH_X_RIGHT = [0, 3, 0, -2, 0, 2, 0, 0, -1, 0];

export default function LoadingScreen() {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = LOADING_DURATION_MS / LOADING_STEPS;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, interval);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{
        opacity: 0,
        scale: 1.03,
        transition: {
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      style={isTouchDevice() ? undefined : { backfaceVisibility: "hidden" }}
    >
      <motion.div
        className="loading-screen__title-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.h1
          className="loading-screen__title"
          animate={{ opacity: GLITCH_OPACITY }}
          transition={{
            duration: 3,
            repeat: Infinity,
            times: GLITCH_TIMES,
          }}
        >
          {t("loading.helloWorld")}
        </motion.h1>

        <motion.h1
          className="loading-screen__title loading-screen__title--glitch-cyan"
          animate={{
            x: GLITCH_X_LEFT,
            opacity: GLITCH_OPACITY_OFF,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            times: GLITCH_TIMES,
          }}
        >
          {t("loading.helloWorld")}
        </motion.h1>

        <motion.h1
          className="loading-screen__title loading-screen__title--glitch-red"
          animate={{
            x: GLITCH_X_RIGHT,
            opacity: GLITCH_OPACITY_OFF,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            times: GLITCH_TIMES,
          }}
        >
          {t("loading.helloWorld")}
        </motion.h1>

        <motion.div
          className="loading-screen__scanline"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      </motion.div>

      <motion.div
        className="loading-screen__progress-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span className="loading-screen__progress-start">01</span>

        <div className="loading-screen__progress-track">
          <motion.div
            className="loading-screen__progress-fill"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.05, ease: "linear" }}
          />
        </div>

        <span className="loading-screen__progress-end">100</span>
      </motion.div>
    </motion.div>
  );
}
