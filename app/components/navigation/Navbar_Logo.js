'use client'

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const Navbar_Logo = ({ opacity, glass }) => {
    const groupRef = useRef()
    const { nodes } = useGLTF('./models/logo.glb')

    useFrame(() => {
        groupRef.current.rotation.y -= 0.01
    })

    const material = React.useMemo(
        () =>
            new THREE.MeshPhysicalMaterial({
                transmission: 0.75,
                opacity: 0.75,
                clearcoat: 1,
                clearcoatRoughness: 0.2,
                roughness: 0.2,
                metalness: 0.2,
                envMapIntensity: 1,
                transparent: true,
                depthWrite: false,
                depthTest: true,
                map: glass,
            }),
        [opacity, glass]
    )

    return (
        <group ref={groupRef} scale={7} >
            <mesh
                geometry={nodes['base'].geometry}
                position={nodes['base'].position}>
                <meshPhysicalMaterial {...material} color={'#6526D1'} />
            </mesh>
            <mesh
                geometry={nodes['top'].geometry}
                position={nodes['top'].position}>
                <meshPhysicalMaterial {...material} color={'#9B26A1'} />
            </mesh>
            <mesh
                geometry={nodes['bottom'].geometry}
                position={nodes['bottom'].position}>
                <meshPhysicalMaterial {...material} color={'#D02670'} />
            </mesh>
        </group>
    )
}

export default Navbar_Logo