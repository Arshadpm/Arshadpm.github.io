import React,{ useContext, useState,useEffect } from 'react';
import axios from "axios";
import {UserContext} from '../App'
import "./Profile.css";
import Footer from "./Footer.js"

const Profile = () => {

const {state} =useContext(UserContext);

const val=localStorage.getItem('name');

const [posts, setPosts] = useState([]);



//edit profile

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [username, setUsername] = useState("");

// const editProfile = async(e) => {
//   e.preventDefault();
//   const edit = await axios.put(`http://localhost:5000/api/user/users/${val}`, {
     
//       body: JSON.stringify({ username, email, password })
      
//   });
// };

//end

//get user
  const getUsers = async(val) => {
    const response = await axios.get(`http://localhost:8000/api/user/api/users/${val}`);
  // .then((response)=> {
  //   console.log(response.data[0]);

  //  })
  // .catch((error)=> {
  //   console.log(error);
  // })
  console.log(response);
setPosts(response.data[0]);
console.log(posts.username);
  };
//end

return (
 <>
 


<h2 className='mt-3'><b>Profile</b></h2>



<div class="row">
  
  
<div class="col rowC ml-24 mr-8">
    <div class="collapse multi-collapse" id="multiCollapseExample3">
      
    <div className="container my-5 collaps multi-collapse" id="multiCollapseExample" >
        <div className='card text-center my-5' style={{backgroundColor:"white",paddingBottom:"20px"}}>
        <div className='card-body' style={{width:"225px"}}>
            <h3 className='mb-2'><b>View Profile</b></h3>
            <img className='img mb-1' src='https://cdn-icons-png.flaticon.com/512/992/992490.png' alt="Contact"
 />
            <div id="textbox">
            <h6 class="alignleft">Username:</h6><h6 style={{color:"green"}}>
              {/* {localStorage.getItem('name')} */}
              {posts.username}
              </h6>
            </div>

            <div id="textbox">
            <h6 class="alignleft">Role:</h6><h6  style={{color:"green"}}>
              {/* {localStorage.getItem('name')} */}
              {posts.role}
              </h6>
            </div>

            <div id="textbox">
            <h6 class="alignleft">Email:</h6><h6  style={{color:"green"}}>
              {/* {localStorage.getItem('email')} */}
              {posts.email}

              </h6>
            </div>

           
   

    </div>
    </div>

    </div>
      </div>

      </div>



    <div class="col rowC ml-12">


 <div style={{backgroundColor:"rgb(81, 170, 21);"}}>

<div className='card2'>
<img src='https://cdn-icons-png.flaticon.com/512/992/992490.png' alt="Contact"
 />
 <br/>
<h2 > Hello.. <b>
   {val} 
   </b></h2>
<br/>
<button className="btn btn-primary mr-2" data-bs-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" onClick={()=>{getUsers(val)}}>View Profile</button>
<button className="btn btn-secondary" data-bs-toggle="collapse" href="#multiCollapseExample4" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" > Edit Profile</button>


</div>
 </div>
 </div>

 
    <div class="col rowC ml-14">
    <div class="collapse multi-collapse" id="multiCollapseExample4">
      
    <div className="container my-5 collaps multi-collapse" id="multiCollapseExample" >
        <div className='card text-center my-5' style={{backgroundColor:"white",paddingBottom:"20px"}}>
        <div className='card-body' style={{width:"320px"}}>
            <h3 className='mb-5'><b>Edit Profile</b></h3>
            <div className='my-5'>
            

            <form>

                  

                     <label  className="form-label " htmlFor="form2Example22" for="validationServer01" style={{paddingRight:"290px"}}>Username</label>
                     <div className="form-outline mb-2">
                      
                      <input type="text" placeholder="Enter Username" pattern="[A-Za-z]{4,12}" required className="form-control" 
                      
                      id="name validationServer01" name="username"  />
                      
                    </div>
                    
                  <label className="form-label mb-1" htmlFor="form2Example11" style={{paddingRight:"185px"}}>Email address</label>
                    <div className="form-outline mb-2">
                      
                      <input type="email"  className="form-control" required placeholder="Enter email address" 
                      
                      id="email"  name="email"  
                      
                      />
                      
                    </div>
                    

                    <label  className="form-label mb-1" htmlFor="form2Example22" style={{paddingRight:"290px"}}>Password</label>
                    <div className="form-outline mb-2">
                      
                      <input type="password" placeholder="Enter Password" required className="form-control" 
                      
                      id="validationPassword" minLength="6"  name="password" 
                      
                      />
                      
                      
                    </div>
  
                    <div className="text-center mb-2 pb-1">
                    
                      <button className='btn btn-secondary mx-3' type="submit">Update</button>
                        
                     </div> 

                  </form>

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









</>
 
)
}


export default Profile;