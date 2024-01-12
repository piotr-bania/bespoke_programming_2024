import './hero_section.scss'
import Hero_Canvas from './Hero_Canvas'
import Heading_1 from '../text/Heading_1'
import Paragraph from '../text/Paragraph'
import CTA from '../text/CTA'

const Hero_Section = () => {
    return (
        <section id="hero_section">
            {/* <Hero_Canvas /> */}
            
            <div className='heading'>
                <Heading_1
                    h1Text='Invest in Time'
                    className='heading_1'
                />

                <Heading_1
                    h1Text='Not Upfront Costs'
                    className='heading_2'
                />

                <Paragraph
                    paragraphText="Time is your most precious asset. That's why I offer you a unique opportunity to start your web development journey free of initial charges, investing instead in a strategic partnership that grows over time. Commit to a 12-month rolling contract with me, and let's maximize every moment for your business."
                    className='paragraph'
                />
                
                <CTA
                    ctaText='Invest in Your Future'
                    href='/'
                    className='cta'
                />
            </div>
        </section>
    )
}

export default Hero_Section