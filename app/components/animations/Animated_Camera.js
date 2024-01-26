import { LayoutCamera } from 'framer-motion-3d'

const Animated_Camera = ({ onAnimationComplete }) => {
    const transition = {
        duration: 3,
        ease: [0.25, 0.1, 0.25, 1],
        onComplete: onAnimationComplete
    }

    return (
        <LayoutCamera
            makeDefault
            initial={{ x: 0, y: 10, z: 60 }}
            animate={{ x: 0, y: 3, z: 40 }}
            fov={15}
            transition={transition}
        />
    )
}

export default Animated_Camera