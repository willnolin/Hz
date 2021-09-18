import React from 'react';
import { useState } from 'react'
import Display from "./Display"
import PlayButton from "./PlayButton"
import ChoiceButtonList from "./ChoiceButtonList"
import Form from "./Form"
import Volume from './Volume';


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
  const [freq, setFreq] = useState(0);
  const [amp, setAmp] = useState(1);
  const [volume, setVolume] = useState(0.2)
  const [showMute, setShowMute] = useState('none');
  const [showVolume, setShowVolume] = useState('block');
  const [isMuted, setIsMuted] = useState(false);

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
        volume={volume}
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
      {/* <Volume volume={volume} setVolume={setVolume}
        showVolume={showVolume} setShowVolume={setShowVolume}
        showMute={showMute} setShowMute={setShowMute}
        isMuted={isMuted} setIsMuted={setIsMuted}/>
      {/* <div class="slidecontainer">
        <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
      </div> */} 
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
  