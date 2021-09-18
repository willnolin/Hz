import React, { useState } from 'react'
import volumeIcon from '../images/volume.png'
import volumeMuteIcon from '../images/volume-mute.png'


export default function Volume(props) {
  const {
    volume,
    setVolume,
    showVolume,
    setShowVolume,
    showMute,
    setShowMute,
    isMuted,
    setIsMuted
  } = props;
  const [lastVolume, setLastVolume] = useState(null);

  const handleChange = (e) => {
    if (e.target.value !== 0) {
      setVolume(e.target.value / 100)
      setShowVolume('block')
      setShowMute('none')
      setIsMuted(false);
    } else {
      setVolume(e.target.value / 100)
      setShowMute('block')
      setShowVolume('none')
      setIsMuted(true);
    }
  };

  const handleMute = () => {
    if (isMuted) {
      setVolume(lastVolume)
    } else {
      setVolume(0)
    }

  }

  return (
<>
    <div className="volume-container">
      <img src={volumeIcon} alt="volume" className="volume" style={{ display: showVolume }}
        onClick={() => {
          setShowVolume('none');
          setShowMute('block');
          setIsMuted(true);
          setLastVolume(volume);
          handleMute();
        }}
      />
      <img src={volumeMuteIcon} alt="volume-muted" className="volume-mute" style={{ display: showMute }}
        onClick={() => {
          setShowVolume('block');
          setShowMute('none');
          setIsMuted(false);
          handleMute();
        }}
      />
      </div>
      <div className="slidecontainer">
        <input type="range" id="myRange"
          onChange={(e) => handleChange(e)} className="slider"></input>
      </div>
</>
  )
}

