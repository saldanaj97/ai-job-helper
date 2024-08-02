import { Progress } from "@nextui-org/react";

export default function Onboarding() {
  const value = 70;

  return (
    <div className="flex max-w-full flex-col items-center justify-center gap-12 px-4 py-16">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        WannabeHired.ai
      </h1>
      <div className="flex w-full flex-col items-center gap-2">
        <div className="flex h-full w-full flex-col items-center justify-evenly">
          <Progress
            classNames={{
              base: "max-w-sm",
              track: "drop-shadow-md border border-default",
              indicator:
                "bg-gradient-to-r from-pink-500 to-yellow-500 h-[10px]",
              label: "tracking-wider font-medium text-default-600 w-full",
              value: "text-foreground/60",
            }}
            label="Checklist Progress"
            value={value}
            showValueLabel={true}
          />
        </div>
      </div>
    </div>
  );
}
