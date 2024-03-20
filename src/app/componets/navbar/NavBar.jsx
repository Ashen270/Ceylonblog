import React from 'react'
import styles from './NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'



const NavBar = () => {
  return (
    <div className={styles.container}>
     <div className={styles.social}>
         <Image src="/images/facebook.png" alt="facebook" width={24} height={24} />
          <Image src="/images/instagram.png" alt="instagram" width={24} height={24} />
          <Image src="/images/tiktok.png" alt="tiktok" width={24} height={24} />
          <Image src="/images/youtube.png" alt="youtube" width={24} height={24} />
     </div>
     <div className={styles.logo}>TechnoBlog</div>
     <div className={styles.links}>
           
          
           <ThemeToggle/>
           <Link href="/">Homepage</Link>
           <Link href="/">Contact</Link>
           <Link href="/">About</Link>
           <AuthLinks/>
          


     </div>
     
    </div>
  )
}

export default NavBar