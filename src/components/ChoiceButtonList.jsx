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
  
  useEffect(() => {
    //initialize button colors to white
    let newRandArr = randArr.map((btn) => ({ ...btn, color: "rgba(0, 0, 0, 0.4)" }))
    // create new button Object array (to display names on fresh buttons)
    setTimeout(() => {
    newRandArr && setButtons([
      correctObj && correctObj,
      newRandArr[2],
      newRandArr[3],
      newRandArr[4],
    ].sort(() => Math.random() - 0.5))
      setMessage("")
    }, 3000)
    // eslint-disable-next-line
  }, [correctObj, randArr])

    //=========handle the button choise ========//
    
    const handleChoice = (e) => {
      let newButtons;
      setClicked((prevClick) => !prevClick)
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
      
    }
  
    return (
      <div className="button-container">
       
        {buttons.map((btn, index) => {
        
          return <button
            className={`choice-btn`}
            id = {`btn${index}`}
            key={index}
            style={{boxShadow:`0 0 4px 4px ${btn?.color}`}} 
            // style={{backgroundColor: `${btn?.color}`}}
            name={`${!btn ? correctObj?.name : btn?.name}`}
            onClick={handleChoice}
            >{!btn ? correctObj?.name : btn?.name}</button>
        })}
      </div>
    
    )
  }

