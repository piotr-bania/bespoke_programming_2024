import './Detailed_About.scss'
import Heading_2 from '../../ui/headings/Heading_2'
import Heading_3 from '../../ui/headings/Heading_3'
import Heading_4 from '../../ui/headings/Heading_4'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Detailed_About = () => {
    return (
        <section id='about_page'>
            <Heading_2
                h2Text='About Me'
                className='heading uppercase'
            />

            <Paragraph
                pText='Crafting Digital Artistry'
                className='subheading uppercase'
            />

            <div className='div div_1'>
                <Heading_3
                    h3Text='Hello there!'
                    className='heading'
                />

                <Paragraph
                    pText="I'm Piotr, a front-end developer with roots in Poland, now crafting digital experiences from London. My journey in web development took off in May 2021, and since then, it's been a full-throttle passion for coding, UI/UX design, and immersive 3D web environments."
                    className='paragraph'
                />
            </div>

            <div className='div div_2'>
                <Paragraph
                    pText="I translate ideas into functional and visual spectacles on the web. With a penchant for front-end development, I bring designs to life and thrive on collaboration to shape product roadmaps. My toolbox is a blend of modern frameworks like React, powerful libraries, and the finesse of 3D graphics with Three.js."
                    className='paragraph'
                />
            </div>

            <div className='div div_3'>
                <Paragraph
                    pText="I'm all about creating experiences that resonate, building interfaces that engage, and pushing the digital envelope. If you're looking for someone who can take your digital presence to the next dimension, let's connect!"
                    className='paragraph'
                />
            </div>

            <div className='div div_4'>
                <Heading_4
                    h4Text='Technologies I Master:'
                />

                <Paragraph
                    pText="React.js, Next.js, React Three Fiber, Three.js, GLSL (OpenGL Shading Language), JavaScript, and a suite of design tools that keep my work sharp and your vision clearer."
                    className='paragraph'
                />
            </div>

            <div className='div div_5'>
            <Heading_4
                    h4Text='Ready to Elevate Your Online Presence?'
                />

                <Paragraph
                    pText="Ready to start a project together? Reach out via mobile, Telegram, or email, and let's make digital waves!"
                />

                <Route_Change href='/contact'>
                    <Button
                        buttonText='Connect with me'
                        className='button'
                    />
                </Route_Change>
            </div>
        </section>
    )
}

export default Detailed_About