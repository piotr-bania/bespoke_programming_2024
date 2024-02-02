import { useGLTF, Text, Float } from '@react-three/drei'
import { useRouter } from 'next/navigation'

const Room_0 = () => {
    const room_0 = useGLTF('./models/room_0/room_0.glb')

    const router = useRouter()
    const handleClick = () => {
        router.push('/about')
    }

    return (
        <group position={[0, -1.35, 0]} >
            <mesh receiveShadow >
                <primitive object={room_0.scene} />
            </mesh>
            
            <Float
                speed={15}
                rotationIntensity={0}
                floatIntensity={1}
                floatingRange={[-.1, .1]}
            >
                <Text
                    position={[0, 2, -22]}
                    font='./fonts/neuropol.otf'
                    fontSize={.25}
                    color='white'
                    anchorX='center'
                    anchorY='middle'
                    textAlign='center'
                    maxWidth={1.5}
                    lineHeight={1}
                    onClick={handleClick}
                >
                    Room 1: The Garden of Ideas
                </Text>
            </Float>
        </group>
    )
}

export default Room_0