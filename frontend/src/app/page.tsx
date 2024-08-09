'use client';
import { useTheme } from 'next-themes';
import Hero from './_components/Hero/hero';
import Nav from './_components/Navbar/Navbar';

export default function Home() {
  const { systemTheme } = useTheme();

  let backgroundClass =
    systemTheme === 'dark' ? 'dark-background' : 'light-background';

  return (
    <main
      className={`container flex min-h-screen min-w-full flex-col ${backgroundClass}`}
    >
      <Nav />
      <Hero />
    </main>
  );
}
