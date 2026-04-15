"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        px-4 py-2
        text-[11px]
        uppercase
        tracking-[1.5px]
        border
        border-[rgb(var(--color-secondary))]
        text-[rgb(var(--color-text))]
        bg-[rgb(var(--color-surface))]
        transition-all
        duration-300
        hover:border-[rgb(var(--color-primary))]
      "
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}