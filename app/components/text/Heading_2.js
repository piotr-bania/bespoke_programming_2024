'use client'

import './headings.scss'
import { motion as m } from 'framer-motion'
import { h2_variant } from '../animations/Framer_Motion_Variants'

const Headings_2 = ({ h2Text, className = '' }) => {
    return (
        <div className={`heading ${className}`}>
            <m.h2
                initial="hidden"
                animate="visible"
                variants={h2_variant}
            >
                {h2Text}
            </m.h2>
        </div>
    )
}

export default Headings_2