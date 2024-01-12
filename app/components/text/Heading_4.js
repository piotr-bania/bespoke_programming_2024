'use client'

import './headings.scss'
import { motion as m } from 'framer-motion'
import { h4_variant } from '../animations/Framer_Motion_Variants'

import React from 'react'

const Heading_4 = ({ h4Text, className = '' }) => {
    return (
        <div className={`heading ${className}`}>
            <m.h4
                initial="hidden"
                animate="visible"
                variants={h4_variant}
            >
                {h4Text}
            </m.h4>
        </div>
    )
}

export default Heading_4