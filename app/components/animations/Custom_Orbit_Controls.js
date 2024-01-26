import React, { useRef, useEffect, useState } from 'react'
import { OrbitControls } from '@react-three/drei'

const Custom_Orbit_Controls = ({ targetPosition }) => {
    const orbitControlsRef = useRef()
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
    if (orbitControlsRef.current) {
        orbitControlsRef.current.target.set(...targetPosition)
        orbitControlsRef.current.update()
    }
    }, [targetPosition])

    const minAzimuthAngle = isSmallScreen ? -Math.PI / 4 : -Math.PI / 10
    const maxAzimuthAngle = isSmallScreen ? Math.PI / 4 : Math.PI / 10

    return <OrbitControls
    ref={orbitControlsRef}
    minAzimuthAngle={minAzimuthAngle}
    maxAzimuthAngle={maxAzimuthAngle}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        minDistance={40}
        maxDistance={40}
        enablePan={false}
        enableDamping
        dampingFactor={0.05}
        rotateSpeed={0.1}
    />
}

export default Custom_Orbit_Controls