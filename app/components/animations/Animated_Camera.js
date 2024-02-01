import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Animated_Camera = ({ cameraRef, setCameraIsAnimated }) => {
    useFrame(() => {
        if (cameraRef.current && cameraRef.current.position.distanceTo(new THREE.Vector3(0, 1, 12)) > 0.1) {
            cameraRef.current.position.lerp(new THREE.Vector3(0, 1, 12), 0.1)
        } else if (cameraRef.current) {
            cameraRef.current.position.set(0, 1, 12)
            setCameraIsAnimated(false)
        }
    })

    // const transition = {
    //     duration: 3,
    //     ease: [0.25, 0.1, 0.25, 1],
    //     onComplete: onAnimationComplete
    // }

    return null
}

export default Animated_Camera