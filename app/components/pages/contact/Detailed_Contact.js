import './Detailed_Contact.scss'
import Heading_4 from '../../ui/headings/Heading_4'
import Heading_2 from '../../ui/headings/Heading_2'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Contact_Form from './Contact_Form'

const Detailed_Contact = () => {
	return (
		<section id="contact_page">
			<Heading_2 h2Text="Get in Touch" className="heading uppercase" />

			<Paragraph
				pText="Start Your Journey to a Bespoke Digital Experience"
				className="subheading uppercase"
			/>

			<Heading_4
				h4Text="Let's Bring Your Vision to Life"
				className="div div_1"
			/>

			<Paragraph
				pText="I’m here to help you craft the perfect digital presence. Fill out the form below, and I’ll get back to you promptly to discuss your goals and how we can bring them to life."
				className="paragraph div div_2"
			/>

			<Contact_Form />

			<Paragraph
				pText="Prefer other ways to connect? Reach out via email or Telegram, and let’s start building your future."
				className="div div_3"
			/>

			<p className="no_spam">I respect your privacy. No spam, ever!</p>
		</section>
	)
}

export default Detailed_Contact
