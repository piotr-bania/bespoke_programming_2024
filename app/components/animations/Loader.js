import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Text } from '@react-three/drei'

const Loader = () => {
    const logo = useGLTF('./models/logo.glb')
    const loaderRef = useRef()

    useFrame(() => {
        loaderRef.current.rotation.y -= 0.01
    })

    return (
        <mesh position={[0, .125, 0]} >
            <primitive ref={loaderRef} object={logo.scene} />
            <Text
                position={[0, -.25, 0]}
                font='./fonts/neuropol.otf'
                fontSize={.1}
                color='white'
                anchorX='center'
                anchorY='middle'
                textAlign='center'
            >
                Loading...
            </Text>
        </mesh>
    )
}

export default Loader