/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
// ICONS
import { Eye, ArrowLeft, ExternalLink } from "lucide-react";
// motion
import { motion, AnimatePresence } from "motion/react";
// BACKGROUND
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";

export const Card = ({ project }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

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
        {/* layoutId ONLY wrapper (IMPORTANT FIX) */}
        <motion.div layoutId={project.title} className="w-full">
          {/* actual interactive card */}
          <div
            onMouseMove={handleMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            className="bg-background border border-gray-400 rounded-xl shadow-xl overflow-hidden cursor-pointer max-w-120 h-auto"
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layoutId={project.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex"
          >
            {/* BACKGROUND */}
            <div className="bg-background fixed inset-0">
              <GridPattern
                width={140}
                height={140}
                x={-1}
                y={-1}
                className={cn(
                  "absolute inset-0 pointer-events-none opacity-80",
                  "[mask-image:linear-gradient(to_top_right,white,transparent)]"
                )}
              />

              {/* TOP BAR */}
              <div className="p-4">
                <button
                  onClick={() => setisOpen(false)}
                  className="text-foreground flex items-center gap-2 border border-slate-600 hover:bg-white/10 transition rounded-md px-6 h-11"
                >
                  <ArrowLeft />
                  Back
                </button>
              </div>

              {/* CONTENT */}
              <div className="flex w-full min-h-screen overflow-y-auto">
                {/* LEFT */}
                <div className="w-full px-6 lg:px-10">
                  <h1 className="text-foreground text-2xl pt-5">
                    {project.title}
                  </h1>

                  <hr className="mt-2" />

                  <p className="text-foreground mt-2">
                    {project.details}
                  </p>

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded px-6 py-2 w-fit mt-4"
                    >
                      Live Demo
                      <ExternalLink />
                    </a>
                  )}

                  <h3 className="text-foreground text-xl mt-6">
                    Technologies Used
                  </h3>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((skill, i) => (
                      <span
                        key={i}
                        className="text-foreground bg-background border border-border/30 text-sm rounded-full px-4 py-1 hover:scale-95 transition cursor-pointer"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-full px-6 lg:px-10">
                  <img
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide2.png"
                    className="w-full"
                  />

                  <div className="bg-background border mt-6 p-6">
                    <h2 className="text-foreground text-xl">
                      Features
                    </h2>

                    {project.features.map((feature, i) => (
                      <p key={i} className="text-foreground text-sm">
                        {feature}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};