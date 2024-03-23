import React from 'react'
import styles from './Menuposts.module.css'
import Image from 'next/image'
import Link from 'next/link'


const Menuposts = ({withImage}) => {
    return (
        <div>
                <div className={styles.items}>
                 <Link href="/" className={styles.item}>
                        {withImage &&  <div className={styles.imageContainer}>
                            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
                        </div>
                        }
                        <div className={styles.textContainer}>
                             <span className={`${styles.category} ${styles.travel}`}>
                             Travel
                             </span>
                            <h3 className={styles.postTitle}>fsdf ssdfsdf sdfsdf fsdfsd sdfsdf fsdfsdfsf d as asd. </h3>
                            <div className={styles.detail}>
                                <span className={styles.username}>Bruce wayan</span>
                                <span className={styles.date}> - 12/12/2020</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                        {withImage &&  <div className={styles.imageContainer}>
                            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
                        </div>
                        } 
                        <div className={styles.textContainer}>
                             <span className={`${styles.category} ${styles.culture}`}>
                             Culture
                             </span>
                            <h3 className={styles.postTitle}>fsdf ssdfsdf sdfsdf fsdfsd sdfsdf fsdfsdfsf d as asd. </h3>
                            <div className={styles.detail}>
                                <span className={styles.username}>Bruce wayn</span>
                                <span className={styles.date}> - 12/12/2020</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                        {withImage &&  <div className={styles.imageContainer}>
                            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
                        </div>
                        }
                        <div className={styles.textContainer}>
                             <span className={`${styles.category} ${styles.food}`}>
                             Food
                             </span>
                            <h3 className={styles.postTitle}>fsdf ssdfsdf sdfsdf fsdfsd sdfsdf fsdfsdfsf d as asd. </h3>
                            <div className={styles.detail}>
                                <span className={styles.username}>Bruce wayan</span>
                                <span className={styles.date}> - 12/12/2020</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                        {withImage &&  <div className={styles.imageContainer}>
                            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
                        </div>
                        }
                        <div className={styles.textContainer}>
                             <span className={`${styles.category} ${styles.technology}`}>
                             Technology
                             </span>
                            <h3 className={styles.postTitle}>fsdf ssdfsdf sdfsdf fsdfsd sdfsdf fsdfsdfsf d as asd. </h3>
                            <div className={styles.detail}>
                                <span className={styles.username}>Bruce wayan</span>
                                <span className={styles.date}> - 12/12/2020</span>
                        </div>
                    </div>
                </Link>
             </div>
        </div>
    )
}

export default Menuposts