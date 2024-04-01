import './Services_Overview.scss'
import Heading_2 from '../../ui/headings/Heading_2'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'
import Image from 'next/image'

const Services_Overview = () => {
    return (
        <section id='services_section'>
            <Heading_2
                className='heading uppercase'
                h2Text='Custom-Crafted Services'
            />

            <Paragraph
                className='subheading uppercase'
                pText='Elevate your business with bespoke web solutions. From initial concepts to polished digital platforms, I ensure a seamless journey to a vibrant online presence.'
            />

            <div className='overlay div div_1'>
                <div className='text'>
                    <h4>Premium Hosting <abbr className='indigo'>⇀</abbr></h4>
                    <Paragraph
                        pText='High performance and reliability for every project'
                    />
                </div>
                <Image
                    src='/images/services/hosting.png'
                    alt='Premium Hosting'
                    width={500}
                    height={500}
                />
            </div>

            <div className='overlay div div_2'>
                <div className='text'>
                    <h4>Personalized Design & Development <abbr className='indigo'>⇀</abbr></h4>
                    <Paragraph
                        pText='From dynamic single-page applications to immersive web experiences'
                    />
                </div>
                <Image
                    src='/images/services/design.png'
                    alt='Premium Hosting'
                    width={500}
                    height={500}
                />
            </div>

            <div className='overlay div div_3'>
                <div className='text'>
                    <h4>Dedicated Support <abbr className='indigo'>⇀</abbr></h4>
                    <Paragraph
                        pText='I offer maintenance and updates tailored to your package choice'
                    />
                </div>
                <Image
                    src='/images/services/support.png'
                    alt='Premium Hosting'
                    width={500}
                    height={500}
                />
            </div>

            <div className='div div_4'>
                <h4>Envision More - Browse My Solutions</h4>
                <Route_Change href='/services'>
                    <Button
                        buttonText='Explore My Services'
                    />
                </Route_Change>
            </div>
        </section>
    )
}

export default Services_Overview