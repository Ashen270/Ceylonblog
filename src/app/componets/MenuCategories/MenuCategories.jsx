import React from 'react'
import styles from './MenuCategories.module.css'
import Link from 'next/link'

const MenuCategories = () => {
  return (
    
        <div className={styles.categoryList} >
         <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.style}`}>
           Style
         </Link>
         <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.fashion}`}>
           Fashion
         </Link>
         <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.food}`}>
           Food
         </Link>
         <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.travel}`}>
           Travel
         </Link>
         <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.technology}`}>
           Technology
         </Link>  
       </div>
    
  )
}

export default MenuCategories