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
  const [play, { stop }] = useSound(currentFile.file, {
    // const [play] = useSound(currentFile.file, {
    onend: () => {
      console.log('ended');
      setPlaying(false)
      setIsChecked(false)
    },
  })

  const handleClick = () => {
    if (playing) {
      setPlaying(false)
      setIsChecked(false)
      stop()
    } else {
      setPlaying(true)
      setIsChecked(true)
      play()
    }
  }
  

  return (
    <div className="play-button">
     
      {/* {playing ? (
        <i className="far fa-pause-circle" onClick={handleStop}></i>
        ) : (
        <i className="far fa-play-circle" onClick={handlePlay}></i>
      )} */}

       <input type="checkbox" onChange={handleClick} checked={isChecked} ></input>

    </div>
  )
}
