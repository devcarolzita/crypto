import { useEffect, useState } from 'react'
import Coin from '../Coin';
import './index.css'
import Swal from 'sweetalert2';

const Content = () => {
  //como fazer o fetch e ver o que a api ta retornando
// Import 'node-fetch' if you are using this in a Node.js environment

const [cryptoData, setCryptoData] = useState<any[]>([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000');

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

    fetchData();
  }, []);    
    

  return (
    <div className='content-box'>{
    cryptoData[0] ?   cryptoData.map((element) => <Coin name={element.name} price={element.quote.USD.price} imgSrc={element.id} key={element.id} percent1hours={element.quote.USD.percent_change_1h} /> ) : 'elemgento nao encontrado'
  }
  </div>
  )
}

export default Content