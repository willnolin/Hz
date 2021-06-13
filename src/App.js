import './App.css';
import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Header from './components/Header'
import DisplayScores from './components/DisplayScores';
import Footer from './components/Footer'
import Canvas from './components/Canvas';
import knob from "./images/knob.png"
import fader from "./images/fader.png"

function App() {
  const [scores, setScores] = useState([]);
  
  const draw = (ctx, frameCount) => {
    
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(150, 100, 20*(Math.sin(frameCount*0.05)**2), 0, 2*Math.PI);
    ctx.fill()
  }

//DOM rendering 
  return (
    <div className="App metal">
      
      <Header />
      
      <div className="main-container">
        <img className="knob" src={knob} alt="knob1"></img>
      <Switch>
        <Route path="/quiz">
          <Quiz scores={scores} setScores={setScores} />
        </Route>
        <Route path="/scores">
          <DisplayScores scores={scores} setScores={setScores}/>
          </Route>
          {/* <Canvas draw={draw}/> */}
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
        <img className="fader" src={fader} alt="fader1"></img>
      </div>
      
      <Footer />
    
    </div>
  );
}

export default App;