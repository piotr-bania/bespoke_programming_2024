'use client'

import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import { canvas_variant } from '../../animations/Framer_Motion_Variants'
import { MotionCanvas } from 'framer-motion-3d'
import { Fog } from 'three'
import { Environment, Sparkles } from '@react-three/drei'
import Animated_Camera from '../../animations/Animated_Camera'
import Custom_Orbit_Controls from '../../animations/Custom_Orbit_Controls'
import Homepage from './Homepage'

const Homepage_Canvas = () => {
    const [isCameraAnimated, setIsCameraAnimated] = useState(false)
    const handleAnimationComplete = () => {
        setIsCameraAnimated(true)
    }

    return (
        <m.div
            initial='hidden'
            animate='visible'
            variants={canvas_variant}
            className='canvas'
        >
            <MotionCanvas shadows
                onCreated={(state) => {
                    state.gl.setClearColor('#2A2B37')
                    state.scene.fog = new Fog('#2A2B37', 0, 175)
                }}
                >
                <Environment
                    files='./environment/kloppenheim_02_puresky_1k.hdr'
                    />
                <Animated_Camera onAnimationComplete={handleAnimationComplete} />
                {isCameraAnimated  && (
                    <Custom_Orbit_Controls targetPosition={[0, 3, 0]} />
                )}
                <Homepage />
            </MotionCanvas>
        </m.div>
    )
}

export default Homepage_Canvas