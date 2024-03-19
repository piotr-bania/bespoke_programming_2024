import { useState, useEffect } from 'react'
import { motion as m3d } from 'framer-motion-3d'

const Cursor_Light = () => {
    const [ cursor, setCursor ] = useState({ x: 0, y: 0 })
    const updateCursor = (e) => {
        setCursor({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        window.addEventListener('mousemove', updateCursor)
        return () => window.removeEventListener('mousemove', updateCursor)
    }, [])

    const screenToNormalized = (x, y) => ({
        x: (x / window.innerWidth) * 2 - 1,
        y: (y / window.innerHeight) * -2 + 1
    })

    const { x, y } = screenToNormalized(cursor.x, cursor.y)

    const lightPosition = { x: x * 5, y: y * 3, z: 1 }

    return (
        <m3d.pointLight
            castShadow
            position={[lightPosition.x, lightPosition.y, lightPosition.z]}
            intensity={1}
            distance={5}
            decay={2.5}
            color='#FFFFFF'
            transition={{ duration: 0.75, delay: 0.25, ease: [0.33, 1, 0.68, 1] }}
        />
    )
}

export default Cursor_Light