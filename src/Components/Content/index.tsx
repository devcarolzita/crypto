import { useEffect, useState } from 'react'
import Coin from '../Coin';
import './index.css'

const Content = () => {
  //como fazer o fetch e ver o que a api ta retornando
// Import 'node-fetch' if you are using this in a Node.js environment

const [cryptoData, setCryptoData] = useState<any[]>([]);


  useEffect(() => {

    const fetchData = async () => {

      try {
        const response = await fetch('http://localhost:3000');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const {data} = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);    
    
console.log(cryptoData, 'crypto');

  return (
    <div className='content-box'>{
      cryptoData.map((element) => <Coin name={element.name} price={element.name} imgSrc={element.symbol} key={element.id}/>)
  }
  </div>
  )
}

export default Content