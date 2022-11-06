import React from "react";
import { useState, useEffect } from "react";

const CountryData = () => {
  const [cname, scname] = useState([]);
  // const [capname,scapname]=useState([]);

  const getData = () => {
    fetch("https://countriesnow.space/api/v0.1/countries/capital")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        scname(data.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  let countryName = '';
  let capitalName ="";
  
  //  const init = () => {
    let countryNum = Math.floor(Math.random() * cname.length);
    if(countryNum){
      
      // console.log('test')
      countryName = cname[countryNum].name;
      capitalName = cname[countryNum].capital.toLowerCase();
     }
  // } 
  // init();
const checkfx=(e)=>{
  e.preventDefault();
  let gd=document.getElementById('ss').value.toLowerCase();
if(capitalName===gd){
 alert("Correct");
 }else{
  alert("Wrong");
  
 }
}

  return (
    <>
      <h4>Random Api</h4>
      
        <form>
        Country Name - {countryName}<br/>
       Enter Capital - <input type="text"  id="ss" ></input><br/>
       <button type="submit" onClick={checkfx} >Check</button>
      </form>
      
      {/* value={capname} onChange={(e)=>scapname(e.target.value)} */}
      <hr />
       
      

    </>
  );
};

export default CountryData;
