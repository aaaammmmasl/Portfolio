// DATA
import { Navlinks } from "../data/navLinks";
// ICONS
import { Menu, X } from "lucide-react";
// STATES
import { useState } from "react";
// MOTION
import { motion } from "motion/react";
// UI
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function Navbar() {
  const [isopen, setisopen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-background fixed top-0 w-full z-50 flex items-center justify-around
      px-6 py-3 md:px-8 md:py-4 shadow"
    >
      {/* LOGO */}
      <a href="#home" className="text-foreground">
        <h1>icon?</h1>
      </a>

      {/* NAV LINKS */}
      <nav
        className={`${
          isopen ? "max-md:w-full" : "max-md:w-0"
        } bg-background z-50 max-md:absolute max-md:top-0 max-md:right-0 max-md:h-screen max-md:overflow-hidden
        flex flex-col md:flex-row items-center justify-center gap-8
        transition-[width] backdrop-blur`}
      >
        {Navlinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setisopen(false)}
            className="text-foreground hover:text-indigo-500 transition"
          >
            {link.name}
          </a>
        ))}

        {/* CLOSE BUTTON (mobile) */}
        <button
          onClick={() => setisopen(false)}
          className="text-foreground md:hidden"
        >
          <X />
        </button>
      </nav>

      {/* THEME TOGGLE */}
      <AnimatedThemeToggler />

      {/* MOBILE MENU BUTTON */}
      <button
        className="text-foreground md:hidden"
        onClick={() => setisopen(true)}
      >
        <Menu />
      </button>
    </motion.header>
  );
}
