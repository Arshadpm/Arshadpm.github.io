import React from 'react'
import {Carousel} from 'react-bootstrap/';
import img5 from "./m2.jpg";
// import img2 from "./mobile1.jpeg";
import img4 from "./m4.jpg";
import img3 from "./m3.jpg";
import imga from "./blueb.jpeg";
import aa from "./a1.jpg"
import Cardproducts from './Cardproducts.js';

const Carosel = () => {
  return (
    <div>

    <Carousel>
      <Carousel.Item>
      <div>

      
        <img
          className="d-block w-100"
          src={imga}
          // alt="First slide"
          style={{height:"600px", width:"100%" }}/>

        <Carousel.Caption class="carousel-caption text-center"  
        
        style={{backgroundcolor:"yellow",
                // width:"500px",
                padding: "100px",
                border: "0px solid black",
                marginRight:"100px"}}>
        
        <h3 style={{paddingTop:"20px",paddingBottom:"20px",paddingLeft:"20px",paddingRight:"20px"}} class="display-5">Welcome to <small class="text-muted display-4">WebCart</small> Store!..</h3>
    
    <div  >
<p className="display-6">Online Shopping Cart Solution to buy accessories</p>

</div>


        </Carousel.Caption>


        </div>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={img5}
          
          style={{height:"600px", width:"100%" }}
        />

        
      </Carousel.Item> */}
      <Carousel.Item>
        <img className="d-block w-100" src={aa} style={{height:"600px", width:"100%" }}/>

<Carousel.Caption className="carousel-caption text-center"  
        
        style={{backgroundcolor:"yellow",
                // width:"500px",
                padding: "100px",
                border: "0px solid black",
                marginRight:"100px"}}>
        
        <h3 style={{paddingTop:"20px",paddingBottom:"40px",paddingLeft:"20px",paddingRight:"40px"}} class="display-5">Welcome to <small class="text-muted display-4">WebCart</small> Store!..</h3>
    
    <div style={{paddingTop:"10px",paddingBottom:"40px",paddingLeft:"20px",paddingRight:"110px"}} >
<p  className="display-6 mr-6">Let's begin the journey with WebCart</p>

</div>


        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    

    </div>
  )
}

export default Carosel