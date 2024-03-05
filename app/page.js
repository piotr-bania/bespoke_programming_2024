import Animation_Wrapper from './components/ui/transitions/Animation_Wrapper'
import Route_Change from './components/ui/transitions/Route_Change'
import Heading_1 from './components/ui/headings/Heading_1'
import Heading_2 from './components/ui/headings/Heading_2'
import Button from './components/ui/buttons/Button'

export default function Home() {
    return (
        <>
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
        </>
    )
}