import {useState, useEffect} from 'react'

import { getAllHighScores } from '../services/api.js'

export default function DisplayScores() {
  const [scores, setScores] = useState([])
 // get high scores from API
  useEffect(()=> {
    const fetchData = async () => {
      const res = await getAllHighScores();  
      const data = res.records;
      // sort Scores in descending order and set state
      setScores(sortScores(data));
    } 
   fetchData()
  }, []);

  const sortScores = (array)=> {
    return (array.sort((a,b) =>  b.fields.score-a.fields.score ))
  }

  return (
    <>
    <div className="scores-list"> 
      
      {scores.map((entry, index) => {
        return <div className = "score-entry" key={index}>
          <h4 className= "scores-field">{entry.fields.user}</h4>
          <h5 className= "scores-field">{`${entry.fields.score} pts`}</h5>
        <h5 className= "scores-field">{entry.createdTime.slice(0,10)}</h5> </div>
      })}
    </div>
    </>
  )
}