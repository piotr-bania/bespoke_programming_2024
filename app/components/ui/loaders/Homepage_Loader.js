
import './Loaders.scss'
import { useState, useEffect } from 'react'
import { motion as m, AnimatePresence } from 'framer-motion'

const Homepage_Loader = ({ onLoadingComplete }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount === 100) {
                    clearInterval(interval)
                    onLoadingComplete()
                    return 100
                } else {
                    return prevCount + 1
                }
            })
        }, 20)

        return () => clearInterval(interval)
    }, [onLoadingComplete])

    const Counter_Variant = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: .5, ease: [.86, 0, .07, 1] } },
        exit: { opacity: 0, transition: { duration: .5 } },
    }

    return (
        <AnimatePresence>
            {count < 100 && (
                <m.div
                    key='loader'
                    variants={Counter_Variant}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    className='homepage_loader'
                >
                    <h1>{count}%</h1>
                </m.div>
            )}
        </AnimatePresence>
    )
}

export default Homepage_Loader