import React from 'react';
import { useState } from 'react'
import PlayButton from "./PlayButton"
import ChoiceButtonList from "./ChoiceButtonList"
import Form from "./Form"

// import { useHistory } from 'react-router-dom'

import {
  mp3Array
} from '../sounds/index.js'

const Quiz = (props) => {
  const [randArr, setRandArr] = useState([...mp3Array].sort(() => Math.random() - 0.5))
  const [correctObj, setCorrectObj] = useState(null);
  const [message, setMessage] = useState("");
  const [scoreCount, setScoreCount] = useState(0);
  const [wrongCount,  setWrongCount] = useState(0)

  const [clicked, setClicked] = useState(false)
 
  const [show, setShow] = useState("none")

  return (
    <div className="gameplay-container">
      <div className="display-screen-container">
      <h4 id="score">{`${scoreCount} pts`}</h4>
        <h4 id="xxx">{[...Array(wrongCount)].map(e => 'X')}</h4> 
        <p className="result-message">{message}</p>
        <br />
        </div>
      
      <div>
        <PlayButton
          setCorrectObj={setCorrectObj}
          // setTempArray={setTempArray}
          // setRandArr = {setRandArr}
          randArr={randArr}
          clicked={clicked} />
      </div>
      
      <div className="button-container">
        <ChoiceButtonList
          // tempArray={tempArray}
          randArr={randArr}
          setRandArr = {setRandArr}
          mp3Array = {mp3Array}
          correctObj={correctObj}
          wrongCount={wrongCount}
          setClicked={setClicked}
          setMessage={setMessage}
          setScoreCount={setScoreCount}
          setWrongCount={setWrongCount}
          setShow={setShow}
        />
       
      </div>
        <Form
          score={scoreCount}
          scores={props.scores}
          setScores={props.setScores}
          show={show}
          clicked={clicked}/>
      </div>
  );
}

export default Quiz;
  