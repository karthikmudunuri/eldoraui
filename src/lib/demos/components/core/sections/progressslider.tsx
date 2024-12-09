  import SilderImg01 from '@/assets/images/ps-image-04.png'
  import SilderImg02 from '@/assets/images/ps-image-02.png'
  import SilderImg03 from '@/assets/images/ps-image-01.png'
  import SilderImg04 from '@/assets/images/ps-image-03.png'
  import SilderIcon01 from '@/assets/images/svg/icon-1.svg'
  import SilderIcon02 from '@/assets/images/svg/icon-2.svg'
  import SilderIcon03 from '@/assets/images/svg/icon-3.svg'
  import SilderIcon04 from '@/assets/images/svg/icon-4.svg'
  import ProgressSlider from '@/lib/components/core/default/progressslider'
  
  
  export default function ProgressSliderPage() {  
  
    const items = [
      {
        img: SilderImg01,
        desc: 'Omnichannel',
        buttonIcon: SilderIcon01,
      },
      {
        img: SilderImg02,
        desc: 'Multilingual',
        buttonIcon: SilderIcon02,
      },
      {
        img: SilderImg03,
        desc: 'Interpolate',
        buttonIcon: SilderIcon03,
      },
      {
        img: SilderImg04,
        desc: 'Enriched',
        buttonIcon: SilderIcon04,
      }, 
    ]
  
    return (
      <>
        <main className="relative h-[600px] flex flex-col justify-center bg-slate-50 overflow-hidden">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
            <div className="flex justify-center">
  
              <ProgressSlider items={items} />
  
            </div>
          </div>
        </main>
      </>
    )
  }