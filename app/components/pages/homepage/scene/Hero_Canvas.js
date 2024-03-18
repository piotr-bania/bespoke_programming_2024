'use client'

import { Environment, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Cursor_Light from './Cursor_Light'

const Hero_Canvas = () => {
    return (
        <Canvas shadows className='hero_canvas'>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />

            <Environment files='./environment/dikhololo_night_1k.hdr' />

            <Cursor_Light />

            <mesh receiveShadow position={[0, 0, -0.5]} >
                <planeGeometry args={[7, 3.5, 7 * 3, 3.5 * 3]} />
                <meshStandardMaterial color='blue' />
            </mesh>

            <mesh receiveShadow castShadow rotation={[.3, .2, .1]} >
                <boxGeometry args={[1, .4, .2]} />
                <meshStandardMaterial color='white' />
            </mesh>
        </Canvas>
    )
}

export default Hero_Canvas