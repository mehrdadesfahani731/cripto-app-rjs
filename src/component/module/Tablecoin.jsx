import chartdown from "../../assets/chart-down.svg"
import chartup from "../../assets/chart-up.svg"
import {RotatingLines} from "react-loader-spinner"
import styles from "./TableCoin.module.css"
import { marketChart } from "../../services/criptoApi"



function Tabelcoin({coins,isloading,setchart}) {





 
  const showhandeler=async(id)=>{
 
  
    try {
    
      
      const res=await fetch(marketChart(id))
      const json=await res.json();
      console.log(json);
      setchart({...json , coins})
    } catch (error) {
      console.log("error");
      
    }
  }

  return (<div className={styles.container}>
  {isloading ? <RotatingLines  strokeColor="#3874ff" strokeWidth="2"/> : ( 
    <table className={styles.table}>

<thead>
  <tr>
    <th>Coin</th>
    <th>Name</th>
    <th>Price</th>
    <th>24h</th>
    <th>Total valume</th>
  </tr>
</thead>
<tbody>
 {coins.map((coin) =>(



<tr key={coin.id}>
  <td><div className={styles.symbol} onClick={()=>showhandeler(coin.id)}>
         <img src={coin.image} />
          <span>{coin.symbol.toUpperCase()}</span></div></td>
          <td>{coin.name}</td>
          <td>{coin.current_price.toLocaleString()}</td>
          <td className={coin.price_change_percentage_24h >0 ? styles.success : styles.error}>{coin.price_change_percentage_24h.toFixed(2)}</td>
          <td>{coin.total_volume.toLocaleString()}</td>
          <td><img src={coin.price_change_percentage_24h >0  ? chartup : chartdown}  alt={coin.name}/></td>



</tr>
  
  ))}
</tbody>
</table>

)}

  
  </div>)
  
}

export default Tabelcoin

