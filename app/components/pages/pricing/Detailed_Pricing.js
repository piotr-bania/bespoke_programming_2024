import './Detailed_Pricing.scss'
import Heading_2 from '../../ui/headings/Heading_2'
import Heading_3 from '../../ui/headings/Heading_3'
import Heading_4 from '../../ui/headings/Heading_4'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Image from 'next/image'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Detailed_Services = () => {
	return (
		<section id="pricing_page">
			<Heading_2
				h2Text="Pricing Plans Designed for Your Success"
				className="heading uppercase"
			/>

			<Paragraph
				pText="Choose the perfect plan to match your digital goals"
				className="subheading uppercase"
			/>

			{/* Startup Plan - £400/month */}
			<div className="div div_1">
				<img
					src="/images/pricing/startup.webp"
					alt="Startup Plan"
					width={500}
					height={500}
				/>

				<h3>
					Startup Plan —<abbr className="indigo"> £250/month</abbr>{' '}
					(12 months)
				</h3>
			</div>

			<div className="div div_2">
				<h4 className="italic">
					20% Discount Upfront: <abbr className="indigo">£2,400</abbr>
				</h4>

				<Paragraph
					pText="Perfect for new businesses—get a professional, user-friendly website to make a strong start without unnecessary complexity."
					className="lined_paragraph"
				/>
			</div>

			{/* Business Plan - £600/month */}
			<div className="div div_3">
				<img
					src="/images/pricing/business.webp"
					alt="Business Plan"
					width={500}
					height={500}
				/>

				<h3>
					Business Plan —<abbr className="indigo"> £350/month</abbr>{' '}
					(12 months)
				</h3>
			</div>

			<div className="div div_4">
				<h4 className="italic">
					20% Discount Upfront: <abbr className="indigo">£3,360</abbr>
				</h4>

				<Paragraph
					pText="Tailored for growing businesses, this plan includes enhanced features like advanced SEO, integrated analytics, and professional maintenance to support your scaling efforts."
					className="lined_paragraph"
				/>
			</div>

			{/* Enterprise Plan - £800/month */}
			<div className="div div_5">
				<img
					src="/images/pricing/enterprise.webp"
					alt="Enterprise Plan"
					width={500}
					height={500}
				/>

				<h3>
					Enterprise Plan —<abbr className="indigo"> £800/month</abbr>{' '}
					(12 months)
				</h3>
			</div>

			<div className="div div_6">
				<h4 className="italic">
					20% Discount Upfront: <abbr className="indigo">£7,680</abbr>
				</h4>

				<Paragraph
					pText="The ultimate package for businesses aiming to lead. Includes cutting-edge designs, sophisticated 3D features, and top-tier support to dominate the digital space."
					className="lined_paragraph"
				/>
			</div>

			{/* Ready to start? */}
			<div className="div div_7">
				<h4>Need Something More Specific?</h4>
				<p>
					If your project has unique requirements, I offer additional
					customization options. Let’s build a package tailored to
					your exact needs.
				</p>
				<Route_Change href="/contact">
					<Button buttonText="Tailor My Plan" className="button" />
				</Route_Change>
			</div>
		</section>
	)
}

export default Detailed_Services
