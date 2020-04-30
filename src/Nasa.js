import React, { useState, useEffect } from "react";
import "./App.css";
import NasaPost from "./NasaPost";
import axios from "axios";

const Nasa = props => {


      return (
      <li key={props.id}>
        <h2>Title: {props.title}</h2>
        <img src={props.URL}></img>
        <p>{props.desc}</p>
        <p></p>
        <p></p>
      <p>Date: {props.date}</p>
      </li>
      );
}

export default Nasa;