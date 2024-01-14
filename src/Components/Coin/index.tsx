import { useEffect, useState } from "react"
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link } from 'react-router-dom';

import './index.css'
type CoinProps = {
  name: string,
  price: number,
  imgSrc: string,
  percent1hours: number,
  oneHour:number,
  twentFHour:number, sevenDays:number, 
}


const Coin = ({ name, price, imgSrc, percent1hours, ...props }: CoinProps) => {
  const [imgUrl, setImg] = useState('')

  const fetchImg = async (img: string) => {
    const response = await fetch(`https://s2.coinmarketcap.com/static/img/coins/64x64/${img}.png`)
    setImg(response.url);
  } 

  useEffect(() => {
    fetchImg(imgSrc);
  }, [])

  return (

    <>
     <Link to={`/details/1`} >
      <div>

    <div className="coins-box">

      <div className="coins-content">
        <img src={imgUrl} alt="Icone" className="coins-box-img" />
        <p className="coins-box-name">{name} </p>
        <p className="coins-box-price">$:{price.toFixed(2)}</p>
      </div>
      {
        Math.sign(percent1hours) === 1 ?
          <p className="coins-infographic coins-infographic-green "> <i className="bi bi-caret-up-fill"></i>{percent1hours.toFixed(2)}%</p> : <p className="coins-infographic coins-infographic-red "> <i className="bi bi-caret-down-fill"></i>{percent1hours.toFixed(2)}%</p>
      }
      <Sparklines data={[props.oneHour, props.twentFHour, props.sevenDays]}>
        <SparklinesLine color={ Math.sign(props.oneHour + props.twentFHour + props.sevenDays ) === 1 ? 'green' : 'red' } />
      </Sparklines>

    </div>
      </div>
      </Link>
    </>
  )
}

export default Coin