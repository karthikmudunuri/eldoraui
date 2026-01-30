import Image from "next/image"

export function LogoCloud02() {
  return (
    <section
      id="clients"
      className="mx-auto max-w-7xl px-6 text-center md:px-8"
    >
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-center text-sm font-semibold text-gray-600">
            TRUSTED BY TEAMS FROM AROUND THE WORLD
          </h2>
          <div className="mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
              <li>
                <Image
                  alt="Google"
                  src="https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/Google.svg"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                  width={28}
                  height={8}
                />
              </li>
              <li>
                <Image
                  alt="Microsoft"
                  src="https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/Microsoft.svg"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                  width={28}
                  height={8}
                />
              </li>
              <li>
                <Image
                  alt="GitHub"
                  src="https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/GitHub.svg"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                  width={28}
                  height={8}
                />
              </li>

              <li>
                <Image
                  alt="Uber"
                  src="https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/Uber.svg"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                  width={28}
                  height={8}
                />
              </li>
              <li>
                <Image
                  alt="Notion"
                  src="https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/Notion.svg"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                  width={28}
                  height={8}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
