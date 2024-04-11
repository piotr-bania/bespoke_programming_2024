import './Detailed_Services.scss'
import Heading_4 from '../../ui/headings/Heading_4'
import Heading_3 from '../../ui/headings/Heading_3'
import Heading_2 from '../../ui/headings/Heading_2'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Image from 'next/image'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Detailed_Services = () => {
    return (
        <section id='services_page'>
            <Heading_2
                h2Text='Tailor-Made Web Solutions'
                className='heading uppercase'
            />

            <Paragraph
                pText='Bringing Your Digital Vision to Life with Precision and Passion'
                className='subheading uppercase'
            />

            <div className='div div_1'>
                <Image
                    src='/images/services/hosting.webp'
                    alt='Hosting & Performance'
                    width={500}
                    height={500}
                />

                <Heading_3
                    h3Text='Hosting & Performance:'
                />
            </div>

            <div className='div div_2'>
                <Heading_4
                    h4Text='Robust Hosting and Optimal Performance'
                />

                <Paragraph
                    pText="My hosting services ensure that your site is not only secure and reliable but also quick to load and responsive across all devices. With careful optimization, I ensure that your online presence is robust from the back end to the front."
                    className='lined_paragraph'
                />
            </div>

            <div className='div div_3'>
                <Image
                    src='/images/services/design.webp'
                    alt='Design & Development'
                    width={500}
                    height={500}
                />

                <Heading_3
                    h3Text='Design & Development:'
                />
            </div>

            <div className='div div_4'>
                <Heading_4
                    h4Text='Creative Design Meets Innovative Development'
                />

                <Paragraph
                    pText="I take pride in creating visually stunning and functionally robust websites. My design philosophy combines aesthetic appeal with user experience, while development is about bringing those designs to life with clean, efficient code. Whether you're looking for a captivating 3D web experience or a dynamic single-page application, my skills with Next.js, React Three Fiber, and GLSL shaders are at your service."
                    className='lined_paragraph'
                />
            </div>

            <div className='div div_5'>
                <Image
                    src='/images/services/support.webp'
                    alt='Support & Growth'
                    width={500}
                    height={500}
                />

                <Heading_3
                    h3Text='Support & Growth:'
                />
            </div>

            <div className='div div_6'>
                <Heading_4
                    h4Text='Ongoing Support for Continuous Growth'
                />

                <Paragraph
                    pText="After your site goes live, my dedication to your project remains unwavering. I provide tailored maintenance packages and update services, ensuring that your digital presence grows and evolves in alignment with your business. My goal is to offer you peace of mind, knowing that your online presence is in capable hands."
                    className='lined_paragraph'
                />
            </div>

            <div className='div div_7'>
                <Image
                    src='/images/services/analytics.webp'
                    alt='Analytics & Insights'
                    width={500}
                    height={500}
                />

                <Heading_3
                    h3Text='Analytics & Insights:'
                />
            </div>

            <div className='div div_8'>
                <Heading_4
                    h4Text='Empowering Your Decisions with Data'
                />

                <Paragraph
                    pText="Leverage the power of data with detailed analytics that inform you about your website's performance. Understanding your audience's behavior allows you to make data-driven decisions to enhance user experience and grow your digital presence."
                    className='lined_paragraph'
                />
            </div>

            <div className='div div_9'>
                <Heading_4
                    h4Text='Ready to Elevate Your Online Presence?'
                />

                <Paragraph
                    pText='Embark on a journey of digital transformation that sets your brand apart. Get in touch today to explore how my bespoke web services can elevate your online presence.'
                />

                <Route_Change href='/contact'>
                    <Button
                        buttonText='Concact Me Today!'
                        className='button'
                    />
                </Route_Change>
            </div>
        </section>
    )
}

export default Detailed_Services