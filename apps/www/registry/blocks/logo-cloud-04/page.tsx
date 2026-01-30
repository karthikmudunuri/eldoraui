import { LogoCarousel } from "@/registry/blocks/logo-cloud-04/components/logo-cloud-04"

// ensure to make equal number of logos
export function LogoCloud04() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <section
          id="clients"
          className="mx-auto max-w-7xl px-6 text-center md:px-8"
        >
          <div className="py-14">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
              <h2 className="text-center text-sm font-semibold text-gray-600">
                TRUSTED BY TEAMS FROM AROUND THE WORLD
              </h2>
              <LogoCarousel columns={3} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
