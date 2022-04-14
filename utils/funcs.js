const funcs = () => {
  return {
    fetch: function async(pageNumber) {
      fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
          },
        }
      ).then((res) => res.json());
    },
  };
};

const vars = { funcs };

export { vars };
