import { Link } from 'react-router-dom'
import screw from '../images/screw.png';

export default function Header() {
  return (
    <div className="header-container">
      <img src={screw} alt="screw" className="screw"></img>
      {/* <div className = "inner-header"> */}
      <div className = "nav-bar metal" >
        <Link className="scores-link" to="/scores">
          <h3>high scores</h3>
        </Link> 
        <Link className="scores-link" to="/quiz">
          <h3>start quiz</h3>
        </Link>
      {/* </div> */}
      </div>
      <div className = "app-title">  
        <h1>Hz</h1>
      </div>
      <img src={screw} alt="screw" className="screw left"></img>
    </div>
  )
}
