import { useState, useEffect } from 'react'
import PlayButton from "./PlayButton"
import React from 'react';

import {
  mp3Array
} from '../sounds/index.js'

const Quiz = () => {
  const [tempArray, setTempArray] = useState([...mp3Array]);
  const [correctObj, setCorrectObj] = useState({});
  
  const getRandomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length)
  }

  useEffect(() => {
    const getPlayButtonValue = (tempArray) => {
      let index = getRandomIndex(tempArray)
      let correct = tempArray.splice(index, 1)
      setCorrectObj(correct[0])
      setTempArray(tempArray)
    }
    getPlayButtonValue(tempArray)
  }, [])

  return (
    <div>
      <PlayButton correctObj={correctObj} />
    </div>
  );
}

export default Quiz;
