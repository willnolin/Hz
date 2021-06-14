import { useState, useEffect } from 'react'
import useSound from 'use-sound'
export default function PlayButton(props) {
  const {
    setCorrectObj,
    randArr,
    clicked,
  } = props;

  const [playing, setPlaying] = useState(false);
  const [currentFile, setCurrentFile] = useState(randArr[0])
  const [isChecked, setIsChecked] = useState(false)
 
   useEffect(() => {
    
       if (randArr[0] === currentFile) {
         setCurrentFile(randArr[0]);
         setCorrectObj(randArr[0]);
       } else {
         setCurrentFile(randArr[1]);
         setCorrectObj(randArr[1]);
       }
   
     // eslint-disable-next-line
  }, [clicked])
 
  // set useSound
  const [play, { sound }] = useSound(currentFile.file, {
    onend: () => {
      setPlaying(false)
      setIsChecked(false)
    },
    
  })
  
  const handleClick = () => {
    if (playing) {
      sound?.fade(1, 0, 500)
      setPlaying(false)
      setIsChecked(false)

    } else {
      setPlaying(true)
      setIsChecked(true)
      play()
      sound?.fade(0, 1, 500)
    }
  }
  

  return (
    <div className="play-button">
      {/* {console.log('Button Green:', isChecked */}
      {/* )} */}
       <input type="checkbox" onChange={handleClick} checked={isChecked} ></input>

    </div>
  )
}
