import { Float, useGLTF } from '@react-three/drei'
import { motion as m3d } from 'framer-motion-3d'
import { useRouter } from 'next/navigation'

const Homepage = () => {
    const homepage = useGLTF('./models/button_404.glb')
    const text = useGLTF('./models/text_homepage.glb')
    const background = useGLTF('./models/background_home.glb')
    const spheres = useGLTF('./models/spheres.glb')

    const router = useRouter()
    const handleClick = () => {
        router.push('404')
    }

    return (
        <>
            <mesh>
                <primitive object={background.scene} />
            </mesh>

            <mesh>
                <primitive object={text.scene} />
            </mesh>

            <mesh>
                <primitive object={spheres.scene} />
            </mesh>

            <Float
                speed={5}
                rotationIntensity={.2}
                floatingRange={[.1, .2]}
                floatIntensity={0.2}
            >
                <m3d.mesh
                    whileHover={{ scale: 1.05 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    onClick={handleClick}
                >
                    <primitive object={homepage.scene} />
                </m3d.mesh>
            </Float>
        </>
    )
}

export default Homepage