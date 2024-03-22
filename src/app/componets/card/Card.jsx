import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill  className={styles.image}/>
        </div>
            
        <div className={styles.textContainer}>
           <div className={styles.detail}>
              <span className={styles.date}>12/03/2024 -</span>
              <span className={styles.category}> Technology</span>
           </div>
           <Link href="/">
            <h1>asdasdasdasdasdasdasdasd asdas ads asd</h1>
          </Link>
          <p className={styles.desc}>
            dasdsa as dasda sasdasdasadasdsad asdasdasdasdasdasdasdasd
            adasdas as dasd adsa dsad d saas dasd  dasdsa  adsas  a das
            dasdsa as dasda sasdasdasadasdsad asdasdasdasdasdasdasdasd
            adasdas as dasd adsa dsad d saas dasd  dasdsa  adsas  a das
            dasdsa as dasda sasdasdasadasdsad asdasdasdasdasdasdasdasd
            adasdas as dasd adsa dsad d saas dasd  dasdsa  adsas  a das
          </p>
          <Link href="/" className={styles.link}> Read More</Link>

        </div>

    </div>
  )
}

export default Card