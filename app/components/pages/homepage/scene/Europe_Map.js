import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'

const Europe_Map = () => {
    const { nodes } = useGLTF('/models/Europe_Map.glb')
    const Europe_Map = useGLTF('/models/UK_Map.glb')

    return (
        // <group ref={nodes.Europe_Map}>
        //     <mesh
        //         geometry={nodes.Europe_Map.geometry}
        //         material={nodes.Europe_Map.material}
        //         scale={[0.1, 0.1, 0.1]}
        //         position={[0, 0, -0.5]}
        //     />
        // </group>
        
        <mesh position={[0, 0, 0]} scale={5} >
            <primitive object={Europe_Map.scene} />
        </mesh>
    )
}

export default Europe_Map