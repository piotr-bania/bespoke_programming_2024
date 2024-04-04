'use client'

import './Button.scss'
import { Button_Variant } from '../animations/Text'
import { motion as m } from 'framer-motion'

const Button = ({ buttonText, className }) => {
    return (
        <m.button
            className={`button ${className}`}
            initial='hidden'
            animate='visible'
            variants={Button_Variant}
            >
                {buttonText}
        </m.button>
    )
}

export default Button