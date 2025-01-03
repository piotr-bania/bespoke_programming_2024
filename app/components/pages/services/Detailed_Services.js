import './Detailed_Services.scss'
import Heading_4 from '../../ui/headings/Heading_4'
import Heading_3 from '../../ui/headings/Heading_3'
import Heading_2 from '../../ui/headings/Heading_2'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Image from 'next/image'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Detailed_Services = () => {
	return (
		<section id="services_page">
			<Heading_2
				h2Text="Tailored Web Solutions"
				className="heading uppercase"
			/>

			<Paragraph
				pText="Flexible, High-Impact Services Designed for Your Growth"
				className="subheading uppercase"
			/>

			<div className="div div_1">
				<img
					src="/images/services/hosting.webp"
					alt="Hosting & Performance"
					width={500}
					height={500}
				/>

				<Heading_3 h3Text="Hosting & Performance" />
			</div>

			<div className="div div_2">
				<Heading_4 h4Text="Fast, Secure, and Reliable Hosting" />

				<Paragraph
					pText="Enjoy seamless performance with hosting optimized for speed, security, and reliability. From setup to scaling, I ensure your website runs flawlessly across all devices."
					className="lined_paragraph"
				/>
			</div>

			<div className="div div_3">
				<img
					src="/images/services/design.webp"
					alt="Design & Development"
					width={500}
					height={500}
				/>

				<Heading_3 h3Text="Design & Development" />
			</div>

			<div className="div div_4">
				<Heading_4 h4Text="Custom Designs Built to Engage" />

				<Paragraph
					pText="Combining visual appeal with exceptional functionality, I craft websites that captivate audiences and drive results. Whether it's interactive 3D experiences or dynamic web applications, my tools and expertise deliver tailored solutions that make your brand stand out."
					className="lined_paragraph"
				/>
			</div>

			<div className="div div_5">
				<img
					src="/images/services/support.webp"
					alt="Support & Growth"
					width={500}
					height={500}
				/>

				<Heading_3 h3Text="Support & Maintenance" />
			</div>

			<div className="div div_6">
				<Heading_4 h4Text="Continuous Care for Your Website" />

				<Paragraph
					pText="From updates to troubleshooting, my support packages are designed to keep your website performing at its best. As your business evolves, so does your digital presence—with my expertise backing you every step of the way."
					className="lined_paragraph"
				/>
			</div>

			<div className="div div_7">
				<img
					src="/images/services/analytics.webp"
					alt="Analytics & Insights"
					width={500}
					height={500}
				/>

				<Heading_3 h3Text="Analytics & Insights" />
			</div>

			<div className="div div_8">
				<Heading_4 h4Text="Data-Driven Decisions for Growth" />

				<Paragraph
					pText="Understand your audience and maximize impact with detailed performance insights. Make informed decisions to enhance user experiences and boost your online visibility."
					className="lined_paragraph"
				/>
			</div>

			<div className="div div_9">
				<Heading_4 h4Text="Transform Your Vision Into Reality" />

				<Paragraph pText="Start your journey today with bespoke web services that elevate your brand. Let’s work together to build something extraordinary." />

				<Route_Change href="/contact">
					<Button buttonText="Contact Me Today" className="button" />
				</Route_Change>
			</div>
		</section>
	)
}

export default Detailed_Services
