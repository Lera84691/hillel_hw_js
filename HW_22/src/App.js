import "./App.css";
import { useEffect, useState } from "react";
import ListItem from "./listItem";

function App() {
  const [arr, setArr] = useState();

  const getDataFromApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => {
        setArr(json);
      });
  };

  const deleteHandler = (id) => {
    let _arr = arr.filter((item) => item.id !== id);
    setArr(_arr);
  };

  useEffect(() => {}, [arr]);

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <div className="App">
      <ul className="list">
        {!!arr &&
          arr.map((item) => {
            return (
              <ListItem
                deleteHandler={deleteHandler}
                userId={item.userId}
                title={item.title}
                text={item.body}
                id={item.id}
                key={item.id}
              ></ListItem>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
