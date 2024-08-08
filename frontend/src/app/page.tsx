import Hero from "./_components/Hero/hero"

export default async function Home() {
  return (
    <main className="container flex min-h-screen min-w-full flex-col items-center justify-center">
      <Hero />
    </main>
  )
}
