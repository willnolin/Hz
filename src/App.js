import './App.css';
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Form from './components/Form'
import Header from './components/Header'
import DisplayScores from './components/DisplayScores';


function App() {

//DOM rendering 
  return (
    <div className="App">
      <Header />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/quiz">
        <Quiz />
      </Route>
      <Route path="/scores">
        <DisplayScores />
      </Route>
      {/* <Route path="/form">  
        <Form />
      </Route> */}
    </div>
  );
}

export default App;