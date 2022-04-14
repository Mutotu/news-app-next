import { Toolbar } from "../../components/toolbar";
import ArticleList from "../../components/articlesList";
import styles from "../../styles/Feed.module.css";
import { useRouter } from "next/router";
// import vars from "../../utils/funcs";

export const Feed = ({ pageNumber, articles }) => {
  const router = useRouter();
  const prevPage = () => {
    if (pageNumber > 1) {
      router.push(`/feed/${pageNumber - 1}`);
    }
  };

  const nextPage = () => {
    if (pageNumber < 5) {
      router.push(`/feed/${pageNumber + 1}`);
    }
  };

  return (
    <div className='page-container'>
      <Toolbar />
      <div className={styles.main}>
        <ArticleList articles={articles} key={"articles"} />
      </div>
      <div className={styles.paginator}>
        <div
          onClick={prevPage}
          className={pageNumber === 1 ? styles.disabled : styles.active}
        >
          Previous Page
        </div>
        <div> #{pageNumber}</div>
        <div
          onClick={nextPage}
          className={pageNumber === 5 ? styles.disabled : styles.active}
        >
          Next Page
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;
  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }
  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  ).then((res) => res.json());

  // const apiResponse = vars.funcs().fetch(pageNumber);
  const { articles } = apiResponse;

  return {
    props: {
      articles: articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;
