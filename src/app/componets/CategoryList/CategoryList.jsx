import React from 'react'
import styles from './categoryList.module.css'
import Pagination from '../pagination/Pagination'
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Category</h1>
      <div className={styles.categories}>
          <Link href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
          >
            <Image
              src="/style.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
            Style
          </Link>
        <Link href="/blog?cat=style" 
        className={`${styles.category} ${styles.fashion}`}>
          <Image
            src="/fashion.png"
            alt=""
            width={32}
            height={32}
            style={{ borderRadius: '50%' }}
          />
          Fashion
        </Link>
        <Link href="/blog?cat=style" 
        className={`${styles.category} ${styles.food}`}>
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Food
        </Link>
        <Link href="/blog?cat=style" 
        className={`${styles.category} ${styles.travel}`}>
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Travel
        </Link>
        <Link href="/blog?cat=style" 
        className={`${styles.category} ${styles.culture}`}>
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Culture
        </Link>
        <Link href="/blog?cat=style" 
        className={`${styles.category} ${styles.technology}`}>
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Technology
        </Link>
      </div>
    </div>
  )
}

export default CategoryList