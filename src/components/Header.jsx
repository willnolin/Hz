import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div className="header">
      <Link className="scores-link" to="/scores">
        <h3>high scores</h3>
      </Link>
      <h1 className="app-title">Hz</h1>
      <Link className="scores-link" to="/quiz">
        <h3>start quiz</h3>
      </Link>
    </div>
  )
}
