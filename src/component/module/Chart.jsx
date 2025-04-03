import { useState } from "react"
import styles from "./Chart.module.css"
import { convertdata } from "../../helper/convert";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Chart({chart,setchart}) {
const [type,settype]=useState("prices")
   
const typehandeler=(event)=>{
  if(event.target.tagName==="BUTTON"){
const type=event.target.innerText.toLowerCase().replace(" ","_")
console.log(type);

settype(type)

  }
}
    
  return (
    <div className={styles.container}><span className={styles.cross} onClick={() => setchart(null)}>x</span>
    <div className={styles.chart}>
        <div className={styles.name}> 
        <img src={chart.coins.map(coin=>coin.image)} />
       

        </div>
        <div className={styles.graph}>
        <ResponsiveContainer width="100%" height="100%" >
        <LineChart
          width={500}
          height={300}
          data={convertdata(chart,type)}
          
        >
          <Line type="monotone" dataKey={type} stroke="#8884d8" strokeWidth="2px" />
          <CartesianGrid stroke="#404042" />
          <XAxis  dataKey="date" hide/>
          <YAxis dataKey={type} domain={["auto" ,"auto"]} />
         
          
          <Legend />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
      

        </div>
<div className={styles.types} onClick={typehandeler}>
<button className={type==="prices" ? styles.selected : null}>Prices</button>
    <button className={type==="market_caps" ? styles.selected  : null}>Market caps</button>
    <button className={type==="total_volumes" ? styles.selected  : null}>total volumes</button>
</div>

    </div>
   
    </div>
  )
}

export default Chart

