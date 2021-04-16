import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import Header from './Header'
//state is an object and is a collection of variables
//spread operators ...
//state -- can be updated , can only be used in a single component
//props -- cannot be updated , can be used in the whole project , used to transfer data between components --> parent to child components

const Home = (props) => {
  useEffect(() => {}, []);

  const [object, setFormData] = useState({});

  const saveData = (event) => {
    //user registration api

    //save data to api
    let body = {};
    body["name"] = object.firstname;

    let headers = {};
    headers["Content-type"] = "application/json; charset=UTF-8";

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    })
      .then((res) => res.json())
      .then((response) => {
        //redirect
        //display on screen
        // save to state

        console.log(response);
        if (event === "submit") {
          props.history.push({
            pathname: "/about",

            data: object,
          });
        } else if (event == "reset") {
          setFormData({ ...object, firstname: "", lastname: "", email: "" });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // if(event == "submit"){
    //     props.history.push({

    //     pathname : "/about" ,

    //     data : object

    // });
    // }else if(event == "reset"){

    //     setFormData({ ...object,  firstname : "" , lastname : "" , email : "" })

    // }

    // let body = {};
    // let header = {};
    // header['Content-type'] = "application/json; charset=UTF-8";
    // fetch('https://jsonplaceholder.typicode.com/users', {
    //         method: 'POST',
    //         body: JSON.stringify(body),
    //         headers: header
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //         console.log(data);
    //         }).catch(err=> console.log(err));

    //send data to new page
  };

  return (
    <>
      <h1>This is a home page</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={object.firstname}
          onChange={(e) =>
            setFormData({ ...object, firstname: e.target.value })
          }
        />

        <input
          type="text"
          value={object.lastname}
          onChange={(e) => setFormData({ ...object, lastname: e.target.value })}
        />

        <input
          type="text"
          value={object.email}
          onChange={(e) => setFormData({ ...object, email: e.target.value })}
        />

        <button onClick={() => saveData("submit")}>submit</button>

        <button onClick={() => saveData("reset")}>reset</button>
      </form>

      {/* <Link
            to={{
                pathname: "/about",
                state: data
            }}
            ></Link> */}
    </>
  );
};

export default Home;
