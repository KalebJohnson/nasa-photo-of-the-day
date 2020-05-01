import React, { useState, useEffect } from "react";
import NasaPost from "./NasaPost";
import Nasa from "./Nasa";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);


return (
  
    <div className="App" >
        <h1>NASA API!</h1>
        <NasaPost className="post"/>
        <NasaPost className="post"/>
        <NasaPost className="post"/>
        <NasaPost className="post"/>
    </div>
);
}


export default App;