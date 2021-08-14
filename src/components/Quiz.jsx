import React from 'react';
import { useState } from 'react'
import Display from "./Display"
import PlayButton from "./PlayButton"
import ChoiceButtonList from "./ChoiceButtonList"
import Form from "./Form"


import {
  mp3Array
} from '../sounds/index.js'

const Quiz = (props) => {
  const {
    setActiveGame, 
    scores,
    setScores,
    scoreCount,
    setScoreCount,
    wrongCount,
    setWrongCount,
    show,
    setShow,
  } = props;
  
  const [randArr, setRandArr] = useState([...mp3Array].sort(() => Math.random() - 0.5))
  const [correctObj, setCorrectObj] = useState(null);
  const [message, setMessage] = useState("");
  const [clicked, setClicked] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [freq, setFreq] = useState(0)
  const [amp, setAmp] = useState(1)


  return (
    <div className="gameplay-container">
   
      <Display
        scoreCount={scoreCount}
        wrongCount={wrongCount}
        message={message}
        freq={freq}
        amp={amp}
      />
 
      <PlayButton
        setCorrectObj={setCorrectObj}
        randArr={randArr}
        clicked={clicked}
        setFreq={setFreq}
        setAmp={setAmp}
        playing={playing}
        setPlaying={setPlaying}
      />
  
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
        setFreq={setFreq}
        setAmp={setAmp}
        playing={playing}
        setPlaying={setPlaying}
      />
      <Form
        setActiveGame ={setActiveGame}
        score={scoreCount}
        scores={scores}
        setScores={setScores}
        show={show}
        setShow={setShow}
        clicked={clicked}
      />
    
    </div>
  );
}

export default Quiz;
  