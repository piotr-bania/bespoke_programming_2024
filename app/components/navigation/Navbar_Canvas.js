'use client'

import React, { Suspense } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment, Html, OrbitControls } from '@react-three/drei'
import Navbar_Logo from './Navbar_Logo'
import { canvas_variant } from '../animations/Framer_Motion_Variants'

const Navbar_Canvas = () => {
    return (
        <AnimatePresence>
            <m.div
                className='canvas_navbar'
                initial='hidden'
                animate='visible'
                variants={canvas_variant}
            >
                <Canvas className='canvas' shadows>
                    <Suspense fallback={null}>
                        <PerspectiveCamera makeDefault position={[0, 0, 2]} />
                        <ambientLight />
                        <Environment files='./environment/neon_photostudio_1k.hdr' />

                        <Navbar_Logo />
                    </Suspense>
                </Canvas>
            </m.div>
        </AnimatePresence>
    )
}

export default Navbar_Canvas