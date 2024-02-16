import './padlock.scss'
import { Html } from '@react-three/drei'
import { motion as m3d } from 'framer-motion-3d'
import { useGLTF, Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Padlock = () => {
    const padlock = useGLTF('./models/scenes/padlock.glb')
    const button = useGLTF('./models/scenes/button.glb')

    const padlockRef = useRef()

    useFrame(() => {
        padlockRef.current.rotation.y -= 0.005
    })

    return (
        <>
            <Html
                className='padlock_overlay'
                center
            >
                <div className='text'>
                    <h1>Unlock Your Business's Digital Future</h1>
                    <h2>Begin with Innovation, Not Invoices</h2>
                </div>
            </Html>

            <primitive ref={padlockRef} object={padlock.scene} />

            <Float
                speed={5}
                rotationIntensity={0.25}
                floatIntensity={1}
                floatingRange={[-.15, .15]}
            >
                <primitive object={button.scene} />
            </Float>
        </>
    )
}

export default Padlock