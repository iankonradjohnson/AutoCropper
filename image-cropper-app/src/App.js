import React from 'react';
import BoundingBox from './components/BoundingBox';
import ResizeHandle from './components/ResizeHandle';

export default function App() {
  return (
    <div id="container">
      <img
        src='images/image_0166.png'
        alt="Your Image Alt Text"
      />
      <BoundingBox x={50} y={50} width={150} height={100}/>
    </div>
  );
}
