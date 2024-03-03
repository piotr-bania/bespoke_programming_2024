'use client'

import './Button.scss'
// Make sure the path to Text_Variants is correct and it exports Button_Variant
import { Button_Variant } from '../animations/Text_Variants'
import { motion as m } from 'framer-motion'

const Button = ({ buttonText, className }) => {
    return (
        <m.button
            className={`button ${className}`}
            initial='hidden'
            animate='visible'
            whileHover='hover'
            whileTap='rest'
            variants={Button_Variant}
            >
                {buttonText}
        </m.button>
    )
}

export default Button