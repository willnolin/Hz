import { useState, useEffect } from 'react'

// ===  this component will create the choice buttons 
// ===  one of the buttons needs to match the name of the playbutton
// ===  so, you need to pass the winning Object from mp3Array into
// ==  this component so that you can put it in the button array
// ===  but then, the array will need to be scrambled somehow....
export default function ChoiceButtonList(props) {
  const { tempArray, correctObj, getRandomIndex, setClicked, setTempArray,
    setMessage, wrongCount, setScoreCount, setWrongCount, setShow, mp3Array } = props;
  const [buttons, setButtons] = useState([]);
 
  // const [clicked, setClicked] = useState(false)
  useEffect(() => {
    const createButtonArray = async (tempArray, correctObj) => {
      let btnArray = [];
      btnArray.push(correctObj);
      let index = 0;
      for (let i = 1; i < 4; i++) {
        //take random item from temp arr and place in btnArray
        index = getRandomIndex(tempArray);
        btnArray.push(tempArray[index]);
        tempArray.splice(index, 1);
      }
      setButtons(btnArray);
    }
    createButtonArray(tempArray, correctObj);
  }, [correctObj])
  
  
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
  
  // ======= Shuffle array =======//
  //https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
  function shuffle(array) {
    let currentId = array.length;
  // There remain elements to shuffle
    while (0 !== currentId) {
      // Pick a remaining element
      let randomId = Math.floor(Math.random() * currentId);
      currentId -= 1;
    // Swap it with the current element.
      let tmp = array[currentId];
      array[currentId] = array[randomId];
      array[randomId] = tmp;
    }
    return array;
  }
 // ==================================// 
  return (
    <div className="button-list">
      
      {shuffle(buttons).map((btn, index) => {
        return <button className={`choice-btn`} key={index}
          name={`${btn.name}`} onClick={handleChoice}
          >{btn.name}</button>
      })}

    </div>
  )
}
