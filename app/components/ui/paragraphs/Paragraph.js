'use client'

import './Paragraph.scss'
import '../animations/Text_Variants'
import { motion as m } from 'framer-motion'
import { Paragraph_Variant } from '../animations/Text_Variants'

const Paragraph = ({ pText, className }) => {
    return (
        <m.p
            className={`paragraph ${className}`}
            initial='hidden'
            animate='visible'
            variants={Paragraph_Variant}
            >
                {pText}
        </m.p>
    )
}

export default Paragraph