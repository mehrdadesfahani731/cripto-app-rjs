
import styles from "./layout.module.css"
function layout({ children }) {
  return (
<>
<header className={styles.header}>
    <h1>Crypto App</h1>
<div className={styles.login}>
    <p><a href='/.'>About</a></p>
    
    <p><a href='/.'>dashboard</a></p>
    <p><a href='/.'>login</a></p>
</div>
</header>

{children}
<footer className={styles.footer}>
    <p>Developed by MehradEsfahani</p>
</footer>
</>
  )
}

export default layout