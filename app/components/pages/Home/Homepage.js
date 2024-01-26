import { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import { Mesh, Group } from 'three'
import { motion as m3d } from 'framer-motion-3d'
import { useRouter } from 'next/navigation'

extend({ Mesh, Group })

const Homepage = () => {
    const { scene: scene} = useGLTF('./models/room_0/scene.glb')
    const { scene: entrance } = useGLTF('./models/room_0/entrance.glb')
    const { scene: teleport } = useGLTF('./models/room_0/teleport.glb')

    const router = useRouter()
    const handleClick = () => {
        router.push('404')
    }

    return (
        <group>
            <primitive object={scene} />
            <primitive object={entrance} />
            
            <m3d.mesh
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={handleClick}
                >
                <primitive object={teleport} />
            </m3d.mesh>
        </group>
    )
}

export default Homepage