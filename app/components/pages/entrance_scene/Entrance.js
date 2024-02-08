import { useGLTF, Float } from '@react-three/drei'
import { useRouter } from 'next/navigation'
import { motion as m3d } from 'framer-motion-3d'

const Entrance = () => {
    const scene = useGLTF('./models/scenes/entrance_scene.glb')
    const cta = useGLTF('./models/scenes/cta.glb')

    const router = useRouter()
    const handleClick = () => {
        router.push('/about')
    }

    return (
        <group position={[0, -1.75, 0]} >
            <mesh receiveShadow >
                <primitive object={scene.scene} />
            </mesh>
            
            <Float
                speed={15}
                rotationIntensity={0}
                floatIntensity={1}
                floatingRange={[-.05, .05]}
            >
                <m3d.primitive
                    object={cta.scene}
                    whileHover={{ scale: 1.1 }}
                    onClick={handleClick}
                />
            </Float>
        </group>
    )
}

export default Entrance