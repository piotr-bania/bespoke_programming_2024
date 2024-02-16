'use client'

import { Suspense, useRef, useState, useEffect } from 'react'
import { motion as m } from 'framer-motion'
import { canvas_variant } from '../animations/Framer_Motion_Variants'
import { Fog } from 'three'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Loader from '../animations/Loader'
import Scene from './Scene'
import Padlock from './padlock/Padlock'

const Experience = () => {
    const cameraRef = useRef()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <m.div
            className='canvas'
            initial='hidden'
            animate='visible'
            variants={canvas_variant}
        >
            <Canvas
                onCreated={(state) => {
                    state.gl.setClearColor('#2A2B37')
                    state.scene.fog = new Fog('#2A2B37', 0, 40)
                }}
            >
                <Suspense fallback={<Loader />}>
                    <Environment files='./environment/woods_2k.hdr' />
                    <PerspectiveCamera
                        makeDefault
                        ref={cameraRef}
                        position={[0, 2, 20]}
                        fov={20}
                    />
                    {/* <OrbitControls
                        target={cameraRef.position}
                        minPolarAngle={Math.PI / 2.15}
                        maxPolarAngle={Math.PI / 2}
                        enableZoom={false}
                        enablePan={false}
                        enableDamping
                        dampingFactor={0.1}
                        rotateSpeed={0.1}
                    /> */}
                    {/* {loading ? <Loader /> : <Scene />} */}
                    <Padlock />
                </Suspense>
            </Canvas>
        </m.div>
    )
}

export default Experience