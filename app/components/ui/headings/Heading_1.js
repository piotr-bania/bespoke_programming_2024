'use client'

import './Headings.scss'
import '../animations/Text_Variants'
import { motion as m } from 'framer-motion'
import { Heading_1_Variant } from '../animations/Text_Variants'

const Heading_1 = ({ h1Text, className }) => {
    return (
        <m.h1
            className={`heading ${className}`}
            initial='hidden'
            animate='visible'
            variants={Heading_1_Variant}
            >
                {h1Text}
        </m.h1>
    )
}

export default Heading_1