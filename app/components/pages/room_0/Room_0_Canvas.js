'use client'

import React, { useRef } from 'react'
import { motion as m } from 'framer-motion'
import { canvas_variant } from '../../animations/Framer_Motion_Variants'
import { Fog } from 'three'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Room_0 from './Room_0'
import { Canvas } from '@react-three/fiber'

const Room_0_Canvas = () => {
    const cameraRef = useRef()

    return (
        <m.div
            initial='hidden'
            animate='visible'
            variants={canvas_variant}
            className='canvas'
        >
            <Canvas
                onCreated={(state) => {
                    state.gl.setClearColor('#2A2B37')
                    state.scene.fog = new Fog('#2A2B37', 0, 60)
                }}
            >
                <Environment files='./environment/woods_2k.hdr' />

                <PerspectiveCamera
                    makeDefault
                    ref={cameraRef}
                    position={[0, 0, 15]}
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
                <Room_0 />
            </Canvas>
        </m.div>
    )
}

export default Room_0_Canvas