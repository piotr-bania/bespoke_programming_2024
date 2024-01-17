import { Float, useGLTF } from '@react-three/drei'
import { motion as m3d } from 'framer-motion-3d'
import { useRouter } from 'next/navigation'

const Page_404 = () => {
    const homepage = useGLTF('./models/button_home.glb')
    const text = useGLTF('./models/text_404.glb')
    const background = useGLTF('./models/background_404.glb')
    const spheres = useGLTF('./models/spheres.glb')

    const router = useRouter()
    const handleClick = () => {
        router.push('/')
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

export default Page_404