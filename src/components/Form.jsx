import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom' 
import { setHighScore, getAllHighScores } from '../services/api.js'


export default function Form(props) {
  // const scoreRef = useRef(null)
  const { score, scores, setScores, show } = props;

  const formObj = {
    user : "",
    score : "",

  }
  const [input, setInput]= useState(formObj);
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
    // eslint-disable-next-line
  }, []);
  
  const sortScores = (array)=> {
    return array.sort((a, b) => b.fields.score - a.fields.score)
  }
    
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
    history.push("/scores/")
  }


  return (
    <> 
      <div className="modal" style={{ display: show }}>
        <div className="form">
          {/* {console.log(score > parseInt(scores[0].fields.score))} */}
          <form onSubmit={handleSubmit} onChange={handleChange}>
          <p>{score > parseInt(scores[0]?.fields.score) ? "High score!" : "congrats!"}</p>
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
