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
      )
        .then((res) => res.json())
        .then((r) => console.log(r));
    },
    log: function (pageNumber) {
      console.log(pageNumber);
    },
  };
};

const vars = { funcs };

export default vars;
