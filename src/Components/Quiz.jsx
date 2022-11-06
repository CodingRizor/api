import React from "react";
import { useState, useEffect } from "react";

const CountryData = () => {
  const [cname, scname] = useState([]);
  
  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/capital")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        scname(data.data);
      });
    
  }, []);
   
   let fx=()=>{
    let countryName="";
    let capitalName="";
    let countryNum=Math.floor(Math.random()*cname.length);
    if(countryNum){
      countryName = cname[countryNum].name;
      capitalName = cname[countryNum].capital;
      console.log("Country-"+countryName);
      console.log("Capital-"+capitalName);
        
    }
   }

    for(let i=0;i<5;i++){
   fx();
   
  }
  

 

  return (
    <>
      <h4>Quiz</h4>
      <p id="cc"></p>
      <p id="dd"></p>
    
    
    
    
        <div>
{/* {cname.map((country)=>(
  <li key={country.iso2}>{fx()}</li>
 ))} */}
        </div>

      
       
      
      

    </>
  );
};

export default CountryData;

