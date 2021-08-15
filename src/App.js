import './App.css';
import { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Header from './components/Header'
import DisplayScores from './components/DisplayScores';
import Footer from './components/Footer'


function App() {
  const [scores, setScores] = useState([]);
  const [activeGame, setActiveGame] = useState(localStorage.getItem('activeGameStorage'));
  const [show, setShow] = useState("none");
  const [scoreCount, setScoreCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const history = useHistory()

  useEffect(() => {
    setActiveGame(false);
    history.push("/")
  }, [])

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
        <Route exact path="/quiz">
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