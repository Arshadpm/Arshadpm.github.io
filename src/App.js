
// import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import Navbar1 from './Components/Navbar1.js';
// import Home from './Components/Home';
// import Mainrouter from './Components/Mainrouter';

// function App() {
  
//   return (
//     <div className="App">
      
//       <Navbar1 /> 
     
//       <Mainrouter/>
      
      
//     </div>
//   );
// }

// export default App;



import './App.css';
import React, {createContext,useReducer} from 'react';
import { initialState, reducer } from "./Components/Usereducer";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar1 from './Components/Navbar1.js';

import Mainrouter from './Components/Mainrouter';


export const UserContext = createContext(); 

function App(){


  const [state, dispatch] = useReducer(reducer, initialState);

  
return (

  <div className='App'>
  
  <UserContext.Provider value = {{state, dispatch}}>
    

<Navbar1 /> 
     
<Mainrouter/>

</UserContext.Provider>

</div>
    
)
}
export default App;
