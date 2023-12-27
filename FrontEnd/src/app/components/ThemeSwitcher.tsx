"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useTheme();
  console.log("my theme", theme);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = () => {
    if (toggle) {
      setToggle(false);
      setTheme("light");
    } else {
      setToggle(true);
      setTheme("dark");
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" onChange={handleChange} />
        <div className="w-11 h-6 bg-red-500 peer-focus:outline-none peer-focus:ring rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
      </label>
    </div>
  );
}
