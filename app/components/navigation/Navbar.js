'use client'

import './navbar.scss'
import { motion as m } from 'framer-motion'
import { logo_variant } from '../animations/Framer_Motion_Variants'
import Link from 'next/link'
import Navbar_Canvas from './Navbar_Canvas'

const Navbar = () => {
    return (
        <section id='navbar'>
            <m.div
                initial='hidden'
                animate='visible'
                variants={logo_variant}
                className='logo'
            >
                <Link href='/'>
                    <Navbar_Canvas />
                </Link>
            </m.div>
        </section>
    )
}

export default Navbar