/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
// ICONS
import { Eye, ArrowLeft, ExternalLink } from "lucide-react";
// motion
import { motion, AnimatePresence } from "motion/react";

export const Card = ({ project }) => {
  // STATE
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Adjust the threshold value to control the tilt effect
  const threshold = 12;

  const handleMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTilt({ x: y * -threshold, y: x * threshold });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full"
        >
          <div
        layoutId={project.title}
        className="border border-gray-400 rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer max-w-120 h-auto bg-white"
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <img
          src={project.img}
          alt={project.tilt}
          className="w-full h-52 object-cover"
        />
        <h3 className="mt-3 px-4 pt-3 mb-1 text-lg font-semibold text-gray-800">
          {project.title}
        </h3>
        <p className="text-sm px-4 pb-1 text-gray-600 w-5/6">{project.desc}</p>
        <div className="flex flex-col justify-center items-center p-6 gap-2  py-2">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 transition rounded-md px-7 h-11"
          >
            <img className="w-6 " src="/icons/github.svg" /> link
          </a>
          <button
            onClick={() => setisOpen(true)}
            className="flex items-center justify-center gap-2 w-full border border-slate-600 active:scale-95 hover:bg-white/10 transition text-slate-600 rounded-md px-6 h-11"
          >
            <Eye />
            <span>view Details</span>
          </button>
          </div>
        </div>
      </motion.div>
      {/* MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layoutId={project.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col fixed inset-0 z-50 bg-black/60"
          >
            <div className="bg-gray-100">
              <button
                onClick={() => {
                  setisOpen(false);
                }}
                type="button"
                className="flex items-center mb-4 gap-2.5 border border-gray-500/30 px-4 py-2 text-sm text-gray-800 rounded bg-white hover:text-pink-500/70 hover:bg-pink-500/10 hover:border-pink-500/30 active:scale-95 transition"
              >
                <ArrowLeft />
                Back
              </button>
            </div>
            <div className="flex  w-full min-h-screen bg-gray-100 overflow-y-auto">
              <div className=" h-screen w-full px-4">
                <h1 className="pl-3 text-2xl pt-5">{project.title}</h1>
                <hr className="mt-2" />
                <p className="pl-3 mt-2">{project.details}</p>
                {project.liveDemo && project.liveDemo.trim() !== "" && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    type="button"
                    className="flex items-center gap-2 mt-4 px-6 py-2 active:scale-95 transition bg-fuchsia-800 rounded text-white shadow-lg shadow-blue-500/30 text-sm font-medium w-fit"
                  >
                    Live Demo
                    <ExternalLink />
                  </a>
                )}

                <h3 className="text-xl mt-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm text-blue-800 bg-blue-400/10 border border-indigo-200 rounded-full px-4 py-1 hover:scale-95 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {/* SECOND HALF */}
              <div className=" h-screen w-full px-6">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide2.png"
                  className="w-full"
                />
                <div className="  border w-full mt-6 p-6">
                  <h2 className="text-xl">Features</h2>
                  {project.features.map((feature, i) => (
                    <p key={i} className="text-sm">
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* =================MODAL==================== */}
    </>
  );
};
