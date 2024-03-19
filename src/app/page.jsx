import CategoryList from "./componets/CategoryList/CategoryList";
import Menu from "./componets/Menu/Menu";
import CardList from "./componets/cardList/CardList"; 
import Featured from "./componets/featured/Featured";
import styles from "./homepage.module.css";
import Pagination from "./componets/pagination/Pagination";
import Link from "next/link";

export default function Home() {
  return (
  <div className={styles.container}>
   
   <Featured/>
   <CategoryList/>
       <div className={styles.content}> 
           <CardList/>
           <Menu/>
           


       </div>

  </div>
  );
}
