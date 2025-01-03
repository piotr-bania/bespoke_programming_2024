import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { Float, useGLTF } from '@react-three/drei'
import { degToRad } from 'three/src/math/MathUtils'
import * as THREE from 'three'

const Hero_Model = () => {
	const { scene } = useGLTF('/models/rocket_scene.glb')
	const screen = useGLTF('/models/retro_desk_screen.glb').scene

	const { viewport } = useThree()
	const scaleFactor = viewport.width / 10
	const positionY = viewport.height / 1.75

	// useEffect(() => {
	// 	const video = document.createElement('video')
	// 	video.src = '/video/retro_desk_screen.mp4'
	// 	video.crossOrigin = 'anonymous'
	// 	video.loop = true
	// 	video.muted = true
	// 	video.play()

	// 	const videoTexture = new THREE.VideoTexture(video)
	// 	videoTexture.flipY = false

	// 	screen.traverse((child) => {
	// 		if (child.isMesh) {
	// 			child.material = new THREE.MeshBasicMaterial({
	// 				map: videoTexture,
	// 				roughness: 0.7,
    //                 metalness: 0.1,
	// 			})
	// 		}
	// 	})
	// }, [screen])

	return (
		<Float
			speed={5}
			rotationIntensity={0.25}
			floatIntensity={0.5}
			floatingRange={[-0.25, 0.25]}
		>
			<mesh
				position={[scaleFactor * 3 - 2 + scaleFactor, positionY / scaleFactor, 0]}
				rotation={[degToRad(20), 0, degToRad(60)]}
				scale={scaleFactor}
			>
				<primitive object={scene} />
			</mesh>

			{/* <mesh
				position={[3, 3, 0]}
				rotation={[degToRad(10), 0, degToRad(0)]}
				scale={4}
			>
				<primitive object={screen} />
			</mesh> */}
		</Float>
	)
}

export default Hero_Model
