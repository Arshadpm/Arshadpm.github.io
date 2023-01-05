import React from "react";
import './Footer.css';


const Footer = () => (
  
    <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 			
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="#">Smartphones</a></li>
  	 				<li><a href="#">Shoes</a></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col social-buttons">
  	 			<h4>follow us</h4>
  	 			
				
				<div className="social-links">
				<img  src="https://cdn-icons-png.flaticon.com/512/2673/2673883.png" class="me-4 text-reset img5"/>
        		<img  src="https://cdn-icons-png.flaticon.com/512/2673/2673860.png" class="me-4 text-reset img5"/>      
        		<img  src="https://cdn-icons-png.flaticon.com/512/2673/2673703.png" class="me-4 text-reset img5"/>       
        		<img  src="https://cdn-icons-png.flaticon.com/512/2673/2673726.png" class="me-4 text-reset img5"/>
  	 				{/* <a href="#"><i className="fa fa-facebook"></i></a>
  	 				<a href="#"><i className="fa fa-twitter"></i></a>
  	 				<a href="#"><i className="fa fa-instagram"></i></a>
  	 				<a href="#"><i className="fa fa-linkedin-in"></i></a> */}
  	 			</div>
  	 		</div>
  	 	</div>
		   <br/>
		   
		   <div class="row" style={{color:"#FFFF"}}>
		   <p style={{textAlign:"center"}}>© 2022 Copyright : Webcart</p>
			</div>

  	 </div>
  </footer>

);

export default Footer;