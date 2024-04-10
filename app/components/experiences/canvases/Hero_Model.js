import { Float, useGLTF, useScroll, useAnimations } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { motion as m3d } from 'framer-motion-3d'
import { useEffect, useRef } from 'react'
import { CatmullRomCurve3, Vector3 } from 'three'

const Hero_Model = () => {
    const { scene, nodes, animations } = useGLTF('/models/cityscape.glb')
    const camera_path = useGLTF('/models/camera_path.glb')

    const { actions } = useAnimations(animations, scene)

    const scroll = useScroll()
    const cameraRef = useRef()
    const { camera } = useThree()

    useEffect(() => {
        Object.values(actions).forEach(action => {
            action.play()
            action.paused = true
        })
    }, [actions])

    console.log(camera_path.scene)

    useFrame((state, delta) => {
        const offset = scroll.offset
        const target_1 = nodes.target_1.position
        const target_2 = nodes.target_2.position
        const target_3 = nodes.target_3.position
        const target_4 = nodes.target_4.position
        const target_5 = nodes.target_5.position
        const target_6 = nodes.target_6.position
        const target_7 = nodes.target_7.position
        const target_8 = nodes.target_8.position
        const target_9 = nodes.target_9.position

        Object.entries(actions).forEach(([_, action]) => {
            action.time = (offset * action.getClip().duration) % action.getClip().duration
        })

        // state.camera.position.x = Math.cos(offset * Math.PI * 2) * 20
        // state.camera.position.y = Math.sin(offset * Math.PI * 2) * 20
        // state.camera.position.z= Math.cos(offset * Math.PI * 2) * 20
        // state.camera.lookAt(heroPosition)

        let t = Math.min(offset / 0.1, 1)
        let t2 = Math.min((offset - 0.1) / 0.2, 1)
        let t3 = Math.min((offset - 0.2) / 0.3, 1)
        let t4 = Math.min((offset - 0.3) / 0.4, 1)
        let t5 = Math.min((offset - 0.4) / 0.5, 1)
        let t6 = Math.min((offset - 0.5) / 0.6, 1)
        let t7 = Math.min((offset - 0.6) / 0.7, 1)
        let t8 = Math.min((offset - 0.7) / 0.8, 1)
        let t9 = Math.min((offset - 0.8) / 0.9, 1)

        if (offset < .1) {
            state.camera.position.lerpVectors(
                target_1,
                target_2,
                t
            )

            const target = (target_1).clone().lerp(target_2, t)
            state.camera.lookAt(0, 0, 0)

        } else if (offset < .2) {
            state.camera.position.lerpVectors(
                target_2,
                target_3,
                t2
            )
            
            const target = (target_2).clone().lerp(target_3, t2)
            state.camera.lookAt(0, 0, 0)
        } else if (offset < .3) {
            state.camera.position.lerpVectors(
                target_3,
                target_4,
                t3
            )

            const target = (target_3).clone().lerp(target_1, t3)
            state.camera.lookAt(0, 0, 0)
        } else if (offset < .4) {
            state.camera.position.lerpVectors(
                target_4,
                target_5,
                t4
            )

            const target = (target_4).clone().lerp(target_5, t4)
            state.camera.lookAt(0, 0, 0)
        } else if (offset < .5) {
            state.camera.position.lerpVectors(
                target_5,
                target_6,
                t5
            )

            const target = (target_5).clone().lerp(target_6, t5)
            state.camera.lookAt(0, 0, 0)
        } else if (offset < .6) {
            state.camera.position.lerpVectors(
                target_6,
                target_7,
                t6
            )

            const target = (target_6).clone().lerp(target_7, t6)
            state.camera.lookAt(0, 0, 0)
        } else if (offset < .7) {
            state.camera.position.lerpVectors(
                target_7,
                target_8,
                t7
            )

            const target = (target_7).clone().lerp(target_8, t7)
            state.camera.lookAt(0, 0, 0)
        } else if (offset < .8) {
            state.camera.position.lerpVectors(
                target_8,
                target_9,
                t8
            )

            const target = (target_8).clone().lerp(target_9, t8)
            state.camera.lookAt(0, 0, 0)
        } else {
            state.camera.position.lerpVectors(
                target_9,
                target_1,
                t9
            )

            const target = (target_9).clone().lerp(target_1, t9)
            state.camera.lookAt(0, 0, 0)
        }
    })

    return (
        <>
            <primitive object={camera_path.scene} />
            <primitive object={scene} />
        </>
    )
}

export default Hero_Model