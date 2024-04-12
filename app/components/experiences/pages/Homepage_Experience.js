import { Float, useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'
import { degToRad } from 'three/src/math/MathUtils'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Hero_Model = () => {
    const { scene, animations } = useGLTF('/models/untitled.glb')
    const { actions } = useAnimations(animations, scene)
    const meshRef = useRef()

    useEffect(() => {
        Object.values(actions).forEach(action => {
            action.play()
        })
    }, [actions])

    useFrame(() => {
        meshRef.current.rotation.y -= 0.0005
    })

    return (
        // <Float
        //     speed={2}
        //     rotationIntensity={2}
        //     floatIntensity={.5}
        //     floatingRange={[-.5, .5]}
        // >
        //     <mesh
        //         position={[2.75, -.6, 0]}
        //         rotation={[degToRad(30), 0, degToRad(60)]}
        //         scale={.65}
        //     >
        //         <primitive object={scene} />
        //     </mesh>
        // </Float>

        <mesh
            ref={meshRef}
            position={[1, 0, 0]}
            scale={2}
        >
            <primitive object={scene} />
        </mesh>
    )
}

export default Hero_Model