import { Navbar } from "@/registry/blocks/header-01/components/navbar"

export default function Page() {
  return (
    <div className="min-h-svh w-full">
      <Navbar />
      <main className="flex-1">
        <section className="flex h-screen items-center justify-center">
          <h1 className="text-4xl font-bold">Hero</h1>
        </section>
        <section className="flex h-screen items-center justify-center">
          <h1 className="text-4xl font-bold">Section</h1>
        </section>
      </main>
    </div>
  )
}
