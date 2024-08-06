import { Card, CardBody, CardHeader, Progress } from "@nextui-org/react";
import { randomInt } from "crypto";
import Nav from "../_components/Navbar";

type Task = {
  title: string;
  description: string;
  status: "completed" | "incomplete" | "active"; // TODO: Change to 'complete' later on for consistency
};

const sampleTasks: Task[] = [
  { title: "LinkedIn", description: "Job Board", status: "completed" },
  { title: "Resume", description: "Personal Item", status: "completed" },
  { title: "Cover Letter", description: "Personal Item", status: "active" },
  { title: "GitHub", description: "Skills", status: "incomplete" },
  { title: "Portfolio", description: "Skills", status: "incomplete" },
  { title: "Algorithms", description: "Practice", status: "completed" },
];

const TaskCard = ({
  title,
  description,
  status,
}: {
  title: string;
  description: string;
  status: "completed" | "incomplete" | "active";
}) => {
  let currentStep = 0;
  const totalSteps = randomInt(1, 5);

  if (status === "incomplete") currentStep = 0;
  if (status === "completed") currentStep = totalSteps;
  if (status === "active") currentStep = randomInt(0, totalSteps);

  return (
    <Card className="rounded-xl bg-neutral-300/40 py-4">
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <p className="text-tiny font-bold">{title}</p>
        <small className="text-default-500">{description}</small>
        <h4 className="text-large font-bold">
          Step {currentStep} of {totalSteps}
        </h4>
      </CardHeader>
      <CardBody className="overflow-visible"></CardBody>
    </Card>
  );
};

const TaskList = ({
  tasks,
  filter,
}: {
  tasks: Task[];
  filter: (task: Task) => boolean;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {tasks.filter(filter).map((task, index) => (
        <TaskCard
          key={index}
          title={task.title}
          description={task.description}
          status={task.status}
        />
      ))}
    </div>
  );
};

const ListOfCompletedTasks = ({ tasks }: { tasks: Task[] }) => {
  return (
    <TaskList tasks={tasks} filter={(task) => task.status === "completed"} />
  );
};

const ListOfUnfinishedTasks = ({ tasks }: { tasks: Task[] }) => {
  return (
    <TaskList tasks={tasks} filter={(task) => task.status === "incomplete"} />
  );
};

const ListOfActiveTasks = ({ tasks }: { tasks: Task[] }) => {
  return <TaskList tasks={tasks} filter={(task) => task.status === "active"} />;
};

function getProgress(tasks: Task[]) {
  const completedTasks = tasks.filter(
    (task) => task.status === "completed",
  ).length;
  return (completedTasks / tasks.length) * 100;
}

export default function Onboarding() {
  return (
    <div className="flex max-w-full flex-col items-center justify-center gap-8 px-4 py-8">
      <Nav />
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
                "bg-gradient-to-r from-pink-500 to-yellow-500 h-[10px] overflow-hidden animate-gradientMove",
              label: "tracking-wider font-medium text-default-600 w-full",
              value: "text-foreground/60",
            }}
            label="Onboarding Checklist Progress"
            value={getProgress(sampleTasks)}
            showValueLabel={true}
          />
        </div>

        <div className="container mx-auto p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col gap-4 rounded-lg bg-gray-100/10 p-4 shadow-xl">
              <p className="text-center text-xl font-semibold">
                Not started ❌
              </p>
              <ListOfUnfinishedTasks tasks={sampleTasks} />
            </div>
            <div className="flex flex-col gap-4 rounded-lg bg-gray-100/10 p-4 shadow-xl">
              <p className="text-center text-xl font-semibold">
                In progress ✏️
              </p>
              <ListOfActiveTasks tasks={sampleTasks} />
            </div>
            <div className="flex flex-col gap-4 rounded-lg bg-gray-100/10 p-4 shadow-xl">
              <p className="text-center text-xl font-semibold">Complete ✅</p>
              <ListOfCompletedTasks tasks={sampleTasks} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
