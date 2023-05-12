import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'João Rambo | Portofilio',
  description:
    'My name is João Rambo and I am a FullStack Web Developer. I am passionated by technology and to solve real life problems trought lines of code.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen h-full max-w-screen w-full left-0 top-0 fixed`}
      >
        {children}
      </body>
    </html>
  )
}
