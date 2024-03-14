import Heading_3 from '../../ui/headings/Heading_3'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const About_Me = () => {
    return (
        <section id='about_me'>
            <Heading_3
                h3Text='The Person Behind the Projects'
                className='heading_3'
            />
            
            <Paragraph
                pText="Discover the journey, passion, and dedication that fuel my commitment to bringing your digital dreams to life. From my roots in web development to the ethos that drives me today, learn how I blend technical expertise with a deeply personal approach to every project."
                className='paragraph'
            />

            <Route_Change href='/about'>
                <Button
                    buttonText='Get to Know Me'
                    className='button'
                />
            </Route_Change>
        </section>
    )
}

export default About_Me