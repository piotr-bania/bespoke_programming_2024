import './Animations.scss'
import { motion as m } from 'framer-motion'
import { Page_Leave_Variant } from '../animations/Page_Transition'

const Leave_Animation = ({ onAnimationComplete }) => {
    return (
        <m.div
            className='animation_container'
            initial='hidden'
            animate='visible'
            variants={Page_Leave_Variant}
            onAnimationComplete={onAnimationComplete}
        />
    )
}

export default Leave_Animation