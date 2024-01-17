'use client'

import { motion as m } from 'framer-motion'
import { link_variant } from '../animations/Framer_Motion_Variants'
import Link from 'next/link'

const Link_Component = ({ ctaText, href, className = '' }) => {
    return (
        <div className={`cta ${className}`}>
            <m.div
                initial="hidden"
                animate="visible"
                variants={link_variant}
            >
                <Link href={href}>
                    {ctaText}
                </Link>
            </m.div>
        </div>
    )
}

export default Link_Component