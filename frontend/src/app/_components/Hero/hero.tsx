import { Button } from '@nextui-org/react';
import { FaArrowDown } from 'react-icons/fa';
import { TypingEffect } from './TypingEffect';

export default function Hero() {
  return (
    <div className="container mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-6xl">
        <TypingEffect word="Elevate Your Job Search Experience" />
      </h1>
      <p className="mb-8 w-full text-lg font-normal tracking-tight sm:text-xl">
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
