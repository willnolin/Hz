import { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'

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
    setFreq,
    setAmp,
    playing,
    setPlaying,
  } = props;
  const [buttons, setButtons] = useState([]);
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    //initialize button colors 
    let newRandArr = randArr.map((btn) => ({ ...btn, color: "rgba(0, 0, 0, 0.4)" }))
    let newCorrectObj = { ...correctObj, color: "rgba(0, 0, 0, 0.4)" }
    // create new button Object array (to display names on fresh buttons)
    setTimeout(() => {
      setInProp(true);
    newRandArr && setButtons([
      newCorrectObj && newCorrectObj,
      newRandArr[2],
      newRandArr[3],
      newRandArr[4],
    ].sort(() => Math.random() - 0.5))
      setMessage("")
    }, 2000)
    // eslint-disable-next-line
  }, [correctObj, randArr])

    //=========handle the button choice ========//
    
    const handleChoice = (e) => {
      let newButtons;
      setInProp(true)
      setClicked((prevClick) => !prevClick)
      setFreq(0)
      setAmp(1)
      setRandArr([...mp3Array].sort(() => Math.random() - 0.5))
      let choice = buttons.find(button => button.name === e.target.name)
      const index = buttons.indexOf(choice)
      if (correctObj.name === e.target.name) {
        setMessage("Correct!")
        choice = { ...choice, color: "green" }
        newButtons = buttons;
        newButtons.splice(index,1,choice)
        setScoreCount((prevScore) => prevScore + 1)
      } else {
        // if three strikes, then you're done, else add an X
        if (wrongCount < 2) {
          setMessage("Incorrect..")
          choice = {...choice, color:"red"}
          newButtons = buttons;
          newButtons.splice(index,1,choice)
          setWrongCount((prevCount) => prevCount + 1)        
        
        } else {
          setWrongCount((prevCount) => prevCount + 1) 
          setMessage("Game Over") // this is where you'll display the high score form
          setShow("block")
        }
      }
      setInProp(false);
    }
  
  return (
      <CSSTransition in={inProp} timeout={2000} classNames="fade" unmountOnExit>
      <div className="button-container">
       
        {buttons.map((btn, index) => {
        
          return <button
            className="choice-btn"
            id = {`btn${index}`}
            key={index}
            style={{boxShadow:`0 0 4px 4px ${btn?.color}`}} 
            name={`${!btn ? correctObj?.name : btn?.name}`}
            onClick={handleChoice}
            >{!btn ? correctObj?.name : btn?.name}</button>
        })}
      </div>
      </CSSTransition>
    )
  }

