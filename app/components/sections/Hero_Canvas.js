'use client'

import './hero_section.scss'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei'
import { motion as m } from 'framer-motion'
import { canvas_variant } from '../animations/Framer_Motion_Variants'
import Background from '../models/Background'
import Static_Clock_Parts from '../models/Static_Clock_Parts'
import Animated_Clock_Parts from '../models/Animated_Clock_Parts'
import Seconds_Hand from '../models/Seconds_Hand'
import Minutes_Hand from '../models/Minutes_Hand'
import Hours_Hand from '../models/Hours_Hand'

const Hero_Canvas = () => {
    return (
        <m.div
            initial='hidden'
            animate='visible'
            variants={canvas_variant}
            className='hero_canvas'
        >
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 3]} />
                <Environment files='./environment/neon_photostudio_1k.hdr' />
                <OrbitControls />

                {/* <Background /> */}
                <Static_Clock_Parts />
                <Animated_Clock_Parts />
                <Seconds_Hand />
                <Minutes_Hand />
                <Hours_Hand />
            </Canvas>
        </m.div>
    )
}

export default Hero_Canvas