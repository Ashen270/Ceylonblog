import './globals.css'
import { Inter } from 'next/font/google' 
import Footer from "./componets/footer/Footer"
import NavBar from './componets/navbar/NavBar'
import { ThemeContextProvider } from './context/ThemeContext'
import ThemeProviders from './providers/ThemeProvider'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ceylon Blog',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <ThemeContextProvider>
          <ThemeProviders>
          <div className="container">
              <div className="wrapper">
              <NavBar/>
              {children}
              <Footer/>          
              </div>  
            </div>
           </ThemeProviders>
          </ThemeContextProvider>
      </body>
    </html>
  )
}
