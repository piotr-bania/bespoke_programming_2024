'use client'

import { Suspense, useRef, useState, useEffect } from 'react'
import { motion as m } from 'framer-motion'
import { canvas_variant } from '../../animations/Framer_Motion_Variants'
import { Fog } from 'three'
import { Environment, OrbitControls, PerspectiveCamera, SoftShadows } from '@react-three/drei'
import Room_0 from './Room_0'
import { Canvas, useFrame } from '@react-three/fiber'
import Loader from '../../animations/Loader'

const Animated_Light = () => {
    const lightRef = useRef()

    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime()
        const speed = 1
        const x = Math.sin(time * speed) * 3
        const y = 3
        const z = Math.cos(time * speed) * 3

        lightRef.current.position.set(x, y, z)
    })

    return (
        <directionalLight
            ref={lightRef}
            position={[5, 5, 5]}
            intensity={10}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-20}
            shadow-camera-right={20}
            shadow-camera-top={20}
            shadow-camera-bottom={-20}
        />
    )
}

const Room_0_Canvas = () => {
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
                    state.scene.fog = new Fog('#2A2B37', 0, 60)
                }}
            >
                <SoftShadows
                    size={30}
                    samples={20}
                    focus={0.5}
                />
                <Suspense fallback={<Loader />}>
                    <Environment files='./environment/woods_2k.hdr' />

                    <PerspectiveCamera
                        makeDefault
                        ref={cameraRef}
                        position={[0, 0, 15]}
                        fov={15}
                    />

                    <Animated_Light />

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
                    {loading ? <Loader /> : <Room_0 />}
                </Suspense>
            </Canvas>
        </m.div>
    )
}

export default Room_0_Canvas