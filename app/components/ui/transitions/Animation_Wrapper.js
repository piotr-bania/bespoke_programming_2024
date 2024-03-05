'use client'

import { useState } from 'react'
import Enter_Animation from './Enter_Animation'

const Animation_Wrapper = ({ children }) => {
    const [isAnimating, setIsAnimating] = useState(false)
    const handleAnimationComplete = () => {
        setIsAnimating(false)
    }

    return (
        <>
            {isAnimating && <Enter_Animation onAnimationComplete={handleAnimationComplete} />}
            {children}
        </>
    )
}

export default Animation_Wrapper