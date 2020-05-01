import React, { useState, useEffect } from "react";
import "./App.css";
import NasaPost from "./NasaPost";
import axios from "axios";

const Nasa = props => {

// Display a loading message while the data is fetching


const explBG = {
  backgroundColor : 'Grey',
  margin : 'auto'
}

      return ( 
      <li>
        <h2>Title: {props.title}</h2>
        <img className="img" src={props.hdurl}></img>
        <p  className="info" style={explBG}>{props.explanation}</p>
        <p></p>
      <p>Date: {props.date}</p>
      </li>
      );
}

export default Nasa;