import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import {UsingAos, About} from './UsingAos/Aos';
import About from './UsingAos/Aos';
import {useSpring, animated} from 'react-spring'
import Typewriter from 'typewriter-effect';
import ButtonAppBar from './AppBar';
import About2 from './UsingAos/Aos2'
// import Chart from './UsingAos/Chart';
function App() {
  return (
    <div className="App">
      <ButtonAppBar></ButtonAppBar>
      
 
 {/* <Typewriter
   options={{
     strings: ['Hello World'],
     autoStart: true,
     loop: true,
   }}
 /> */}
    
      
      <About/>

      <About2></About2>

      {/* <Chart></Chart> */}

    </div>
  );
}

export default App;
