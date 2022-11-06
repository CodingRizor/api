import React ,{ useState }from 'react'
import './PostApi.css';
export default function Api3() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
   function saveUser(){
//preventDefault();
let data={name,email,phone};
    console.log("name:",name,"email:",email,"phone:",phone);
    fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }).then((result)=>{
           console.log(result);
    })
   }
    return ( 
    <>
   <h4 className='pt'> Post Api<br/></h4>
    <form>
    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" id="exampleInputName" value={name}
    onChange={(e)=>{setName(e.target.value)}}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" 
     value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Number</label>
    <input type="number" className="form-control" id="exampleInputPassword1"
   value={phone} onChange={(e)=>{setPhone(e.target.value)}} />
  </div>
  <button type="button" className="btn btn-primary" onClick={saveUser}>Submit</button>
</form>
    </>
  )
}
