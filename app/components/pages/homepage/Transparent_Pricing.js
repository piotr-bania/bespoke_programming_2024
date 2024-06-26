import './Transparent_Pricing.scss'
import Heading_2 from '../../ui/headings/Heading_2'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'
import Image from 'next/image'

const Transparent_Pricing = () => {
    return (
        <section id='transparent_pricing'>
            <Heading_2
                className='heading uppercase'
                h2Text='Friendliness in Every Quote'
            />

            <Paragraph
                className='subheading uppercase'
                pText="Let’s chat about what you need, with pricing to follow your site's launch"
            />

            <div className='overlay div_1'>
                <img
                    src='/images/pricing/startup.webp'
                    alt='Startup Plan'
                    width={500}
                    height={500}
                />
                <div className='text'>
                    <h4>Startup Plan<br /><abbr className='indigo'>£400/month</abbr></h4>
                    <Paragraph
                        pText='Ideal for new businesses looking to make a digital debut without the complexity of 3D design'
                    />
                </div>
            </div>

            <div className='overlay div_2'>
                <img
                    src='/images/pricing/business.webp'
                    alt='Business Plan'
                    width={500}
                    height={500}
                />
                <div className='text'>
                    <h4>Business Plan<br /><abbr className='magenta'>£600/month</abbr></h4>
                    <Paragraph
                        pText='Tailored for growth, it includes advanced features and essential maintenance for a professional online presence'
                    />
                </div>
            </div>

            <div className='overlay div_3'>
                <img
                    src='/images/pricing/enterprise.webp'
                    alt='Enterprise Plan'
                    width={500}
                    height={500}
                />
                <div className='text'>
                    <h4>Enterprise Plan<br /><abbr className='indigo'>£800/month</abbr></h4>
                    <Paragraph
                        pText='The complete package: premium development with sophisticated 3D elements and extensive support'
                    />
                </div>
            </div>

            <div className='div_4'>
                <h4>Extra Needs?</h4>
                <p>For specific requirements, I offer additional services at a set rate to ensure your package perfectly fits your vision.</p>
                <Route_Change href='/pricing'>
                    <Button
                        buttonText='Learn more about my pricing'
                    />
                </Route_Change>
            </div>
        </section>
    )
}

export default Transparent_Pricing