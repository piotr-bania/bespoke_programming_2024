import './Process_Explained.scss'
import Heading_2 from '../../ui/headings/Heading_2'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Image from 'next/image'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'
import Heading_4 from '../../ui/headings/Heading_4'

const Process_Explained = () => {
    return (
        <section id='process_section'>
            <Heading_2
                className='heading uppercase'
                h2Text='Your Roadmap to Digital Excellence'
            />

            <Paragraph
                pText='Transparent, Collaborative, and Meticulous – Every Step of the Way'
                className='subheading uppercase'
            />

            <div className='overlay div div_1'>
                <Image
                    src='/images/process/discovery_and_consultation.webp'
                    alt='Discovery and Consultation'
                    width={500}
                    height={500}
                />
                <Heading_4
                    h4Text='Discovery and Consultation:'
                />
                <Paragraph
                    pText="Begin with a free consultation to define the scope and vision of your project. It's a collaborative effort to ensure your needs are front and center as we plan your unique web strategy."
                />
            </div>

            <div className='overlay div div_2'>
                <Image
                    src='/images/process/design_and_development.webp'
                    alt='Design and Development'
                    width={500}
                    height={500}
                />
                <Heading_4
                    h4Text='Design and Development:'
                />
                <Paragraph
                    pText="Witness the creation of your digital space. From wireframes to live pages, experience a transparent process with cutting-edge design and technology tailored just for you."
                />
            </div>

            <div className='overlay div div_3'>
                <Image
                    src='/images/process/launch_and_growth.webp'
                    alt='Launch and Growth'
                    width={500}
                    height={500}
                />
                <Heading_4
                    h4Text='Launch and Growth:'
                />
                <Paragraph
                    pText="Deploy your website with confidence. I stand by for launch support and provide ongoing assistance to adapt and grow your online presence seamlessly."
                />
            </div>

            <div className='overlay div div_4'>
                <Image
                    src='/images/process/enhancement.webp'
                    alt='Continual Enhancement'
                    width={500}
                    height={500}
                />
                <Heading_4
                    h4Text='Continual Enhancement:'
                />
                <Paragraph
                    pText="Your website is a living entity, and my job doesn't end at launch. Expect proactive updates, optimization, and enhancements to ensure peak performance and relevance."
                />
            </div>

            <div className='div div_5'>
                <h4>Ready to start your path to digital success?</h4>
                <p>Click here for an insight into how we'll bring your vision to life—from our first conversation to final launch and beyond.</p>
                <Route_Change href='/process'>
                    <Button
                        buttonText='Learn More About My Process'
                        className='button'
                    />
                </Route_Change>
            </div>
        </section>
    )
}

export default Process_Explained