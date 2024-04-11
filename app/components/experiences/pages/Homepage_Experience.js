import { Float, useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'
import { degToRad } from 'three/src/math/MathUtils'

const Hero_Model = () => {
    const { scene, animations } = useGLTF('/models/rocket_scene.glb')
    const { actions } = useAnimations(animations, scene)

    useEffect(() => {
        Object.values(actions).forEach(action => {
            action.play()
        })
    }, [actions])

    return (
        <Float
            speed={2}
            rotationIntensity={2}
            floatIntensity={.5}
            floatingRange={[-.5, .5]}
        >
            <mesh
                position={[2.75, -.6, 0]}
                rotation={[degToRad(30), 0, degToRad(60)]}
                scale={.65}
            >
                <primitive object={scene} />
            </mesh>
        </Float>
    )
}

export default Hero_Model