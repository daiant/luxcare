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
    <>
      <Header transparent={true}></Header>
      {children}
      <Footer></Footer>
    </>
  )
}
