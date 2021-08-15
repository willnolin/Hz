import React, { useRef, useEffect } from 'react'
// import * as dat from 'dat.gui'

const Sinewave = (props) => {
  const {freq, amp } = props;
  // const gui = new dat.GUI()
  const canvasRef = useRef(null);
  
  useEffect(() => {
    
    const canvas = canvasRef.current;
    let c = canvas.getContext('2d')

    const wave = {
      y: canvas?.height / 2,
      length: 0.1,
      amplitude: amp,
      waveFreq: freq
    }
        
    let increment = wave.waveFreq
    // eslint-disable-next-line
    let animationFrameId;
    
    function animate() {
      // eslint-disable-next-line
      animationFrameId = requestAnimationFrame(animate);
      c.fillStyle = 'rgba(9, 8, 9, 1)'
      c.fillRect(0, 0, c.canvas.width, c.canvas.height)
      c.beginPath()
      
      c.moveTo(0, canvas.height / 2)
      
      for (let i = 0; i < canvas.width; i++) {
        c.lineTo(i, wave.y + Math.sin(i * wave.length + increment)
          * wave.amplitude * Math.cos(increment) )
       
        
      }
      c.strokeStyle = 'green';
      c.stroke()
      increment += wave.waveFreq
 
  }
    animate()

// eslint-disable-next-line
  }, [freq, amp])
  
  return <canvas ref={canvasRef} {...props}></canvas>

}
export default Sinewave;

