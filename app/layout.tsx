'use client'

import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { Navbar } from './components/navbar'
import MouseContextProvider from './context/globalcontext'
import DotRing from './components/customcursor'
import { useMouseHoverAndMenuContext } from './context/globalcontext'


const inter = Inter({ subsets: ['latin'] })

const font = localFont({
  src:"../public/fonts/NeueMontreal-Regular.otf",
  variable: "--font-neue"
})

const dusk = localFont({
  src:"../public/fonts/DrukTextWide-Bold-Trial.otf",
  variable: "--font-dusk"
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
const {isPreloading} = useMouseHoverAndMenuContext()


  return (
    <html lang="en">
      <body className={`${font.variable} ${dusk.variable}`}>
        <div>
        <MouseContextProvider>
          <DotRing />
          {children}
        </MouseContextProvider>
        </div>
      </body>
    </html>
  )
}
