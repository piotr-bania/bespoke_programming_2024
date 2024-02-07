'use client'

import { Suspense, useRef, useState, useEffect } from 'react'
import { motion as m } from 'framer-motion'
import { canvas_variant } from '../../animations/Framer_Motion_Variants'
import { Fog } from 'three'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Entrance from './Entrance'
import { Canvas } from '@react-three/fiber'
import Loader from '../../animations/Loader'

const Entrance_Canvas = () => {
    const cameraRef = useRef()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <m.div
            initial='hidden'
            animate='visible'
            variants={canvas_variant}
            className='canvas'
        >
            <Canvas
                shadows
                onCreated={(state) => {
                    state.gl.setClearColor('#2A2B37')
                    state.scene.fog = new Fog('#2A2B37', 0, 50)
                }}
            >
                <Suspense fallback={<Loader />}>
                    <Environment files='./environment/sandsloot_1k.hdr' />

                    <PerspectiveCamera
                        makeDefault
                        ref={cameraRef}
                        position={[0, 0, 31.4]}
                        fov={18}
                    />

                    <OrbitControls
                        target={cameraRef.position}
                        minAzimuthAngle={-Math.PI / 40}
                        maxAzimuthAngle={Math.PI / 40}
                        minPolarAngle={Math.PI / 2.05}
                        maxPolarAngle={Math.PI / 2}
                        enableZoom={false}
                        enablePan={false}
                        enableDamping
                        dampingFactor={0.1}
                        rotateSpeed={0.02}
                    />
                    {loading ? <Loader /> : <Entrance />}
                </Suspense>
            </Canvas>
        </m.div>
    )
}

export default Entrance_Canvas