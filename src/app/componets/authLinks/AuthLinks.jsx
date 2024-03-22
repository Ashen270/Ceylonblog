import React from 'react'
import styles from './AuthLinks.module.css'
import Link from 'next/link'



const AuthLinks = () => {

  const status = "authenticated";
  return (
    <>
      {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>

      ) : (

      <>
        <Link href="/wriite">Write</Link>
        <span>Logout</span>
      </>
      )}
    </>
  )
}

export default AuthLinks