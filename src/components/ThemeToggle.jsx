import { useEffect, useState } from "react";

import dayicon from "../assets/day.webp";
import nighticon from "../assets/night.webp";

const STORAGE_KEY = "theme";

// remembered choice first, otherwise light
function readInitialTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "dark" ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(readInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light mode" : "Night mode"}
      className="flex items-center justify-center h-9 w-9 rounded-full border border-purple-3 bg-white-40 transition-transform duration-300 hover:scale-110"
    >
      <img className="h-5 w-5" src={isDark ? dayicon : nighticon} alt="" />
    </button>
  );
}
