/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
// ICONS
import { Eye, ArrowLeft, ExternalLink } from "lucide-react";
// motion
import { motion, AnimatePresence } from "motion/react";
// features component
import ShinyText from "../AnimatedComponents.jsx/ShinyText";

export const Card = ({ project }) => {
  const stopScroll = (e) => {
    e.stopPropagation();
  };
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isOpen, setisOpen] = useState(false);
  const scrollYRef = useRef(0);
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  }, [isOpen]);
  const unlockScroll = () => {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.left = "";
    document.body.style.right = "";
  };

  const threshold = 12;

  const handleMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    setTilt({
      x: y * -threshold,
      y: x * threshold,
    });
  };

  return (
    <>
      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full"
      >
        <motion.div layoutId={project.title} className="w-full">
          {/* actual interactive card */}
          <div
            onMouseMove={handleMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            className="bg-background border border-gray-400 rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer max-w-120 h-auto"
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-52 object-cover"
            />

            <h3 className="text-foreground mt-3 px-4 pt-3 mb-1 text-lg font-semibold">
              {project.title}
            </h3>

            <p className="text-paragraph text-sm px-4 pb-1 w-5/6">
              {project.desc}
            </p>

            <div className="flex flex-col items-center p-6 gap-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 transition rounded-md px-7 h-11"
              >
                <img className="w-6" src="/icons/github.svg" />
                link
              </a>

              <button
                onClick={() => setisOpen(true)}
                className="text-foreground flex items-center justify-center gap-2 w-full border border-slate-600 active:scale-95 hover:bg-white/10 transition rounded-md px-6 h-11"
              >
                <Eye />
                <span>view Details</span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence onExitComplete={unlockScroll}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onWheelCapture={stopScroll}
            onTouchMoveCapture={stopScroll}
            onScrollCapture={stopScroll}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 overflow-hidden"
          >
            {/* CARD MODAL */}
            <motion.div
              layoutId={project.title}
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onWheelCapture={stopScroll}
              onTouchMoveCapture={stopScroll}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto overscroll-contain rounded-2xl border border-border/40 bg-background shadow-2xl"
            >
              {/* HEADER IMAGE */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={project.img}
                  className="h-full w-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/40 to-transparent" />

                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setisOpen(false)}
                  className="absolute top-4 right-4 bg-background/70 hover:bg-background border border-border/40 text-foreground px-4 py-2 rounded-full backdrop-blur-md transition"
                >
                  ✕
                </button>

                {/* TITLE */}
                <div className="absolute bottom-4 left-6">
                  <h1 className="text-2xl md:text-3xl font-semibold text-foreground">
                    {project.title}
                  </h1>
                  <p className="text-sm text-paragraph mt-1">
                    Project details overview
                  </p>
                </div>
              </div>

              {/* BODY */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                {/* LEFT */}
                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    Description
                  </h2>
                  <p className="text-paragraph text-sm leading-relaxed">
                    {project.details}
                  </p>

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-5 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                {/* RIGHT */}
                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    Technologies
                  </h2>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((skill, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 rounded-full border border-border/40 bg-background hover:scale-105 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">
                    <ShinyText
                      text="✨ FEATURES"
                      speed={2}
                      delay={0}
                      color="#b5b5b5"
                      shineColor="#2c4bd2"
                      spread={120}
                      direction="left"
                      yoyo={false}
                      pauseOnHover={false}
                      disabled={false}
                    />
                  </h2>

                  <div className="space-y-2">
                    {project.features.map((feature, i) => (
                      <div
                        key={i}
                        className="text-sm text-paragraph flex gap-2"
                      >
                        <span className="text-indigo-500">•</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
