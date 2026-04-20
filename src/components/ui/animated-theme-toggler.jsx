import { useCallback, useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });
  const buttonRef = useRef(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = useCallback(() => {
  const button = buttonRef.current;
  if (!button) return;

  const { top, left, width, height } = button.getBoundingClientRect();
  const x = left + width / 2;
  const y = top + height / 2;
  const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
  const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
  const maxRadius = Math.hypot(
    Math.max(x, viewportWidth - x),
    Math.max(y, viewportHeight - y),
  );

  const newTheme = !document.documentElement.classList.contains("dark");

  const applyTheme = () => {
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    setIsDark(newTheme);
  };

  if (typeof document.startViewTransition !== "function") {
    applyTheme();
    return;
  }

  const transition = document.startViewTransition(() => {
    applyTheme();
  });

  transition?.ready?.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}, [duration]);

  return (
    <button
      type="button"
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(className)}
      {...props}
    >
      {isDark ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};
