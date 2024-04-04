import './FAQs.scss'
import Heading_2 from '../../ui/headings/Heading_2'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'
import FAQ_Question from '../faq/FAQ_Questions'
import { Homepage_Questions } from '../faq/All_Questions'

const FAQs = () => {
    return (
        <section id='faq'>
            <Heading_2
                className='heading uppercase'
                h2Text="Clarity Meets Convenience"
            />
            
            <Paragraph
                pText='Answers to Propel Your Digital Quest Forward'
                className='subheading uppercase'
            />

            <FAQ_Question items={Homepage_Questions} />

            <div className='more_faq'>
                <h4>Still have questions?</h4>
                <Paragraph
                    pText='Find out more about how I work and what I can do for you on my comprehensive FAQ page.'
                />
                <Route_Change href='/faq'>
                    <Button
                        buttonText='Read FAQs'
                        className='button'
                    />
                </Route_Change>
            </div>
        </section>
    )
}

export default FAQs