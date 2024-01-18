import { useEffect, useRef } from 'react'
import { Float, useGLTF, useAnimations } from '@react-three/drei'
import { motion as m3d } from 'framer-motion-3d'
import { useRouter } from 'next/navigation'

const Homepage = () => {
    const sceneRef = useRef()
    const { scene: homepage, animations } = useGLTF('./models/homepage.glb')
    const { actions } = useAnimations(animations, sceneRef)

    useEffect(() => {
        if (actions) {
            actions['subheadingAction'].play()
        }
    }, [actions])

    const hero_button = useGLTF('./models/hero_button.glb')

    const router = useRouter()
    const handleClick = () => {
        router.push('404')
    }

    return (
        <>
            <mesh ref={sceneRef} >
                <primitive object={homepage} />
            </mesh>

            <Float
                speed={5}
                rotationIntensity={.2}
                floatingRange={[.1, .2]}
                floatIntensity={0.2}
            >
                <m3d.mesh
                    whileHover={{ scale: 1.02 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    onClick={handleClick}
                >
                    <primitive object={hero_button.scene} />
                </m3d.mesh>
            </Float>
        </>
    )
}

export default Homepage