'use client'

import { useState } from 'react'
import Enter_Animation from './components/ui/transitions/Enter_Animation'

const Template = ({ children }) => {
    const [isAnimating, setIsAnimating] = useState(true)
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

export default Template