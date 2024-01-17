'use client'

import { motion as m } from 'framer-motion'
import { button_variant } from '../animations/Framer_Motion_Variants'
import Link from 'next/link'

const Button_Component = ({ buttonText, href, className = '' }) => {
    return (
        <m.button
            className={`button ${className}`}
            href={href}
            initial="hidden"
            animate="visible"
            variants={button_variant}
        >
            {buttonText}
        </m.button>
    )
}

export default Button_Component