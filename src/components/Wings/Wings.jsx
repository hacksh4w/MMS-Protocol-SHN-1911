import React,{useRef} from 'react'
import {Canvas,useFrame} from "@react-three/fiber";
import './Wings.css'
import * as THREE from 'three';
function Wings3(){
    const myMesh = React.useRef();
    useFrame(()=>{myMesh.current.rotation.z +=0.01})
    return(
        <mesh ref={myMesh} position={[0,1.05,0]} >
            <mesh rotation={[0,0,0.785398]} position={[-1.6,1.6,0]}>
                <coneGeometry attatch="geometry" args={[0.2,4,64,1,0,6.283185307179586]}/>
                <meshNormalMaterial attach="material"/>
            </mesh>
            <mesh rotation={[0,0,3.14159]} position={[0,-2.2,0]}>
                <coneGeometry attatch="geometry" args={[0.2,4,64,1,0,6.283185307179586]}/>
                <meshNormalMaterial attach="material"/>
            </mesh>
            <mesh rotation={[0,0,-0.785398]} position={[1.6,1.6,0]}>
                <coneGeometry attatch="geometry" args={[0.2,4,64,1,0,6.283185307179586]}/>
                <meshNormalMaterial attach="material"/>
            </mesh>
        </mesh>
    );
}
export default function Wings() {
    return (
        <Canvas className='Cones'style={{position: 'absolute',top: '0',left:'0',minHeight: '85vh',width: '100vw'}}>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[-2,5,2]} intensity={1}/>
            <Wings3/>
        </Canvas>
  )
}
