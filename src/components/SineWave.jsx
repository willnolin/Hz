import React, { useRef, useEffect } from 'react'
import * as dat from 'dat.gui'

const Sinewave = (props) => {
  
  const gui = new dat.GUI()
  const canvasRef = useRef(null);
  
  
  
  useEffect(() => {
    
    const canvas = canvasRef.current;
    let c = canvas.getContext('2d')
    // c.fillStyle = '#000000'
    // c.fillRect(0, 0, c.canvas.width, c.canvas.height)
    const wave = {
      y: canvas?.height / 2,
      length: 0.1,
      amplitude: 55,
      freq: .05
    }
    
    const strokeColor = {
      h: 100,
      s: 50,
      l: 50
    }
    
    const waveFolder = gui.addFolder('wave')
    waveFolder.add(wave, 'y', 0, canvas.height)
    waveFolder.add(wave, 'length', -0.01, 0.01)
    waveFolder.add(wave, 'amplitude', -300, 300)
    waveFolder.add(wave, 'freq', -0.01, 1)
    waveFolder.open()

    const strokeFolder = gui.addFolder('stroke')
    strokeFolder.add(strokeColor, 'h', 0, 255)
    strokeFolder.add(strokeColor, 's', 0, 100)
    strokeFolder.add(strokeColor, 'l', 0, 100)
    strokeFolder.open()
    
    let increment = wave.freq
    let animationFrameId;
    
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      c.fillStyle = 'rgba(0,0,0,0.04)'
      c.fillRect(0, 0, c.canvas.width, c.canvas.height)
      c.beginPath()
      
      c.moveTo(0, canvas.height / 2)
      
      for (let i = 0; i < canvas.width; i++) {
        c.lineTo(i, wave.y + Math.sin(i * wave.length + increment)
          * wave.amplitude * Math.sin(increment + i))
       
        
      }
      c.strokeStyle = 'green';
      c.stroke()
      increment += wave.freq
  }
    animate()
    // return () => {
    //   cancelAnimationFrame(animationFrameId)
    // }

  }, [])
  
  
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

