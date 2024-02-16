import { useGLTF } from '@react-three/drei'

const Scene = () => {
    const scene = useGLTF('./models/scenes/scene.glb')

    return (
        <group position={[0, -2, 0]} >
            <primitive object={scene.scene} />
        </group>
    )
}

export default Scene