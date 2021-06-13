
import { useEffect, useRef } from 'react';
import useCanvas from '../hooks/useCanvas'


const Canvas = (props) => {
  const { draw, ...other} = props;
  const canvasRef = useCanvas(draw);


  return (
    <div>
      <canvas ref={canvasRef} {...other}/>      
    </div>
  );
}

export default Canvas;

