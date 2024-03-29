'use client'

import { useEffect, useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { ShaderMaterial, TextureLoader, Vector2 } from 'three'
import wave_vert  from '../../../../public/shaders/wave.vert'
import wave_frag  from '../../../../public/shaders/wave.frag'

const Featured_Project_1 = () => {
    const waveMaterialRef = useRef()
    const [material, setMaterial] = useState([])
    const textureLoader = new TextureLoader()

    useFrame((_, delta) => {
        if (material) {
            material.uniforms.uTime.value += delta
        }

        if (meshRef.current) {
            meshRef.current.lookAt(camera.position)
        }
    })

    useEffect(() => {
        const texture = textureLoader.load('/images/mara_river.png')
        const Wave_Material  = new ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uFrequency: { value: new Vector2(2, 1) },
                uTransparency: { value: 1 },
                uTexture: { value: texture },
            },
            vertexShader: wave_vert,
            fragmentShader: wave_frag
        })

        setMaterial(Wave_Material )
    }, [])

    return (
        <mesh position={[0, 0, 0]}>
            <planeGeometry args={[5, 2.8, 128, 128]} />

        </mesh>
    )
}

export default Featured_Project_1