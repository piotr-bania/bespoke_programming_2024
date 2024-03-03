import { motion as m } from 'framer-motion'

const Leave_Animation = ({ onAnimationComplete }) => {
    return (
        <m.div
            initial={{ height: '0vh' }}
            animate={{ height: '100vh', transition: { 
                duration: .75,
                ease: "easeInOut"
            }}}
            exit={{ height: '0vh', transition: { 
                duration: .75,
                delay: .25,
                ease: "easeInOut"
            }}}
            onAnimationComplete={onAnimationComplete}
            style={{
                background: '#e7b46c',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 100
            }}
        />
    )
}

export default Leave_Animation