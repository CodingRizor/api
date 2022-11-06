import React, { useEffect, useState } from "react";
import "./Api.css";

const UsingFetch = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://countriesnow.space/api/v0.1/countries/capital")
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        // console.log(data.data)
        setUsers(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="header">
        Api<br></br>
        API stands for application programming interface, which is a set of
        definitions and protocols for building and integrating application
        software.
        <br />
      </div>
      <br></br>
      <div className="data">
        <h4>Get Api</h4>
        <hr />
        {users.length > 0 && (
          <div>
            {users.map((user) => (
              <div key={user.iso2}>
                Name-{user.name}
                <br></br>
                Capital -{user.capital}
                <br></br>
                <hr></hr>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default UsingFetch;

// fetch("https://jsonplaceholder.typicode.com/users")
// console.log(user)
// <div  key={user.id}>Name - {user.name}<br></br>
// Email - {user.email}<br></br> */
// City - {user.address.city}<br></br> */
// Phone - {user.phone}
