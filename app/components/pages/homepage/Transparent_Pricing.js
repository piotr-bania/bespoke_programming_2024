import './Transparent_Pricing.scss'
import Heading_2 from '../../ui/headings/Heading_2'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Transparent_Pricing = () => {
    return (
        <section id='transparent_pricing'>
            <Heading_2
                className='heading uppercase'
                h2Text='Friendly Quotes, Clear Terms'
            />

            <Paragraph
                className='subheading uppercase'
                pText="Let’s talk about what you need first. Pay monthly, or enjoy 20% off if you settle up front."
            />

            <div className='overlay div_1'>
                <img
                    src='/images/pricing/startup.webp'
                    alt='Startup Plan'
                    width={500}
                    height={500}
                />
                <div className='text'>
                    <h4>Startup Plan</h4>
                    <h3><abbr className='indigo'> £250/month</abbr> (12 months)</h3>
                    <h4 className='italic'>20% Discount Upfront:<abbr className='indigo'> £2,400</abbr></h4>
                    <Paragraph
                        pText='Perfect for new businesses—get an impressive online presence without the complexity of 3D design.'
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
                    <h4>Business Plan</h4>
                    <h3><abbr className='magenta'> £350/month</abbr> (12 months)</h3>
                    <h4 className='italic'>20% Discount Upfront:<abbr className='magenta'> £3,360</abbr></h4>
                    <Paragraph
                        pText='Advanced features and professional maintenance for those ready to scale and stand out.'
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
                    <h4>Enterprise Plan</h4>
                    <h3><abbr className='indigo'> £800/month</abbr> (12 months)</h3>
                    <h4 className='italic'>20% Discount Upfront:<abbr className='indigo'> £7,680</abbr></h4>
                    <Paragraph
                        pText='Cutting-edge design, including 3D elements, plus comprehensive support for high-end goals.'
                    />
                </div>
            </div>

            <div className='div_4'>
                <h4>Need Extra Customizations?</h4>
                <p>Additional services are available at a flat rate. Let’s ensure your plan is exactly what you envision.</p>
                <Route_Change href='/pricing'>
                    <Button
                        buttonText='Learn More About My Pricing'
                    />
                </Route_Change>
            </div>
        </section>
    )
}

export default Transparent_Pricing