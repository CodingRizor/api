import React, { useState, useEffect } from "react";

function CheckCountryOne() {
  const [countries, setCountries] = useState({});

  
  const loadCountries = () => {
    console.log('call')
    fetch(
      "https://countriesnow.space/api/v0.1/countries/capital"
    ).then((res)=>{
      return res.json()
    }

    ).then((data)=>{
      // console.log(data.data)
      if(data.data){
        setCountries({'test':'hhhd'});
        console.log(countries);

      }
    }).catch((e)=>{
      console.log(e);
    });

    
    // console.log(countries.length);
    //console.log(countries[0]);
  };
  let countryName = "";

  useEffect(() => {
    
    loadCountries();
  }, []);

  // const getRandomObject = (array) => {
  //   const randomObject = array[Math.floor(Math.random() * array.length)];
  // };

  // const [randomData, setRandomData] = useState(() =>
  //   getRandomObject(countries)
  // );
  // console.log(randomData);

  return (
    <form>
      Country -{} 
      <br></br>
      <input type="text" />
    </form>
  );
}

export default CheckCountryOne;
