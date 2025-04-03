import { useEffect, useState } from "react"
import { searchCoin } from "../../services/criptoApi";
import {RotatingLines} from "react-loader-spinner";
import styles from "./Search.module.css"



function Search({currency,setcurrency}) {
    const [text ,settext]=useState("");
    const [coins ,setcoins]=useState([]);
    const [isloading,setisloading]=useState(false)
    useEffect(()=>{
         const controller=new AbortController();

         setcoins([])
        if (!text ){setisloading(false) 
            return}

        
const search =async()=>{

    try {
        const res=await fetch(searchCoin(text),{signal:controller.signal,});
    const json=await res.json();
    if (json.coins){ 
        setcoins(json.coins)
        setisloading(false)
         console.log(coins);
    }else{
        alert ("error")
    }
   
    } catch (error) {
        if(error.name !== "AbortError")
            {
            alert (error.message)
        }
    }
    
    
};
setisloading(true)
search()

return ()=> controller.abort()
    },[text])
  return (
    <div className={styles.searchbox}>
        <input type="text" value={text} onChange={e=>settext(e.target.value)} placeholder="Search"/>
        <select value={currency} onChange={e =>setcurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
            

        </select>
        {(!!coins.length || isloading ) && ( <div className={styles.searchresult}>
   {isloading &&<RotatingLines  hight="50px" width="50px"  strokeColor="#3874ff" strokeWidth="2"/>}
        <ul>
            {coins.map((coin)=>(<li key={coin.id}>
                <img  src={coin.thumb} alt={coin.name}/>
                <p>{coin.name}</p>
            </li>))}
        </ul>
    </div>)}
   
    
    </div>
  )
}

export default Search