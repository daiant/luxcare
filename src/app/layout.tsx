import Header from '@/components/header/header'
import '@/styles/globals.css'
import { Arimo } from 'next/font/google'
import Footer from '@/components/footer/footer'

const arimo = Arimo({ subsets: ['latin'], weight: ['400', '500'] })
const caladea = Arimo({ subsets: ["latin"] })

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
    <html lang="es">
      <body className={`${arimo.className} ${caladea.className}`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
