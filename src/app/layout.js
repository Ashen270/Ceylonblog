import './globals.css'
import { Inter } from 'next/font/google' 
import Footer from "./componets/footer/Footer"
import NavBar from './componets/navbar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="container">
              <div className="wrapper">
              <NavBar/>
              {children}
              <Footer/>          
              </div>  
           </div>
      </body>
    </html>
  )
}
