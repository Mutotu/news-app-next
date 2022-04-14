import ArticleCard from "../components/articleCard";
import styles from "../styles/Feed.module.css";
const ArticleList = (props) => {
  return (
    <div className={styles.main}>
      {props.articles.map((article, index) => {
        return (
          <ArticleCard
            // index={index}
            // url={article.url}
            // article={article.title}
            // urlToImage={article.urlToImage}
            article={article}
          />
        );
      })}
    </div>
  );
};

export default ArticleList;
