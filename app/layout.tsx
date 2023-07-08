import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CollabTalent Beta',
  description: 'Prepare the smart way and get objective feedback on how you present yourself using AI technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='container'>
        <header>
          <Navbar />
        </header>
        <main >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
