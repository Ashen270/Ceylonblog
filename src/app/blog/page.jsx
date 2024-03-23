import React from 'react'
import styles from './blogpage.module.css'
import Menu from '../componets/Menu/Menu'
import CardList from '../componets/cardList/CardList'


const page = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Style Blog</h1>
        <div className={styles.content}>
         <CardList/>
         <Menu />
        </div>
    </div>
  )
}

export default page