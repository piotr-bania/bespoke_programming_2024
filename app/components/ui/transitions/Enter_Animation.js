import './Animations.scss'
import { motion as m } from 'framer-motion'
import { Page_Enter_Variant } from '../animations/Page_Transition'

const Enter_Animation = () => {
    return (
        <m.div
            className='animation_container'
            animate='visible'
            exit='hidden'
            variants={Page_Enter_Variant}
        />
    )
}

export default Enter_Animation