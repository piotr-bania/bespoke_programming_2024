import Button from '../components/ui/buttons/Button'
import Heading_1 from '../components/ui/headings/Heading_1'
import Paragraph from '../components/ui/paragraphs/Paragraph'
import Route_Change from '../components/ui/transitions/Route_Change'

const Room_1 = () => {
    return (
        <main>
            <Heading_1
                h1Text='Hi!'
                className='heading_1'
            />
            <Paragraph
                pText='Welcome to the About Page'
                className='paragraph'
            />
            <Route_Change href='/'>
                <Button
                    buttonText='Go Home'
                    className='button'
                />
            </Route_Change>
        </main>
    )
}

export default Room_1