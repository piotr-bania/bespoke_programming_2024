'use client'

import './Hero.scss'
import { motion as m, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Hero_Canvas from '../../experience/scene/Hero_Canvasvas'
import Heading_1 from '../../ui/headings/Heading_1'
import Heading_2 from '../../ui/headings/Heading_2'
import { Paragraph_Variant } from '../../ui/animations/Text'

const Hero = () => {
    const [index, setIndex] = useState(0)
    const paragraph = [
        "Discover how my unique web development approach empowers your business's growth from day one.",
        "With no initial investment and premium hosting included, I'm dedicated to turning your digital ambitions into reality.",
        "Dive into a world where your vision comes to life, all with the support you need to thrive online."
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % paragraph.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='hero_section'>
            <Hero_Canvas />

            <section id='hero_section' >
                <Heading_1
                    h1Text='Elevate Your Digital Presence'
                    className='heading_1'
                />

                <Heading_2
                    h2Text='Without the Financial Strain'
                    className='heading_2'
                />

                <AnimatePresence>
                    <m.p
                        key={index}
                        variants={Paragraph_Variant}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        className='paragraph'
                    >
                        {paragraph[index]}
                    </m.p>
                </AnimatePresence>

                <Image
                    src='/svg/arrow.svg'
                    className='arrow'
                    alt='Arrow'
                    width={25}
                    height={25}
                />
            </section>
        </div>
    )
}

export default Hero