import { Button } from "@nextui-org/react"
import { FaArrowDown } from "react-icons/fa"

export default function Hero() {
  return (
    <div className="container mx-auto flex sm:min-h-screen max-w-3xl flex-col items-center justify-center p-4">
      <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight text-center mb-8">WannabeHired.ai</h1>
      <p className="text-xl sm:text-2xl font-semibold tracking-tight text-center max-w-fit mb-8">
        Find your dream job with WannabeEmployed.ai, the AI assistant that simplifies your job search. Get tailored job
        recommendations, create compelling resumes and cover letters, and receive real-time feedback to boost your
        chances of getting hired. Start your journey to career success today!
      </p>
      <Button
        radius="full"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg animate-gradientMove"
      >
        Boost Your Chances! <FaArrowDown className="animate-bounce" />
      </Button>
    </div>
  )
}
