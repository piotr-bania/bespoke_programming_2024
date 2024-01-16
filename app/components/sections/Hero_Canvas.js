'use client'

import './hero_section.scss'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei'
import { motion as m } from 'framer-motion'
import { canvas_variant } from '../animations/Framer_Motion_Variants'

const Hero_Canvas = () => {
    return (
        <m.div
            initial='hidden'
            animate='visible'
            variants={canvas_variant}
            className='hero_canvas'
        >
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 1]} />
                <Environment files='./environment/neon_photostudio_1k.hdr' />
                <OrbitControls />


            </Canvas>
        </m.div>
    )
}

export default Hero_Canvas