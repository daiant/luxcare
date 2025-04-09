import Cookies from '@/components/cookies/cookies';
import Footer from '@/components/footer/footer';
import Menu from '@/components/header/menu/menu';
import { GoogleTagManager } from '@next/third-parties/google'

import '@/styles/globals.css'
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import { DM_Sans } from 'next/font/google';
// // Font files can be colocated inside of `app`
const sans = DM_Sans({ weight: ['400', '500', '700'], subsets: ['latin'] })
// import localFont from 'next/font/local'
// const sans = localFont({
//   src: [
//     {
//       path: '../styles/fonts/CarmenSansUltraLight.otf',
//       weight: '100',
//       style: 'normal',
//     },
//     {
//       path: '../styles/fonts/CarmenSansLight.otf',
//       weight: '200',
//       style: 'normal',
//     },
//     {
//       path: '../styles/fonts/CarmenSansThin.otf',
//       weight: '300',
//       style: 'normal',
//     },
//     {
//       path: '../styles/fonts/CarmenSansRegular.otf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../styles/fonts/CarmenSansMedium.otf',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: '../styles/fonts/CarmenSansSemiBold.otf',
//       weight: '600',
//       style: 'normal',
//     },
//     {
//       path: '../styles/fonts/CarmenSansBold.otf',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: '../styles/fonts/CarmenSansExtraBold.otf',
//       weight: '800',
//       style: 'normal',
//     },
//     {
//       path: '../styles/fonts/CarmenSansHeavy.otf',
//       weight: '900',
//       style: 'normal',

//     }
//   ],
// })

export const metadata = {
  title: 'Luxcare | Home',
  description: 'Luxcare | Simplemente perfecto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={sans.className}>
      <head>
        <GoogleTagManager gtmId="GTM-NCMBVJWJ" />
        <meta name="google-site-verification" content="emwMyVv_Y97sB-tX2sNjSstG9k8Ts82RM6sLWnd0Gac" />
      </head>
      <body>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NCMBVJWJ"
                height="0" width="0" style={{display: "none", visibility: "hidden"}}></iframe>
      </noscript>
      <ReCaptchaProvider reCaptchaKey="6Lc6leEpAAAAAHYRPY6O527AF_STDSE9C5d9Aw60" useEnterprise>
        <Menu/>
        {children}
        <Footer/>
        <Cookies/>
      </ReCaptchaProvider>
      </body>
    </html>
  )
}

