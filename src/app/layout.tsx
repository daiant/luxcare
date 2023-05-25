import Header from '@/components/header/header'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500'] })

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
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
