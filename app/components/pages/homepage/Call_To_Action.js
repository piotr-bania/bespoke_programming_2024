import './Call_To_Action.scss'
import Heading_2 from '../../ui/headings/Heading_2'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Contact_Form from '../contact/Contact_Form'

const Call_To_Action = () => {
	return (
		<section id="contact">
			<Heading_2
				h2Text="Your Future Site Awaits"
				className="heading uppercase"
			/>

			<Paragraph
				pText="Got questions or ready to begin? I’m here to help."
				className="subheading uppercase"
			/>

			<Contact_Form />

			<p className="no_spam">I respect your privacy. No spam, ever!</p>
		</section>
	)
}

export default Call_To_Action
