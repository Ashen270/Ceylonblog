import React from 'react'
import styles from './Comments.module.css'
import Image from 'next/image'

const Comments = () => {
    const status = "authenticated"
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
          {status === "authenticated" ? (
              <div className={styles.write}>
                  <textarea placeholder="Wrie a Comment"className={styles.input} />
                  <button className={styles.button}>Post</button>
              </div>
          ) : (
              <Link href="/login">Login to Comment</Link>
          )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" width={50}  height={50} className={styles.image}/>
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Ashen Shamilka</span>
                            <span className={styles.date}>02.02.2024</span>
                        </div>
                    </div>
                    <p className={styles.desc}> 
                      adas  dasd asdasdas asasdas adasdas dada s da asdas as asdas asd 
                      asas dad adas  dasd asdasdas asasdas adasdas dada s da asdas as asdas asd 
                      asas dadadas  dasd asdasdas asasdas adasdas dada s da asdas as asdas asd 
                      asas dad asdasdas
                    
                    </p>

                </div>
            </div>
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" width={50}  height={50} className={styles.image}/>
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Ashen Shamilka</span>
                            <span className={styles.date}>02.02.2024</span>
                        </div>
                    </div>
                    <p className={styles.desc}> 
                      adas  dasd asdasdas asasdas adasdas dada s da asdas as asdas asd 
                      asas dad adas  dasd asdasdas asasdas adasdas dada s da asdas as asdas asd 
                      asas dadadas  dasd asdasdas asasdas adasdas dada s da asdas as asdas asd 
                      asas dad asdasdas
                    
                    </p>

                </div>
            </div>
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" width={50}  height={50} className={styles.image}/>
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Ashen Shamilka</span>
                            <span className={styles.date}>02.02.2024</span>
                        </div>
                    </div>
                    <p className={styles.desc}> 
                      adas  dasd asdasdas asasdas adasdas dada s da asdas as asdas asd 
                      asas dad adas  dasd asdasdas asasdas adasdas dada s da asdas as asdas asd 
                      asas dadadas  dasd asdasdas asasdas adasdas dada s da asdas as asdas asd 
                      asas dad asdasdas
                    
                    </p>

                </div>
            </div>
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" width={50}  height={50} className={styles.image}/>
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Ashen Shamilka</span>
                            <span className={styles.date}>02.02.2024</span>
                        </div>
                    </div>
                    <p className={styles.desc}> 
                      adas  dasd asdasdas asasdas adasdas dada s da asdas as asdas asd 
                      asas dad adas  dasd asdasdas asasdas adasdas dada s da asdas as asdas asd 
                      asas dadadas  dasd asdasdas asasdas adasdas dada s da asdas as asdas asd 
                      asas dad asdasdas
                    
                    </p>

                </div>
            </div>
    </div>
  )
}

export default Comments