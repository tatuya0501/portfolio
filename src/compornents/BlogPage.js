import { Canvas } from '@react-three/fiber';
import React from 'react'
import { Image, Scroll, ScrollControls } from '@react-three/drei';


function IMages() {
  return(
      <group>
          <Image url ="./img1.jpg" scale={[4,3,1]}position={[-1,0,1]}/>
          <Image url ="./img2.jpg" scale={[3,4,1]}position={[3,0,1]}/>
          <Image url ="./img3.JPG" scale={[2,3.5,1]}position={[-3,-4,2]}/>
          <Image url ="./img4.jpg" scale={[1.4,2,1]}position={[-1.3,0,3.2]}/>
          <Image url ="./img5.jpg" scale={[4,3,1]}position={[2,-3,2]}/>
          <Image url ="./img8.jpg" scale={[3,3,1]}position={[1,-6,3]}/>
          <Image url ="./img10.jpg" scale={[3,4,1]}position={[-2,-9,2]}/>
      </group>
  );
}



function BlogPage() {
  return (
  
    <div className='osada'>
       
       <div className="delay01 animate__animated animate__fadeIn">
       <div className='gallry'>
         <h1>GALLERY</h1> </div>
         </div>
         
       <div className="ima">
       <Canvas>
         <ScrollControls pages={3}>
           <Scroll>
         <IMages/>
         </Scroll>
         </ScrollControls>
       </Canvas>
       </div>
       </div>
       
  )
}

export default BlogPage;