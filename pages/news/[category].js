function ArticleListByCategories({ articles, category }) {
  return (
    <>
      <h1>
        {articles ? (
          <p>
            Showing Articles by category <i>{category}</i>
          </p>
        ) : (
          <p>Sorry Nothing found here</p>
        )}

        {articles.map((article) => {
          return (
            <div key={article.id}>
              <h2>
                {article.id} {article.title} {article.description}
              </h2>
              <hr />
            </div>
          );
        })}
      </h1>
    </>
  );
}
export default ArticleListByCategories;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log(query);
  console.log(req.headers.cookie);
  res.setHeader("set-cookie", ["name = Karan"]);
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    }, // will be passed to the page component as props
  };
}
