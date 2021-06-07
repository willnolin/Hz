import {useState} from 'react'
import { setHighScore} from '../services/api.js'

export default function Form(props) {
  const formObj = {
    user : "",
    score : "",
    date : "",

  }
 
  const [input, setInput]= useState(formObj);

  const handleChange = async (e) => {
    const {name, value} = e.target;
    
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    await setHighScore(input);
    setInput({})
  }
  
  return (
    <> 
    <div className="App">
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <label>Enter user:</label>
      <input type="text" name = "user" id="user" />
      <br/>
      <label>Enter score:</label>
      <input type="text" name = "score" id="score" />
      <br/>
      <label>Date:</label>
      <input type="date" name = "date" id="date" />
      <br/>
      <button>submit</button>
    </form>
    </div>
    </>
  )

}
