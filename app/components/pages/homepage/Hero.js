import './Hero.scss'
import Hero_Canvas from './scene/Hero_Canvas'
import Heading_1 from '../../ui/headings/Heading_1'
import Heading_2 from '../../ui/headings/Heading_2'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Hero = () => {
    return (
        <div className='hero_section'>
            {/* <Hero_Canvas /> */}

            <section id='hero_section' >
                <Heading_1
                    h1Text='Elevate Your Digital Presence'
                    className='heading_1'
                />
                
                <Heading_2
                    h2Text='Without the Financial Strain'
                    className='heading_2'
                />

                <Paragraph
                    pText="Discover how my unique web development approach empowers your business's growth from day one."
                    className='paragraph'
                />
            </section>
        </div>
    )
}

export default Hero