'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Enter_Animation from './Enter_Animation'

const Animation_Wrapper = ({ children }) => {
    const [isAnimating, setIsAnimating] = useState(true)
    
    useEffect(() => {
        const handleAnimationComplete = () => {
            setIsAnimating(false)
        }

        setIsAnimating(true)

        return () => handleAnimationComplete()
    }, [children])

    return (
        <>
            <AnimatePresence mode='wait'>
                {isAnimating && <Enter_Animation onAnimationComplete={() => setIsAnimating(false)} />}
            </AnimatePresence>
            {children}
        </>
    )
}

export default Animation_Wrapper