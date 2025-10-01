import Terminal from "@/registry/eldoraui/terminal"

export default function TerminalDemo() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <Terminal
          command="npx shadcn@latest add 'https://eldoraui.site/r/terminal'"
          steps={[
            { text: "~ Project name", bold: true },
            { text: " | terminal-demo" },
            { text: " | cd terminal-demo" },
            { text: "~ Installing UI components", bold: true },
            { text: " | ✓ eldoraui/terminal" },
          ]}
          pulseInterval={100}
          showLocalhost={true}
          hostBarTitle="localhost:3000"
          hostMessage="New App Created!"
        />
      </div>
    </main>
  )
}
