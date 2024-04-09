import { useGLTF } from '@react-three/drei'
import { motion as m3d } from 'framer-motion-3d'
import { useRouter } from 'next/navigation'

const Homepage_Experience = () => {
    const { nodes, materials } = useGLTF('/models/pages/home/home.glb')
    const router = useRouter()
    const handleClick = () => {
        router.push('/about')
    }

    return (
        <>
            <mesh
                geometry={nodes.homepage.geometry}
                rotation={nodes.homepage.rotation}
                position={nodes.homepage.position}
                material={materials.white}
            />

            <m3d.mesh
                geometry={nodes.button_about_1.geometry}
                rotation={nodes.button_about_1.rotation}
                position={nodes.button_about_1.position}
                material={materials.indigo}
                whileHover={{ scale: 1.02 }}
                onClick={handleClick}
            />
        </>
    )
}

export default Homepage_Experience