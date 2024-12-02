import React, { useState } from 'react';
import download from './download.jpg';

function Imagemanipulation() {
  const [height, setHeight] = useState(150);
  const [width, setWidth] = useState(150);
  const [red, setRed] = useState();
  const [green, setGreen] = useState();
  const [blue, setBlue] = useState();
  const [imgrotate,setImgRotate]=useState(0);

  function increaseHeight() {
    setHeight(height + 30);
  }

  function increaseWidth() {
    setWidth(width + 30);
  }

  function colorChange(){
    setRed(Math.random()*255);
    setGreen(Math.random()*255);
    setBlue(Math.random()*255);
  }

  function dorotate(){
    setImgRotate(imgrotate+30)
  }

  return (
    <div style={{ height: '400px', width: '400px', border: '2px solid red', marginLeft: '200px' }}>
      <div style={{ paddingLeft: '100px', backgroundColor:`RGB(${red},${green},${blue})`}}>
      <img src={download} style={{ height: `${height}px`, width: `${width}px` }} alt="manipulatable" />
        <div style={{ margin: '70px' }}>
          <button onClick={increaseHeight}>Enhance Height</button>
          <button onClick={increaseWidth}>Enhance Width</button>
          <button onClick={dorotate}>Rotate Image</button>
          <button onClick={colorChange}>Background Color</button>
        </div>
      </div>
    </div>
  );
}

export default Imagemanipulation;
