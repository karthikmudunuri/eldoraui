export const metadata = {
    title: 'Particle Animation',
    description: 'Page description',
  }
  
  import Image from 'next/image'
  import Particles from '@/lib/components/core/default/particles'
  import Shape from '@/assets/images/svg/shape.svg'
  
  
  export default function Particlesdemo() {
    return (
      <>
        <main className="relative h-[500px] flex flex-col justify-center bg-slate-900 overflow-hidden">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
  
            <div className="text-center">
  
              {/* Illustration #1 */}
              <div className="absolute top-0 left-0 rotate-180 -translate-x-3/4 -scale-x-100 blur-3xl opacity-70 pointer-events-none" aria-hidden="true">
                <Image src={Shape} className="max-w-none" width={852} height={582} alt="Illustration" />
              </div>
  
              {/* Illustration #2 */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 blur-3xl opacity-70 pointer-events-none" aria-hidden="true">
                <Image src={Shape} className="max-w-none" width={852} height={582} alt="Illustration" />
              </div>
  
              {/* Particles animation */}
              <Particles className="absolute inset-0 pointer-events-none" />
  
              <div className="relative">
                <h1 className="inline-flex font-extrabold text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Interactive Particle Animation</h1>
                <div className="max-w-3xl mx-auto mb-8">
                  <p className="text-lg text-slate-400">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                </div>
                
              </div>
            </div>
  
          </div>
        </main>
  
       
      </>
    )
  }