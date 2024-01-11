import { useEffect, useState } from "react"
import './index.css'
type CoinProps = {
  name: string,
  price: number,
  imgSrc: string,
  percent1hours: number,
}

const Coin = ({ name, price, imgSrc, percent1hours}: CoinProps) => {
  const [imgUrl, setImg] = useState('')

  const fetchImg = async (img: string) => {
    const response = await fetch(`https://s2.coinmarketcap.com/static/img/coins/64x64/${img}.png`)
    setImg(response.url);
    // const teste = await response.json();
    // console.log(teste);
    
  }

  const verifiedPercent = () => {
    console.log(percent1hours.toFixed(2));
    
  }


  useEffect(() => {
    fetchImg(imgSrc);
  }, [])


  return (
    <div className="coins-box">

      <div className="coins-contet">
        <img src={imgUrl} alt="Icone" className="coins-box-img" />
        <p className="coins-box-name">{name} </p>
        <p className="coins-box-price">$:{price.toFixed(2)}</p>

      </div>
      {/* //atualizar o infographic caso tenha atualiza */}
      {
        Math.sign(percent1hours) === 1 ? 
         <p className="coins-infographic coins-infographic-green "> <i className="bi bi-caret-up-fill"></i>{percent1hours.toFixed(2)}</p> : <p className="coins-infographic coins-infographic-red "> <i className="bi bi-caret-down-fill"></i>{percent1hours.toFixed(2)}</p>
      }
     
  
    </div>
  )
}

export default Coin