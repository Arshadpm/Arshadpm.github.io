// import React, {useState,useContext} from 'react';
// import { NavLink } from 'react-router-dom';
// import { useNavigate,Link } from 'react-router-dom';
// import { UserContext} from '../App';
// import image1 from "./login3.jpeg";
// import "./Login.css";



// const Login = () => {
//   const {state, dispatch} = useContext(UserContext);
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
   
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const res = await fetch('http:localhost:8000/api/user/api/login',{
//     method : "POST",
//     headers : {
//         "Content-Type" : "application/json"
//     },
//     body : JSON.stringify({
//       email, 
//       password
//   })
// });
//  const data = res.json();
// if(res.status === 400 || !data){
//   window.alert("Invalid Credentials");

// }else if(res.status === 201){
//   dispatch({type:"USER",payload:false})
//   window.alert("Logged in successfully");
  
//   navigate('/Menu');
  
// }


// }
//   return (


// <div  id="image3" className="backg">
   
//    <div className="container " style={{paddingTop:"3rem"}}>
//      <div className="row d-flex justify-content-center">
//        <div className="col-xl-10">
//          <div className="card rounded-3">
//            <div className="row g-0">
//              <div className="col-lg-6">
//                <div className="card-body p-md-5 mx-md-4">
 
//                  <div 
//                  className="text-center"
//                  >
                   
//                    <h4 className="mt-1 mb-5 pb-1">Let's Sign in !...</h4>
//                  </div>
 
//                  <form onSubmit={handleSubmit} 
//                 //  className="was-validated"
//                  >
                   
 
//                    <div className="form-outline mb-3">
//                      <label className="form-label" 
//                      htmlFor="form2Example11">
//                       Username</label>
//         <input type="email" 
//         id="form2Example11" 
//         className="form-control" 
//         placeholder="Enter email address" 
//         required 
//         name="email" value={email} 
//                        onChange={(e) => setEmail(e.target.value)}/>
                     
//                    </div>
 
//                    <div className="form-outline mb-3">
//                      <label className="form-label" 
//                      htmlFor="form2Example22">Password</label>
//                      <input type="password" 
//                      placeholder="Enter Password" 
//                      required 
//                      id="form2Example22" className="form-control" 
//                      name="password"   
//                      value={password} onChange={(e) => setPassword(e.target.value)}/>
                     
//                    </div>
 
//                    <div className="text-center pt-1 mb-5 pb-1">
//                      <button className="btn btn-primary" type="submit">Sign in</button>
//                       &nbsp; 
//                      <span>   </span>
//                      <a href="#">forgot password</a>            
                      
//                    </div>
 
//                    <div className="d-flex align-items-center justify-content-center pb-1">
//                      <p className="mb-0 me-2">Don't have an account?</p>
//                      {/* <a href="Signup"> */}
//                      <Link to="/Signup">
//                       {/* <button type="button" className="btn btn-outline-danger">Create new</button> */}
//                       <label>Create new</label>
//                       </Link>
                     
//                    {/* </a> */}
//                    </div>
 
//                  </form>
 
//                </div>
//              </div>
//              <div   className="col-lg-6 d-flex align-items-center gradient-custom-2">
//                 <img src={image1} alt="" height="100%" width="90%" /> 
               
//                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                 
//                </div>
//              </div>
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>


//    </div>
//   )
// }

// export default Login




import React, {useState,useContext} from 'react';
// import axios from "axios";
import { NavLink } from 'react-router-dom';
import { useNavigate,Link } from 'react-router-dom';
import { UserContext} from '../App';
import image1 from "./login3.jpeg";
import "./Login.css";
import { useWindowScroll } from '@mantine/hooks';
// import jwt_decode from 'jwt-decode';
import Footer from "./Footer"



// const Login = () => {
//   const {state, dispatch} = useContext(UserContext);
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
   
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const res = await fetch('/login',{
//     method : "POST",
//     headers : {
//         "Content-Type" : "application/json"
//     },
//     body : JSON.stringify({
//       email, 
//       password
//   })
// });
//  const data = res.json();
// if(res.status === 400 || !data){
//   window.alert("Invalid Credentials");

// }else if(res.status === 201){
//   dispatch({type:"USER",payload:false})
//   window.alert("Logged in successfully");
  
//   navigate('/Menu');
  
// }


// }

const Login = () => {

  const {state, dispatch} = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/api/user/api/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify({ email, password })
    });
    // const json1 = resp.json();
   
    const json = await res.json();

    // var decoded = jwt_decode(json.token);

    // console.log(json.role);
    console.log(json);
    console.log(res.status);
    
    
    
    if(res.status === 400 || !json){
      window.alert("invalid credentials");
      
  }  

    
 else if (json.success || json.role === "admin") {
        //save the auth token and redirect

        dispatch({type:"USER",payload:false})
        dispatch({type:"NAME",payload:json.username})
        dispatch({type:"ROLE",payload:json.role})
        localStorage.setItem('token', json.token);
        localStorage.setItem('name', json.username);
        localStorage.setItem('email', json.email);
    
        window.alert("admin loggedin Successfully");

        navigate('/Profile');
    }
     else if (json.success || json.role === "user") {
        //  save the auth token and redirect
        dispatch({type:"USER",payload:false})
        dispatch({type:"ROLE",payload:json.role})
        dispatch({type:"NAME",payload:json.username})
         localStorage.setItem('token',json.token);
         localStorage.setItem('name',json.username);
         localStorage.setItem('email', json.email);
         window.alert("Login Successfully");
         navigate("/Profile");
             
    }
    
}
  
return (


<div  id="image3" className="backg">
   
   <div className="container " style={{paddingTop:"6rem"}}>
     <div className="row d-flex justify-content-center">
       <div className="col-xl-8">
         <div className="card rounded">
           <div className="row g-0">
             <div className="col-lg-6">
               <div className="card-body p-md-5 mx-md-4">
 
                 <div 
                 className="text-center"
                 >
                   
                   <h4 className="mt-1 mb-5 pb-1">Let's Sign in !...</h4>
                 </div>
 
                 <form onSubmit={handleSubmit} 
                //  className="was-validated"
                 >
                   
 
                   <div className="form-outline mb-3" >
                     <label className="form-label" style={{paddingRight:"316px"}}
                     htmlFor="form2Example11">
                      Username</label>
        <input type="email" 
        id="form2Example11" 
        className="form-control" 
        placeholder="Enter email address" 
        required 
        name="email" value={email} 
                       onChange={(e) => setEmail(e.target.value)}/>
                     
                   </div>
 
                   <div className="form-outline mb-3">
                     <label className="form-label" style={{paddingRight:"316px"}}
                     htmlFor="form2Example22">Password</label>
                     <input type="password" 
                     placeholder="Enter Password" 
                     required 
                     id="form2Example22" className="form-control" 
                     name="password"   
                     value={password} onChange={(e) => setPassword(e.target.value)}/>
                     
                   </div>
 
                   <div className="text-center pt-1 mb-5 pb-1">
                     <button className="btn btn-primary" type="submit">Sign in</button>
                      &nbsp; 
                     <span>   </span>
                     <a href="#">forgot password</a>            
                      
                   </div>
 
                   <div className="d-flex align-items-center justify-content-center pb-1">
                     <p className="mb-0 me-2">Don't have an account?</p>
                     {/* <a href="Signup"> */}
                     <Link to="/Signup">
                      {/* <button type="button" className="btn btn-outline-danger">Create new</button> */}
                      <label>Create new</label>
                      </Link>
                     
                   {/* </a> */}
                   </div>
 
                 </form>
 
               </div>
             </div>
             <div   className="col-lg-6 d-flex align-items-center gradient-custom-2">
                <img src={image1} alt="" style={{height:"100", width:"90%"}} width="90%" /> 
               
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>


   <div style={{position:"absolute",left:"0",bottom:"0",right:"0",height:"10px",paddingBottom:"60px"}}>
<Footer/>
</div>

   </div>
  )
}

export default Login





