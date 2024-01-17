import './hero_section.scss'
import Hero_Canvas from './Hero_Canvas'
import Heading_1 from '../text/Heading_1'
import Heading_2 from '../text/Heading_2'
import Paragraph from '../text/Paragraph'
import Button_Component from '../text/Button_Component'

const Hero_Section = () => {
    return (
        <>
            <Hero_Canvas />
            
            <section id='hero_section'>            
                <div className='text'>
                    <Heading_1
                        h1Text='Professional
                        Web Development'
                        className='heading_1'
                    />

                    <Heading_2
                        h2Text='— Zero Upfront Cost'
                        className='heading_2'
                    />

                    <Paragraph
                        paragraphText="As a seasoned developer, I understand the value of a strong online presence. That's why I'm offering comprehensive web development services with no initial charges, anchored by a 12-month partnership. A commitment to quality, a commitment to your success."
                        className='paragraph'
                    />

                    <Button_Component
                        buttonText='Secure Your Spot'
                        href='/'
                        className='button'
                    />
                </div>
            </section>
        </>
    )
}

export default Hero_Section