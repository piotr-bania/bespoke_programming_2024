'use client'

import './headings.scss'
import { motion as m } from 'framer-motion'
import { paragraph_variant } from '../animations/Framer_Motion_Variants'

import React from 'react'

const Paragraph = ({ paragraphText, className = '' }) => {
    return (
        <div className={`paragraph ${className}`}>
            <m.p
                initial="hidden"
                animate="visible"
                variants={paragraph_variant}
            >
                {paragraphText}
            </m.p>
        </div>
    )
}

export default Paragraph