import React, {Component} from "react";
import Nasa from "./Nasa";
import "./App.css";

class App extends Component {
  render() {
    return (
    <div className="App">
      <h1>Nasa API</h1>
      <Nasa />
    </div>
  );
 }
}
export default App;
