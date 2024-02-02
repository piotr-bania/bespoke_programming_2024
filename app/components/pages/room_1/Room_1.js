import { useGLTF, Text, Float } from '@react-three/drei'
import { useRouter } from 'next/navigation'

const Room_1 = () => {
    const room_1 = useGLTF('./models/room_1/room_1.glb')

    const router = useRouter()
    const handleClick = () => {
        router.push('/')
    }

    return (
        <group>
            <mesh position={[.25, -.75, 0]} rotation={[.1, -.1, 0]} >
                <primitive object={room_1.scene} />
            </mesh>

            <Float
                speed={15}
                rotationIntensity={0}
                floatIntensity={1}
                floatingRange={[-.1, .1]}
                >
                <Text
                    position={[0, .1, -3]}
                    rotation={[.1, -.1, 0]}
                    font='./fonts/neuropol.otf'
                    fontSize={.1}
                    color='white'
                    anchorX='center'
                    anchorY='middle'
                    textAlign='center'
                    maxWidth={1}
                    lineHeight={1}
                    onClick={handleClick}
                >
                    Entrance: The Gateway of Innovation
                </Text>
            </Float>
        </group>
    )
}

export default Room_1