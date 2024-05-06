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
    <>
      {children}
      <Footer></Footer>
    </>
  )
}
