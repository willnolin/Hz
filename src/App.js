import './App.css';
import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Header from './components/Header'
import DisplayScores from './components/DisplayScores';
import Footer from './components/Footer'


function App() {
  const [scores, setScores] = useState([]);
  const [activeGame, setActiveGame] = useState(false);
  const [show, setShow] = useState("none");
  const [scoreCount, setScoreCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  

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
  
      <Switch>
        <Route exact path="/">
            <Home
              setActiveGame = {setActiveGame}
              scoreCount={scoreCount}
              setScoreCount={setScoreCount}
              wrongCount={wrongCount}
              setWrongCount={setWrongCount}
            />
        </Route>
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
       
      </Switch>
       
      </div>
      
      <Footer />
    
    </div>
  );
}

export default App;