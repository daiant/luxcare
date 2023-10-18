import Header from '@/components/header/header'
import '@/styles/globals.css'
import Footer from '@/components/footer/footer'

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
      <body>
        {children}
      </body>
    </html>
  )
}
