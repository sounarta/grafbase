import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

import { ClerkProvider } from '@clerk/nextjs'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flexible',
  description: 'Showcaare and discover remarkable developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider
        appearance={{
          elements:{
            formButtonPrimary:'bg-blue',
            footerActionLink:'text-blue hover:text-white-100'
          }
        }}>
        
        {children}
        

        </ClerkProvider>

        </body>
        
    </html>
  )
}
