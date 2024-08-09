'use client';

import { Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { HiSun } from 'react-icons/hi';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function LightModeButton() {
    return (
      <Button
        isIconOnly
        onClick={() => setTheme('dark')}
        className="rounded-full bg-transparent transition-all hover:scale-110"
      >
        <FaMoon size={24} />
      </Button>
    );
  }

  function DarkModeButton() {
    return (
      <Button
        isIconOnly
        onClick={() => setTheme('light')}
        className="rounded-full bg-transparent transition-all hover:scale-110"
      >
        <HiSun size={24} />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {theme === 'light' ? <LightModeButton /> : <DarkModeButton />}
    </div>
  );
}
