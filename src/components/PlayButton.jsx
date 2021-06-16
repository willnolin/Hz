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
 
  // set useSound with interrupt
  console.log(currentFile)
  const [play, { sound }] = useSound(currentFile.file, {
   
    interrupt: true,
    onend: () => {
      setPlaying(false)
      setIsChecked(false)
    },
    
    
  })
  
  const handleClick = () => {
    if (playing) {
      sound?.fade(currentFile.volume, 0, 500)
      setPlaying(false)
      setIsChecked(false)

    } else {
      setPlaying(true)
      setIsChecked(true)
      play()
      console.log(play)
      sound?.fade(0, currentFile.volume, 500)
    }
  }
  //this is a new comment that I am adding in teh develp branch

  return (
    <div className="play-button">
    
       <input type="checkbox" onChange={handleClick} checked={isChecked} ></input>

    </div>
  )
}
