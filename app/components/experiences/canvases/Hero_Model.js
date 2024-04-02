import { Float, useGLTF } from '@react-three/drei'

const Hero_Model = () => {
    const Hero_Model = useGLTF('/models/padlock.glb')

    return (
        <Float
            speed={3}
            rotationIntensity={.5}
            floatIntensity={.25}
            floatingRange={[-.15, 0.15]}
        >
            <mesh 
                position={[1.25, 0, 0]}
                rotation={[-.5, -0.5, -0.15]}
                scale={.5}
            >
                <primitive object={Hero_Model.scene} />
            </mesh>
        </Float>
    )
}

export default Hero_Model