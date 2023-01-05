import React from 'react'
import Carosel2 from "./Carosel2.js";
import Carosel3 from "./Carosel3.js";
import Footer from "./Footer"
import "./Menu.css"

const Menu = () => {

    
  return (
    <div>

<div className="pt-1 pb-1 m-0 mb-0">
    <h5><b>Smartphones & Computers</b></h5>
    <Carosel2/>
    </div>
<div></div>
    <div className="pt-1 pb-3 mt-1" >
    <h5><b>Perfumes & Shoes</b></h5>
    <Carosel3/>
    </div>

<div>
    <Footer/>
</div>
    </div>
  )
}

export default Menu;




