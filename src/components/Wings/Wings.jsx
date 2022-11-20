import React,{useRef,useState} from 'react'
import {Canvas,useFrame} from "@react-three/fiber";
import './Wings.css'
import * as THREE from 'three';
function Wings3(){
    const [hover, setHover] = useState(false);
    const myMesh = React.useRef();
    useFrame(() => {
        if (hover) {
          myMesh.current.rotation.z -= 0.025;
        }
      });
    return(
        <mesh ref={myMesh} position={[0.02,1.06,0]} onPointerOver={() => {setHover(true);}} onPointerOut={() => {setHover(false);}}>
            <mesh rotation={[0,0,0.8]} position={[-1.3,1.27,0]}>
                <coneGeometry attatch="geometry" args={[0.2,3.5,64,1,0,6.283185307179586]}/>
                <meshNormalMaterial attach="material"/>
            </mesh>
            <mesh rotation={[0,0,3.14159]} position={[0,-1.75,0]}>
                <coneGeometry attatch="geometry" args={[0.2,3.5,64,1,0,6.283185307179586]}/>
                <meshNormalMaterial attach="material"/>
            </mesh>
            <mesh rotation={[0,0,-0.8]} position={[1.3,1.27,0]}>
                <coneGeometry attatch="geometry" args={[0.2,3.5,64,1,0,6.283185307179586]}/>
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
