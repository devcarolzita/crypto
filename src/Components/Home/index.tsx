import { useEffect, useState } from 'react'
import Coin from '../Coin';
import './index.css'
import Swal from 'sweetalert2';

const Home = () => {

const [cryptoData, setCryptoData] = useState<any[]>([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const {data} = await response.json();
    
        console.log(data[0].quote.USD.percent_change_1h);
        
        setCryptoData(data);
      

      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Something went wrong!${error}`,
        });
      }
    };
    console.log(cryptoData ,'teste');
    
    fetchData();
  }, []);    
    

  return (

    <div>
      
            <h1 >Coin Cripto!</h1>
            <div className='content-box'>
      {
    cryptoData[0] ?   cryptoData.map((element) => <Coin name={element.name} price={element.quote.USD.price} imgSrc={element.id} key={element.id} percent1hours={element.quote.USD.percent_change_1h}  oneHour={element.quote.USD.percent_change_1h} twentFHour={element.quote.USD.percent_change_24h} sevenDays={element.quote.USD.percent_change_7d} /> ) : 'elemgento nao encontrado'
  }
  </div>
    </div>
   
  )
}

export default Home