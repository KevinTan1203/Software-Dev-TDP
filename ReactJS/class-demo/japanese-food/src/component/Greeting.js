import React from "react";
import "./Greeting.css";

function Greeting({ name }) {
  const sayHi = (name) => {
    console.log("Hi " + name);
  };
  return (
    <>
      <h1 onClick={() => sayHi(name)}>Greetings from UOBxTDP</h1>
      <span id="simple-id">Your journey starts here!</span>
    </>
  );
}

export default Greeting;
