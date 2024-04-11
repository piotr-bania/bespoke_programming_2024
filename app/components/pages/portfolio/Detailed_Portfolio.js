import './Detailed_Portfolio.scss'
import Heading_2 from '../../ui/headings/Heading_2'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Project_Full from '../../experiences/projects/Project_Full'
import Project_No_Case_Study from '../../experiences/projects/Project_No_Case_Study'
import Wave_Image from '../../experiences/scene_elements/Wave_Image'

const Detailed_Portfolio = () => {
    return (
        <section id='portfolio_page'>
            <Heading_2
                h2Text='My Work, Your Inspiration'
                className='heading uppercase'
            />

            <Paragraph
                pText='A glimpse into a world where your ideas take digital form. Explore my portfolio of success stories'
                className='subheading uppercase'
            />

            <Project_No_Case_Study
                className={'div_1'}
                title='Tsunami Clapham'
                projectComponent={<Wave_Image textureUrl='./images/projects/tsunami.jpg' />}
                live_url='https://tsunamiclapham.co.uk'
                detailedDescription="At Tsunami Clapham, I've crafted a digital space that's as dynamic and inviting as their menu. The website's modern design intuitively connects diners with the restaurant's ambiance, allows for easy updates, and integrates with social media to bring the latest buzz directly to patrons."
                technologies='Next.js 14, React Three Fiber, GLSL shaders, Supabase, Instagram API, OpenTable'
                case_url='/projects/tsunami'
            />

            <Project_No_Case_Study
                className={'div_2'}
                title='Yamamomo Dulwich'
                projectComponent={<Wave_Image textureUrl='./images/projects/yamamomo.jpg' />}
                live_url='https://yamamomo.co.uk'
                detailedDescription="For Yamamomo Dulwich, I've created an online presence that mirrors their chic, contemporary setting. The website boasts a sleek design, streamlines the reservation process, and brings their culinary journey to life with interactive features that capture the restaurant's innovative spirit."
                technologies='Next.js 14, React Three Fiber, GLSL shaders, Supabase, OpenTable'
                case_url='/projects/yamamomo'
            />

            <Project_No_Case_Study
                className={'div_3'}
                title='Mara River Capital'
                projectComponent={<Wave_Image textureUrl='./images/projects/mara_river_capital.jpg' />}
                live_url='https://mara-river.vercel.app/'
                detailedDescription="Mara River Capital's website was envisioned as a seamless blend of sophistication and cutting-edge design. The project involved creating a 3D layout with interactive elements to reflect the firm's innovative approach to investment. While the project faced obstacles, the case study explores the design choices, the integration of 3D elements on a 2D plane, and the key takeaways from the challenges encountered."
                technologies='Next.js 14, Three.js, React Three Fiber, GLSL, SCSS, Framer Motion'
                case_url='/projects/mara_river_capital'
            />

            <Project_No_Case_Study
                className={'div_4'}
                title='Paulina Janik, Psychologist'
                projectComponent={<Wave_Image textureUrl='./images/projects/paulina_janik.jpg' />}
                live_url='https://paulinajanik.pl'
                detailedDescription="The website for Paulina Janik is crafted to encapsulate the essence of her professional psychological services. It serves as a serene online space for clients to explore her therapeutic approaches, delve into insightful publications, and seek guidance for mental well-being. The design intertwines tranquility with functionality, providing a calming user experience while offering easy access to essential information and resources."
                technologies='Next.js, React, SCSS'
            />
        </section>
    )
}

export default Detailed_Portfolio