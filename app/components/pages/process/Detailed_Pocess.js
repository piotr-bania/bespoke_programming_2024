import './Detailed_Pocess.scss'
import Heading_2 from '../../ui/headings/Heading_2'
import Heading_3 from '../../ui/headings/Heading_3'
import Heading_4 from '../../ui/headings/Heading_4'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Image from 'next/image'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Detailed_Pocess = () => {
    return (
        <section id='process_page'>
            <Heading_2
                h2Text='Crafting Your Digital Success'
                className='heading uppercase'
            />

            <Paragraph
                pText='Discover my step-by-step approach that turns your vision into reality with precision and care'
                className='subheading uppercase'
            />

            {/* Let's Talk */}
            <div className='div div_1'>
                <img
                    src='/images/process/discovery_and_consultation.webp'
                    alt='Consultation'
                    width={500}
                    height={500}
                />

                <Heading_3
                    h3Text="Let's Talk"
                />
            </div>

            <div className='div div_2'>
                <Heading_4
                    h4Text='First, we chat'
                />

                <Paragraph
                    pText="You tell me what you need, and I'll listen—no tech jargon, just a straightforward talk about what you want your website to do."
                    className='lined_paragraph'
                />
            </div>

            {/* Designing Your Site */}
            <div className='div div_3'>
                <img
                    src='/images/process/design_and_development.webp'
                    alt='Custom Design'
                    width={500}
                    height={500}
                />

                <Heading_3
                    h3Text='Designing'
                />
            </div>

            <div className='div div_4'>
                <Heading_4
                    h4Text='Then, I design'
                />

                <Paragraph
                    pText="I'll draw up a plan for your site that's easy to understand. You'll see exactly what I'm building for you, with clear, simple designs that show how everything works."
                    className='lined_paragraph'
                />
            </div>

            {/* Building It */}
            <div className='div div_5'>
                <img
                    src='/images/process/build.webp'
                    alt='Building'
                    width={500}
                    height={500}
                />

                <Heading_3
                    h3Text='Building It'
                />
            </div>

            <div className='div div_6'>
                <Heading_4
                    h4Text='Next, I build'
                />

                <Paragraph
                    pText="This is where I roll up my sleeves and turn our plan into a real website. I'll keep you updated, so you always know what's happening."
                    className='lined_paragraph'
                />
            </div>

            {/* Going Live */}
            <div className='div div_7'>
                <img
                    src='/images/process/launch_and_growth.webp'
                    alt='Going Live'
                    width={500}
                    height={500}
                />

                <Heading_3
                    h3Text='Going Live'
                />
            </div>

            <div className='div div_8'>
                <Heading_4
                    h4Text='Launch time'
                />

                <Paragraph
                    pText=" When your site is ready to show off, we'll push the button together. And I'll be there to make sure everything runs smoothly, from the first visitor to the hundredth."
                    className='lined_paragraph'
                />
            </div>

            {/* Keeping It Fresh */}
            <div className='div div_9'>
                <img
                    src='/images/process/enhancement.webp'
                    alt='Enhancement'
                    width={500}
                    height={500}
                />

                <Heading_3
                    h3Text='Keeping It Fresh'
                />
            </div>

            <div className='div div_10'>
                <Heading_4
                    h4Text="The journey doesn't end"
                />

                <Paragraph
                    pText="A website needs care to stay great. I stick around to update, tweak, and make sure your site keeps up with your business as it grows."
                    className='lined_paragraph'
                />
            </div>

            {/* Why Choose Me? */}
            <div className='div div_11'>
                <img
                    src='/images/process/question.webp'
                    alt='Question'
                    width={500}
                    height={500}
                />

                <Heading_3
                    h3Text='Why Choose Me?'
                />
            </div>

            <div className='div div_12'>
                <Heading_4
                    h4Text="I'm your digital craftsman"
                />

                <Paragraph
                    pText="When you work with me, you get a partner who cares about your success as much as you do."
                    className='lined_paragraph'
                />
            </div>

            {/* Ready to start? */}
            <div className='div div_13'>
                <h4>Ready to Start?</h4>
                <p>Let's make something amazing. <br />If you're ready for a website that works for you, let's get started.</p>
                <Route_Change href='/contact'>
                    <Button
                        buttonText='Start Your Project'
                        className='button'
                    />
                </Route_Change>
            </div>
        </section>
    )
}

export default Detailed_Pocess