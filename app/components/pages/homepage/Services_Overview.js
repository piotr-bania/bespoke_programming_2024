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
                h2Text='Services Tailored for Impact'
            />

            <Paragraph
                className='subheading uppercase'
                pText='From Conception to Launch – Crafting Your Digital Legacy'
            />

            <div className='overlay div div_1'>
                <div className='text'>
                    <h4>Premium Hosting <abbr className='indigo'>⇀</abbr></h4>
                    <Paragraph
                        pText='High performance and reliability for every project'
                    />
                </div>
                <img
                    src='/images/services/hosting.webp'
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
                <img
                    src='/images/services/design.webp'
                    alt='Personalized Design & Development'
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
                <img
                    src='/images/services/support.webp'
                    alt='Dedicated Support'
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