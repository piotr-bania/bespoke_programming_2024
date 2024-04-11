import './Recent_Work.scss'
import Heading_2 from '../../ui/headings/Heading_2'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Project_Limited from '../../experiences/projects/Project_Limited'
import Wave_Image from '../../experiences/scene_elements/Wave_Image'
import Heading_4 from '../../ui/headings/Heading_4'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Recent_Work = () => {
    return (
        <section id='recent_work'>
            <Heading_2
                className='heading uppercase'
                h2Text='Inspiration Gallery'
            />
            
            <Paragraph
                pText="Check out what I’ve built and imagine the possibilities"
                className='subheading uppercase'
            />

            <Project_Limited
                className={'div_1'}
                title='Tsunami Clapham'
                shortDescription="Discover Tsunami Clapham's revitalized online vibe, offering a fresh, engaging user experience with every visit."
                url='https://tsunamiclapham.co.uk'
                projectComponent={<Wave_Image textureUrl='./images/projects/tsunami.jpg' />}
            />

            <Project_Limited
                className={'div_2'}
                title='Yamamomo Dulwich'
                shortDescription="Step into Yamamomo Dulwich's elegant new online look, where browsing their menu and booking a table is a visual treat."
                url='https://yamamomo.co.uk'
                detailedDescription="For Yamamomo Dulwich, I've created an online presence that mirrors their chic, contemporary setting. The website boasts a sleek design, streamlines the reservation process, and brings their culinary journey to life with interactive features that capture the restaurant's innovative spirit."
                projectComponent={<Wave_Image textureUrl='./images/projects/yamamomo.jpg' />}
                technologies='Next.js 14, React Three Fiber, GLSL shaders, Supabase, OpenTable'
            />

            <div className='div div_3'>
                <Heading_4
                    className='heading'
                    h4Text='Ready to see more?'
                />
                <p>Step into a world where design meets innovation. <br />Click to view a portfolio where every project tells a story of creativity and precision crafted to enhance digital engagement and business presence.</p>
                <Route_Change href='/portfolio'>
                    <Button
                        buttonText='Witness the Transformation'
                        className='button'
                    />
                </Route_Change>
            </div>
        </section>
    )
}

export default Recent_Work