import React from 'react';
import { useState, useEffect } from 'react'
import PlayButton from "./PlayButton"
import ChoiceButtonList from "./ChoiceButtonList"
import Form from "./Form"

import { useHistory } from 'react-router-dom'

import {
  mp3Array
} from '../sounds/index.js'

const Quiz = (props) => {
  const [tempArray, setTempArray] = useState([...mp3Array]);
  const [correctObj, setCorrectObj] = useState({});
  const [message, setMessage] = useState("");
  const [scoreCount, setScoreCount] = useState(0);
  const history = useHistory();
  const [clicked, setClicked] = useState(false)
  //variables  (is this necessary?)
  const [wrongCount,  setWrongCount] = useState(0)
  const [show, setShow] = useState("none")


  //get random index from given array
  const getRandomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length)
  }
  
  // initialize play button
  useEffect(() => {
    const getPlayButtonValue = (tempArray) => {
      // setTempArray([...mp3Array])
      let index = getRandomIndex(tempArray)
      let correct = tempArray.splice(index, 1)
      setCorrectObj(correct[0])
      setTempArray(tempArray)
    }
    getPlayButtonValue(tempArray)
  }, [clicked])
  
    //=========handle the button choise ========//
  const handleChoice = (e) => {
    setClicked((prevClick) =>!prevClick)
    setTempArray([...mp3Array])
    if (correctObj.name === e.target.name) {
      setMessage("Correct!")
      setScoreCount((prevScore) => prevScore + 1)
    } else {
      // if three strikes, then you're done, else add an X
      if (wrongCount < 2) {
        setMessage("Incorrect..")
        setWrongCount((prevCount) => prevCount + 1)        
      
      } else {
        setWrongCount((prevCount) => prevCount + 1) 
        setMessage("Game Over") // this is where you'll display the high score form
        setShow("block")
      }
    }
    
  }
  
  //==== Displays xs ===//
  const displayStrikes = () => {
    let stringX = ""
    for (let i = 0; i < wrongCount; i++) {

      stringX += 'X ';
      
    }
    return stringX
  }

  return (
    <div className="gameplay-container">
      
      <h4 id="score">{`${scoreCount} pts`}</h4>
      <div>{displayStrikes()}</div>
       
          <PlayButton correctObj={correctObj} />
       
      <br />
      
      <div className="button-container">
        <ChoiceButtonList tempArray={tempArray} correctObj={correctObj}
        getRandomIndex={getRandomIndex} handleChoice={handleChoice}/>
        <p className="result-message">{message}</p>
        {/* <i className="fas fa-volume-up"></i> */}
      </div>
    
      <Form score={scoreCount} scores={props.scores} setScores={props.setScores} show={show} />
  
    </div>
  );
}

export default Quiz;
