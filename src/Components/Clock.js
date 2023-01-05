import { useEffect, useState } from "react";
// import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import "./Clock.css"

const getMinuteAndSeconds = (counter) => {
  let hour = `0${Math.floor(counter / 3600)}`.slice(-2) || "00";
  counter = counter % 3600;
  let minute = `0${Math.floor(counter / 60)}`.slice(-2) || "00";
  let sec = `0${counter % 60}`.slice(-2);
  return `${hour} : ${minute} : ${sec}`;
};

export default function Clock() {
  let d = new Date();
  let cur_Sec = d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
  const [counter, setCounter] = useState(cur_Sec);

  useEffect(() => {
    let timer = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="Clock">
      <br/>
      <br/>
      <h3><strong>The Time is </strong></h3>
      <br/>
      <br/>
      <p> <h2>{getMinuteAndSeconds(counter)} </h2></p>
      <br/>
      
      <br />
      <br/>
      {/* <ButtonToolbar aria-label="Toolbar with button groups" className="b1">
      <ButtonGroup className="me-2" aria-label="First group">
      <Button href="Hello">1</Button> 
      <Button href="Cards">2</Button>
      <Button href="TodoList">3</Button> 
      <Button href="Calculator">4</Button>
      <Button href="Calender">5</Button>
      <Button href="Timer">6</Button>
      <Button href="ChatBot">7</Button>
      <Button href="Drag">8</Button>{' '}{' '}
      </ButtonGroup>
     </ButtonToolbar> */}
      </div>


  );
}