import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'


const Featured = () => {
  return (
    <div className={styles.container}>
     <h1 className={styles.title}>
      <b>"Hey there, Welcome to the CeylonBlog"</b> 
     </h1>
     <h1 className={styles.title1}>Explore captivating tales and dive into the beauty of Sri Lanka's culture and landscapes.</h1>
     <div className={styles.post}>
            <div className={styles.imgContainer}>
              <Image src="/slfeature.jpg" fill alt="post" className={styles.image}/>
            </div>
           <div className={styles.textContainer}>
            <h1 className={styles.postTitle}> Pearl Of The Indian Ocean </h1>
            <p className={styles.postDesc}>
            Sri Lanka, formerly known as Ceylon, is an island nation located in South Asia,
             situated in the Indian Ocean. It's renowned for its stunning landscapes, rich
              cultural heritage, and diverse wildlife. The country's history dates back thousands
               of years, with a blend of indigenous cultures and influences from various colonial powers.
               The island's natural beauty is evident in its lush rainforests, pristine beaches, and majestic
                mountains, including the famed Adam's Peak. Sri Lanka is also home to a wealth of biodiversity,
                 with a high concentration of endemic species.
            </p>
            <button className={styles.button}>Read More</button>
           </div>
     </div>
    </div>

  );
}

export default Featured