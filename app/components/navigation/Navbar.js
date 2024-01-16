'use client'

import './navbar.scss'
import { motion as m } from 'framer-motion'
import { logo_variant } from '../animations/Framer_Motion_Variants'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <section id='navbar'>
            <m.div
                initial='hidden'
                animate='visible'
                variants={logo_variant}
            >
                <Link href='/'>
                    <Image src='/svg/logo.svg' width={100} height={100} />
                </Link>
            </m.div>
        </section>
    )
}

export default Navbar