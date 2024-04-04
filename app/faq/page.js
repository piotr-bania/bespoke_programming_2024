import './FAQ.scss'
import Heading_2 from '../components/ui/headings/Heading_2'
import Paragraph from '../components/ui/paragraphs/Paragraph'
import FAQ_Questions from '../components/pages/faq/FAQ_Questions'
import { Other_Questions } from '../components/pages/faq/All_Questions'

const FAQ_Page = () => {
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

export default FAQ_Page