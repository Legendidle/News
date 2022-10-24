import { useParams, Link } from 'react-router-dom';
import { getNews} from '../../lib/getNews';
import { useEffect, useState } from 'react';
import styles from './Content.module.scss';


const Content = () => {
  const { url } = useParams();
  const [info, setInfo] = useState([]);

  const handleNews = async (link) => {
      const {articles} = await getNews(link);
      setInfo(articles);
  }

  useEffect(() => {
    handleNews(url);
  }, [url]);

  return (
    <div className={styles.cards} key={info.url}>
        {info.length > 0 && 
          info.map(news => {
            return(
              <Link className={styles.card} key={news.url}>
                <div className={styles.imgWrapper}>
                  <img className={styles.img} src={news.urlToImage} alt="img" />
                </div>
                <h3>{news.title}</h3>
                <time>{news.publishedAt}</time>
                <h3>{news.description}</h3> 
              </Link>
            )
        })}
    </div>
  )
}

export default Content;
