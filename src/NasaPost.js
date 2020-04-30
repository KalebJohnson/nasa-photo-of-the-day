import React, { useState , useEffect } from 'react';
import Nasa from "./Nasa.js";
import axios from "axios";

const NasaPost = props => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=h1pcSvDdtUjcu8xxWa09Xv8REkEhHC8yMVh4htnt')
    .then(response => {
      setData(response.data);
    });
  }, []);
  
  useEffect(() => {
    console.log('data!' , data);
  }, [data]);


  //  const [data, setData] = useState();

  return (
    <div>
      <ul>{
        data.map((info) => {
          return <Nasa id={info.id} pic={info.img}
           />
        })
        
        

    }</ul>

    </div>
  );
};
export default NasaPost;





