import { motion as m } from 'framer-motion'
import { Page_Leave_Variant } from '../animations/Page_Transition'

const Leave_Animation = ({ onAnimationComplete }) => {
    return (
        <m.div
            initial='hidden'
            animate='visible'
            variants={Page_Leave_Variant}
            onAnimationComplete={onAnimationComplete}
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                backgroundColor: '#07030F'
            }}
        />
    )
}

export default Leave_Animation