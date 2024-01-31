import { useRef, useEffect } from 'react'
import { useGLTF, Sparkles } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import { Mesh, Group } from 'three'
import { motion as m3d } from 'framer-motion-3d'
import { useRouter } from 'next/navigation'

// extend({ Mesh, Group })

const Homepage = () => {
    const scene = useGLTF('./models/room_0/scene.glb')
    const entrance = useGLTF('./models/room_0/entrance.glb')
    const { nodes, materials } = useGLTF('./models/room_0/portal.glb')
    const test = useGLTF('./models/room_0/test.glb')

    const router = useRouter()
    const handleClick = () => {
        router.push('/404')
    }

    return (
        <group>
            {/* <primitive object={scene.scene} />
            <primitive object={entrance.scene} />

            <m3d.mesh
                whileHover={
                    {
                        scale: 1.1,
                        transition: {
                            duration: .5,
                            ease: [0.25, 0.1, 0.25, 1]
                        }
                    }
                }
                geometry={nodes.portal.geometry}
                position={nodes.portal.position}
                material={materials['portal']}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={handleClick}
            /> */}

            <mesh scale={2.2}>
                <primitive object={test.scene} />
            </mesh>

            <Sparkles
                color='#CEE9FC'
                count={50}
                size={100}
                scale={20}
                fade={.1}
                speed={.5}
                position={[0, 8, 0]}
            />
        </group>
    )
}

export default Homepage