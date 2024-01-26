import { useEffect, useState } from 'react'
import Coin from '../Coin';
import './index.css'
import Swal from 'sweetalert2';

type CriptoDataType = {
  name: string,
  id: string,
  quote: {
    USD:{
      price: number,
      percent_change_1h: number,
      percent_change_24h: number,
      percent_change_7d: number
    }
  }
}

const Home = () => {

const [cryptoData, setCryptoData] = useState<CriptoDataType[]>([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://crypto-alpha-three.vercel.app/');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const {data} = await response.json();
            
        setCryptoData(data);
      

      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Something went wrong!${error}`,
        });
      }
    };    
    fetchData();
  }, []);    
    

  return (

    <div>
      
            <h1 >Coin Cripto!</h1>
            <div className='content-box'>
      {
    cryptoData[0] ?   cryptoData.map((element) => <Coin name={element.name} price={ element.quote.USD.price } imgSrc={element.id} key={element.id} percent1hours={element.quote.USD.percent_change_1h}  oneHour={element.quote.USD.percent_change_1h} twentFHour={element.quote.USD.percent_change_24h} sevenDays={element.quote.USD.percent_change_7d} /> ) : 'elemgento nao encontrado'
  }
  </div>
    </div>
   
  )
}

export default Home