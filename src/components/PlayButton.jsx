import { useState } from 'react'

// import { Howl, Howler } from 'howler'
import useSound from 'use-sound'

export default function PlayButton(props) {
  const { correctObj } = props;
  const [playing, setPlaying] = useState(false);
  // ===  Play Button will generate the sine wave.
   ///    This is the only component that does this.
  console.log(correctObj.file)
  const [play, { stop }] = useSound(correctObj.file, {
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
