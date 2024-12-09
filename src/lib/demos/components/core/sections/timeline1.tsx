

import VerticalTimeline02 from '@/lib/components/core/default/verticaltimeline2'
 
  
export default function VerticalTimelinePage() {

 
    const timelineItems = [
        {
          completed: true,
          date: "08/06/2023",
          title: "Order Placed",
          content: "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."
        },
        {
          completed: true,
          date: "09/06/2023",
          title: "Order Shipped",
          content: "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."
        },
        {
          completed: true,
          date: "10/06/2023",
          title: "In Transit",
          content: "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."
        },
        {
          completed: true,
          date: "12/06/2023",
          title: "Out of Delivery",
          content: "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."
        },
        {
          completed: false,
          deliver: true,
          date: "12/08/2023",
          title: "Delivered",
          content: "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."
        },    
      ]


  return (
    <>
      <main className="relative h-[900px] mt-6 flex flex-col justify-center bg-slate-50 dark:bg-black overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">

            <div className="w-full max-w-3xl mx-auto">
              <VerticalTimeline02 items={timelineItems} />
            </div>

                                

          </div>
        </div>
      </main>
      
     
    </>
  )
}