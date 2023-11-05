import React from "react";
// import logo from './logo.svg';
import './App.css';
import FetchData from "./Components/FetchData";

function App() {
  return (
      <div className="App">
        <p id="heading">Stock Data <span id="visu">Visualization.</span></p>
        <p id="para-one">I leveraged the Polygon.io API to retrieve data, benefiting from its capacity to execute up to 5 API requests per minute. </p>
        <p id="para-two">Enhance your experience by <span id="visu-t">hovering over the bar</span> to access precise values.</p>
        <FetchData />
      </div>
  );
}

export default App;
