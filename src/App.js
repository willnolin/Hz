import './App.css';
import { useState } from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Form from './components/Form'
import Header from './components/Header'
import DisplayScores from './components/DisplayScores';

function App() {
  const [scores, setScores] = useState([])

//DOM rendering 
  return (
    <div className="App metal">
      
      <Header />
      <div className="main-container">
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/quiz">
        <Quiz scores={scores} setScores={setScores} />
      </Route>
      <Route path="/scores">
        <DisplayScores scores={scores} setScores={setScores}/>
        </Route>
        </div>
    </div>
  );
}

export default App;