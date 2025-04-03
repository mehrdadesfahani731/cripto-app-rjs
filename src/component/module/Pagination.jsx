

import styles from "./pagination.module.css"
function Pagination({page , setpage }) {
   
    const previoushandeler=()=>{
        if(page<=1) return
        setpage(page=>page-1);
        
    }
    const nexthandeler=()=>{
        if (page>=10) return
        setpage(page=>page+1)
    }

  return (
    <div className={styles.pagination}>
        <button onClick={previoushandeler} className={page ===1 ? styles.disabled : "null"}>previous</button>
        <p className={page===1 ? styles.selected : null}>1</p>
        <p className={page===2 ? styles.selected : null}>2</p>
        
        {(page>2&& page<9) && (<><span>...</span>
        <p className={styles.selected}>{page}</p></>) }
        <span>...</span>

        
        <p className={page===9 ? styles.selected : null}>9</p>

        <p className={page===10 ? styles.selected : null}>10</p>


        <button onClick={nexthandeler}  className={page ===10 ? styles.disabled : "null"}>next</button>

    
    </div>
  )
}

export default Pagination