import { Link } from 'react-router-dom'
import screw from '../images/screw.png';

export default function Header(props) {
  const { activeGame, setActiveGame, setScoreCount, setWrongCount } = props;
  
  const newGame = () => {
    localStorage.clear()
    setScoreCount(0)
    setWrongCount(0)
    setActiveGame(true)
  }
  
  return (
    <div className="header-container">
      <img src={screw} alt="screw" className="screw"></img>
     
      <div className = "nav-bar" >
        <Link className="nav-link" to="/quiz">
          {activeGame ? <h3>RESUME GAME</h3> : <h3 onClick={newGame}>NEW GAME</h3>}
        </Link>
        <Link className= "nav-link" to="/scores">
          <h3 >HIGH SCORES</h3>
        </Link> 
     
      </div>
      <Link className = "app-title" to="/">  
        <h1>Hz</h1>
      </Link>
      <img src={screw} alt="screw" className="screw left"></img>
    </div>
  )
}
