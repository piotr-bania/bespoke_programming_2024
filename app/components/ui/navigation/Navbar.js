'use client'

import './Navbar.scss'
import { useEffect, useState } from 'react'
import { motion as m } from 'framer-motion'
import { Navbar_Variant, Menu_Variants } from '../../ui/animations/Navigation'
import Image from 'next/image'
import Route_Change from '../transitions/Route_Change'
import Button from '../buttons/Button'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(false)
    }, [])

    const closeMenu = () => {
        setIsOpen(false)
    }

    const handleHamburgerClick = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'visible'
            closeMenu()
        }
            return () => document.body.style.overflowY = 'visible'
    }, [isOpen]) 

    return (
        <section id='navbar'>
            <m.nav
                initial='hidden'
                animate='visible'
                variants={Navbar_Variant}
            >
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

                <div
                    className={`menu ${isOpen ? 'open' : 'closed'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className='line top'></svg>
                    <svg className='line middle'></svg>
                    <svg className='line bottom'></svg>
                </div>

                <m.div
                    className='menu_container'
                    initial='closed'
                    animate={isOpen ? 'open' : 'closed'}
                    exit='closed'
                    variants={Menu_Variants}
                    onAnimationComplete={() => {
                        if (!isOpen) {
                            closeMenu()
                        }
                    }}
                >
                    <m.div
                        className='menu_links'
                        initial='closed'
                        animate={isOpen ? 'open' : 'closed'}
                        exit='closed'
                        variants={Menu_Variants}
                    >
                        <Route_Change href='/services'>
                            <h1 onClick={handleHamburgerClick}>Services</h1>
                        </Route_Change>

                        <Route_Change href='/pricing'>
                            <h1 onClick={handleHamburgerClick}>Pricing</h1>
                        </Route_Change>

                        <Route_Change href='/about'>
                            <h1 onClick={handleHamburgerClick}>About</h1>
                        </Route_Change>

                        <Route_Change href='/portfolio'>
                            <h1 onClick={handleHamburgerClick}>Portfolio</h1>
                        </Route_Change>

                        <Route_Change href='/faq'>
                            <h1 onClick={handleHamburgerClick}>FAQ</h1>
                        </Route_Change>

                        <Route_Change href='/contact' className='cta' onClick={handleHamburgerClick}>
                            <Button
                                buttonText='Start Your Journey'
                            />
                        </Route_Change>
                    </m.div>
                </m.div>
            </m.nav>
        </section>
    )
}

export default Navbar