'use client'

import '../../ui/paragraphs/Paragraph.scss'
import '../../ui/animations/Text'
import { motion as m } from 'framer-motion'
import { Paragraph_Variant } from '../../ui/animations/Text'

const Technologies = ({ technologies, className }) => {
    return (
        <m.p
            className={`technologies ${className}`}
            initial='hidden'
            animate='visible'
            variants={Paragraph_Variant}
        >
            {technologies}
        </m.p>
    )
}

export default Technologies