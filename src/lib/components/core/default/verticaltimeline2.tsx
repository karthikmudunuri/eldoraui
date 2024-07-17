import { Caveat } from 'next/font/google'

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap'
})

interface TimelineItemProps {
  completed: boolean
  deliver?: boolean
  date: string
  title: string
  content: string
}

export default function VerticalTimeline02({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className={`${caveat.variable} space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent`}>

      {items.map((item, index) => (
        <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${item.completed ? 'is-active' : ''}`}>
          {/* Icon */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            {item.deliver ? ( 
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
              </svg>
            ) : (
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
              </svg>
            )}
          </div>
          {/* Card */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">{item.title}</div>
              <time className={`font-medium ${item.completed ? 'text-indigo-500' : 'text-amber-500'}`}>{!item.completed && 'Exp. '}{item.date}</time>
            </div>
            <div className="text-slate-500">{item.content}</div>
          </div>
        </div>
      ))}

    </div>
  )
}