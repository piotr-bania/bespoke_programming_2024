import Heading_1 from '../../ui/headings/Heading_1'
import Heading_2 from '../../ui/headings/Heading_2'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Hero = () => {
    return (
        <section id='hero_section'>
            <Heading_1
                h1Text='Elevate Your Digital Presence'
                className='heading_1'
            />
            
            <Heading_2
                h2Text='Without the Financial Strain'
                className='heading_2'
            />

            <Paragraph
                pText="Discover how my unique web development approach empowers your business's growth from day one. With no initial investment and premium hosting included, I'm dedicated to turning your digital ambitions into reality. Dive into a world where your vision comes to life, all with the support you need to thrive online."
                className='paragraph'
            />

            <Route_Change href='/contact'>
                <Button
                    buttonText='Start Your Journey'
                    className='button'
                />
            </Route_Change>
        </section>
    )
}

export default Hero