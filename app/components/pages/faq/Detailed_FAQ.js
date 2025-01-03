import './Detailed_FAQ.scss'
import { Other_Questions } from '../../pages/faq/All_Questions'
import Heading_2 from '../../ui/headings/Heading_2'
import Paragraph from '../../ui/paragraphs/Paragraph'
import FAQ_Questions from '../../pages/faq/FAQ_Questions'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Detailed_FAQ = () => {
	return (
		<section id="faq_page">
			<Heading_2
				className="heading uppercase"
				h2Text="Frequently Asked Questions"
			/>

			<Paragraph
				pText="Your Questions Answered—Helping You Make Confident Decisions"
				className="subheading uppercase"
			/>

			<FAQ_Questions items={Other_Questions} />

			<Paragraph
				pText="Still have questions? Don’t hesitate to reach out. I’m here to provide the clarity you need to move forward with confidence."
				className="more_faq"
			/>

			<Route_Change href="/contact">
				<Button
					buttonText="Contact Me for More Details"
					className="button"
				/>
			</Route_Change>
		</section>
	)
}

export default Detailed_FAQ
