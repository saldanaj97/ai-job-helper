'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Hero from './_components/Hero/hero';
import Nav from './_components/Navbar/Navbar';
import { ThemeSwitcher } from './_components/ThemeSwitcher';

export default function Home() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  let backgroundClass =
    currentTheme === 'dark'
      ? 'dark-background border-white'
      : 'light-background border-neutral-800';

  return (
    <main
      className={`container flex min-h-screen min-w-full flex-col ${backgroundClass} border-[12px]`}
    >
      <Nav />
      <Hero />
      <ThemeSwitcher />
    </main>
  );
}
