'use client'

import './headings.scss'
import { motion as m } from 'framer-motion'
import { h1_variant } from '../animations/Framer_Motion_Variants'

const Heading_1 = ({ h1Text, className = '' }) => {
    return (
        <div className={`heading ${className}`}>
            <m.h1
                initial="hidden"
                animate="visible"
                variants={h1_variant}
            >
                {h1Text}
            </m.h1>
        </div>
    )
}

export default Heading_1