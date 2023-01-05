import React from 'react'
import {Carousel} from 'react-bootstrap/';
import p1 from "./p1.jpeg";
import p2 from "./p2.jpeg";
import p3 from "./p3.jpeg";
import p4 from "./p4.jpeg";
import p5 from "./p5.jpeg";
// import imgl2 from "./laptop2.jpeg";
// import imgc from "./Camera1.jpeg";
// import imgm1 from "./mobile3.jpeg";
// import imgm2 from "./mobile4.jpeg";
// import imgm3 from "./mobile7.jpeg";
// import Cardproducts from './Cardproducts.js';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Carosel2 = () => {
  return (
    <div >

    <Carousel>
      <Carousel.Item>
        <div class="row pb-0 mb-0">
          <div class="col h-4">
          <div 
          // style={{paddingBottom:"8rem"}} 
          // class="m-1"
          >
 
 <Card border="light shadow">
  <Card.Img variant="top" src={p1} alt="image"
  // class="card-img-top" 
  
  />
  <Card.Body >
    <Card.Title>Jasmine</Card.Title>
    <Card.Text >
    <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.6500/-</h5>
          <h6 style={{ color:'#638dc4',fontSize: '18px'}}>₹.<small>56/-</small></h6>
      {/* <b style={{ color:'',fontSize: '18px'}}>$56/-</b> */}
    </Card.Text> 
    <Button variant="primary btn-sm">Order Now</Button>
  </Card.Body>
</Card>

</div>
        </div>
        
        <div class="col h-4">
        <div 
        // style={{paddingBottom:"8rem"}} class="m-1"
        >
 
 <Card border="light shadow">
  <Card.Img variant="top" src={p2} alt="image"
  // class="card-img-top"
  />
  <Card.Body>
    <Card.Title>Shoes</Card.Title>
    <Card.Text>
    <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.4599/-</h5>
      <h6 style={{ color:'#638dc4',fontSize: '18px'}}>₹.<small>566/-</small></h6>
    </Card.Text> 
    <Button variant="primary btn-sm">Order Now</Button>
  </Card.Body>
</Card>

</div>
        </div>
        
        
        <div class="col h-4">
        <div 
        // style={{paddingBottom:"8rem"}} class="m-1"
        >
 
 <Card border="light shadow" >
  <Card.Img variant="top" src={p3} alt="image"
  // class="card-img-top"
  />
  <Card.Body>
    <Card.Title>shoes</Card.Title>
    <Card.Text>
    <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.3580/-</h5>
      <h6 style={{ color:'#638dc4',fontSize: '18px'}}>₹.<small>46/-</small></h6>
    </Card.Text> 
    <Button variant="primary btn-sm">Order Now</Button>
  </Card.Body>
</Card>

</div>
        </div>
        
        
        <div class="col h-4">
        <div 
        // style={{paddingBottom:"8rem"}} class="m-1"
        >
 
 <Card border="light shadow" >
  <Card.Img variant="top" src={p4} alt="image"
  // class="card-img-top"
  />
  <Card.Body>
    <Card.Title>Atar</Card.Title>
    <Card.Text>
    <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.3000/-</h5>
      <h6 style={{ color:'#638dc4',fontSize: '18px'}}>₹.<small>60/-</small></h6>
    </Card.Text> 
    <Button variant="primary btn-sm">Order Now</Button>
  </Card.Body>
</Card>

</div>
        </div>
        
        <div class="col h-4">
        <div 
        // style={{paddingBottom:"8rem"}} class="m-1"
        >
 
 <Card border="light shadow" >
  <Card.Img variant="top" src={p5} alt="image"
  // class="card-img-top"
  />
  <Card.Body>
    <Card.Title>Spray</Card.Title>
    <Card.Text>
    <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.5600/-</h5>
      <h6 style={{ color:'#638dc4',fontSize: '18px'}}>₹.<small>76/-</small></h6>
    </Card.Text> 
    <Button variant="primary btn-sm">Order Now</Button>
  </Card.Body>
</Card>

</div>
        </div>
        
        
        <div class="col h-4">
        <div 
        // style={{paddingBottom:"8rem"}} class="m-1"
        >
 
 <Card border="light shadow" >
  <Card.Img variant="top" src={p1} alt="image"
  // class="card-img-top"
  />
  <Card.Body>
    <Card.Title>Spray</Card.Title>
    <Card.Text>
    <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.7500/-</h5>
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
      
      <div class="row" >
        <div class="col h-4">
        <div 
        // style={{paddingBottom:"8rem"}} class="m-1"
        >
 
 <Card border="light shadow" >
  <Card.Img variant="top" src={p2} alt="image"
  // class="card-img-top"
  />
  <Card.Body>
    <Card.Title>shoes</Card.Title>
    <Card.Text>
    <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.6000/-</h5>
      <h6 style={{ color:'#638dc4',fontSize: '18px'}}>₹.<small>26/-</small></h6>
    </Card.Text> 
    <Button variant="primary btn-sm">Order Now</Button>
  </Card.Body>
</Card>

</div>
        </div>
        <div class="col">
        <div 
        // style={{paddingBottom:"8rem"}} class="m-1"
        >
 
 <Card border="light shadow" >
  <Card.Img variant="top" src={p3} alt="image"
  // class="card-img-top"
  />
  <Card.Body>
    <Card.Title>Shoes</Card.Title>
    <Card.Text>
    <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.4500/-</h5>
      <h6 style={{ color:'#638dc4',fontSize: '18px'}}>₹.<small>16/-</small></h6>
    </Card.Text> 
    <Button variant="primary btn-sm">Order Now</Button>
  </Card.Body>
</Card>

</div>
        </div>
        <div class="col h-4">
        <div 
        // style={{paddingBottom:"8rem"}} class="m-1"
        >
 
 <Card border="light shadow" >
  <Card.Img variant="top" src={p4} alt="image"
  // class="card-img-top"
  />
  <Card.Body>
    <Card.Title>Spray</Card.Title>
    <Card.Text>
    <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.2000/-</h5>
      <h6 style={{ color:'#638dc4',fontSize: '18px'}}>₹.<small>76/-</small></h6>
    </Card.Text> 
    <Button variant="primary btn-sm">Order Now</Button>
  </Card.Body>
</Card>

</div>
        </div>
        <div class="col h-4">
        <div 
        // style={{paddingBottom:"8rem"}} class="m-1"
        >
 
 <Card border="light shadow" >
  <Card.Img variant="top" src={p5} alt="image"
  // class="card-img-top"
  />
  <Card.Body>
    <Card.Title>Spray</Card.Title>
    <Card.Text>
    <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.1000/-</h5>
      <h6 style={{ color:'#638dc4',fontSize: '18px'}}>₹.<small>86/-</small></h6>
    </Card.Text> 
    <Button variant="primary btn-sm">Order Now</Button>
  </Card.Body>
</Card>

</div>
        </div>
        <div class="col">
        <div 
        // style={{paddingBottom:"8rem"}} class="m-1"
        >
 
 <Card border="light shadow" >
  <Card.Img variant="top" src={p1} alt="image"
  // class="card-img-top"
  />
  <Card.Body>
    <Card.Title>Spray</Card.Title>
    <Card.Text>
    <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.3300/-</h5>
      <h6 style={{ color:'#638dc4',fontSize: '18px'}}>₹.<small>16/-</small></h6>
    </Card.Text> 
    <Button variant="primary btn-sm">Order Now</Button>
  </Card.Body>
</Card>

</div>
        </div>
        <div class="col h-4">
        <div 
        // style={{paddingBottom:"8rem"}} class="m-1"
        >
 
 <Card border="light shadow" >
  <Card.Img variant="top" src={p2} alt="image"
  // class="card-img-top"
  />
  <Card.Body>
    <Card.Title>Shoes</Card.Title>
    <Card.Text>
      <h5 style={{textDecoration:'line-through',color:'#bd6989'}}>₹.400/-</h5>
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