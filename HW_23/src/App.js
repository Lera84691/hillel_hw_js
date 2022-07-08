import "./App.css";
import { useEffect, useRef, useState } from "react";
import ListItem from "./listItem";

function App() {
  const [arr, setArr] = useState();
  const [postHeader, setPostHeader] = useState();
  const [postText, setPostText] = useState();
  const postHeaderRef = useRef();
  const postTextRef = useRef();

  const getDataFromApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => {
        setArr(json);
      });
  };

  const deleteHandler = (id) => {
    let _arr = arr.filter((item) => item.id !== id);
    setArr([..._arr]);
    console.log(_arr);
  };

  const editHandler = (id, title, body) => {
    let _arr = arr;

    let arrayIndex = _arr.findIndex((element) => {
      if (+element.id === +id) return true;
    });
    let element = _arr.find((element) => {
      if (+element.id === +id) return true;
    });
    _arr.splice(arrayIndex, 1);
    _arr.splice(arrayIndex, 0, {
      ...element,
      title: title,
      body: body,
    });
    setArr([..._arr]);
    console.log(id, title, body, arrayIndex, element, _arr);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (validationForm(postHeaderRef, postTextRef)) {
      let _arr = arr;
      _arr.unshift({
        userId: "n",
        id: Math.floor(Math.random() * 10000),
        title: postHeader,
        body: postText,
      });
      setArr([..._arr]);
      if (
        postHeaderRef.current.classList.contains("invalid") ||
        postTextRef.current.classList.contains("invalid")
      ) {
        postHeaderRef.current.classList.remove("invalid");
        postTextRef.current.classList.remove("invalid");
      }
    } else {
      if (!validateField(postHeaderRef)) {
        postHeaderRef.current.classList.add("invalid");
      }

      if (!validateField(postTextRef)) {
        postTextRef.current.classList.add("invalid");
      }
    }
  };

  const validationForm = (headerField, textField) => {
    return validateField(headerField) && validateField(textField);
  };

  const validateField = (field) => {
    const INPUT_REGEX = /^(?=^.{2,8}$)(?=.*[A-Z])(?=.*[a-z]).*$/;
    return INPUT_REGEX.test(field.current.value);
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <div className="App">
      <form className="form-wrapper" onSubmit={submitHandler}>
        <input
          name="postHeader"
          type="text"
          placeholder={"post header here"}
          ref={postHeaderRef}
          onChange={(event) => {
            setPostHeader(event.target.value);
          }}
        ></input>
        <input
          name="postText"
          type="text"
          placeholder={"post text here"}
          ref={postTextRef}
          onChange={(event) => {
            setPostText(event.target.value);
          }}
        ></input>
        <input type="submit" value="send"></input>
        <div className="legend">
          {`A-a, 2-8 (min-max chars), 1 capital letter required`}        
        </div>
      </form>
      <ul className="list">
        {!!arr &&
          arr.map((item) => {
            return (
              <ListItem
                editHandler={editHandler}
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
