import { useGLTF, useScroll, useAnimations } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { motion as m3d } from 'framer-motion-3d'
import { useEffect, useRef } from 'react'

const Experience_Model = () => {
    const { scene, nodes, animations } = useGLTF('/models/cityscape.glb')
    const { actions } = useAnimations(animations, scene)
    const scroll = useScroll()

    return (
        <>
            <primitive object={scene} />
        </>
    )
}

export default Experience_Model