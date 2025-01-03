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
                pText="Have a look at what I’ve built—imagine the possibilities for your own site."
                className='subheading uppercase'
            />

            <Project_Limited
                className={'div_1'}
                title='Tsunami Clapham'
                shortDescription="A refreshed online vibe that captures the restaurant’s energetic atmosphere."
                url='https://tsunamiclapham.co.uk'
                projectComponent={<Wave_Image textureUrl='./images/projects/tsunami.jpg' />}
            />

            <Project_Limited
                className={'div_2'}
                title='Yamamomo Dulwich'
                shortDescription="Chic, modern design with interactive booking—mirroring the restaurant’s contemporary flair."
                url='https://yamamomo.co.uk'
                detailedDescription="For Yamamomo Dulwich, I've created an online presence that mirrors their chic, contemporary setting. The website boasts a sleek design, streamlines the reservation process, and brings their culinary journey to life with interactive features that capture the restaurant's innovative spirit."
                projectComponent={<Wave_Image textureUrl='./images/projects/yamamomo.jpg' />}
                technologies='Next.js 14, React Three Fiber, GLSL shaders, Supabase, OpenTable'
            />

            <div className='div div_3'>
                <Heading_4
                    className='heading'
                    h4Text='Want to See More?'
                />
                <p>Step into a portfolio where every project tells a unique story of creativity and precision.</p>
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