'use client'

import './headings.scss'
import { motion as m } from 'framer-motion'
import { h3_variant } from '../animations/Framer_Motion_Variants'

const Heading_3 = ({ h3Text, className = '' }) => {
    return (
        <div className={`heading ${className}`}>
            <m.h3
                initial="hidden"
                animate="visible"
                variants={h3_variant}
            >
                {h3Text}
            </m.h3>
        </div>
    )
}

export default Heading_3