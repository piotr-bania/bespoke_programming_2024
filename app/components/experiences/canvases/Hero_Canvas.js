'use client'

import { Environment, Html, OrbitControls, PerspectiveCamera, ScrollControls, useScroll } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Hero_Model from './Hero_Model'

const Hero_Canvas = () => {
    return (
        <Canvas shadows className='hero_canvas'>
            <ScrollControls damping={0.1} pages={5}>
                <PerspectiveCamera
                    makeDefault
                    position={[0, 5, 20]}
                    fov={45}
                />
                <Environment files='./environment/cyclorama_hard_light_1k.hdr' />
                <Hero_Model />
            </ScrollControls>
        </Canvas>
    )
}

export default Hero_Canvas