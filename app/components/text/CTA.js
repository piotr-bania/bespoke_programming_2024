'use client'

import './headings.scss'
import { motion as m } from 'framer-motion'
import { cta_variant } from '../animations/Framer_Motion_Variants'
import Link from 'next/link'

const CTA = ({ ctaText, href, className = '' }) => {
    return (
        <div className={`cta ${className}`}>
            <m.div
                initial="hidden"
                animate="visible"
                variants={cta_variant}
            >
                <Link href={href}>
                    {ctaText}
                </Link>
            </m.div>
        </div>
    )
}

export default CTA