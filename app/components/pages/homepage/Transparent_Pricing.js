import Button from '../../ui/buttons/Button'
import Heading_3 from '../../ui/headings/Heading_3'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Route_Change from '../../ui/transitions/Route_Change'

const Transparent_Pricing = () => {
    return (
        <section id='transparent_pricing'>
            <Heading_3
                h3Text='Transparent Pricing Tailored to Your Needs'
                className='heading_3'
            />
            
            <Paragraph
                pText="Choose from my structured packages designed with your business in mind. From Basic to Premium, find the plan that best suits your digital goals with complete transparency and no surprises. Ready to see how affordability meets excellence?"
                className='paragraph'
            />

            <Route_Change href='/pricing'>
                <Button
                    buttonText='Discover My Packages'
                    className='button'
                />
            </Route_Change>
        </section>
    )
}

export default Transparent_Pricing