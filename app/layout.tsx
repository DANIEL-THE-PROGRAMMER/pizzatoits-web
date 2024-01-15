import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { Navbar } from './components/navbar'
import MouseContextProvider from './context/globalcontext'
import DotRing from './components/customcursor'


const inter = Inter({ subsets: ['latin'] })

const font = localFont({
  src:"../public/fonts/NeueMontreal-Regular.otf",
  variable: "--font-neue"
})

const dusk = localFont({
  src:"../public/fonts/DrukTextWide-Bold-Trial.otf",
  variable: "--font-dusk"
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.variable} ${dusk.variable}`}>
        <MouseContextProvider>
          <DotRing />
          {children}
        </MouseContextProvider>
      </body>
    </html>
  )
}
