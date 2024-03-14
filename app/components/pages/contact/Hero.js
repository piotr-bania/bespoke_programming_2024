import Heading_1 from '../../ui/headings/Heading_1'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Hero = () => {
    return (
        <section id='contact_page'>
            <Heading_1
                h1Text='Hi!'
                className='heading_1'
            />
            <Paragraph
                pText='Welcome to the Contact Page'
                className='paragraph'
            />
            <Route_Change href='/'>
                <Button
                    buttonText='Go Home'
                    className='button'
                />
            </Route_Change>
        </section>
    )
}

export default Hero