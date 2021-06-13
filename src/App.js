import './App.css';
import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Header from './components/Header'
import DisplayScores from './components/DisplayScores';
import Footer from './components/Footer'
import Canvas from './components/Canvas';
// import knob from "./images/knob.png"
// import fader from "./images/fader.png"

function App() {
  const [scores, setScores] = useState([]);
  const [activeGame, setActiveGame] = useState(false);
  const [show, setShow] = useState("none");
  const [scoreCount, setScoreCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  
  const draw = (ctx, frameCount) => {
    
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(150, 100, 20*(Math.sin(frameCount*0.05)**2), 0, 2*Math.PI);
    ctx.fill()
  }
  



//DOM rendering 
  return (
    <div className="App metal">
      
      <Header
        activeGame={activeGame}
        setActiveGame = {setActiveGame}
        setScoreCount={setScoreCount}
        setWrongCount={setWrongCount}
      />
      
      <div className="main-container">
        {/* <img className="knob" src={knob} alt="knob1"></img> */}
      {/* <Canvas draw={draw} /> */}
      <Switch>
        <Route path="/quiz">
            <Quiz
              setActiveGame = {setActiveGame}
              scores={scores}
              setScores={setScores}
              scoreCount={scoreCount}
              setScoreCount={setScoreCount}
              wrongCount={wrongCount}
              setWrongCount={setWrongCount}
              show={show}
              setShow={setShow}
            />
        </Route>
        <Route path="/scores">
          <DisplayScores scores={scores} setScores={setScores}/>
          </Route>
       
        <Route exact path="/">
            <Home
              activeGame={activeGame}
              setActiveGame = {setActiveGame}
              scoreCount={scoreCount}
              setScoreCount={setScoreCount}
              wrongCount={wrongCount}
              setWrongCount={setWrongCount}
            />
        </Route>
      </Switch>
       
      </div>
      
      <Footer />
    
    </div>
  );
}

export default App;