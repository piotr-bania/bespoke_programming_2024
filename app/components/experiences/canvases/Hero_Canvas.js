'use client'

import { Environment, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import Cursor_Light from '../scene_elements/Cursor_Light'
import Hero_Model from './Hero_Model'

const Hero_Canvas = () => {

    return (
        <Canvas shadows className='hero_canvas'>
            <PerspectiveCamera
                makeDefault
                position={[0, 0, 10]}
                fov={15}
            />

            <Environment files='./environment/dikhololo_night_1k.hdr' />

            {/* <Cursor_Light /> */}

            <Hero_Model />
        </Canvas>
    )
}

export default Hero_Canvas