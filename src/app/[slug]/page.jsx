import React from 'react'
import styles from './singlePage.module.css'
import Menu from '../componets/Menu/Menu'
import Image from 'next/image'
const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}> 
                sdadas s dasdas asdasdasd dasdasd dasdasdasd as asdd asd 
                </h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                    <Image src="/p1.jpeg" alt="" fill  className={styles.avatar}/>
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>Ashen Shamilka</span>
                        <span className={styles.date}> 02 june 2024</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="" fill  className={styles.image}/>
            </div>   
        </div>     
         <div className={styles.content}>     
         <div className={styles.post}>
            <div className={styles.description}>
                <p>
                asdsad aadsasda asdasd kjhkl ldjlaskdjlaks asdasdasd
                akjdklasdjkalsdjsaldjaslkdjasdsad aadsasda asdasd kjhkl ldjlaskdjlaks 
                akjdklasdjkalsdjsaldjaslkdjasdsad aads adasdasddsadasdsad
                </p>
                <h2>
                    asd asdasda dadas asdasdas
                </h2>
                <p>
                asdsad aadsasda asdasd kjhkl ldjlaskdjlaks asdasdasd
                akjdklasdjkalsdjsaldjaslkdjasdsad aadsasda asdasd kjhkl ldjlaskdjlaks 
                akjdklasdjkalsdjsaldjaslkdjasdsad aads adasdasddsadasdsad
                </p>
                <p>
                asdsad aadsasda asdasd kjhkl ldjlaskdjlaks asdasdasd
                akjdklasdjkalsdjsaldjaslkdjasdsad aadsasda asdasd kjhkl ldjlaskdjlaks 
                akjdklasdjkalsdjsaldjaslkdjasdsad aads adasdasddsadasdsad
                </p>
                <p>
                asdsad aadsasda asdasd kjhkl ldjlaskdjlaks asdasdasd
                akjdklasdjkalsdjsaldjaslkdjasdsad aadsasda asdasd kjhkl ldjlaskdjlaks 
                akjdklasdjkalsdjsaldjaslkdjasdsad aads adasdasddsadasdsad
                </p>
            </div>
         </div>
          <Menu />       
        
        </div>   
        
    </div>
  )
}

export default SinglePage 