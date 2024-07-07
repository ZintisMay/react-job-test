import "./App.css";
import { ArticleData } from "./Types";

function Article(props: any) {
  const articleData: ArticleData = props.content;
  return (
    <div className="Article">
      <h2>
        <a href={articleData.url}>{articleData.title}</a>
      </h2>
      <p>{articleData.description}</p>
    </div>
  );
}

export default Article;
