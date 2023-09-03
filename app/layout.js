import './globals.css' // CSS for homepage and global components
import './about.css'
import { Inter } from 'next/font/google'
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'First Next App'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/></body>
    </html>
  )
}
