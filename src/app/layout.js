import './globals.css'
import { Inter } from 'next/font/google' 
import Footer from "./componets/footer/Footer"
import NavBar from './componets/navbar/NavBar'
import { ThemeContextProvider } from './context/ThemeContext'
import ThemeProviders from './providers/ThemeProvider'
import { AuthProvider } from './providers/AuthProvider'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ceylon Blog',
  description: 'Its about Srilanka',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
       
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
          </AuthProvider>
        
      </body>
    </html>
  )
}
