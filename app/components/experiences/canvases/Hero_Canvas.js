'use client'

import { Environment, Html, OrbitControls, PerspectiveCamera, ScrollControls, useScroll } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Homepage_Experience from '../pages/Homepage_Experience'

const Hero_Canvas = () => {
    return (
        <Canvas shadows className='hero_canvas'>
            {/* <ScrollControls damping={0.1} pages={5}> */}
            <PerspectiveCamera
                makeDefault
                position={[-5, 8, 75]}
                fov={15}
            />
            <Environment files='./environment/cyclorama_hard_light_1k.hdr' />
            <Homepage_Experience />

            {/* </ScrollControls> */}
        </Canvas>
    )
}

export default Hero_Canvas