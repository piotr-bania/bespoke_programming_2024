import { motion as m } from 'framer-motion'
import { Page_Enter_Variant } from '../animations/Page_Transition'

const Enter_Animation = ({ onAnimationComplete }) => {
    return (
        <m.div
            initial='hidden'
            animate='visible'
            variants={Page_Enter_Variant}
            onAnimationComplete={onAnimationComplete}
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                backgroundColor: 'green'
            }}
        />
    )
}

export default Enter_Animation