"use client";

import {
  CodeContainer,
  StaticStep,
} from "@/registry/default/eldoraui/staticstepper";

const dataSteps = [
  {
    title: "Step 1",
    code: "npx create-react-app my-app",
  },
  {
    title: "Step 2",
    code: "cd my-app",
  },
  {
    title: "Step 3",
    code: "npm start",
  },
  {
    title: "Step 4",
    code: "npm run build",
  },
];

export default function StaticStepperDemo() {
  return (
    <div className="w-full max-w-2xl p-4">
      {dataSteps.map((step, index) => (
        <StaticStep key={step.title} step={index + 1} title={step.title}>
          <CodeContainer>{step.code}</CodeContainer>
        </StaticStep>
      ))}
    </div>
  );
}
