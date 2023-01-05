import React, { useContext} from 'react';
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { UserContext} from '../App';
import logos from './cartlogo1.jpeg';

// import * as jwt_decode from 'jwt-decode';

import "./Navbar1.css";

const Navbar1 = () => {
  const { state, dispatch } = useContext(UserContext);
 


  const Logout=()=>{
    localStorage.clear();
  }
  // const RenderMenu = () => {
    if(state?.login){
      return (
        <>
         
         <nav className="navbar navbar-expand-lg shadow navcolor">

<div className="container-fluid">

<a className="navbar-brand" href="#">
  <img src={logos} width="40" height="40" class="d-inline-block align-top" alt="image"></img>
</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">


    <ul className="navbar-nav me-auto">
      <li className="nav-item">
      <NavLink className="nav-link" to="/">Home</NavLink>
        
      </li>
      <li className="nav-item">
       
        <NavLink className="nav-link" to="/about">About</NavLink>          
      </li>       
      <li className="nav-item">
        
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
     

        
        
    </ul>

    <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/">Web Cart</NavLink>

<ul className="navbar-nav navbar-right">
      <li className="nav-item">
      <NavLink className="nav-link " to="/Login"><button className='btn btn-outline-primary ms-2 px-4 rounded-pill'><i className="fa fa-sign-in me-2"></i>Login</button></NavLink>
        
        
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/Signup"><button className="btn btn-outline-danger ms-2 px-4 rounded-pill"><i className="fa fa-user-plus me-2"></i>Register</button></NavLink>         
      </li>

      </ul>

      </div> 
      </div> 
      </nav>
        </>
      )
  } else {

    if(state.role==="admin"){
    return(
      <>

<nav className="navbar navbar-expand-lg shadow navcolor">

<div className="container-fluid">

<a className="navbar-brand" href="#">
  <img src={logos} width="40" height="40" class="d-inline-block align-top" alt="image"></img>
</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
       
<ul className="navbar-nav me-auto">
      <li className="nav-item">
      <NavLink className="nav-link" to="/">Home</NavLink>
        
      </li>
      <li className="nav-item">
       
        <NavLink className="nav-link" to="/about">About</NavLink>          
      </li>       
      <li className="nav-item">
        
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>

      <li className="nav-item">
        
        <NavLink className="nav-link" to="/Menu">Menu</NavLink>
      </li>

      <li className="nav-item">
        
        <NavLink className="nav-link" to="/profile">Profile</NavLink>
      </li>

      

      <li className="nav-item dropdown">
        
      <NavDropdown id="collasible-nav-dropdown" className="md-6" title="More"  menuVariant="light">            
            <NavDropdown.Item href="javascript:void(0)" >
              <NavLink className="nav-link" to="/timecounter">
                Time Counter
              </NavLink>
              </NavDropdown.Item>

              <NavDropdown.Item href="javascript:void(0)" >
              <NavLink className="nav-link" to="/addproducts">
                Add products
              </NavLink>
              </NavDropdown.Item>

              <NavDropdown.Item href="javascript:void(0)" >
              <NavLink className="nav-link" to="/viewproducts">
                View products
              </NavLink>
              </NavDropdown.Item>

              <NavDropdown.Item href="javascript:void(0)" >
              <NavLink className="nav-link" to="/tabs">
                Tabs
              </NavLink>
              </NavDropdown.Item>

              <NavDropdown.Item href="javascript:void(0)" >
              <NavLink className="nav-link" to="/helloworld">
                Helloworld
              </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="javascript:void(0)" >
              <NavLink className="nav-link" to="/clock">
                Clock
              </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="javascript:void(0)" >
              <NavLink className="nav-link" to="/bmi">
                BMI
              </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="javascript:void(0)" >
              <NavLink className="nav-link" to="/menu">
                Store Items
              </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="javascript:void(0)" >
              <NavLink className="nav-link" to="/counter">
                Counter
              </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="javascript:void(0)" >
              <NavLink className="nav-link" to="/weather">
                Weather
              </NavLink>
              </NavDropdown.Item>

              <NavDropdown.Item href="javascript:void(0)" >
              <NavLink className="nav-link" to="/todo">
                Todo
              </NavLink>
              </NavDropdown.Item>

              <NavDropdown.Item href="javascript:void(0)" >
            <NavLink className="nav-link" to="/viewusers">
             Viewusers
            </NavLink>
            </NavDropdown.Item>
    
      </NavDropdown>
         
     </li>

    </ul>

    <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/">Web Cart</NavLink>

<ul className="navbar-nav me-auto navbar-right">
      
      <li className="nav-item">
      <NavLink className="nav-link" to="/Logout"><button className="btn btn-outline-success" type="submit" onClick={Logout}>Logout</button></NavLink>         
      </li>

      </ul>

      </div>
  </div>
  </nav>
     
      </>
    )
  }

else{
  return(
    <>

<nav className="navbar navbar-expand-lg shadow navcolor">

<div className="container-fluid">

<a className="navbar-brand" href="#">
  <img src={logos} width="40" height="40" class="d-inline-block align-top" alt="image"></img>
</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
<ul className="navbar-nav me-auto">
    <li className="nav-item">
    <NavLink className="nav-link" to="/">Home</NavLink>
      
    </li>
    <li className="nav-item">
     
      <NavLink className="nav-link" to="/about">About</NavLink>          
    </li>       
    <li className="nav-item">
      
      <NavLink className="nav-link" to="/contact">Contact</NavLink>
    </li>

    <li className="nav-item">
      
      <NavLink className="nav-link" to="/Menu">Menu</NavLink>
    </li>

    <li className="nav-item">
      
      <NavLink className="nav-link" to="/profile">Profile</NavLink>
    </li>

    <li className="nav-item dropdown">
      
    <NavDropdown id="collasible-nav-dropdown" className="md-6" title="More"  menuVariant="light">            
          
            <NavDropdown.Item href="javascript:void(0)" >
            <NavLink className="nav-link" to="/helloworld">
              Helloworld
            </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item href="javascript:void(0)" >
            <NavLink className="nav-link" to="/clock">
              Clock
            </NavLink>
            </NavDropdown.Item>

            <NavDropdown.Item href="javascript:void(0)" >
            <NavLink className="nav-link" to="/tabs">
             Tabs
            </NavLink>
            </NavDropdown.Item>

            <NavDropdown.Item href="javascript:void(0)" >
            <NavLink className="nav-link" to="/todo">
             Todo
            </NavLink>
            </NavDropdown.Item>

            <NavDropdown.Item href="javascript:void(0)" >
            <NavLink className="nav-link" to="/viewusers">
             Viewusers
            </NavLink>
            </NavDropdown.Item>
  
    </NavDropdown>
       
   </li>

  </ul>

  <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/">Web Cart</NavLink>

<ul className="navbar-nav me-auto navbar-right">
    
    <li className="nav-item">
    <NavLink className="nav-link" to="/Logout"><button className="btn btn-outline-secondary" type="submit" onClick={Logout}>Logout</button></NavLink>         
    </li>

    </ul>


    </div>
  </div>
  </nav>
   
    </>
  )
}
}
  
// return(
//   <>
         

// <nav className="navbar navbar-expand-lg shadow navcolor">

// <div className="container-fluid">

// <a class="navbar-brand" href="#">
//   <img src={logos} width="40" height="40" class="d-inline-block align-top" alt="image"></img>
// </a>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//   <RenderMenu />
//   </div>
//   </div>
//   </nav>
//     </>
// )
}
// }
export default Navbar1;