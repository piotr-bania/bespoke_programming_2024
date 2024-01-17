'use client'

import { useEffect, useState } from 'react'
import { useThree } from '@react-three/fiber'
import { motion as m } from 'framer-motion-3d'

const Scrolled_Camera = () => {
    const { camera } = useThree()
    const [positionY, setPositionY] = useState(0)
    const [fov, setFov] = useState(25)

    useEffect(() => {
        const handleScroll = () => {
            setPositionY(window.scrollY / -500)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        camera.fov = fov
        camera.updateProjectionMatrix()
    }, [fov, camera])

    return (
        <m.group
            position-z={fov}
            position-y={positionY}
            transition={{ type: 'spring', damping: 10, stiffness: 100 }}
        >
            <primitive object={camera} />
        </m.group>
    )
}

export default Scrolled_Camera