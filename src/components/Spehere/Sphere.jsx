import React from 'react'
import {Canvas} from "@react-three/fiber";
export default function Sphere() {
    return (
        <Canvas className='sphere' style={{width:'25px',height:'25px'}}>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[-2,5,2]} intensity={1}/>
            <mesh className='sphere' rotation={[90,0,20]}>
              <sphereGeometry attatch="geometry" args={[3,64,32,0,6.283185307179586,0,6.283185307179586]}/>
              <meshNormalMaterial attach="material"/>
            </mesh>
        </Canvas>
      )
}
