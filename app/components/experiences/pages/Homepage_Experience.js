import { Float, useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import { degToRad } from 'three/src/math/MathUtils'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Hero_Model = () => {
	const { scene } = useGLTF('/models/retro_desk_console.glb')
	const screen = useGLTF('/models/retro_desk_screen.glb').scene

	useEffect(() => {
		const video = document.createElement('video')
		video.src = '/video/retro_desk_screen.mp4'
		video.crossOrigin = 'anonymous'
		video.loop = true
		video.muted = true
		video.play()

		const videoTexture = new THREE.VideoTexture(video)
		videoTexture.flipY = false

		screen.traverse((child) => {
			if (child.isMesh) {
				child.material = new THREE.MeshBasicMaterial({
					map: videoTexture,
					roughness: 0.7,
                    metalness: 0.1,
				})
			}
		})
	}, [screen])

	return (
		<Float
			speed={1}
			rotationIntensity={0.25}
			floatIntensity={0.25}
			floatingRange={[-0.25, 0.25]}
		>
			<mesh
				position={[3, 3, 0]}
				rotation={[degToRad(10), 0, degToRad(0)]}
				scale={4}
			>
				<primitive object={scene} />
			</mesh>

			<mesh
				position={[3, 3, 0]}
				rotation={[degToRad(10), 0, degToRad(0)]}
				scale={4}
			>
				<primitive object={screen} />
			</mesh>
		</Float>
	)
}

export default Hero_Model
