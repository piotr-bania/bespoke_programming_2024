'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { motion as m } from 'framer-motion'
import { canvas_variant } from '../../components/animations/Framer_Motion_Variants'
import Scrolled_Camera from '../../components/animations/Scrolled_Camera'
import Page_404 from './Page_404'

const Canvas_404 = () => {
    return (
        <m.div
            initial='hidden'
            animate='visible'
            variants={canvas_variant}
            className='hero_canvas'
        >
            <Canvas shadows>
                <Scrolled_Camera />
                <Environment files='./environment/secluded_beach_2k.hdr' />
                <directionalLight castShadow intensity={1} position={[4, 2, 5]}/>

                <Suspense fallback={null}>
                    <group scale={20} position-y={-3}>
                        <Page_404 />
                    </group>
                </Suspense>
            </Canvas>
        </m.div>
    )
}

export default Canvas_404