

import VerticalTimeline03 from '@/lib/components/core/default/verticaltimeline3'
 
  
export default function VerticalTimelinePage() {

 
    
  const timelineItems = [
    {
      date: "Apr 7, 2024",
      author: "Mark Mikrol",
      type: "open",
      content: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.'
    },
    {
      date: "Apr 7, 2024",
      author: "John Mirkovic",
      type: "comment",
      content: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
    },
    {
      date: "Apr 8, 2024",
      author: "Vlad Patterson",
      type: "comment",
      content: "Letraset sheets containing passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Ipsum."
    },
    {
      date: "Apr 8, 2024",
      author: "Mila Capentino",
      type: "comment",
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
      date: "Apr 9, 2024",
      author: "Mark Mikrol",
      type: "close",
      content: "If you are going to use a passage of Lorem Ipsum!"
    },            
  ]  


  return (
    <>
      <main className="relative h-[950px] mt-6 flex flex-col justify-center bg-slate-50 dark:bg-black overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">

            <div className="w-full max-w-3xl mx-auto">
              <VerticalTimeline03 items={timelineItems} />
            </div>

                                

          </div>
        </div>
      </main>
      
     
    </>
  )
}