import type { Metadata } from 'next'
import './globals.css'
import { InnerAnimalHelper } from '@/components/InnerAnimalHelper'
import Navbar from '@/components/Navbar'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Meauxbility Platform',
  description: 'Mobility grants and programs platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        <ThemeProvider>
          <Navbar />
          {children}
          <InnerAnimalHelper />
        </ThemeProvider>
      </body>
    </html>
  )
}

