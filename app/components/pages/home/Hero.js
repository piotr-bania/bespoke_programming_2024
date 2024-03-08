import Heading_1 from '../../ui/headings/Heading_1'
import Heading_2 from '../../ui/headings/Heading_2'
import Button from '../../ui/buttons/Button'
import Route_Change from '../../ui/transitions/Route_Change'

const Hero_Section = () => {
    return (
        <section id='hero'>
            <Heading_1
                h1Text='Elevate Your Digital Presence Without the Financial Burden'
                className='heading_1'
            />
            <Heading_2
                h2Text='I specialize in creating stunning, custom web solutions for startups and small businesses - all with £0 upfront costs'
                className='heading_2'
            />
            <Route_Change href='/about'>
                <Button
                    buttonText='Discover How'
                    className='button'
                />
            </Route_Change>
        </section>
    )
}

export default Hero_Section