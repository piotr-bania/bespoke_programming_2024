'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { motion as m } from 'framer-motion'

const Project_Canvas = ({ projectComponent }) => {
    return (
        <m.div
            className='project_canvas'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Canvas>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 0, 4]} />
                    <ambientLight intensity={1.5} />
                    {projectComponent}
                </Suspense>
            </Canvas>
        </m.div>
    )
}

export default Project_Canvas