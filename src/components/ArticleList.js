import ArticleItem from "./ArticleItem";

export function ArticleList({ articles }) {
    return (
        <section className="text-center mb-10">
            <h3 className="fw-bold mb-7 text-center">Latest news...</h3>
            <div className="row gx-lg-5">
                {articles.map(article => (
                    <div className="col-lg-4 col-md-12 mb-7">
                        <ArticleItem article={article}/>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default ArticleList;

