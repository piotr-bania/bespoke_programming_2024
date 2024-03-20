'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'
import Leave_Animation from './Leave_Animation'
import Link from 'next/link'

const Route_Change = ({ href, children, onClick }) => {
    const router = useRouter()
    const [isAnimating, setIsAnimating] = useState(false)

    const onAnimationComplete = () => {
        setIsAnimating(false)
        router.push(href)
    }

    const handleClick = (e) => {
        e.preventDefault()
        if (isAnimating) return
        if (onClick) {
            onClick()
        }
        setIsAnimating(true)
    }

    return (
        <div className='cta'>
            <Link href={href} passHref onClick={handleClick} className='button' >
                {children}
            </Link>
            
            <AnimatePresence mode='wait'>
                {isAnimating && <Leave_Animation onAnimationComplete={onAnimationComplete} />}
            </AnimatePresence>
        </div>
    )
}

export default Route_Change