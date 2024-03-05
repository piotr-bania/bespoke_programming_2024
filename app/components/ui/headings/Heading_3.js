'use client'

import './Headings.scss'
import '../animations/Text'
import { motion as m } from 'framer-motion'
import { Heading_3_Variant } from '../animations/Text'

const Heading_3 = ({ h3Text, className }) => {
    return (
        <m.h3
            className={`heading ${className}`}
            initial='hidden'
            animate='visible'
            variants={Heading_3_Variant}
            >
                {h3Text}
        </m.h3>
    )
}

export default Heading_3