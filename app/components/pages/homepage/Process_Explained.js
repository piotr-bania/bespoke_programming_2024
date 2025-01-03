import './Process_Explained.scss'
import Heading_2 from '../../ui/headings/Heading_2'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Image from 'next/image'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'
import Heading_4 from '../../ui/headings/Heading_4'
import Heading_3 from '../../ui/headings/Heading_3'

const Process_Explained = () => {
	return (
		<section id="process_section">
			<Heading_2
				className="heading uppercase"
				h2Text="Your Roadmap to Digital Success"
			/>

			<Paragraph
				pText="Transparent, Collaborative, and Meticulous—Every Step of the Way"
				className="subheading uppercase"
			/>

			<div className="overlay div div_1">
				<img
					src="/images/process/discovery_and_consultation.webp"
					alt="Discovery and Consultation"
					width={500}
					height={500}
				/>
				<Heading_4 h4Text="Kickoff with a Free Consultation" />
				<Paragraph pText="We’ll define the project scope and your vision, mapping out a strategy that puts your needs first." />
			</div>

			<div className="overlay div div_2">
				<img
					src="/images/process/design_and_development.webp"
					alt="Design and Development"
					width={500}
					height={500}
				/>
				<Heading_4 h4Text="Bringing Your Ideas to Life" />
				<Paragraph pText="From wireframes to final build, experience a transparent process fueled by cutting-edge tech." />
			</div>

			<div className="overlay div div_3">
				<img
					src="/images/process/launch_and_growth.webp"
					alt="Launch and Growth"
					width={500}
					height={500}
				/>
				<Heading_4 h4Text="Seamless Deployment" />
				<Paragraph pText="Go live with confidence. I’m here to support you at launch—and beyond." />
			</div>

			<div className="overlay div div_4">
				<img
					src="/images/process/enhancement.webp"
					alt="Keep Thriving"
					width={500}
					height={500}
				/>
				<Heading_4 h4Text="Continual Enhancement:" />
				<Paragraph pText="Expect proactive updates and optimizations to keep your site performing at its best." />
			</div>

			<div className="div div_5">
				<h4>Ready to Start?</h4>
				<p>
					Dive deeper into how we’ll bring your vision to life—from
					first contact to final launch.
				</p>
				<Route_Change href="/process">
					<Button
						buttonText="Learn More About My Process"
						className="button"
					/>
				</Route_Change>
			</div>
		</section>
	)
}

export default Process_Explained
