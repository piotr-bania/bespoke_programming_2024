import Heading_1 from './components/ui/headings/Heading_1'
import Heading_2 from './components/ui/headings/Heading_2'
import Heading_3 from './components/ui/headings/Heading_3'
import Heading_4 from './components/ui/headings/Heading_4'
import Paragraph from './components/ui/paragraphs/Paragraph'
import Button from './components/ui/buttons/Button'
import Route_Change from './components/ui/transitions/Route_Change'

export default function Home() {
    return (
        <main>
            <Heading_1
                h1Text='Transform Your Online Presence with £0 Upfront Cost'
                className='heading_1'
            />
            <Heading_2
                h2Text='Bespoke 3D Web Solutions Tailored for Startups and Small Businesses'
                className='heading_2'
            />
            <Route_Change href='/about'>
                <Button
                    buttonText='Discover How'
                    className='button'
                />
            </Route_Change>
        </main>
    )
}