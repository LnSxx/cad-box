import React, {useRef } from "react";
import { Canvas, useFrame } from 'react-three-fiber'
import './css/Renderer.css'

function Box(props) {
  console.log(props)
  const mesh = useRef()
  const boxTriangles = props.box.map((triangle) => {
    return (
      <mesh>
        <geometry attach="geometry">
          <vector3 attachArray="vertices" args={triangle[0]}></vector3>
          <vector3 attachArray="vertices" args={triangle[1]}></vector3>
          <vector3 attachArray="vertices" args={triangle[2]}></vector3>
          <face3 attachArray="faces" args={[0, 1, 2]}></face3>
        </geometry>
        <meshBasicMaterial attach="material" color="red"/>
      </mesh>
    )
  })
  console.log(boxTriangles)
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })
  
  return (
    <group ref={mesh}  position={[0, 0, -200]}>
      {boxTriangles}
    </group>
  )
}

function Renderer(props) {
    return  (
      <div className='renderer'>
        <Canvas>
        <perspectiveCamera position={[0, 0, 200]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />    
        <Box box={props.data}/>
      </Canvas>
      </div>
    )
    
  
}

export default Renderer


