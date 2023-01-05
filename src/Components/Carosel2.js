import React from 'react'
import {Carousel} from 'react-bootstrap/';
import img5 from "./m2.jpg";
import img3 from "./m3.jpg";
import img4 from "./m4.jpg";
import img2 from "./mobile1.jpeg";
import imgl1 from "./laptop.jpeg";
import imgl2 from "./laptop2.jpeg";
import imgc from "./Camera1.jpeg";
import imgm1 from "./mobile2.jpeg";
import imgm2 from "./mobile4.jpeg";
import imgm3 from "./mobile7.jpeg";
// import Cardproducts from './Cardproducts.js';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Carosel2 = () => {
  return (
    <div >

    <Carousel>
      <Carousel.Item>
        <div className="row">
          <div className="col mb-0">
          <div style={{paddingBottom:"1rem"}}>
 
 <Card border="light shadow">
  <Card.Img variant="top" src={img2} alt="image"
  // class="card-img-top" 
  
  />
  <Card.Body >
    <Card.Title>Apple i12</Card.Title>
    <Card.Text >
    <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.500/-</h5>
          <h6 style={{ color:'#638dc4',fontSize: '18px'}}>₹.<small>56/-</small></h6>
      {/* <b style={{ color:'',fontSize: '18px'}}>$56/-</b> */}
    </Card.Text> 
    <Button variant="primary btn-sm">Order Now</Button>
  </Card.Body>
</Card>

</div>
        </div>
        
        <div className="col">
        <div style={{paddingBottom:"1rem"}} >
 
 <Card border="light shadow">
  <Card.Img variant="top" src={imgl1} alt="image"
  // class="card-img-top"
  />
  <Card.Body>
    <Card.Title>HP i5</Card.Title>
    <Card.Text>
    <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.600/-</h5>
      <h6 style={{ color:'#638dc4',fontSize: '18px'}}>₹.<small>566/-</small></h6>
    </Card.Text> 
    <Button variant="primary btn-sm">Order Now</Button>
  </Card.Body>
</Card>

</div>
        </div>
        
        
        <div className="col">
        <div style={{paddingBottom:"1rem"}} >
 
 <Card border="light shadow" >
  <Card.Img variant="top" src={imgm1} alt="image"
  // class="card-img-top"
  />
  <Card.Body>
    <Card.Title>OPPO 12</Card.Title>
    <Card.Text>
    <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.4400/-</h5>
      <h6 style={{ color:'#638dc4',fontSize: '18px'}}>₹.<small>46/-</small></h6>
    </Card.Text> 
    <Button variant="primary btn-sm">Order Now</Button>
  </Card.Body>
</Card>

</div>
        </div>
        
        
        <div class="col">
        <div style={{paddingBottom:"1rem"}} >
 
 <Card border="light shadow" >
  <Card.Img variant="top" src={imgl2} alt="image"
  // class="card-img-top"
  />
  <Card.Body>
    <Card.Title>Acer i3</Card.Title>
    <Card.Text>
    <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.1500/-</h5>
      <h6 style={{ color:'#638dc4',fontSize: '18px'}}>₹.<small>60/-</small></h6>
    </Card.Text> 
    <Button variant="primary btn-sm">Order Now</Button>
  </Card.Body>
</Card>

</div>
        </div>
        
        <div class="col">
        <div style={{paddingBottom:"1rem"}} >
 
 <Card border="light shadow" >
  <Card.Img variant="top" src={img2} alt="image"
  // class="card-img-top"
  />
  <Card.Body>
    <Card.Title>Apple i10</Card.Title>
    <Card.Text>
    <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.2500/-</h5>
      <h6 style={{ color:'#638dc4',fontSize: '18px'}}>₹.<small>76/-</small></h6>
    </Card.Text> 
    <Button variant="primary btn-sm">Order Now</Button>
  </Card.Body>
</Card>

</div>
        </div>
        
        
        <div className="col">
        <div style={{paddingBottom:"1rem"}} >
 
 <Card border="light shadow" >
  <Card.Img variant="top" src={imgm3} alt="image"
  // class="card-img-top"
  />
  <Card.Body>
    <Card.Title>Vivo 11pro</Card.Title>
    <Card.Text>
    <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.300/-</h5>
      <h6 style={{ color:'#638dc4',fontSize: '18px'}}>₹.<small>66/-</small></h6>
    </Card.Text> 
    <Button variant="primary btn-sm">Order Now</Button>
  </Card.Body>
</Card>

</div>
        </div>
        
        </div>
          </Carousel.Item>
      <Carousel.Item>
      
      <div class="row">
        <div class="col">
        <div style={{paddingBottom:"1rem"}} >
 
 <Card border="light shadow" >
  <Card.Img variant="top" src={imgm2} alt="image"
  // class="card-img-top"
  />
  <Card.Body>
    <Card.Title>Nokia 12</Card.Title>
    <Card.Text>
    <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.1100/-</h5>
      <h6 style={{ color:'#638dc4',fontSize: '18px'}}>₹.<small>26/-</small></h6>
    </Card.Text> 
    <Button variant="primary btn-sm">Order Now</Button>
  </Card.Body>
</Card>

</div>
        </div>
        <div class="col">
        <div style={{paddingBottom:"1rem"}} >
 
 <Card border="light shadow" >
  <Card.Img variant="top" src={imgm3} alt="image"
  // class="card-img-top"
  />
  <Card.Body>
    <Card.Title>Samsung 10</Card.Title>
    <Card.Text>
    <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.4400/-</h5>
      <h6 style={{ color:'#638dc4',fontSize: '18px'}}>₹.<small>16/-</small></h6>
    </Card.Text> 
    <Button variant="primary btn-sm">Order Now</Button>
  </Card.Body>
</Card>

</div>
        </div>
        <div class="col">
        <div style={{paddingBottom:"1rem"}} >
 
 <Card border="light shadow" >
  <Card.Img variant="top" src={imgm2} alt="image"
  // class="card-img-top"
  />
  <Card.Body>
    <Card.Title>Vivo 10</Card.Title>
    <Card.Text>
    <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.6100/-</h5>
      <h6 style={{ color:'#638dc4',fontSize: '18px'}}>₹.<small>76/-</small></h6>
    </Card.Text> 
    <Button variant="primary btn-sm">Order Now</Button>
  </Card.Body>
</Card>

</div>
        </div>
        <div class="col">
        <div style={{paddingBottom:"1rem"}} >
 
 <Card border="light shadow" >
  <Card.Img variant="top" src={imgm1} alt="image"
  // class="card-img-top"
  />
  <Card.Body>
    <Card.Title>OPPO f4</Card.Title>
    <Card.Text>
    <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.3300/-</h5>
      <h6 style={{ color:'#638dc4',fontSize: '18px'}}>₹.<small>86/-</small></h6>
    </Card.Text> 
    <Button variant="primary btn-sm">Order Now</Button>
  </Card.Body>
</Card>

</div>
        </div>
        <div class="col">
        <div style={{paddingBottom:"1rem"}} >
 
 <Card border="light shadow" >
  <Card.Img variant="top" src={imgl2} alt="image"
  // class="card-img-top"
  />
  <Card.Body>
    <Card.Title>Lenovo i7</Card.Title>
    <Card.Text>
    <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.1200/-</h5>
      <h6 style={{ color:'#638dc4',fontSize: '18px'}}>₹.<small>16/-</small></h6>
    </Card.Text> 
    <Button variant="primary btn-sm">Order Now</Button>
  </Card.Body>
</Card>

</div>
        </div>
        <div class="col">
        <div style={{paddingBottom:"1rem"}} >
 
 <Card border="light shadow" >
  <Card.Img variant="top" src={imgl1} alt="image"
  // class="card-img-top"
  />
  <Card.Body>
    <Card.Title>Acer </Card.Title>
    <Card.Text>
    <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.3100/-</h5>
      <h6 style={{ color:'#638dc4',fontSize: '18px'}}>₹.<small>26/-</small></h6>
    </Card.Text> 
    <Button variant="primary btn-sm">Order Now</Button>
  </Card.Body>
</Card>

</div>
        </div>
        
      </div>
    </Carousel.Item>

      </Carousel>


    </div>
  )
}

export default Carosel2