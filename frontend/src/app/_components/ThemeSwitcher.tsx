// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { HiSun } from "react-icons/hi";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const LightModeButton = () => {
    return (
      <Button
        isIconOnly
        onClick={() => setTheme("dark")}
        className="transform rounded-full p-2 shadow-xl transition-all hover:scale-110"
      >
        <HiSun size={20} />
      </Button>
    );
  };

  const DarkModeButton = () => {
    return (
      <Button
        isIconOnly
        onClick={() => setTheme("light")}
        className="transform rounded-full p-2 shadow-xl transition-all hover:scale-110"
      >
        <FaMoon size={20} />
      </Button>
    );
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {theme === "light" ? <LightModeButton /> : <DarkModeButton />}
    </div>
  );
}
