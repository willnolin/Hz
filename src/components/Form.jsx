import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom' 
import { setHighScore, getAllHighScores } from '../services/api.js'


export default function Form(props) {
  // const scoreRef = useRef(null)
  const { score, scores, setScores, show, clicked } = props;

  const formObj = {
    user : "",
    score : "",

  }
  const [input, setInput]= useState(formObj);
  const [highScoreMessage, setHighScoreMessage] = useState("Congrats")
  const history = useHistory("")

  // get high scores  from API
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
  
  // useEffect(() => {
    
  //   if (scores && score > scores[0].fields.score) {
  //     setHighScoreMessage("New High Score!")
     
  //   } else {
  //     setHighScoreMessage("Congrats")
     
  //   }
  // }, [])

  // const [show, setShow] = useState("none")
  const handleChange = async (e) => {
    const {name, value} = e.target;
    
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
      score: `${props.score}`,
    }))
  }
  
  const handleSubmit = async (e) => { 
    e.preventDefault()
    await setHighScore(input);
    setInput({})
    history.push("/")
  }


  return (
    <> 
      <div className="modal" style={{ display: show }}>
        <div className="form">
            <div><p>{highScoreMessage}</p></div>
          <form onSubmit={handleSubmit} onChange={handleChange}>
            <label>Enter your name:</label>
            <input type="text" name = "user" id="user" />
            <br/>
            <button>submit</button>
          </form>
        </div>
      </div>
    </>
  )

}
