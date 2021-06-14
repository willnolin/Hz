import { useEffect } from 'react'

import { Link } from 'react-router-dom'

function Home(props) {
  const {
    setActiveGame,
    scoreCount,
    setScoreCount,
    wrongCount,
    setWrongCount,
  } = props;
  
  useEffect(() => {
    localStorage.setItem('scoreStorage', scoreCount)
    localStorage.setItem('wrongCountStorage', wrongCount)
  }, [scoreCount, wrongCount])
  
  const newGame = () => {
    localStorage.clear()
    setScoreCount(0)
    setWrongCount(0)
    setActiveGame(true)
  }
  
  return (
    <div className="home-container">
      <h1 className = "welcome">Welcome to Hz!</h1>
      <Link to="/quiz">
        <button className = "home-btns" onClick={newGame}>NEW GAME</button>
      </Link>
      
      <Link to="/quiz">
        <button className = "home-btns" >RESUME GAME</button>
      </Link>


    </div>
  )
}

export default Home;
