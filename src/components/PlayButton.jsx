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

 
   useEffect(() => {
    if (randArr[0] === currentFile) {
      setCurrentFile(randArr[0]);
      setCorrectObj(randArr[0]);
    } else {
      setCurrentFile(randArr[1]);
      setCorrectObj(randArr[1]);
    }  
  }, [clicked])
 
  // set useSound
  // const [play, { stop }] = useSound(currentFile.file, {
    const [play] = useSound(currentFile.file, {
    onend: () => {
      console.log('ended');
      setPlaying(false)
    },
  })

  // const handlePlay = () => {
  //   setPlaying(true)
  //   play()
  // }
  
  // const handleStop = () => {
  //   setPlaying(false)
  //   stop()
  //   }

  return (
    <div className="play-button">
     
      {/* {playing ? (
        <i className="far fa-pause-circle" onClick={handleStop}></i>
        ) : (
        <i className="far fa-play-circle" onClick={handlePlay}></i>
      )} */}
       <input type="checkbox"  onClick={play()}></input>

    </div>
  )
}
