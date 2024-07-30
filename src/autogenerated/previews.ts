
// This file is autogenerated by scripts/build-preview-imports.ts
// Do not edit this file directly.
import React from "react";

export const previews = {
  "demos/components/core/forms/multistepformdemo": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/forms/multistepformdemo")),
      code : [{"title":"multistepformdemo.tsx","code":"import Form from '@/lib/components/core/default/multistepform'\r\n\r\nexport default function Formdemo() {\r\n  return (\r\n    <section className='h-[700px]'>\r\n      <div >\r\n        <Form />\r\n      </div>\r\n    </section>\r\n  )\r\n}"}]
    },
    "demos/components/core/input/calendar": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/input/calendar")),
      code : [{"title":"calendar.tsx","code":"\"use client\"\r\n\r\nimport React from \"react\"\r\nimport { DateRange } from \"react-day-picker\"\r\n\r\nimport { Calendar } from \"@/lib/components/core/default/calendarnew\"\r\nimport { Label } from \"@/lib/components/core/default/label\"\r\nimport { Switch } from \"@/lib/components/core/default/switch\"\r\n\r\nconst CalendarHero = () => {\r\n  const [date, setDate] = React.useState<Date | undefined>(undefined)\r\n  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(\r\n    undefined,\r\n  )\r\n  const [mode, setMode] = React.useState<\"single\" | \"range\">(\"single\")\r\n  return (\r\n    <div className=\"flex flex-col items-center gap-6\">\r\n      <div className=\"flex items-center gap-2\">\r\n        <Switch\r\n          size=\"small\"\r\n          id=\"range-switch\"\r\n          checked={mode === \"single\" ? false : true}\r\n          onCheckedChange={() => {\r\n            setMode(mode === \"single\" ? \"range\" : \"single\")\r\n          }}\r\n        />\r\n        <Label htmlFor=\"range-switch\">Range selection & multiple months</Label>\r\n      </div>\r\n      <>\r\n        {mode === \"single\" && (\r\n          <div className=\"flex flex-col items-center gap-y-4\">\r\n            <Calendar selected={date} onSelect={setDate} />\r\n            <p className=\"rounded bg-gray-100 p-2 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-300\">\r\n              Selected Date: {date ? date.toLocaleDateString() : \"None\"}\r\n            </p>\r\n          </div>\r\n        )}\r\n        {mode === \"range\" && (\r\n          <div className=\"flex flex-col items-center gap-y-4\">\r\n            <Calendar\r\n              mode=\"range\"\r\n              numberOfMonths={2}\r\n              selected={dateRange}\r\n              onSelect={setDateRange}\r\n            />\r\n            <p className=\"rounded bg-gray-100 p-2 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-300\">\r\n              Selected Range:{\" \"}\r\n              {dateRange\r\n                ? `${dateRange.from?.toLocaleDateString()} – ${dateRange.to?.toLocaleDateString() ?? \"\"}`\r\n                : \"None\"}\r\n            </p>\r\n          </div>\r\n        )}\r\n      </>\r\n    </div>\r\n  )\r\n}\r\n\r\nexport default CalendarHero;"}]
    },
    "demos/components/core/input/calendaryear": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/input/calendaryear")),
      code : [{"title":"calendaryear.tsx","code":"\"use client\"\r\n\r\nimport React from \"react\"\r\nimport { Calendar } from \"@/lib/components/core/default/calendarnew\"\r\n\r\nconst CalendarYearNavigationExample = () => {\r\n  const [date, setDate] = React.useState<Date | undefined>(undefined)\r\n  return (\r\n    <div className=\"flex flex-col items-center gap-y-4\">\r\n      <Calendar enableYearNavigation selected={date} onSelect={setDate} />\r\n      <p className=\"rounded bg-gray-100 p-2 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-300\">\r\n        Selected Date: {date ? date.toLocaleDateString() : \"None\"}\r\n      </p>\r\n    </div>\r\n  )\r\n}\r\n\r\nexport default CalendarYearNavigationExample;"}]
    },
    "demos/components/core/input/calendardisabled": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/input/calendardisabled")),
      code : [{"title":"calendardisabled.tsx","code":"\"use client\"\r\n\r\nimport React from \"react\"\r\nimport { Calendar } from \"@/lib/components/core/default/calendarnew\"\r\n\r\nconst CalendarDisableNavigationExample = () => {\r\n  const [date, setDate] = React.useState<Date | undefined>(undefined)\r\n  return (\r\n    <div className=\"flex flex-col items-center gap-y-4\">\r\n      <Calendar\r\n        enableYearNavigation\r\n        disableNavigation={true}\r\n        selected={date}\r\n        onSelect={setDate}\r\n      />\r\n      <p className=\"rounded bg-gray-100 p-2 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-300\">\r\n        Selected Date: {date ? date.toLocaleDateString() : \"None\"}\r\n      </p>\r\n    </div>\r\n  )\r\n}\r\n\r\nexport default CalendarDisableNavigationExample;"}]
    },
    "demos/components/core/input/calendarmonths": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/input/calendarmonths")),
      code : [{"title":"calendarmonths.tsx","code":"\"use client\"\r\n\r\nimport React from \"react\"\r\nimport { DateRange } from \"react-day-picker\"\r\nimport { Calendar } from \"@/lib/components/core/default/calendarnew\"\r\n\r\nconst CalendarRangeExample = () => {\r\n  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(\r\n    undefined,\r\n  )\r\n  return (\r\n    <div className=\"flex flex-col items-center gap-y-4\">\r\n      <Calendar\r\n        mode=\"range\"\r\n        numberOfMonths={2}\r\n        selected={dateRange}\r\n        onSelect={setDateRange}\r\n      />\r\n      <p className=\"rounded bg-gray-100 p-2 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-300\">\r\n        Selected Range:{\" \"}\r\n        {dateRange\r\n          ? `${dateRange.from?.toLocaleDateString()} – ${dateRange.to?.toLocaleDateString() ?? \"\"}`\r\n          : \"None\"}\r\n      </p>\r\n    </div>\r\n  )\r\n}\r\n\r\nexport default CalendarRangeExample;"}]
    },
    "demos/components/core/input/calendarlocate": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/input/calendarlocate")),
      code : [{"title":"calendarlocate.tsx","code":"\"use client\"\r\n\r\nimport React from \"react\"\r\nimport { fr } from \"date-fns/locale\"\r\nimport { Calendar } from \"@/lib/components/core/default/calendarnew\"\r\n\r\nconst CalendarLocaleExample = () => {\r\n  const [date, setDate] = React.useState<Date | undefined>(undefined)\r\n  return (\r\n    <div className=\"flex flex-col items-center gap-y-4\">\r\n      <Calendar locale={fr} selected={date} onSelect={setDate} />\r\n      <p className=\"rounded bg-gray-100 p-2 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-300\">\r\n        Date sélectionnée: {date ? date.toLocaleDateString() : \"None\"}\r\n      </p>\r\n    </div>\r\n  )\r\n}\r\n\r\nexport default CalendarLocaleExample"}]
    },
    "demos/components/core/input/calendernodates": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/input/calendernodates")),
      code : [{"title":"calendernodates.tsx","code":"\"use client\"\r\n\r\nimport React from \"react\"\r\nimport { Calendar } from \"@/lib/components/core/default/calendarnew\"\r\n\r\nconst CalendarToTodayExample = () => {\r\n  const [date, setDate] = React.useState<Date | undefined>(undefined)\r\n  return (\r\n    <div className=\"flex flex-col items-center gap-y-4\">\r\n      <Calendar\r\n        enableYearNavigation\r\n        toDate={new Date()}\r\n        selected={date}\r\n        onSelect={setDate}\r\n      />\r\n      <p className=\"rounded bg-gray-100 p-2 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-300\">\r\n        Selected date: {date ? date.toLocaleDateString() : \"None\"}\r\n      </p>\r\n    </div>\r\n  )\r\n}\r\n\r\nexport default CalendarToTodayExample;"}]
    },
    "demos/components/core/input/calendardropdown": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/input/calendardropdown")),
      code : [{"title":"calendardropdown.tsx","code":"\"use client\"\r\n\r\nimport React from \"react\"\r\nimport { DateRange } from \"react-day-picker\"\r\nimport { Calendar } from \"@/lib/components/core/default/calendarnew\"\r\n\r\nconst CalendarDropdownExample = () => {\r\n  const [date, setDate] = React.useState<Date | undefined>(undefined)\r\n\r\n  \r\n  return (\r\n    <div className=\"flex flex-col items-center gap-y-4\">\r\n        <Calendar \r\n            selected={date} \r\n            onSelect={setDate} \r\n            captionLayout=\"dropdown-buttons\"\r\n            fromYear={1990}\r\n            toYear={2024}\r\n        />\r\n      <p className=\"rounded bg-gray-100 p-2 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-300\">\r\n        Selected Range:{\" \"}\r\n        {date\r\n          ? `${date.toLocaleDateString()}`\r\n          : \"None\"}\r\n      </p>\r\n    </div>\r\n  )\r\n}\r\n\r\nexport default CalendarDropdownExample;"}]
    },
    "demos/components/core/sections/bentodemo": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/sections/bentodemo")),
      code : [{"title":"bentodemo.tsx","code":"\"use client\";\r\nimport React from \"react\";\r\nimport Bentodemo from \"@/lib/components/core/default/bentogrid\";\r\n\r\nexport default function Bentodemoo() {\r\n  return (\r\n    <div className=\"items-center h-[750px] p-8 mt-12 justify-center md:h-auto dark:bg-black bg-white relative w-full\">\r\n      <Bentodemo/>\r\n     \r\n    </div>\r\n  );\r\n}\r\n\r\n"}]
    },
    "demos/components/core/sections/companies": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/sections/companies")),
      code : [{"title":"companies.tsx","code":"\r\nimport LogoCarousel from '@/lib/components/core/default/companies'\r\n\r\n\r\nexport default function LogoCarouselPage() {\r\n  return (\r\n    <>\r\n      <main className=\"relative h-[120px] flex flex-col justify-center bg-slate-900 overflow-hidden\">\r\n        <div className=\"w-full max-w-6xl mx-auto px-4 md:px-6 py-24\">\r\n          <div className=\"text-center\">\r\n\r\n            <LogoCarousel />\r\n\r\n          </div>\r\n        </div>\r\n      </main>\r\n\r\n     \r\n    </>\r\n  )\r\n}"}]
    },
    "demos/components/core/sections/particles": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/sections/particles")),
      code : [{"title":"particles.tsx","code":"export const metadata = {\r\n    title: 'Particle Animation',\r\n    description: 'Page description',\r\n  }\r\n  \r\n  import Image from 'next/image'\r\n  import Particles from '@/lib/components/core/default/particles'\r\n  import Shape from '@/assets/images/svg/shape.svg'\r\n  \r\n  \r\n  export default function Particlesdemo() {\r\n    return (\r\n      <>\r\n        <main className=\"relative h-[500px] flex flex-col justify-center bg-slate-900 overflow-hidden\">\r\n          <div className=\"w-full max-w-6xl mx-auto px-4 md:px-6 py-24\">\r\n  \r\n            <div className=\"text-center\">\r\n  \r\n              {/* Illustration #1 */}\r\n              <div className=\"absolute top-0 left-0 rotate-180 -translate-x-3/4 -scale-x-100 blur-3xl opacity-70 pointer-events-none\" aria-hidden=\"true\">\r\n                <Image src={Shape} className=\"max-w-none\" width={852} height={582} alt=\"Illustration\" />\r\n              </div>\r\n  \r\n              {/* Illustration #2 */}\r\n              <div className=\"absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 blur-3xl opacity-70 pointer-events-none\" aria-hidden=\"true\">\r\n                <Image src={Shape} className=\"max-w-none\" width={852} height={582} alt=\"Illustration\" />\r\n              </div>\r\n  \r\n              {/* Particles animation */}\r\n              <Particles className=\"absolute inset-0 pointer-events-none\" />\r\n  \r\n              <div className=\"relative\">\r\n                <h1 className=\"inline-flex font-extrabold text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4\">Interactive Particle Animation</h1>\r\n                <div className=\"max-w-3xl mx-auto mb-8\">\r\n                  <p className=\"text-lg text-slate-400\">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>\r\n                </div>\r\n                \r\n              </div>\r\n            </div>\r\n  \r\n          </div>\r\n        </main>\r\n  \r\n       \r\n      </>\r\n    )\r\n  }"}]
    },
    "demos/components/core/sections/pricing": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/sections/pricing")),
      code : [{"title":"pricing.tsx","code":"\"use client\";\r\nimport React from \"react\";\r\nimport PricingTab from \"@/lib/components/core/default/featurecomparision\";\r\n\r\nexport default function Pricingdemo() {\r\n  return (\r\n    <div className=\"items-center justify-center md:h-auto dark:bg-black bg-white relative w-full\">\r\n      <PricingTab/>\r\n     \r\n    </div>\r\n  );\r\n}\r\n\r\n"}]
    },
    "demos/components/core/sections/progressslider": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/sections/progressslider")),
      code : [{"title":"progressslider.tsx","code":"  import SilderImg01 from '@/assets/images/ps-image-04.png'\r\n  import SilderImg02 from '@/assets/images/ps-image-02.png'\r\n  import SilderImg03 from '@/assets/images/ps-image-01.png'\r\n  import SilderImg04 from '@/assets/images/ps-image-03.png'\r\n  import SilderIcon01 from '@/assets/images/svg/icon-1.svg'\r\n  import SilderIcon02 from '@/assets/images/svg/icon-2.svg'\r\n  import SilderIcon03 from '@/assets/images/svg/icon-3.svg'\r\n  import SilderIcon04 from '@/assets/images/svg/icon-4.svg'\r\n  import ProgressSlider from '@/lib/components/core/default/progressslider'\r\n  \r\n  \r\n  export default function ProgressSliderPage() {  \r\n  \r\n    const items = [\r\n      {\r\n        img: SilderImg01,\r\n        desc: 'Omnichannel',\r\n        buttonIcon: SilderIcon01,\r\n      },\r\n      {\r\n        img: SilderImg02,\r\n        desc: 'Multilingual',\r\n        buttonIcon: SilderIcon02,\r\n      },\r\n      {\r\n        img: SilderImg03,\r\n        desc: 'Interpolate',\r\n        buttonIcon: SilderIcon03,\r\n      },\r\n      {\r\n        img: SilderImg04,\r\n        desc: 'Enriched',\r\n        buttonIcon: SilderIcon04,\r\n      }, \r\n    ]\r\n  \r\n    return (\r\n      <>\r\n        <main className=\"relative h-[600px] flex flex-col justify-center bg-slate-50 overflow-hidden\">\r\n          <div className=\"w-full max-w-6xl mx-auto px-4 md:px-6 py-24\">\r\n            <div className=\"flex justify-center\">\r\n  \r\n              <ProgressSlider items={items} />\r\n  \r\n            </div>\r\n          </div>\r\n        </main>\r\n      </>\r\n    )\r\n  }"}]
    },
    "demos/components/core/sections/timeline": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/sections/timeline")),
      code : [{"title":"timeline.tsx","code":"\r\n  import VerticalTimeline01 from '@/lib/components/core/default/verticaltimeline1'\r\n \r\n  \r\n  export default function VerticalTimelinePage() {\r\n  \r\n    const timelineItems = [\r\n      {\r\n        date: \"May, 2020\",\r\n        label: \"The origin\",\r\n        title: \"Acme was founded in Milan, Italy\",\r\n        content: \"Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.\"\r\n      },\r\n      {\r\n        date: \"May, 2021\",\r\n        label: \"The milestone\",\r\n        title: \"Reached 5K customers\",\r\n        content: \"Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.\"\r\n      },\r\n      {\r\n        date: \"May, 2022\",\r\n        label: \"The acquisitions\",\r\n        title: \"Acquired various companies, inluding Technology Inc.\",\r\n        content: \"Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.\"\r\n      },\r\n      {\r\n        date: \"May, 2023\",\r\n        label: \"The IPO\",\r\n        title: \"Acme went public at the New York Stock Exchange\",\r\n        content: \"Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.\"\r\n      },            \r\n    ]\r\n  \r\n  \r\n    return (\r\n      <>\r\n        <main className=\"relative h-[600px] flex flex-col justify-center bg-slate-50 dark:bg-black overflow-hidden\">\r\n          <div className=\"w-full max-w-6xl mx-auto px-4 md:px-6 py-24\">\r\n            <div className=\"flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16\">\r\n  \r\n              <div className=\"w-full max-w-3xl mx-auto\">\r\n                <VerticalTimeline01 items={timelineItems} />\r\n              </div>\r\n  \r\n                                  \r\n  \r\n            </div>\r\n          </div>\r\n        </main>\r\n        \r\n       \r\n      </>\r\n    )\r\n  }"}]
    },
    "demos/components/core/sections/timeline1": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/sections/timeline1")),
      code : [{"title":"timeline1.tsx","code":"\r\n\r\nimport VerticalTimeline02 from '@/lib/components/core/default/verticaltimeline2'\r\n \r\n  \r\nexport default function VerticalTimelinePage() {\r\n\r\n \r\n    const timelineItems = [\r\n        {\r\n          completed: true,\r\n          date: \"08/06/2023\",\r\n          title: \"Order Placed\",\r\n          content: \"Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.\"\r\n        },\r\n        {\r\n          completed: true,\r\n          date: \"09/06/2023\",\r\n          title: \"Order Shipped\",\r\n          content: \"Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.\"\r\n        },\r\n        {\r\n          completed: true,\r\n          date: \"10/06/2023\",\r\n          title: \"In Transit\",\r\n          content: \"Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.\"\r\n        },\r\n        {\r\n          completed: true,\r\n          date: \"12/06/2023\",\r\n          title: \"Out of Delivery\",\r\n          content: \"Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.\"\r\n        },\r\n        {\r\n          completed: false,\r\n          deliver: true,\r\n          date: \"12/08/2023\",\r\n          title: \"Delivered\",\r\n          content: \"Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.\"\r\n        },    \r\n      ]\r\n\r\n\r\n  return (\r\n    <>\r\n      <main className=\"relative h-[900px] mt-6 flex flex-col justify-center bg-slate-50 dark:bg-black overflow-hidden\">\r\n        <div className=\"w-full max-w-6xl mx-auto px-4 md:px-6 py-24\">\r\n          <div className=\"flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16\">\r\n\r\n            <div className=\"w-full max-w-3xl mx-auto\">\r\n              <VerticalTimeline02 items={timelineItems} />\r\n            </div>\r\n\r\n                                \r\n\r\n          </div>\r\n        </div>\r\n      </main>\r\n      \r\n     \r\n    </>\r\n  )\r\n}"}]
    },
    "demos/components/core/sections/timeline2": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/sections/timeline2")),
      code : [{"title":"timeline2.tsx","code":"\r\n\r\nimport VerticalTimeline03 from '@/lib/components/core/default/verticaltimeline3'\r\n \r\n  \r\nexport default function VerticalTimelinePage() {\r\n\r\n \r\n    \r\n  const timelineItems = [\r\n    {\r\n      date: \"Apr 7, 2024\",\r\n      author: \"Mark Mikrol\",\r\n      type: \"open\",\r\n      content: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.'\r\n    },\r\n    {\r\n      date: \"Apr 7, 2024\",\r\n      author: \"John Mirkovic\",\r\n      type: \"comment\",\r\n      content: \"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.\"\r\n    },\r\n    {\r\n      date: \"Apr 8, 2024\",\r\n      author: \"Vlad Patterson\",\r\n      type: \"comment\",\r\n      content: \"Letraset sheets containing passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Ipsum.\"\r\n    },\r\n    {\r\n      date: \"Apr 8, 2024\",\r\n      author: \"Mila Capentino\",\r\n      type: \"comment\",\r\n      content: \"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\"\r\n    },\r\n    {\r\n      date: \"Apr 9, 2024\",\r\n      author: \"Mark Mikrol\",\r\n      type: \"close\",\r\n      content: \"If you are going to use a passage of Lorem Ipsum!\"\r\n    },            \r\n  ]  \r\n\r\n\r\n  return (\r\n    <>\r\n      <main className=\"relative h-[950px] mt-6 flex flex-col justify-center bg-slate-50 dark:bg-black overflow-hidden\">\r\n        <div className=\"w-full max-w-6xl mx-auto px-4 md:px-6 py-24\">\r\n          <div className=\"flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16\">\r\n\r\n            <div className=\"w-full max-w-3xl mx-auto\">\r\n              <VerticalTimeline03 items={timelineItems} />\r\n            </div>\r\n\r\n                                \r\n\r\n          </div>\r\n        </div>\r\n      </main>\r\n      \r\n     \r\n    </>\r\n  )\r\n}"}]
    },
    "demos/components/core/cobeglobe/default": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/cobeglobe/default")),
      code : [{"title":"default.tsx","code":"\"use client\";\r\nimport React from \"react\";\r\nimport {Cobe }from \"@/lib/components/core/default/cobeglobe\";\r\n\r\nexport default function Cobeglobedemo() {\r\n  return (\r\n    <div className=\"items-center justify-center md:h-auto dark:bg-black bg-white relative w-full\">\r\n      <Cobe/>\r\n     \r\n    </div>\r\n  );\r\n}\r\n\r\n"}]
    },
    "demos/components/core/cobeglobe/draggable": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/cobeglobe/draggable")),
      code : [{"title":"draggable.tsx","code":"\"use client\";\r\nimport React from \"react\";\r\nimport {CobeDraggable} from \"@/lib/components/core/default/draggablecobe\"\r\n\r\n\r\nexport default function Cobeglobedraggabledemo() {\r\n  return (\r\n    <div className=\"items-center justify-center md:h-auto dark:bg-black bg-white relative w-full\">\r\n        <CobeDraggable/>\r\n     \r\n    </div>\r\n  );\r\n}\r\n"}]
    },
    "demos/components/core/cobeglobe/dragauto": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/cobeglobe/dragauto")),
      code : [{"title":"dragauto.tsx","code":"\"use client\";\r\nimport React from \"react\";\r\nimport {CobeDraggableAuto} from \"@/lib/components/core/default/dragandautocobe\"\r\n\r\n\r\nexport default function Cobeglobedragandautodemo() {\r\n  return (\r\n    <div className=\"items-center justify-center md:h-auto dark:bg-black bg-white relative w-full\">\r\n        <CobeDraggableAuto/>\r\n     \r\n    </div>\r\n  );\r\n}\r\n"}]
    },
    "demos/components/core/cobeglobe/rotate": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/cobeglobe/rotate")),
      code : [{"title":"rotate.tsx","code":"\"use client\";\r\nimport React from \"react\";\r\nimport {CobeDragToLocation} from \"@/lib/components/core/default/rotatecobe\"\r\n\r\n\r\nexport default function Cobegloberotatedemo() {\r\n  return (\r\n    <div className=\"items-center justify-center md:h-auto dark:bg-black bg-white relative w-full\">\r\n        <CobeDragToLocation/>\r\n     \r\n    </div>\r\n  );\r\n}\r\n"}]
    },
    "demos/components/core/cobeglobe/scaled": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/cobeglobe/scaled")),
      code : [{"title":"scaled.tsx","code":"\"use client\";\r\nimport React from \"react\";\r\nimport {CobeScaled} from \"@/lib/components/core/default/scaledcobe\"\r\n\r\n\r\nexport default function Cobeglobescaleddemo() {\r\n  return (\r\n    <div className=\"items-center justify-center md:h-auto dark:bg-black bg-white relative w-full\">\r\n        <CobeScaled/>\r\n     \r\n    </div>\r\n  );\r\n}\r\n"}]
    },
    "demos/components/core/globeanime/default": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/globeanime/default")),
      code : [{"title":"default.tsx","code":"\"use client\";\r\nimport React from \"react\";\r\nimport Globeanime from \"@/lib/components/core/default/globeanime\";\r\n\r\nexport default function Globeanimedemo() {\r\n  return (\r\n    <div className=\"items-center justify-center relative mt-24 dark:bg-black bg-white w-full h-[550px]\">\r\n      <Globeanime/>\r\n     \r\n    </div>\r\n  );\r\n}\r\n\r\n"}]
    },
    "demos/components/core/text/searchmodal": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/text/searchmodal")),
      code : [{"title":"searchmodal.tsx","code":"\"use client\";\r\nimport React from \"react\";\r\nimport SearchModal from \"@/lib/components/core/default/searchnew\";\r\n\r\nexport default function Searchmodaldemo() {\r\n  return (\r\n    <div className=\"items-center justify-center  dark:bg-black bg-white relative w-full \">\r\n      <SearchModal/>\r\n     \r\n    </div>\r\n  );\r\n}\r\n\r\n"}]
    },
    "demos/components/core/sections/spotlightcard": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/sections/spotlightcard")),
      code : [{"title":"spotlightcard.tsx","code":"\"use client\"\r\n\r\n  import Image from 'next/image'\r\n  import Card01 from '@/assets/images/card-01.png'\r\n  import Card02 from '@/assets/images/card-02.png'\r\n  import Card03 from '@/assets/images/card-03.png'\r\n  import Spotlight, { SpotlightCard } from '@/lib/components/core/default/spotlight-card'\r\n  \r\n  \r\n  export default function SpotlightPage() {\r\n    return (\r\n      <>\r\n        <main className=\"relative h-[550px] flex flex-col justify-center bg-slate-900 overflow-hidden\">\r\n          <div className=\"w-full max-w-6xl mx-auto px-4 md:px-6 py-24\">\r\n  \r\n            <Spotlight className=\"max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group\">\r\n              {/* Card #1 */}\r\n              <SpotlightCard>\r\n                <div className=\"relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden\">\r\n                  {/* Radial gradient */}\r\n                  <div className=\"absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square\" aria-hidden=\"true\">\r\n                    <div className=\"absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]\"></div>\r\n                  </div>\r\n                  <div className=\"flex flex-col h-full items-center text-center\">\r\n                    {/* Image */}\r\n                    <div className=\"relative inline-flex\">\r\n                      <div className=\"w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600\" aria-hidden=\"true\"></div>\r\n                      <Image className=\"inline-flex\" src={Card01} width={200} height={200} alt=\"Card 01\" />\r\n                    </div>\r\n                    {/* Text */}\r\n                    <div className=\"grow mb-5\">\r\n                      <h2 className=\"text-xl text-slate-200 font-bold mb-1\">Amazing Integration</h2>\r\n                      <p className=\"text-sm text-slate-500\">Quickly apply filters to refine your issues lists and create custom views.</p>\r\n                    </div>\r\n                    <a className=\"inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150\" href=\"#0\">\r\n                      <svg className=\"fill-slate-500 mr-2\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"14\">\r\n                        <path d=\"M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z\" />\r\n                      </svg>\r\n                      <span>Connect</span>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </SpotlightCard>\r\n              {/* Card #2 */}\r\n              <SpotlightCard>\r\n                <div className=\"relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden\">\r\n                  {/* Radial gradient */}\r\n                  <div className=\"absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square\" aria-hidden=\"true\">\r\n                    <div className=\"absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]\"></div>\r\n                  </div>\r\n                  <div className=\"flex flex-col h-full items-center text-center\">\r\n                    {/* Image */}\r\n                    <div className=\"relative inline-flex\">\r\n                      <div className=\"w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600\" aria-hidden=\"true\"></div>\r\n                      <Image className=\"inline-flex\" src={Card02} width={200} height={200} alt=\"Card 02\" />\r\n                    </div>\r\n                    {/* Text */}\r\n                    <div className=\"grow mb-5\">\r\n                      <h2 className=\"text-xl text-slate-200 font-bold mb-1\">Amazing Integration</h2>\r\n                      <p className=\"text-sm text-slate-500\">Quickly apply filters to refine your issues lists and create custom views.</p>\r\n                    </div>\r\n                    <a className=\"inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150\" href=\"#0\">\r\n                      <svg className=\"fill-slate-500 mr-2\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"14\">\r\n                        <path d=\"M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z\" />\r\n                      </svg>\r\n                      <span>Connect</span>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </SpotlightCard>\r\n              {/* Card #3 */}\r\n              <SpotlightCard>\r\n                <div className=\"relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden\">\r\n                  {/* Radial gradient */}\r\n                  <div className=\"absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square\" aria-hidden=\"true\">\r\n                    <div className=\"absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]\"></div>\r\n                  </div>\r\n                  <div className=\"flex flex-col h-full items-center text-center\">\r\n                    {/* Image */}\r\n                    <div className=\"relative inline-flex\">\r\n                      <div className=\"w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600\" aria-hidden=\"true\"></div>\r\n                      <Image className=\"inline-flex\" src={Card03} width={200} height={200} alt=\"Card 03\" />\r\n                    </div>\r\n                    {/* Text */}\r\n                    <div className=\"grow mb-5\">\r\n                      <h2 className=\"text-xl text-slate-200 font-bold mb-1\">Amazing Integration</h2>\r\n                      <p className=\"text-sm text-slate-500\">Quickly apply filters to refine your issues lists and create custom views.</p>\r\n                    </div>\r\n                    <a className=\"inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150\" href=\"#0\">\r\n                      <svg className=\"fill-slate-500 mr-2\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"14\">\r\n                        <path d=\"M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z\" />\r\n                      </svg>\r\n                      <span>Connect</span>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </SpotlightCard>\r\n            </Spotlight>\r\n  \r\n          </div>\r\n        </main>\r\n        \r\n       \r\n      </>\r\n    )\r\n  }"}]
    },
    "demos/components/core/globeanime/tag": {
      component: React.lazy<React.FC>(() => import("@/lib/demos/components/core/globeanime/tag")),
      code : [{"title":"tag.tsx","code":"\"use client\";\r\nimport React from \"react\";\r\n\r\nimport Tag3d from \"@/lib/components/core/default/3dtag\";\r\n\r\nexport default function Tagdemo() {\r\n  return (\r\n    <div className=\"items-center justify-center md:h-auto dark:bg-black bg-white relative w-full\">\r\n    <Tag3d/>\r\n   \r\n  </div>\r\n   \r\n      \r\n   \r\n  );\r\n}\r\n"}]
    },
  }