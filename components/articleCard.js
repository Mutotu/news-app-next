import next from "next";
import styles from "../styles/Feed.module.css";

const ArticleCard = (props) => {
  return (
    <div key={props.index} className={styles.post}>
      <h1 onClick={() => (window.location.href = props.article.url)}>
        {props.article.title}
      </h1>

      {!!props.article.urlToImage && <img src={props.article.urlToImage} />}
    </div>
  );
};

export default ArticleCard;
