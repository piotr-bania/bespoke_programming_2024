import Heading_3 from '../../ui/headings/Heading_3'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Recent_Work = () => {
    return (
        <section id='recent_work'>
            <Heading_3
                h3Text='Explore My Recent Projects'
                className='heading_3'
            />
            
            <Paragraph
                pText="Dive into a curated selection of my latest projects, where innovative design meets functionality. Each project showcases my dedication to crafting unique web experiences that drive business success. See for yourself how I bring digital visions to life."
                className='paragraph'
            />

            <Route_Change href='/portfolio'>
                <Button
                    buttonText='View My Portfolio'
                    className='button'
                />
            </Route_Change>
        </section>
    )
}

export default Recent_Work