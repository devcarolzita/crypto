const API_NEWS = import.meta.env.VITE_API_NEWS_KEY;
import { Card, Carousel } from 'flowbite-react';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

type articleProps = {
  author:string,
  content:string,
  description:string,
  publishedAt:string,
  source:string,
  title:string,
  url:string,
  urlToImage: string
}

const PageCoin = () => {
  // const params = useParams();
  const [articles, setArticles] = useState<articleProps []>([]);
  const [newRequisi, setNewRequisi] = useState(false);

  
  const fetchNews = async () => {
    try {
      const resposta = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_NEWS}`)
      const dados = await resposta.json();

      setArticles([...dados.articles])
      console.log(articles);

      if (articles.length === 0) {
        setNewRequisi(true);
      }
    } catch (error) {
      console.log(error);
      
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${error}`,
      });
    }
  }

  useEffect(() => {
    fetchNews()

  }, [newRequisi])
  return (
    <div>
      <p>pagina de moedinahs</p>
      <h3>últimas notícias do mundo de Crypto!</h3>
      {
        articles.length > 1 ? <div className='page-coin-box'>
          <p>aqui vinha sa noticias</p>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96" >
            <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
              <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                <Card
                  className="max-w-sm"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc={articles[0].urlToImage}
                >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {articles[0].title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {articles[0].description}        </p>
                </Card>
              </div>
              <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                Slide 2
              </div>
              <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                Slide 3
              </div>

            </Carousel>
          </div>
        </div> : 'teste'
      }

      {/* {
        articles.length > 1 ? 
       articles.map((article, index) => {
        return <div key={article.source.id + index} className="h-56 sm:h-64 xl:h-80 2xl:h-96">
           
           <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={article.urlToImage}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
         {article.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        {article.description}        </p>
      </Card>
        </div>
       }) : 'teste'
      } */}


    </div>
  )
}

export default PageCoin