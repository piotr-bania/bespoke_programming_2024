import './Detailed_Contact.scss'
import Heading_4 from '../../ui/headings/Heading_4'
import Heading_2 from '../../ui/headings/Heading_2'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Contact_Form from './Contact_Form'

const Detailed_Contact = () => {
    return (
        <section id='contact_page'>
            <Heading_2
                h2Text="Let's Connect"
                className='heading uppercase'
            />
            
            <Paragraph
                pText="Your Journey to Exceptional Web Presence Begins Here"
                className='subheading uppercase'
            />

            <Heading_4
                h4Text='Get in Touch'
                className='div div_1'
            />

            <Paragraph
                pText="I'm excited to hear about your project and help you bring your digital vision to life. Please fill out the form below and I'll get back to you as soon as possible."
                className='paragraph div div_2'
            />

            <Contact_Form />

            <p className='no_spam'>I respect your privacy. No spam, ever!</p>
        </section>
    )
}

export default Detailed_Contact