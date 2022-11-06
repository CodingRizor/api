import React, {useEffect, useState} from 'react';
const App=()=>{
    const [advice, setAdvice]=useState("");
    useEffect(()=>{
        const url="https://api.adviceslip.com/advice";
        const fetchData = async()=>{
            try{
               const response=await fetch(url);
               const json=await response.json();
               console.log(json);
            }catch(error){
                  console.log("Error");
            }
        };
        fetchData(); 
    },[]);
    return (
        {advice}
    )
}
export default App;