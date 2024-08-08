import { Button } from '@nextui-org/react';
import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="container mx-auto flex max-w-3xl flex-col items-center justify-center p-4">
      <h1 className="mb-8 text-center text-4xl font-semibold tracking-tight sm:text-6xl">
        Elevate Your Job Search Experience
      </h1>
      <p className="mb-8 w-full text-center text-lg font-normal tracking-tight sm:text-xl">
        Our AI-powered assistant tailors job recommendations, crafts compelling
        resumes and cover letters, and provides real-time feedback to enhance
        your applications. Start your journey to career success today!
      </p>
      <Button
        radius="full"
        className="animate-gradientMove bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
      >
        Get started! <FaArrowDown className="animate-bounce" size={18} />
      </Button>
    </div>
  );
}
