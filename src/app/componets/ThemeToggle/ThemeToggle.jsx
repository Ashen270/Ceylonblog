"use client"

import React from 'react'
import styles from './ThemeToggle.module.css'
import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'



const ThemeToggle = () => {

  const {toggle,theme} = useContext(ThemeContext);
  console.log(theme);

  return (
    <div className={styles.container} onClick={toggle}
    
    style={
      theme=== "dark"
      ? {backgroundColor: "white"}
      : {backgroundColor: "black"}
     }
    
    >

     <Image src="/sun.png" alt="sun" width={14} height={14} />
     <div className={styles.ball}
     style={
      theme=== "dark"
      ? {left: 1, background: "black"}
      : {right: 1, background: "white"}
     }
     
     ></div>
     <Image src="/moon.png" alt="moon" width={14} height={14} />   

    </div>
  )
}

export default ThemeToggle