import './Recent_Work.scss'
import Heading_2 from '../../ui/headings/Heading_2'
import Heading_4 from '../../ui/headings/Heading_4'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Link from 'next/link'
import Image from 'next/image'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'
import Project_Canvas from '../../canvases/Project_Canvas'
import Featured_Project_1 from '../../canvases/projects/Featured_Project_1'
import Featured_Project_2 from '../../canvases/projects/Featured_Project_2'

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

            <div className='div div_1'>
                <Heading_4
                    className='heading'
                    h4Text='Mara River Capital'
                />
                <p>Website redesign for a Tanzanian hedge fund</p>
                
                <Link href='https://mara-river-capital-redesign-v2.vercel.app/' target='_blank'>
                    {/* <Project_Canvas projectComponent={<Featured_Project_1 />} /> */}
                </Link>
                <p className='paragraph'>Website redesign for a Tanzanian hedge fund, where I utilized CSS, Sass, React, Next, GLSL, Three.js, and React Three Fiber to create a captivating 3D experience.</p>
            </div>

            <div className='div div_2'>
                <Heading_4
                    className='heading'
                    h4Text='Tsunami Clapham'
                />
                <p>Website redesign for a London-based restaurant</p>

                <Link href='https://tsunami-clapham-redesign.vercel.app/' target='_blank'>
                    <Project_Canvas projectComponent={<Featured_Project_2 />} />
                </Link>
                <p className='paragraph'>Website redesign for a London-based restaurant, where I utilized CSS, Sass, React, and Next.js to create a visually stunning and user-friendly experience.</p>
            </div>

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