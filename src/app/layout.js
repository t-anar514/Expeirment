import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anar | Personal Portfolio',
  description: 'Welcome to my portfolio. I am a Computer Science student and Web Developer based in Kyoto, Japan, passionate about building impactful technology.',
  openGraph: {
    title: 'Anar | Personal Portfolio',
    description: 'Computer Science student and Web Developer based in Kyoto, Japan.',
    url: 'https://your-domain.com', // User will need to update this after deployment
    siteName: 'Anar Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
