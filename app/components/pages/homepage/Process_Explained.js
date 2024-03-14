import Heading_3 from '../../ui/headings/Heading_3'
import Heading_4 from '../../ui/headings/Heading_4'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Process_Explained = () => {
    return (
        <section id='process_section'>
            <Heading_3
                h3Text='Your Path to Digital Excellence'
                className='heading_3'
            />
            
            <Heading_4
                h4Text='Consultation'
                className='heading_4'
            />

            <Paragraph
                pText='Share your vision during our initial, cost-free consultation'
                className='paragraph'
            />
            
            <Heading_4
                h4Text='Development'
                className='heading_4'
            />

            <Paragraph
                pText='Watch as your bespoke website takes shape, backed by premium hosting'
                className='paragraph'
            />
            
            <Heading_4
                h4Text='Launch & Support'
                className='heading_4'
            />

            <Paragraph
                pText='Enjoy ongoing support post-launch, ensuring your website continues to perform'
                className='paragraph'
            />

            <Route_Change href='/process'>
                <Button
                    buttonText='Learn More About My Process'
                    className='button'
                />
            </Route_Change>
        </section>
    )
}

export default Process_Explained