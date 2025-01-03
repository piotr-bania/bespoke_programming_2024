import './Detailed_About.scss'
import Heading_2 from '../../ui/headings/Heading_2'
import Heading_3 from '../../ui/headings/Heading_3'
import Heading_4 from '../../ui/headings/Heading_4'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Detailed_About = () => {
	return (
		<section id="about_page">
			<Heading_2 h2Text="About Me" className="heading uppercase" />

			<Paragraph
				pText="Bringing Ideas to Life Through Code"
				className="subheading uppercase"
			/>

			<div className="div div_1">
				<Heading_3 h3Text="Hello! I’m Piotr" className="heading" />

				<Paragraph
					pText="I'm a web developer based in London, originally from Poland. Since 2021, I’ve been turning ideas into dynamic digital experiences that engage and inspire."
					className="paragraph"
				/>
			</div>

			<div className="div div_2">
				<Paragraph
					pText="I specialize in creating bespoke websites that combine clean code, thoughtful design, and innovative technology. From simple interfaces to immersive 3D environments, I thrive on crafting experiences that leave a lasting impression."
					className="paragraph"
				/>
			</div>

			<div className="div div_3">
				<Paragraph
					pText="Collaboration is at the heart of my process. Whether it's shaping your product roadmap or refining your brand's online presence, I work closely with clients to ensure every project exceeds expectations."
					className="paragraph"
				/>
			</div>

			<div className="div div_4">
				<Heading_4 h4Text="Technologies I Use" />

				<Paragraph
					pText="React.js, Next.js, React Three Fiber, Three.js, GLSL (OpenGL Shading Language), JavaScript, and design tools that bring creativity and precision to every project."
					className="paragraph"
				/>
			</div>

			<div className="div div_5">
				<Heading_4 h4Text="Let’s Build Something Amazing" />

				<Paragraph pText="If you're ready to elevate your digital presence with a bespoke website, let’s connect. Together, we can create something extraordinary." />

				<Route_Change href="/contact">
					<Button buttonText="Contact Me Today" className="button" />
				</Route_Change>
			</div>
		</section>
	)
}

export default Detailed_About
