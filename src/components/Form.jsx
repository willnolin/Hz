import { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'

import { setHighScore } from '../services/api.js'


export default function Form(props) {
  // const scoreRef = useRef(null)
  const formObj = {
    user : "",
    score : "",

  }
  const [input, setInput]= useState(formObj);
  
  const history = useHistory("")

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
      <div className="modal" style={{ display: props.show }}>
        <div className="form">
          <form onSubmit={handleSubmit} onChange={handleChange}>
            <p>New High Score!</p>
            <label>Enter your name:</label>
            <input type="text" name = "user" id="user" />
            <br/>
            <label></label>
            <input type="hidden" name="score" id="score" />
            <br />
            <button>submit</button>
          </form>
        </div>
      </div>
    </>
  )

}
