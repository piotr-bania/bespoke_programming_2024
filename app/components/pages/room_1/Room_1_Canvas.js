'use client'

import { Suspense, useRef, useState, useEffect } from 'react'
import { motion as m } from 'framer-motion'
import { canvas_variant } from '../../animations/Framer_Motion_Variants'
import { Fog } from 'three'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Room_1 from './Room_1'
import { Canvas } from '@react-three/fiber'
import Loader from '../../animations/Loader'

const Homepage_Canvas = () => {
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
                onCreated={(state) => {
                    state.gl.setClearColor('#305271')
                    state.scene.fog = new Fog('#305271', 0, 30)
                }}
            >
                <Suspense fallback={<Loader />}>
                    <Environment files='./environment/woods_2k.hdr' />

                    <PerspectiveCamera
                        makeDefault
                        ref={cameraRef}
                        position={[0, 0, 13]}
                        fov={15}
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
                    {loading ? <Loader /> : <Room_1 />}
                </Suspense>
            </Canvas>
        </m.div>
    )
}

export default Homepage_Canvas