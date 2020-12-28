import React, {useRef } from "react";
import * as THREE from "three"; 
import { Canvas, useFrame } from 'react-three-fiber'
import './css/Renderer.css'

function Box(props) {
  const material = new THREE.MeshStandardMaterial( { color : 0x00cc00 } );
  const mesh = useRef()
  const boxTriangles = props.box.map((triangle) => {
    const triangleKey = triangle[0].join('')+triangle[1].join('')+triangle[2].join('')
    console.log(triangleKey)
    return (
      <mesh key={triangleKey} >
        <geometry>
          <vector3 attachArray="vertices" args={triangle[0]}></vector3>
          <vector3 attachArray="vertices" args={triangle[1]}></vector3>
          <vector3 attachArray="vertices" args={triangle[2]}></vector3>
          <face3 attachArray="faces" args={[0, 1, 2]}></face3> 
        </geometry>   
        <meshBasicMaterial name="material" color="#0075ff"/>  
      </mesh>
    )
  })
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })
  
  return (
    <group ref={mesh}  position={[0, 0, 0]} material={material}>
      {boxTriangles}
    </group>
  )
}

function Renderer(props) {
    return  (
      <div className='renderer'>
        <Canvas camera={{ position: [0, 0, 200], fov: 100 }}>
        <Box box={props.data}/>
      </Canvas>
      </div>
    )
}

export default Renderer


