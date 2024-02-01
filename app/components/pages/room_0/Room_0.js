import { useGLTF } from '@react-three/drei'
import { useRouter } from 'next/navigation'

const Room_0 = () => {
    const room_0 = useGLTF('./models/room_0/room_0.glb')

    const router = useRouter()
    const handleClick = () => {
        router.push('/about')
    }

    return (
        <group>
            <mesh position={[0, -1.35, 0]} >
                <primitive object={room_0.scene} />
            </mesh>
        </group>
    )
}

export default Room_0