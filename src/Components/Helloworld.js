import React, { useState, useEffect } from "react";
import "./Helloworld.css"
import logo from './logo.svg';

function Helloworld() {
  return (
    <div className="Hello">
      <header className="Hello-header">
        <img src={logo} className="Hello-logo" alt="logo" />
        <h1>
          Hello World
        </h1>
       
      </header>
    </div>
  );
}

export default Helloworld;