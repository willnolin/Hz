
import { useEffect, useRef } from 'react';
import useCanvas from '../hooks/useCanvas'


const Canvas = (props) => {
  const { draw, ...other} = props;
  const canvasRef = useCanvas(draw);
 


  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext('2d')
  //   let frameCount = 0;
  //   let animationFrameId;
  //   // draw came here
  //   //recursively calling render for each frame.
  //   const render = () => {
  //     frameCount++;
  //     draw(context, frameCount);
  //     animationFrameId = window.requestAnimationFrame(render)
  //   }
  //   render()
    
  //   return () => {
  //     window.cancelAnimationFrame(animationFrameId)
  //   }
  // }, [draw])


  return (
    <div>
      <canvas ref={canvasRef} {...other}/>      
    </div>
  );
}

export default Canvas;

