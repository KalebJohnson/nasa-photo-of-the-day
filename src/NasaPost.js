import React, { useState , useEffect } from 'react';
import Nasa from "./Nasa.js";
import axios from "axios";

const NasaPost = props => {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=h1pcSvDdtUjcu8xxWa09Xv8REkEhHC8yMVh4htnt')
    .then(response => {
      setInfo(response.data);
      console.log('data!' , info);
    });
  }, []);

  
  

  //  const [data, setData] = useState();

  return (
    <div className="post">
      <ul>
        <Nasa
                title={info.title}
                hdurl={info.hdurl} 
                explanation={info.explanation} 
                date={info.date} />

      </ul>
    </div>
  );
};
export default NasaPost;

//{info.map(data => {
//  return <Nasa/>
//})}


// <Nasa title={data.title} hdurl={data.hdurl} explanation={data.explanation} date={data.date} />



