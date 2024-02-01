import { useGLTF } from '@react-three/drei'
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
        </group>
    )
}

export default Room_1