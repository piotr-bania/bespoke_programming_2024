import { motion as m } from 'framer-motion'
import { Page_Enter_Variant } from '../animations/Page_Transition'

const Enter_Animation = () => {
    return (
        <m.div
            animate='visible'
            exit='hidden'
            variants={Page_Enter_Variant}
            style={{
                position: 'fixed',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                backgroundColor: '#07030F',
            }}
        />
    )
}

export default Enter_Animation