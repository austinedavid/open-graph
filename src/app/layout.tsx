import './globals.css'
import { Inter } from 'next/font/google'
import {Metadata} from "next"

const inter = Inter({ subsets: ['latin'] })
// metadataBase: new URL('https://acme.com'),
export const metadata:Metadata = {
  
  title: 'Welcome to GmodeTech',
  description: 'Here, we simply offers the best in all we do',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
