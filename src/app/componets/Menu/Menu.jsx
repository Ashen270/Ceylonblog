import React from 'react'
import styles from './Menu.module.css'
import Image from 'next/image'
import Link from 'next/link'
import MenuPosts from '../MenuPosts/MenuPosts'
import MenuCategories from '../MenuCategories/MenuCategories'

const Menu = () => {
  return (
    <div className={styles.container} >
      {/* Most Popular Items */}
       <h2 className={styles.subtitle}>{"What's hot"}</h2>
       <h1 className={styles.title}>Most Popular</h1>
       <MenuPosts withImage={false}/>

       {/* Discover By Topics */}
       <h2 className={styles.subtitle}>Discover By Topics</h2>
       <h1 className={styles.title}>Categories</h1>
       <MenuCategories/>  
       {/* Choosen By Editor */}
       <h2 className={styles.subtitle}>Chosen By the Editor</h2>
       <h1 className={styles.title}>Editors Picks</h1>
       <MenuPosts withImage={true}/>

    </div>
  )
}

export default Menu