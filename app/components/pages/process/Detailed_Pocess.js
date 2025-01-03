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
		<section id="process_page">
			<Heading_2
				h2Text="Your Roadmap to Success"
				className="heading uppercase"
			/>

			<Paragraph
				pText="Step into a seamless process that brings your vision to life with clarity and precision."
				className="subheading uppercase"
			/>

			{/* Let's Talk */}
			<div className="div div_1">
				<img
					src="/images/process/discovery_and_consultation.webp"
					alt="Consultation"
					width={500}
					height={500}
				/>

				<Heading_3 h3Text="Let's Talk" />
			</div>

			<div className="div div_2">
				<Heading_4 h4Text="We Start with a Conversation" />

				<Paragraph
					pText="Tell me about your goals, challenges, and vision for your website. I listen, ask the right questions, and help shape your ideas into a clear plan—all without technical jargon."
					className="lined_paragraph"
				/>
			</div>

			{/* Designing Your Site */}
			<div className="div div_3">
				<img
					src="/images/process/design_and_development.webp"
					alt="Custom Design"
					width={500}
					height={500}
				/>

				<Heading_3 h3Text="Designing" />
			</div>

			<div className="div div_4">
				<Heading_4 h4Text="Crafting Your Vision" />

				<Paragraph
					pText="With your input, I’ll create a design blueprint that’s visually stunning and strategically effective. You’ll see the structure and flow of your website before we start building."
					className="lined_paragraph"
				/>
			</div>

			{/* Building It */}
			<div className="div div_5">
				<img
					src="/images/process/build.webp"
					alt="Building"
					width={500}
					height={500}
				/>

				<Heading_3 h3Text="Building" />
			</div>

			<div className="div div_6">
				<Heading_4 h4Text="Bringing It to Life" />

				<Paragraph
					pText="This is where design meets functionality. I transform our blueprint into a fully functioning website, keeping you updated every step of the way."
					className="lined_paragraph"
				/>
			</div>

			{/* Going Live */}
			<div className="div div_7">
				<img
					src="/images/process/launch_and_growth.webp"
					alt="Going Live"
					width={500}
					height={500}
				/>

				<Heading_3 h3Text="Going Live" />
			</div>

			<div className="div div_8">
				<Heading_4 h4Text="Launch with Confidence" />

				<Paragraph
					pText="When your site is ready, we’ll launch it together. From the first click to ongoing monitoring, I ensure everything runs smoothly and professionally."
					className="lined_paragraph"
				/>
			</div>

			{/* Keeping It Fresh */}
			<div className="div div_9">
				<img
					src="/images/process/enhancement.webp"
					alt="Enhancement"
					width={500}
					height={500}
				/>

				<Heading_3 h3Text="Keeping It Fresh" />
			</div>

			<div className="div div_10">
				<Heading_4 h4Text="Continuous Care" />

				<Paragraph
					pText="Your website is an evolving asset. I provide updates, enhancements, and proactive maintenance to ensure it stays ahead of your business needs."
					className="lined_paragraph"
				/>
			</div>

			{/* Why Choose Me? */}
			<div className="div div_11">
				<img
					src="/images/process/question.webp"
					alt="Question"
					width={500}
					height={500}
				/>

				<Heading_3 h3Text="Why Choose Me?" />
			</div>

			<div className="div div_12">
				<Heading_4 h4Text="A Partner for Your Success" />

				<Paragraph
					pText="With me, you’re not just hiring a developer—you’re gaining a partner who cares about your goals and works to exceed your expectations at every step."
					className="lined_paragraph"
				/>
			</div>

			{/* Ready to start? */}
			<div className="div div_13">
				<h4>Ready to Begin?</h4>
				<p>
					Let’s make your vision a reality. <br />
					Contact me today and start your journey toward a website
					that works for you.
				</p>
				<Route_Change href="/contact">
					<Button
						buttonText="Start Your Project"
						className="button"
					/>
				</Route_Change>
			</div>
		</section>
	)
}

export default Detailed_Pocess
