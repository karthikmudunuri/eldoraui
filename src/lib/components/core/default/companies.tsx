import Image from 'next/image'
import Facebook from '@/assets/images/svg/facebook.svg'
import Disney from '@/assets/images/svg/disney.svg'
import Airbnb from '@/assets/images/svg/airbnb.svg'
import Apple from '@/assets/images/svg/apple.svg'
import Spark from '@/assets/images/svg/spark.svg'
import Samsung from '@/assets/images/svg/samsung.svg'
import Quora from '@/assets/images/svg/quora.svg'
import Sass from '@/assets/images/svg/sass.svg'

export default function LogoCarousel() {

  const logos = [
    { src: Facebook, alt: 'Facebook' },
    { src: Disney, alt: 'Disney' },
    { src: Airbnb, alt: 'Airbnb' },
    { src: Apple, alt: 'Apple' },
    { src: Spark, alt: 'Spark' },
    { src: Samsung, alt: 'Samsung' },
    { src: Quora, alt: 'Quora' },
    { src: Sass, alt: 'Sass' },
  ]

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
  )
}