import Heading_3 from '../../ui/headings/Heading_3'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const FAQs = () => {
    return (
        <section id='faq'>
            <Heading_3
                h3Text="Got Questions? I've Got Answers."
                className='heading_3'
            />
            
            <Paragraph
                pText='Dive into frequently asked questions about my services, the £0 upfront cost model, and what you can expect when partnering with me. Everything you need to know to make an informed decision.'
                className='paragraph'
            />

            <Route_Change href='/faq'>
                <Button
                    buttonText='Read FAQs'
                    className='button'
                />
            </Route_Change>
        </section>
    )
}

export default FAQs