import { useState, useEffect } from 'react'
// import {
//   mp3Array
// } from '../sounds/index.js'
// import { Howl, Howler } from 'howler'
import useSound from 'use-sound'

// ===  Play Button will generate the sine wave.
 ///    This is the only component that does this.
export default function PlayButton(props) {
  const { correctObj, setCorrectObj, tempArray, setTempArray, getRandomIndex, clicked, mp3Array } = props;
  const [playing, setPlaying] = useState(false);
  const [correctIndex, setCorrectIndex] = useState(0)
  // initialize play button
   useEffect(() => {
    const getPlayButtonValue = (tempArray) => {
      // setTempArray([...mp3Array])
      let index = getRandomIndex(tempArray);
      setCorrectIndex(index);
      let correct = tempArray.splice(index, 1);
      setCorrectObj(correct[0]);
      setTempArray(tempArray);
      console.log("inside pgetPlayButton");
    }
     getPlayButtonValue(tempArray);
  }, [clicked])
  
  // set useSound
  const [play, { stop }] = useSound(mp3Array[correctIndex].file, {
    onend: () => {
      console.log('ended');
      setPlaying(false)
    },
  })
  ////////////////////////  HOWLER ////////////////////
  // const sound = new Howl({
  //     src: [correctObj.file],     //put sounds in order by freqency in index.js so you can adjust volume by index
  //     volume: correctObj.volume,
  //     onend: function () {
  //       // sound.fade(volume, 0.0, 500)
  //       setPlaying(false);
  //     },
  // });
  // console.log(sound)
  //   ////////////////////////////
    const handlePlay = () => {
      setPlaying(true)
      play()
    }
  
  const handleStop = () => {
    setPlaying(false)
    stop()
    }

  
  return (
    <div className="play-button">
     
      {playing ? (
        <i className="far fa-pause-circle" onClick={handleStop}></i>
        ) : (
        <i className="far fa-play-circle" onClick={handlePlay}></i>
      )}

    </div>
  )
}
