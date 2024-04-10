import { Float, useGLTF, useScroll, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { motion as m3d } from 'framer-motion-3d'
import { useEffect } from 'react'

const Hero_Model = () => {
    const { scene, animations } = useGLTF('/models/gears.glb')
    const { actions } = useAnimations(animations, scene)
    const scroll = useScroll()

    useEffect(() => {
        Object.values(actions).forEach(action => {
            action.play()
            action.paused = true
        })
    }, [actions])

    useFrame((state, delta) => {
        const offset = scroll.offset / (scroll.pages - 1)
        Object.entries(actions).forEach(([_, action]) => {
            action.time = (offset * action.getClip().duration) % action.getClip().duration
        })

        state.camera.position.y = Math.sin(offset * Math.PI * 2) * 10
        state.camera.position.z= Math.cos(offset * Math.PI * 3) * 10
        state.camera.lookAt(0, 0, 0)
    })

    return (
        <Float
            speed={3}
            rotationIntensity={.5}
            floatIntensity={.25}
            floatingRange={[-.15, 0.15]}
        >
            <mesh 
                // position={[2, -3, 1]}
                // rotation={[-.5, -0.5, 0.5]}
                // scale={.25}
            >
                <primitive object={scene} />
            </mesh>
        </Float>
    )
}

export default Hero_Model