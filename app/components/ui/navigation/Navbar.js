'use client'

import './Navbar.scss'
import { motion as m } from 'framer-motion'
import { Navbar_Variant } from '../../ui/animations/Navigation'
import Image from 'next/image'
import Route_Change from '../transitions/Route_Change'
import Button from '../buttons/Button'
import Link from 'next/link'

const Navbar = () => {
    return (
        <m.nav
            className='navbar'
            initial='hidden'
            animate='visible'
            variants={Navbar_Variant}
        >
            <section id='navbar'>
                <div className='logo'>
                    <Route_Change href='/'>
                        <Image
                            className='logo'
                            src='/svg/logo.svg'
                            alt='logo'
                            width={50}
                            height={50}
                        />
                    </Route_Change>
                </div>

                <div className='links'>
                    <Route_Change href='/services'>
                        Services
                    </Route_Change>

                    <Route_Change href='/pricing'>
                        Pricing
                    </Route_Change>

                    <Route_Change href='/about'>
                        About
                    </Route_Change>

                    <Route_Change href='/portfolio'>
                        Portfolio
                    </Route_Change>

                    <Route_Change href='/contact'>
                        Contact
                    </Route_Change>

                    <Route_Change href='/faq'>
                        FAQ
                    </Route_Change>
                </div>

                <Route_Change href='/contact' className='cta'>
                    <Button
                        buttonText='Start Your Journey'
                        
                    />
                </Route_Change>
            </section>
        </m.nav>
    )
}

export default Navbar