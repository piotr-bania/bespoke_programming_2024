import Heading_3 from '../../ui/headings/Heading_3'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Services_Overview = () => {
    return (
        <section id='services_section'>
            <Heading_3
                h3Text='Custom-Crafted Web Services for Every Ambition'
                className='heading_3'
            />

            <Paragraph
                pText="From engaging websites without 3D elements in the basic package to sophisticated 3D designs in advanced offerings, my services are tailored to make your digital vision a reality. Discover the perfect fit for your business."
                className='paragraph'
            />

            <Route_Change href='/services'>
                <Button
                    buttonText='Explore My Services'
                    className='button'
                />
            </Route_Change>
        </section>
    )
}

export default Services_Overview