'use client'

import './hero_section.scss'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { motion as m } from 'framer-motion'
import { canvas_variant } from '../animations/Framer_Motion_Variants'
import Homepage from '../models/Homepage'
import Scrolled_Camera from '../animations/Scrolled_Camera'

const Hero_Canvas = () => {
    return (
        <m.div
            initial='hidden'
            animate='visible'
            variants={canvas_variant}
            className='hero_canvas'
        >
            <Canvas shadows>
                {/* <PerspectiveCamera makeDefault position={[0, 0, 6]} /> */}
                <Scrolled_Camera />
                <Environment files='./environment/christmas_photo_studio_06_1k.hdr' />
                {/* <directionalLight castShadow intensity={1} position={[4, 2, 5]}/> */}

                <Suspense fallback={null}>
                    <group scale={14} position-y={0}>
                        <Homepage />
                    </group>
                </Suspense>
            </Canvas>
        </m.div>
    )
}

export default Hero_Canvas