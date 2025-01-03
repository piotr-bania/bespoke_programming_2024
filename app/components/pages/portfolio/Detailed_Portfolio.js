import './Detailed_Portfolio.scss'
import Heading_2 from '../../ui/headings/Heading_2'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Project_Full from '../../experiences/projects/Project_Full'
import Project_No_Case_Study from '../../experiences/projects/Project_No_Case_Study'
import Wave_Image from '../../experiences/scene_elements/Wave_Image'
import Heading_4 from '../../ui/headings/Heading_4'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Detailed_Portfolio = () => {
	return (
		<section id="portfolio_page">
			<Heading_2
				h2Text="Portfolio of Success"
				className="heading uppercase"
			/>

			<Paragraph
				pText="Discover the digital transformations I’ve crafted. Each project is a unique story of creativity and functionality."
				className="subheading uppercase"
			/>

			<Project_No_Case_Study
				className={'div_1'}
				title="Tsunami Clapham"
				projectComponent={
					<Wave_Image textureUrl="./images/projects/tsunami.jpg" />
				}
				live_url="https://tsunamiclapham.co.uk"
				detailedDescription="A modern, dynamic online presence for Tsunami Clapham. The site features sleek design, seamless updates, and intuitive integrations with OpenTable and Instagram, ensuring an engaging user experience that matches the restaurant’s vibrant atmosphere."
				technologies="Next.js 14, React Three Fiber, GLSL shaders, Supabase, Instagram API, OpenTable"
				case_url="/projects/tsunami"
			/>

			<Project_No_Case_Study
				className={'div_2'}
				title="Yamamomo Dulwich"
				projectComponent={
					<Wave_Image textureUrl="./images/projects/yamamomo.jpg" />
				}
				live_url="https://yamamomo.co.uk"
				detailedDescription="A chic and contemporary website for Yama Momo Dulwich, reflecting the restaurant’s unique identity. From streamlined reservations to interactive design, the site brings the culinary journey to life while enhancing the customer experience."
				technologies="Next.js 14, React Three Fiber, GLSL shaders, Supabase, OpenTable"
				case_url="/projects/yamamomo"
			/>

			<Project_No_Case_Study
				className={'div_3'}
				title="Mara River Capital"
				projectComponent={
					<Wave_Image textureUrl="./images/projects/mara_river_capital.jpg" />
				}
				live_url="https://mara-river.vercel.app/"
				detailedDescription="An innovative and visually striking website for Mara River Capital. The design incorporates 3D elements and interactive layouts, capturing the firm’s forward-thinking approach to investment. The case study delves into the design challenges and breakthroughs that made this project stand out."
				technologies="Next.js 14, Three.js, React Three Fiber, GLSL, SCSS, Framer Motion"
				case_url="/projects/mara_river_capital"
			/>

			<Project_No_Case_Study
				className={'div_4'}
				title="Paulina Janik, Psychologist"
				projectComponent={
					<Wave_Image textureUrl="./images/projects/paulina_janik.jpg" />
				}
				live_url="https://paulinajanik.pl"
				detailedDescription="A tranquil and functional website for Paulina Janik’s psychological services. Combining serene design with easy navigation, the site provides a calming user experience while ensuring access to essential information and resources."
				technologies="Next.js, React, SCSS"
			/>

			<div className="div div_5">
				<Heading_4 h4Text="Inspired by These Projects?" />

				<Paragraph pText="Let’s create something amazing together. Whether you need a sleek portfolio, a dynamic restaurant site, or a fully custom business platform, I’m here to bring your vision to life." />

				<Route_Change href="/contact">
					<Button
						buttonText="Start Your Project Today"
						className="button"
					/>
				</Route_Change>
			</div>
		</section>
	)
}

export default Detailed_Portfolio
