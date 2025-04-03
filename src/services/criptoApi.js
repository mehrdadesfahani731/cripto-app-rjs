const BASEURL="https://api.coingecko.com/api/v3"
const API_KEY="CG-LivDQCaFRYt2XDzctCPmiJxn"

const getCoinlist=(page,currency)=>{
    return `${BASEURL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`
};

const searchCoin =(query)=> `${BASEURL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`

const marketChart=(coin)=>`${BASEURL}/coins/${coin}/market_chart?vs_currency=usd&days=7`
export {getCoinlist,searchCoin,marketChart}