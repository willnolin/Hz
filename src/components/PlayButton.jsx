import React from 'react'
import { Howl, Howler } from 'howler'
import play_button from '../images/play.png'
// import useSound from 'use-sound'
export default function PlayButton(props) {
  const { correctObj } = props;
  // ===  Play Button will generate the sine wave.  
   ///    This is the only component that does this.

  ////////////////////////
  const sound = new Howl({
      src: [correctObj.file],     //put sounds in order by freqency in index.js so you can adjust volume by index
      volume: correctObj.volume,
      onend: function () {
        // sound.fade(this.volume, 0.0, 500)
        console.log("finished")
      },
      onpause: function () {
        
        
      },

      onstop: function () {
        
        // sound.fade(this.volume, 0.0, 500)
      }
    });
  ////////////////////////////
  const handleClick = () => {
    sound.play()
  }


  return (
    <div>
      {/* <img src={play_button} alt="play" id="play-button" onClick={handleClick}/> */}
      
    </div>
  )
}
