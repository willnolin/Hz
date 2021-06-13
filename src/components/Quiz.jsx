import React from 'react';
import { useState, useEffect } from 'react'
import Display from "./Display"
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
  
  // useEffect(() => {
  //   sessionStorage.setItem('scoreStorage', scoreCount)
  //   sessionStorage.setItem('wrongCountStorage', wrongCount )
  // }, [scoreCount, wrongCount])
  // console.log(scoreCount, wrongCount)
  // if (show === "block") {
  //   sessionStorage.clear();
  // }

  return (
    <div className="gameplay-container">
   
      <Display
        scoreCount={scoreCount}
        wrongCount={wrongCount}
        message={message} />
 
      <PlayButton
        setCorrectObj={setCorrectObj}
        randArr={randArr}
        clicked={clicked} />
  
      <ChoiceButtonList
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
      <Form
        score={scoreCount}
        scores={props.scores}
        setScores={props.setScores}
        show={show}
        clicked={clicked}
      />
    
    </div>
  );
}

export default Quiz;
  