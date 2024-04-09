'use client'

import { Environment, Html, PerspectiveCamera, ScrollControls, useScroll } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Hero_Model from './Hero_Model'
import Homepage_Experience from './scenes/Homepage_Experience'
import { AnimatePresence, motion as m } from 'framer-motion'
import { Paragraph_Variant } from '../../ui/animations/Text'
import Image from 'next/image'
import Heading_1 from '../../ui/headings/Heading_1'
import Heading_2 from '../../ui/headings/Heading_2'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Hero_Canvas = () => {
    return (
        <Canvas shadows className='hero_canvas'>
            <ScrollControls damping={0.1} pages={5}>
                <PerspectiveCamera
                    makeDefault
                    position={[-1, 1, 20]}
                    fov={15}
                />

                <Environment files='./environment/cyclorama_hard_light_1k.hdr' />

                <Hero_Model />
                {/* <Homepage_Experience /> */}
            </ScrollControls>
        </Canvas>
    )
}

export default Hero_Canvas