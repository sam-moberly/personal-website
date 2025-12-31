import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Samantha Moberly',
  description: 'Business Operations and Strategy',
  icons: {
    icon: '/headshot.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
