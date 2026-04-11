// DATA
import { Navlinks } from "../data/navLinks";
// ICONS
import { Menu, X } from "lucide-react";
// STATES
import { useState } from "react";

export default function Navbar() {
  const [isopen, setisopen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 w-full z-50 flex items-center justify-between
          px-6 py-3 md:px-8 md:py-4 shadow bg-white"
      >
        <a href="#">
          <h1>icon?</h1>
        </a>
        <nav
          className={`${isopen ? "max-md:w-full" : "max-md:w-0"} z-50 max-md:absolute  max-md:top-0 max-md:right-0 max-md:overflow-hidden items-center justify-center max-md:h-screen transition-[width] bg-gray-200/75 md:bg-white backdrop-blur flex-col md:flex-row flex gap-8 text-gray-900 text-sm font-normal`}
        >
          {Navlinks.map((link) => (
            <a
              key={link.name}
              className="hover:text-indigo-600"
              href={link.href}
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={() => setisopen(false)}
            className="md:hidden text-gray-600"
          >
            <X />
          </button>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            className="md:hidden text-gray-600"
            onClick={() => setisopen(true)}
          >
            <Menu />
          </button>
        </div>
      </header>
    </>
  );
}
