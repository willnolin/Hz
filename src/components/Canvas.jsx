import { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null);
  const canvas = canvasRef.current;
  
  canvas.width = 'inherit'
  canvas.height = 'inherit'
  
  useEffect(() => {
    const context = canvas.getContext('2d')
    draw(context)
  
  }, [draw])
  
  const wave = {
    y: canvas.height / 2,
    length: 0.01,
    amplitude: 75,
    freq: 0.01
  }
  let increment = wave.freq
  const draw = c => {
    requestAnimationFrame(draw);
    c.fillStyle = 'rgba(0,0,0,0.01)'
    c.fillRect(0, 0, canvas.width, canvas.height)
    c.beginPath()
    
    c.moveTo(0, canvas.height / 2)
    
    for (let i = 0; i < canvas.width; i++) {
      c.lineTo(i, wave.y + Math.sin(i*wave.length + increment) * wave.amplitude)
      
    }
    // c.strokeStyle = `hsl(${strokeColor.h}, ${strokeColor.s}%, ${strokeColor.l}%)`
    c.stroke()
    increment += wave.freq
  }
  
  
  return <canvas ref={canvasRef} {...props} />

}
export default Canvas;
