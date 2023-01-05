// import React from 'react';
// import Login from "./Login";
// import Signup from "./Signup";
// import Home from "./Home";
// import Helloworld from "./Helloworld"
// import Stopwatch from "./Stopwatch/Stopwatch"
// import './Login.css';
// import {Routes,Route} from "react-router-dom";
// import About from "./About"


// const Mainrouter=()=>{
//   return (
// <>  
// <Routes>
//     <Route exact path="/" element={<Home/>} /> 
//     {/* <Route path="/Contact" element={<Contact/>} /> */}
//     {/* <Route path="/About" element={<About/>} />  */}
//     <Route path="/Login" element={<Login/>} />
//     <Route path="/Signup" element={<Signup/>} />
//     <Route path="/helloworld" element={<Helloworld/>} />
//     <Route path="/stopwatch" element={<Stopwatch/>} />
//     <Route path="/about" element={<About/>} />
    
    
//     {/* <Route path="/Component" element={<Component/>} />
//     <Route path="/logout" element={<logout/>} />
//     <Route path="/Newnavbar" element={<Newnavbar/>} />
//     <Route path="/Calculator" element={<Calculator/>} />
//     */}
   
// </Routes>

//     </>
//   )
// }

// export default Mainrouter;




import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Helloworld from "./Helloworld"
import Stopwatch from "./Stopwatch/Stopwatch"
import './Login.css';
import {Routes,Route} from "react-router-dom";
import About from "./About"
import Logout from "./Logout"
import Contact from "./Contact"
import Menu from "./Menu"
import Clock from "./Clock"
import Profile from "./Profile"
import Viewusers from "./Viewusers"

import React, {createContext,useReducer} from 'react';
import { initialState, reducer } from "./Usereducer";




const Mainrouter=()=>{
  return (
<>  
<Routes>
    <Route exact path="/" element={<Home/>} /> 
    <Route path="/Login" element={<Login/>} />
    <Route path="/Signup" element={<Signup/>} />
    <Route path="/helloworld" element={<Helloworld/>} />
    <Route path="/stopwatch" element={<Stopwatch/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/Logout" element={<Logout/>} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/Menu" element={<Menu/>} />
    <Route path="/clock" element={<Clock/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/viewusers" element={<Viewusers/>} />
</Routes>

    </>
  )
}

export default Mainrouter;