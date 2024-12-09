
  import VerticalTimeline01 from '@/lib/components/core/default/verticaltimeline1'
 
  
  export default function VerticalTimelinePage() {
  
    const timelineItems = [
      {
        date: "May, 2020",
        label: "The origin",
        title: "Acme was founded in Milan, Italy",
        content: "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
      },
      {
        date: "May, 2021",
        label: "The milestone",
        title: "Reached 5K customers",
        content: "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
      },
      {
        date: "May, 2022",
        label: "The acquisitions",
        title: "Acquired various companies, inluding Technology Inc.",
        content: "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
      },
      {
        date: "May, 2023",
        label: "The IPO",
        title: "Acme went public at the New York Stock Exchange",
        content: "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
      },            
    ]
  
  
    return (
      <>
        <main className="relative h-[600px] flex flex-col justify-center bg-slate-50 dark:bg-black overflow-hidden">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
            <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
  
              <div className="w-full max-w-3xl mx-auto">
                <VerticalTimeline01 items={timelineItems} />
              </div>
  
                                  
  
            </div>
          </div>
        </main>
        
       
      </>
    )
  }