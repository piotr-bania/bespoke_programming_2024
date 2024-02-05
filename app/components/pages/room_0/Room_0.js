import { useGLTF, Text, Float } from '@react-three/drei'
import { useRouter } from 'next/navigation'

const Room_0 = (props) => {
    const room_0 = useGLTF('./models/room_0/room_0.glb')
    const { nodes, materials } = useGLTF('/models/room_0/room_0.glb')

    const router = useRouter()
    const handleClick = () => {
        router.push('/about')
    }

    return (
        <group position={[0, -1.35, 0]} >
            <group {...props} dispose={null}>
                <group name="Scene">
                    <mesh castShadow receiveShadow name="Plane" geometry={nodes.Plane.geometry} material={materials.entrance_path} position={[0, 0, -1.313]} scale={[0.705, 1, 5.219]} />
                    <mesh  receiveShadow name="ground" geometry={nodes.ground.geometry} material={materials.entrance_ground} position={[0, 0, -20]} scale={[15, 20, 25]} />
                    <mesh castShadow receiveShadow name="Plane002" geometry={nodes.Plane002.geometry} material={materials.entrance_path} position={[0, 0.095, -1.313]} scale={[0.538, 1, 5.219]} />
                    <mesh castShadow receiveShadow name="Plane003" geometry={nodes.Plane003.geometry} material={materials.entrance_path} position={[0, 0.095, -1.313]} scale={[0.654, 1, 5.219]} />
                    <mesh castShadow receiveShadow name="Circle" geometry={nodes.Circle.geometry} material={materials.entrance_circle} position={[0, 2.008, 0]} rotation={[Math.PI / 2, 0, 0]} />
                </group>
            </group>

            {/* <mesh receiveShadow >
                <primitive object={room_0.scene} />
            </mesh> */}
            
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