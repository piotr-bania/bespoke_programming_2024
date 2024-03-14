import Heading_3 from '../../ui/headings/Heading_3'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Call_To_Action = () => {
    return (
        <section id='contact'>
            <Heading_3
                h3Text='Ready to Transform Your Online Presence?'
                className='heading_3'
            />
            
            <Paragraph
                pText="If you're looking for a web development partner who truly understands the needs of startups and small businesses, look no further. Contact me today, and let's start crafting your digital future, with no upfront costs."
                className='paragraph'
            />

            <Route_Change href='/contact'>
                <Button
                    buttonText='Get in Touch Now'
                    className='button'
                />
            </Route_Change>
        </section>
    )
}

export default Call_To_Action