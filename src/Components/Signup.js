


import React,{useState} from 'react';
import image1 from "./login3.jpeg";
import {useNavigate,Link} from 'react-router-dom';
import "./Signup.css"


function Signup() {

  const navigate=useNavigate();
 
  const [user, setUser] = useState({
      username : '',
      email : '',
      password : ''
  });
      
  const handleInput = (event) =>{
      let name= event.target.name;
      let value= event.target.value;

      setUser({...user, [name]:value });
  }

  const handleSubmit = async (event) =>{
      event.preventDefault();
      const {username, email, password} = user;
      try{
          const res = await fetch('http://localhost:8000/api/user/api/register' , {
            // const res = await fetch('/api/register' , {
              method : "POST",
              headers : {
                  "Content-Type" : "application/json"
              },
              body : JSON.stringify({
                  username, email, password
              })
          })
          if(res.status === 409 || !res){
              window.alert("Already used details");

          }else{
              window.alert("User Account Created");
              navigate('/login');
          }
      } catch (error){
          console.log("error");

      }
  }
  return (
   
    <div id="image3">


<div className="container py-5 h-100" style={{paddingTop:"5rem"}}>
       <div className="row d-flex justify-content-center align-items-center h-50">
         <div className="col-xl-10">
           <div className="card rounded-3 text-black">
             <div className="row g-0">
               <div className="col-lg-6" style={{backgroundColor:""}}>
                 <div className="card-body p-md-5 mx-md-4">
  
                   <div className="text-center">
                    
                     <h4 className="mt-1 mb-5"> Please Sign Up here!...</h4>
                   </div>
  
                   <form onSubmit={handleSubmit} method="POST" 
                  //  className="was-validated"
                   >

                  

                     <label  className="form-label" htmlFor="form2Example22" for="validationServer01">Username</label>
                     <div className="form-outline mb-2">
                      
                      <input type="text" placeholder="Enter Username" pattern="[A-Za-z]{4,8}" required className="form-control" 
                      
                      id="name validationServer01" name="username" onChange={handleInput} />
                      
                    </div>
                    
                  <label className="form-label" htmlFor="form2Example11">Email address</label>
                    <div className="form-outline mb-2">
                      
                      <input type="email"  className="form-control" required placeholder="Enter email address" 
                      
                      id="email" value={user.email} name="email" onChange={handleInput}
                      
                      />
                      
                    </div>
                    

                    <label  className="form-label" htmlFor="form2Example22">Password</label>
                    <div className="form-outline mb-2">
                      
                      <input type="password" placeholder="Enter Password" required className="form-control" 
                      
                      id="validationPassword" minLength="6" value={user.password} name="password" onChange={handleInput} 
                      
                      />
                      
                      
                    </div>
  
                    <div className="text-center mb-2 pb-1">
                      <button className="btn btn-primary" type="submit">Sign Up</button>
                        
                      {/* <a class="text-muted" href="#!">Forgot password?</a> */}
                    </div>
  
                    {/* <div class="d-flex align-items-center justify-content-center pb-4">
                      <p class="mb-0 me-2">Don't have an account?</p>
                      <a href="Signup">
                      <button type="submit" class="btn btn-outline-danger">Create new</button>
                    </a>
                    </div> */}


                  <div className="d-flex align-items-center justify-content-center mb-2">
                     <p className="mb-0 me-2">Already have an account?</p>
                     {/* <a href="Signup"> */}
                     <Link to="/Login"><label 
                    //  className="btn btn-outline-danger"
                     >Login</label></Link>
                     
                   {/* </a> */}
                   </div>
  
                  </form>
  
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center gradient-custom-1">
                 <img src={image1} alt="" height="100%" width="90%" /> 
                
                {/* <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Signup