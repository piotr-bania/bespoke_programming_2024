'use client'

import './Headings.scss'
import '../animations/Text'
import { motion as m } from 'framer-motion'
import { Heading_4_Variant } from '../animations/Text'

const Heading_4 = ({ h4Text, className }) => {
    return (
        <m.h4
            className={`heading ${className}`}
            initial='hidden'
            animate='visible'
            variants={Heading_4_Variant}
            >
                {h4Text}
        </m.h4>
    )
}

export default Heading_4
