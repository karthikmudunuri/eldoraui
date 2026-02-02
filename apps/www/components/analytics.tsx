"use client"

import Script from "next/script"
import { Analytics as VercelAnalytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export function Analytics() {
  return (
    <>
      <Script
        async
        defer
        src="https://www.googletagmanager.com/gtag/js?id=G-N39TSSCELY"
      ></Script>
      <Script id="gtag">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-N39TSSCELY');
`}
      </Script>
      {/* X (Twitter) conversion tracking */}
      <Script id="twitter-tracking" strategy="afterInteractive">
        {`
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
twq('config','qlj09');
`}
      </Script>
      <VercelAnalytics />
      <SpeedInsights />
    </>
  )
}
