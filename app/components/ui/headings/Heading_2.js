'use client'

import './Headings.scss'
import '../animations/Text'
import { motion as m } from 'framer-motion'
import { Heading_2_Variant } from '../animations/Text'

const Heading_2 = ({ h2Text, className }) => {
    return (
        <m.h2
            className={`heading ${className}`}
            initial='hidden'
            animate='visible'
            variants={Heading_2_Variant}
            >
                {h2Text}
        </m.h2>
    )
}

export default Heading_2