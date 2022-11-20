import React,{useRef} from 'react'
import {Canvas} from "@react-three/fiber";
import './Stick.css'
const Stick = () => {
  
  return (
    <Canvas className='stick' style={{width:'100px',height: '62vh'}}>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2,5,2]} intensity={1}/>
        <mesh className='stick' rotation={[90,0,20]}>
          <boxBufferGeometry attatch="geometry" args={[0.2,0.2,6.5]}/>
          <meshNormalMaterial attach="material"/>
        </mesh>
    </Canvas>
  )
}

export default Stick