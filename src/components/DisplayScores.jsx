import {useState, useEffect} from 'react'

import { getAllHighScores } from '../services/api.js'

export default function DisplayScores() {
  const [scores, setScores] = useState([])

  useEffect(()=> {
    const fetchData = async () => {
      const res = await getAllHighScores();
      
      const data = res.records;
      
      setScores(data);
    } 
   fetchData()
  }, []);

  return (
    <>
    <div className="score-display"> 
      {scores.map((entry, index) => {
        return <div key={index}>
          <h1>{entry.fields.user}</h1> 
        <h2>{entry.fields.score}</h2> 
        <h2>{entry.fields.date}</h2> </div>
      })}
    </div>
    </>
  )
}