import Footer from '@/components/footer/footer';
import '@/styles/globals.css'
import { DM_Sans } from 'next/font/google';
// Font files can be colocated inside of `app`
const sans = DM_Sans({ weight: ['400', '500'], subsets: ['latin'] })

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
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
