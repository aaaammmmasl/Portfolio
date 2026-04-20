import ProjectSection from "../components/ProjectSection";
// ICONS
import { Eye } from "lucide-react";
import "@lottiefiles/lottie-player";
import { skills } from "../data/skills-icon";
// FOOTER
import Footer from "../components/Footer";
// MOTION
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

// BACKGROUND
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";

export default function Home() {
  const lines = [
    "Building modern",
    "web experiences",
    "& exploring Cloud",
    "technologies",
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="pt-12 bg-background">
      {/* HERO */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 pointer-events-none"
        >
          <GridPattern
            width={140}
            height={140}
            x={-1}
            y={-1}
            className={cn(
              "z-0 [mask-image:linear-gradient(to_bottom_left,white,white,transparent,transparent)]",
            )}
          />
        </motion.div>

        <section id="home">
          <main className="flex flex-col md:flex-row gap-10 md:gap-20 pb-20 items-center pt-20 px-4 md:px-16 lg:px-24 xl:px-32 max-w-7xl mx-auto">
            {/* TEXTS */}
            <div className="z-20 flex flex-col items-center md:items-start md:w-2/3">
              <motion.div initial="hidden" animate="show">
                {lines.map((line, i) => (
                  <motion.h1
                    key={i}
                    className="text-foreground text-center md:text-left text-4xl md:text-5xl font-semibold"
                    variants={{
                      hidden: { x: -60, opacity: 0 },
                      show: { x: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                  >
                    {line}
                  </motion.h1>
                ))}
              </motion.div>

              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-paragraph text-center md:text-left text-sm max-w-lg pt-6"
              >
                I create responsive and interactive web applications using React
                and Tailwind. <br />
                Currently expanding my skills in cloud technologies and system
                design
              </motion.p>

              {/* BUTTONS */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex items-center gap-4 mt-8 text-sm"
              >
                <a
                  href="#contact"
                  className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 transition-transform duration-75 rounded-md px-7 h-11"
                >
                  Contact Me
                </a>

                <a
                  href="#projects"
                  className="text-foreground flex items-center gap-2 border border-slate-600 active:scale-95 transform hover:bg-white/10 transition rounded-md px-6 h-11"
                >
                  <Eye />
                  <span>view project</span>
                </a>
              </motion.div>
            </div>

            {/* LOTTIE */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full md:w-1/2 h-96"
            >
              <lottie-player
                src="/pcoding.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </motion.div>
          </main>
        </section>

        {/* ABOUT */}
        <section id="about" className="overflow-hidden">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-foreground sm:pt-12 text-3xl font-semibold text-center"
          >
            ABOUT
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-paragraph py-7 px-24 text-center max-w-6xl mx-auto"
          >
            I'm a passionate developer currently in my final year at private
            school groupe IKI, where I learned C# programming, database
            management, and networking fundamentals. Later, I transitioned into
            web development and learned HTML, CSS, JavaScript, and React.
            Currently, I'm building real projects to strengthen my skills while
            gradually exploring cloud technologies and system fundamentals, with
            the goal of becoming a professional Cloud Engineer.
          </motion.p>
        </section>
      </div>
      {/* SKILLS */}
      <div className="relative md:mt-5">
        <GridPattern
          width={140}
          height={140}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_top_right,white,white,transparent,transparent)]",
          )}
        />

        <section id="skills" className="relative z-20 lg:mt-22">
          <h1 className=" text-foreground sm:pt-12 text-3xl font-semibold text-center">
            SKILLS
          </h1>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-3 md:grid-cols-5 gap-6 mt-8 max-w-7xl mx-auto justify-items-center"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={item}
                className="bg-background border-borde flex items-center justify-center p-4 border rounded-lg hover:scale-105 transition"
                style={{
                  width: 100,
                  height: 100,
                }}
              >
                <img src={skill.icon} alt={skill.name} className="w-18 h-18" />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-20">
          <h1 className="text-foreground sm:pt-12 text-3xl font-semibold text-center">
            PROJECTS
          </h1>

          <ProjectSection />
        </section>
      </div>{" "}
      <Footer />
    </div>
  );
}
