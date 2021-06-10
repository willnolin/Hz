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
  //copy of mp3 Array 
  const [tempArray, setTempArray] = useState(null);
  // state of current correct choice
  const [correctObj, setCorrectObj] = useState(null);
  // correct! or incorrect...
  const [message, setMessage] = useState("");
  const [scoreCount, setScoreCount] = useState(0);
  const [wrongCount,  setWrongCount] = useState(0)

  const [clicked, setClicked] = useState(false)
 
  const [show, setShow] = useState("none")


  //get random index from given array
  // const getRandomIndex = (arr) => {
  //   return Math.floor(Math.random() * arr.length)
  // }
  //==== Displays xs ===//  this is all replaced by line 45!!!!
  // const displayStrikes = () => {
  //   let stringX = ""
  //   for (let i = 0; i < wrongCount; i++) {
  //     stringX += 'X '; 
  //   }
  //   return stringX
  // }
 // ========================
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
          setTempArray={setTempArray}
          clicked={clicked} />
      </div>
      
      <div className="button-container">
        <ChoiceButtonList
          tempArray={tempArray}
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
  
  // // initialize play button
  // useEffect(() => {
  //   const getPlayButtonValue = (tempArray) => {
  //     // setTempArray([...mp3Array])
  //     let index = getRandomIndex(tempArray)
  //     let correct = tempArray.splice(index, 1)
  //     setCorrectObj(correct[0])
  //     setTempArray(tempArray)
  //     console.log("inside pgetPlayButton")
  //   }
  //   getPlayButtonValue(tempArray)
  // }, [clicked])
  
  //   //=========handle the button choise ========//
  // const handleChoice = (e) => {
  //   setClicked((prevClick) =>!prevClick)
  //   setTempArray([...mp3Array])
 
  //   if (correctObj.name === e.target.name) {
  //     setMessage("Correct!")
  //     setScoreCount((prevScore) => prevScore + 1)
  //   } else {
  //     // if three strikes, then you're done, else add an X
  //     if (wrongCount < 2) {
  //       setMessage("Incorrect..")
  //       setWrongCount((prevCount) => prevCount + 1)        
      
  //     } else {
  //       setWrongCount((prevCount) => prevCount + 1) 
  //       setMessage("Game Over") // this is where you'll display the high score form
  //       setShow("block")
  //     }
  //   }
    
  // }
  // =============================================//
  
