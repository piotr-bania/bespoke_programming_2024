'use client'

import './Hero.scss'
import { motion as m, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Hero_Canvas from '../../experiences/canvases/Hero_Canvas'
import Heading_1 from '../../ui/headings/Heading_1'
import Heading_2 from '../../ui/headings/Heading_2'
import { Paragraph_Variant } from '../../ui/animations/Text'

const Hero = () => {
    const [index, setIndex] = useState(0)
    const paragraph = [
        "Embark on a bespoke digital journey tailored to your brand's unique story.",
        "Unveil a new realm of possibilities with cutting-edge web solutions.",
        "Connect, captivate, and convert with a website that sets you apart."
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
                    h1Text="Elevate Your Brand's Horizon"
                    className='heading_1'
                />

                <Heading_2
                    h2Text="Where Vision Meets Digital Precision"
                    className='heading_2'
                />

                <AnimatePresence>
                    <m.p
                        key={index}
                        variants={Paragraph_Variant}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        className='paragraph lined_paragraph'
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