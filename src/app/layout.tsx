import type { Metadata } from 'next'
import { Poppins, Inter, Rubik, Work_Sans, Quicksand, Mulish } from 'next/font/google'
import './globals.css'

/* const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({ subsets: ["latin"], weight: "400" })

const rubik = Rubik({ subsets: ["latin"], weight: "400" })

const workSans = Work_Sans({ subsets: ["latin"], weight: "400" })

const quicksand = Quicksand({ subsets: ["latin"], weight: "400" }) */

const mulish = Mulish({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: 'El buen sabor',
  description: 'Tu local de comida rápida favorito',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  )
}
