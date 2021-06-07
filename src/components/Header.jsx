import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div className="header">
      <Link to="/scores">
        <h3>high scores</h3>
      </Link>
      <h1>Hz</h1>
      <Link to="/quiz">
        <h3>start quiz</h3>
      </Link>
    </div>
  )
}
