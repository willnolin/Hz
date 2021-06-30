import React, { useRef, useEffect } from 'react'
// import * as dat from 'dat.gui'

const Sinewave = (props) => {
  const {freq, amp } = props;
  // const gui = new dat.GUI()
  const canvasRef = useRef(null);
  
  useEffect(() => {
    
    const canvas = canvasRef.current;
    let c = canvas.getContext('2d')
    // c.fillStyle = '#000000'
    // c.fillRect(0, 0, c.canvas.width, c.canvas.height)
    const wave = {
      y: canvas?.height / 2,
      length: 0.1,
      amplitude: amp,
      waveFreq: freq
    }
    
    // const strokeColor = {
    //   h: 100,
    //   s: 50,
    //   l: 50
    // }
    
    // const waveFolder = gui.addFolder('wave') 
    // waveFolder.add(wave, 'y', 0, canvas.height)
    // waveFolder.add(wave, 'length', -0.01, 0.1)
    // waveFolder.add(wave, 'amplitude', -300, 300)
    // waveFolder.add(wave, 'freq', -.5, .1)
    // waveFolder.open()

    // const strokeFolder = gui.addFolder('stroke')
    // strokeFolder.add(strokeColor, 'h', 0, 255)
    // strokeFolder.add(strokeColor, 's', 0, 100)
    // strokeFolder.add(strokeColor, 'l', 0, 100)
    // strokeFolder.open()
    
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
    // return () => {
    //   cancelAnimationFrame(animationFrameId)
    // }
// eslint-disable-next-line
  }, [freq])
  
  
  // const wave = {
  //   y: canvas?.height / 2,
  //   length: 0.01,
  //   amplitude: 75,
  //   freq: 0.01
  // }
  
  // const draw = (c, increment) => {
    
  //   c.beginPath()
    
  //   c.moveTo(0, canvas.height / 2)
    
  //   for (let i = 0; i < canvas.width; i++) {
  //     c.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude)
      
  //   }
  //   // c.strokeStyle = hsl('green', '50%', '50%')
  //   c.stroke()
    
  // }
  
  // useEffect(() => {
  //   // c.width = window.innerWidth
  //   // c.height = window.innerHeight
  //   let increment = wave.freq
  //   let animationFrameId;

  // function animate() {
  
  //   increment += wave.freq
  //   draw(c, increment)
  //   animationFrameId = requestAnimationFrame(animate);
  // }
  // animate()
  //   return () => {
  //   cancelAnimationFrame(animationFrameId)
  // }
    
  // }, [draw])
   
  
  return <canvas ref={canvasRef} {...props}></canvas>

}
export default Sinewave;

