"use client";

import Script from "next/script";

export function Analytics() {
  return (
    <>
      <Script id="id">{`window.lemonSqueezyAffiliateConfig = { store: "eldoraui" };`}</Script>
      <Script src="https://lmsqueezy.com/affiliate.js" defer></Script>
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
    </>
  );
}
