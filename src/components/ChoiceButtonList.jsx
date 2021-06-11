import { useState, useEffect } from 'react'

// ===  this component will create the choice buttons 
// ===  one of the buttons needs to match the name of the playbutton
// ===  so, you need to pass the winning Object from mp3Array into
// ==  this component so that you can put it in the button array
// ===  but then, the array will need to be scrambled somehow....
export default function ChoiceButtonList(props) {
  const {
    // tempArray,
    randArr,
    setRandArr,
    mp3Array,
    correctObj,
    setClicked,
    setMessage,
    wrongCount,
    setScoreCount,
    setWrongCount,
    setShow,
  } = props;
  const [buttons, setButtons] = useState([]);
 
  // const [clicked, setClicked] = useState(false)
  useEffect(() => {
    console.log(randArr)
    console.log(correctObj)
    randArr && setButtons([
      correctObj && correctObj,
      randArr[2],
      randArr[3],
      randArr[4],
    ].sort(() => Math.random() -0.5 ))
  }, [correctObj, randArr])
  
  
    //=========handle the button choise ========//
    const handleChoice = (e) => {
      setClicked((prevClick) => !prevClick)
      setRandArr([...mp3Array].sort(() => Math.random() - 0.5))
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
  
    return (
      <div className="button-container">
       
        {buttons.map((btn, index) => {
          console.log(correctObj)
          return <button
            className={`choice-btn`}
            key={index}
            name={`${!btn ? correctObj.name : btn.name}`}
            onClick={handleChoice}
            >{!btn ? correctObj.name : btn.name}</button>
        })}
      </div>
    
    )
  }

