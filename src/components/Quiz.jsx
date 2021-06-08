import { useState, useEffect } from 'react'
import PlayButton from "./PlayButton"
import ChoiceButtonList from "./ChoiceButtonList"
import React from 'react';

import { useHistory } from 'react-router-dom'

import {
  mp3Array
} from '../sounds/index.js'

const Quiz = () => {
  const [tempArray, setTempArray] = useState([...mp3Array]);
  const [correctObj, setCorrectObj] = useState({});
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const history = useHistory();
  const [clicked, setClicked] = useState(false)
  //variables  (is this necessary?)
  const [wrongCount,  setWrongCount] = useState(0)
  
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
      setScore((prevScore) => prevScore + 1)
    } else {
      // if three strikes, then you're done, else add an X
      if (wrongCount < 3) {
        setMessage("Incorrect..")
        setWrongCount((prevCount) => prevCount + 1)        
      
      } else {
        setMessage("Game Over") // this is where you'll display the high score form
      }
    }
    
  }
  
  //==== Displays xs ===//
  const displayStrikes = () => {
    console.log(wrongCount)
    for (let i = 0; i < wrongCount; i++) {
      return <p>X</p>
    }
  }

  return (
    <div>
      
      <h4 id="score">{`${score}pts`}</h4>
      <div>{displayStrikes()}</div>
      <PlayButton correctObj={correctObj} />
      <br />
      
      <div className="button-container">
        <ChoiceButtonList tempArray={tempArray} correctObj={correctObj}
        getRandomIndex={getRandomIndex} handleChoice={handleChoice}/>
        <p>{message}</p>
      </div>
   
    </div>
  );
}

export default Quiz;
