'use client';
import { useTheme } from 'next-themes';
import Hero from './_components/Hero/hero';
import Nav from './_components/Navbar/Navbar';

export default function Home() {
  const { theme } = useTheme();

  const backgroundClass =
    theme === 'light' ? 'light-background' : 'dark-background';

  return (
    <main
      className={`container flex min-h-screen min-w-full flex-col ${backgroundClass}`}
    >
      <Nav />
      <Hero />
    </main>
  );
}
