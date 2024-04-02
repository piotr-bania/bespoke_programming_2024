import './Recent_Work.scss'
import Heading_2 from '../../ui/headings/Heading_2'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Project from '../../experiences/projects/Project'
import Wave_Image from '../../experiences/scene_elements/Wave_Image'
import Heading_4 from '../../ui/headings/Heading_4'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Recent_Work = () => {
    return (
        <section id='recent_work'>
            <Heading_2
                className='heading uppercase'
                h2Text='Showcasing Digital Craftsmanship'
            />
            
            <Paragraph
                pText="Behold the intersection of aesthetics and functionality in my most recent projects. Each one is a testament to the transformative power of bespoke web design and how it can amplify your business's digital presence."
                className='subheading uppercase'
            />

            <Project
                className={'div_1'}
                title='Tsunami Clapham'
                shortDescription='Website redesign for a Tanzanian hedge fund'
                technologies='React, Next.js, CSS, Sass, GLSL, Three.js, React Three Fiber'
                url='https://mara-river-capital-redesign-v2.vercel.app/'
                detailedDescription='Website redesign for a Tanzanian hedge fund, where I utilized CSS, Sass, React, Next, GLSL, Three.js, and React Three Fiber to create a captivating 3D experience.'
                projectComponent={<Wave_Image textureUrl='./images/projects/tsunami.jpg' />}
            />

            <Project
                className={'div_2'}
                title='Yamamomo Dulwich'
                shortDescription='Website redesign for a London-based restaurant'
                technologies='React, Next.js, CSS, Sass'
                url='https://tsunami-clapham-redesign.vercel.app/'
                detailedDescription='Website redesign for a London-based restaurant, where I utilized CSS, Sass, React, and Next.js to create a visually stunning and user-friendly experience.'
                projectComponent={<Wave_Image textureUrl='./images/projects/yamamomo.jpg' />}
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