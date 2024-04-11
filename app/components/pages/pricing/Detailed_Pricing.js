import './Detailed_Pricing.scss'
import Heading_2 from '../../ui/headings/Heading_2'
import Heading_3 from '../../ui/headings/Heading_3'
import Heading_4 from '../../ui/headings/Heading_4'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Image from 'next/image'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Detailed_Services = () => {
    return (
        <section id='pricing_page'>
            <Heading_2
                h2Text='Pricing Plans Designed for Your Success'
                className='heading uppercase'
            />

            <Paragraph
                pText='Find the perfect match for your digital ambitions'
                className='subheading uppercase'
            />

            {/* Startup Plan - £400/month */}
            <div className='div div_1'>
                <Image
                    src='/images/pricing/startup.png'
                    alt='Premium Hosting'
                    width={500}
                    height={500}
                />

                <Heading_3
                    h3Text="Startup Plan - £400/month"
                />
            </div>

            <div className='div div_2'>
                <Heading_4
                    h4Text='Get Set, Go Digital!'
                />

                <Paragraph
                    pText="Ideal for fresh faces on the digital scene, this plan gives you everything you need to start strong. You get a sleek, user-friendly website that makes an impact without overwhelming you with complexities. It's the perfect starter kit for a digital debut, complete with essential features and guidance to make your mark online."
                    className='lined_paragraph'
                />
            </div>

            {/* Business Plan - £600/month */}
            <div className='div div_3'>
                <Image
                    src='/images/pricing/business.png'
                    alt='Custom Design'
                    width={500}
                    height={500}
                />

                <Heading_3
                    h3Text='Business Plan - £600/month'
                />
            </div>

            <div className='div div_4'>
                <Heading_4
                    h4Text='Gear Up for Growth!'
                />

                <Paragraph
                    pText="Step up your digital game. This plan is crafted for businesses ready to accelerate. It includes everything from the Startup Plan plus advanced functionalities that scale with your growth. You’ll have access to richer features like enhanced SEO, integrated analytics, and essential maintenance. It’s the support system you need to evolve and sustain your growing online presence."
                    className='lined_paragraph'
                />
            </div>

            {/* Enterprise Plan - £800/month */}
            <div className='div div_5'>
                <Image
                    src='/images/pricing/enterprise.png'
                    alt='Custom Design'
                    width={500}
                    height={500}
                />

                <Heading_3
                    h3Text='Enterprise Plan - £800/month'
                />
            </div>

            <div className='div div_6'>
                <Heading_4
                    h4Text='Full-throttle Digital Power!'
                />

                <Paragraph
                    pText="For the business that demands the best, this complete package leaves no stone unturned. Enjoy bespoke development with sophisticated 3D designs that captivate and engage your audience. This is top-of-the-line support with advanced optimization, security, and feature-rich enhancements. If you’re looking to not just compete but lead in the digital space, this is the plan for you."
                    className='lined_paragraph'
                />
            </div>

            {/* Ready to start? */}
            <div className='div div_7'>
                <h4>Still looking for the perfect fit?</h4>
                <p>Bespoke Services for Unique Needs. <br />If your project has specific requirements or you have a vision that doesn't neatly fit into one of these plans, I'm here to tailor a solution just for you. Together, we'll align on a service package that caters exactly to what your brand and website require.</p>
                <Route_Change href='/contact'>
                    <Button
                        buttonText='Tailor My Plan'
                        className='button'
                    />
                </Route_Change>
            </div>
        </section>
    )
}

export default Detailed_Services