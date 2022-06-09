import './App.css';
import Example from "./Example";
import React, { useState } from 'react';

function App() {
  const [country, setCountry] = useState("Ukraine");

  const clickHandler = () => {
    if (country === "Ukraine") {
      setCountry("Ukraine is the best country!");
    } else if (country === "Ukraine is the best country!") {
      setCountry("Ukraine");
    }
  };

  return (
    <div className="App">
      <Example
        country={country}
        clickHandler={clickHandler}
      >

      </Example>
    </div>
  );
}

export default App;
