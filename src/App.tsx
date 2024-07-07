import { useState, useEffect } from "react";
import Article from "./Article";
import { ArticleData } from "./Types";
import "./App.css";

const FAKER_URL: string = "https://fakerapi.it/api/v1/images?_width=380";

function App() {
  const [fakerData, setFakerData] = useState([]);

  useEffect(() => {
    fetch(FAKER_URL)
      .then((res) => res.json())
      .then((json) => setFakerData(json.data));
  }, []);

  console.log(fakerData);

  return (
    <div className="App">
      <h1>FAKER API TEST</h1>
      <div className="articles">
        {fakerData?.map((item: ArticleData) => (
          <Article content={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
