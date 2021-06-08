import {useState, useEffect} from 'react'

import { getAllHighScores } from '../services/api.js'

export default function DisplayScores() {
  const [scores, setScores] = useState([])

  useEffect(()=> {
    const fetchData = async () => {
      const res = await getAllHighScores();
      
      const data = res.records;
      console.log(data)
      setScores(data);
    } 
   fetchData()
  }, []);

  const sortScores = (array)=> {
    
  }

  return (
    <>
    <div className="scores-list"> 
      {scores.map((entry, index) => {
        return <div className = "score-entry" key={index}>
          <h4>{entry.fields.user}</h4>
          <h5>{`${entry.fields.score} pts`}</h5>
        <h5>{entry.createdTime.slice(0,10)}</h5> </div>
      })}
    </div>
    </>
  )
}