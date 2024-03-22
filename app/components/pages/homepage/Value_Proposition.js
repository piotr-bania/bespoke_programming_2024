import './Value_Proposition.scss'
import Heading_3 from '../../ui/headings/Heading_3'
import Paragraph from '../../ui/paragraphs/Paragraph'

const Value_Proposition = () => {
    return (
        <section id='why_choose_me'>
            <Heading_3
                h3Text='Why Partner with Me for Your Web Development Needs?'
                className='heading_3'
            />

            <Paragraph
                pText=" I understand the challenges startups face. That's why I offer state-of-the-art web solutions, including premium hosting, with no initial investment required. Let me take the financial strain off your shoulders, so you can focus on growing your business."
                className='paragraph'
            />
        </section>
    )
}

export default Value_Proposition