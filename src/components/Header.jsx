import { Link } from 'react-router-dom'
import screw from '../images/screw.png';

export default function Header() {
  return (
    <div className="header-container">
      <img src={screw} alt="screw" className="screw"></img>
     
      <div className = "nav-bar" >
        <Link to="/scores">
          <h3 className= "scores-link">high scores</h3>
        </Link> 
        <Link to="/quiz">
          <h3 className="scores-link" >start quiz</h3>
        </Link>
     
      </div>
      <div className = "app-title">  
        <h1>Hz</h1>
      </div>
      <img src={screw} alt="screw" className="screw left"></img>
    </div>
  )
}
