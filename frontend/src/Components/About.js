import React from 'react'
import "./About.css"
import ab1 from "./aboutpic.jpeg"

const About = () => {
  return (
    <div>

<div id="top"> <img src={ab1} style={{width:"100%", height:"500px"}}/></div>

<div id="bottom" style={{width:"100%", height:"350px"}}>
<h1>ABOUT</h1>

<p className="fs-4 font-weight-light align-items-sm-center">Webcart means a combination of different shopping stores with multi-vendor. And The multi-vendor shopping cart allows shop merchants to easily manage their multiple vendors in one single admin panel. Using of Multi-vendors shopping cart shopkeeper or merchants work manage easily. Instead of logging into several accounts in order to manage all of your stores, you can just log in to one account and set anything you want for each of your stores in the administrative area.

Create an infinite range of online stores, share a shopping cart between multiple stores. “Webcart” is the entire solution for eCommerce business management. it’s all in one package for website management with backend admin panel to manage inventory, order, product, invoicing on.</p>


</div>

     
</div>

    
  )
}

export default About
