import { useState, useEffect } from 'react'
import PlayButton from "./PlayButton"
import ChoiceButtonList from "./ChoiceButtonList"
import React from 'react';

import {
  mp3Array
} from '../sounds/index.js'

const Quiz = () => {
  const [tempArray, setTempArray] = useState([...mp3Array]);
  const [correctObj, setCorrectObj] = useState({});
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);

  //variables  (is this necessary?)
  const incorrectArr = [];

  const getRandomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length)
  }
  
  // initialize play button
  useEffect(() => {
    const getPlayButtonValue = (tempArray) => {
      let index = getRandomIndex(tempArray)
      let correct = tempArray.splice(index, 1)
      setCorrectObj(correct[0])
      setTempArray(tempArray)
    }
    getPlayButtonValue(tempArray)
  }, [])

    //=========handle the button choise ========//
  const handleChoice = (e) => {
    if (correctObj.name === e.target.name) {
      setMessage("Correct!")
      setScore((prevScore) => prevScore + 1)
    } else {
      console.log(incorrectArr)
      if (incorrectArr.length < 3) {
        setMessage("Incorrect..")
        incorrectArr.push('X')
      } else {
        setMessage("Game Over") // this is where you'll display the high score form
      }
    }
  }
  return (
    <div>
    <h4 id="score">{`${score}pts`}</h4>
    {/* <ul>{displayExArray()}</ul> */}
    <PlayButton correctObj={correctObj} />
    <br />
    {/* <ChoiceButtonList mp3Array = {mp3Array} /> */}
    <div className= "button-container">
    <ChoiceButtonList tempArray={tempArray} correctObj={correctObj}
      getRandomIndex={getRandomIndex} handleChoice={handleChoice}/>
    <p>{message}</p>
    </div>
  </div>
  );
}

export default Quiz;
