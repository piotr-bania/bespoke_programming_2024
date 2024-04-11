import './Detailed_FAQ.scss'
import Heading_2 from '../../ui/headings/Heading_2'
import Paragraph from '../../ui/paragraphs/Paragraph'
import FAQ_Questions from '../../pages/faq/FAQ_Questions'
import { Other_Questions } from '../../pages/faq/All_Questions'

const Detailed_FAQ = () => {
    return (
        <section id='faq_page'>
            <Heading_2
                className='heading uppercase'
                h2Text="Answers to Help You Get Started"
            />
            
            <Paragraph
                pText='Clearing Your Path to a Modern Web Presence'
                className='subheading uppercase'
            />

            <FAQ_Questions items={Other_Questions} />

            <Paragraph
                pText="If you have more questions or need clarification, don't hesitate to reach out. Your digital journey is important to me, and I'm here to ensure you have all the information you need to move forward with confidence."
                className='more_faq'
            />
        </section>
    )
}

export default Detailed_FAQ