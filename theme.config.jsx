import Footer from './src/components/footer'
import { useRouter } from 'next/router';

import { useConfig } from 'nextra-theme-docs'

export const logo = (
  <div className="logo-container">
    <img src="/m.png" alt="Logo" height={1000} width={5000} className="logo-image" />
    <style jsx>{`
      .logo-container {
        display: inline-block;
        height: 90px;
      }
      .logo-image {
        height: 100%;
        width: 200%;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
        transition: mask-position 1s ease;
      }
      .logo-container:hover .logo-image {
        mask-position: 100%;
      }
    `}</style>
  </div>
);


export default {
  
 
  project: {
    link: 'https://github.com/karthikmudunuri/eldoraui'
  },
  docsRepositoryBase: 'https://github.com/karthikmudunuri/eldoraui',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Eldora UI',
      }
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://eldoraui.vercel.app/og.jpeg'
        : `https://eldoraui.vercel.app/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="UI library for Developers"
        />
        <meta
          name="og:description"
          content="UI library for Developers."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="eldoraui.vercel.app" />
        <meta name="twitter:url" content="https://eldoraui.vercel.app" />
        <meta
          name="og:title"
          content={title ? title + ' – Eldora UI' : 'Eldora UI'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Eldora UI" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
  feedback: {
    content: 'Any Issues ? Tell us here →',
    labels: 'Issues'
  },
  editLink: false,
  banner: {
    key: "Eldora UI", 
    text: <a href="https://github.com/karthikmudunuri/eldoraui">⭐ Leave a star in Github →</a>,
    dismissible: true,
  },
  
  toc: {
    
    
    backToTop: true,
    
  },
 
 
}