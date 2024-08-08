import Hero from "./_components/Hero/hero"
import Welcome from "./_components/Welcome/welcome"

export default async function Home() {
  return (
    <main className="container flex min-h-screen min-w-full flex-col">
      <Hero />
      <Welcome />
    </main>
  )
}
