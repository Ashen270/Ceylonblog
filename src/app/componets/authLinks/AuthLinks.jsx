"use client"
import React from 'react'
import styles from './AuthLinks.module.css'
import Link from 'next/link'
import { useState } from 'react'


const AuthLinks = () => {

 const [open , setOpen] = useState(false);


  const status = "authenticated";
  return (
    <>
      {status === "notauthenticated" ? (
            <Link href="/login" className={styles.link}>
              Login
              </Link>

      ) : (

      <>
        <Link href="/Write" className={styles.link}>
          Write
          </Link>
        <span  className={styles.link}>Logout</span>
      </>
      )}
      <div className={styles.burger}
        onClick={() => setOpen(!open)}
       
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
       {open && (
         <div className={styles.responsiveMenu}>
           <Link href="/">Homepage</Link>
           <Link href="/">Contact</Link>
           <Link href="/">About</Link>
           {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>

      ) : (
      <>
        <Link href="/Write"> <span>Logout</span></Link>
        
      </>
      )}
         </div>
       )}


    </>

  )
}

export default AuthLinks