import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'


const Featured = () => {
  return (
    <div className={styles.container}>
     <h1 className={styles.title}>
      <b>Hey, Ashen Here!</b> Discover my stories and creative ideas.
     </h1>
     <div className={styles.post}>
            <div style={{
                flex:1,
                height: "500px",
                position: "relative",
                
            }}>
              <Image src="/p1.jpeg" fill style={{
                objectFit: "cover",
              }} alt="post"
              
              />
            </div>
           <div className={styles.textContainer}>
            <h1 className={styles.postTitle}> This is the Title </h1>
            <p className={styles.postDesc}>fjafljaljfalskdjlaksdjalskdjalskdjalkdjaslk
              adjaskldjasldkjaslkdjaslkdjaslkjdalskdjaslkdjasld
              akdhaskdhaskdhkajsdhkajdhaksjdhaksjdhaskjdhaskdha
              akdhasdhasdasoidjasoidjasdjasiodjasoidjasodjasoda
              aoisdasoduasoduaoiduasoi aoiduasoiduasoi aosiudsaoid
            </p>
            <button style={{
              
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
                width: "max-content",

            }}>
               Read More
               </button>
           </div>
     </div>
    </div>

  );
}

export default Featured