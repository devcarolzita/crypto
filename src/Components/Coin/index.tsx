
type CoinProps = {
  name: string,
  price: number,
  imgSrc: string,
  key: number
}
const Coin = ({name, price, imgSrc, key}: CoinProps) => {
  return (
    <div key={key}>
      <img src={imgSrc} alt="" />
      <p>Nome: {name} </p>
      <p>Preço: {price}</p>
    </div>
  )
}

export default Coin