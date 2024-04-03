'use client'

import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import wave_vert from '../../../../public/shaders/wave.vert'
import wave_frag from '../../../../public/shaders/wave.frag'
import { useTexture } from '@/app/hooks/useTexture'

const Wave_Image = ({ position = [0, 0, 0], size = 1, textureUrl }) => {
    const meshRef = useRef()
    const texture = useTexture(textureUrl)
    const [material, setMaterial] = useState([])

    useFrame((_, delta) => {
        if (material.current) {
            material.current.uniforms.uTime.value += delta
        }
    })

    useEffect(() => {
        if (texture) {
            const Wave_Material = new THREE.ShaderMaterial({
                uniforms: {
                    uTime: { value: 0 },
                    uFrequency: { value: new THREE.Vector2(0.5, 0.28) },
                    uTransparency: { value: 1 },
                    uTexture: { value: texture },
                },
                vertexShader: wave_vert,
                fragmentShader: wave_frag,
                transparent: true,
            })
            setMaterial({ current: Wave_Material })
        }
    }, [texture])

    return (
        <mesh ref={meshRef} position={position} scale={[size, size, size]}>
            <planeGeometry args={[19.2, 10.8, 19, 10]} />
            {material.current && <primitive object={material.current} attach='material' />}
        </mesh>
    )
}

export default Wave_Image