import { DiscordLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Logo } from '../logo'
import { siteConfig } from '@/config/site'
import { Badge } from '../ui/badge'

const footerNavs = [
   {
      label: 'Product',
      items: [
         {
            href: '/',
            name: 'Email Collection',
         },
         {
            href: '/pricing',
            name: 'Pricing',
         },
         {
            href: '/faq',
            name: 'FAQ',
         },
      ],
   },

   {
      label: 'Community',
      items: [
         {
            href: '/',
            name: 'Discord',
         },
         {
            href: '/',
            name: 'Twitter',
         },
         {
            href: 'mailto:hello@chatcollect.com',
            name: 'Email',
         },
      ],
   },
   {
      label: 'Legal',
      items: [
         {
            href: '/terms',
            name: 'Terms',
         },

         {
            href: '/privacy',
            name: 'Privacy',
         },
      ],
   },
]

const footerSocials = [
   {
      href: '',
      name: 'Discord',
      icon: <DiscordLogoIcon className="size-4" />,
   },
   {
      href: '',
      name: 'Twitter',
      icon: <TwitterLogoIcon className="size-4" />,
   },
]

export function Footer() {
   return (
      <footer>
         <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
            <div className="gap-4 p-4 px-8 py-16 sm:pb-16 md:flex md:justify-between">
               <div className="mb-12 flex flex-col gap-4">
               <Link href="/" className="relative mr-6 flex items-center space-x-2">
       <div className="-mt-1">
        <Logo className="mr-2  size-6" />
        </div>
        <span className="hidden font-bold md:inline-block">
          {siteConfig.name}
        </span>
        <Badge variant="secondary">Beta</Badge>
      </Link>
                  <p className="max-w-xs">UI Library for Design Engineers</p>
               </div>
               <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
                  {footerNavs.map(nav => (
                     <div key={nav.label}>
                        <h2 className="mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white">
                           {nav.label}
                        </h2>
                        <ul className="grid gap-2">
                           {nav.items.map(item => (
                              <li key={item.name}>
                                 <Link
                                    href={item.href}
                                    className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
                                 >
                                    {item.name}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>
            </div>

            
         </div>
           
      </footer>
   )
}
