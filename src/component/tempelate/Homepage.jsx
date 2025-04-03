import { useState } from "react"
import { useEffect } from "react"
import { getCoinlist } from "../../services/criptoApi"
import Tabelcoin from "../module/Tablecoin"
import Pagination from "../module/Pagination"
import Search from "../module/Search"
import Chart from "../module/Chart"

function Homepage() {
    const [coins,setcoin]=useState([]);
    const [isloading,setisloading]=useState(true);
    const [page,setpage]=useState(1);
    const [currency ,setcurrency]=useState("usd")
    const [chart,setchart]=useState(null);




    useEffect(()=>{
      setisloading(true)
    const getData=async()=>{
      try {
        const res=await fetch(getCoinlist(page,currency));
        
        const json=await res.json();
     
        
        setcoin(json);
        setisloading(false)
      } catch (error) {
        console.log(error);
        
      }
        
   }  
   getData();
    },[page,currency])


   
  return (
    <>
    < Search currency={currency} setcurrency={setcurrency}/>
   <Tabelcoin coins={coins}  isloading={isloading} setchart={setchart}/>
   <Pagination  page={page} setpage={setpage}/>
  {chart && <Chart chart={chart} setchart={setchart} />}
   </>

   
  )
}

export default Homepage