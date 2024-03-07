import Heading_1 from './components/ui/headings/Heading_1'
import Heading_2 from './components/ui/headings/Heading_2'
import Route_Change from './components/ui/transitions/Route_Change'
import Button from './components/ui/buttons/Button'
import Hero_Section from './components/pages/home/Hero'
import Why_Choose_Me_Section from './components/pages/home/Why_Choose_Me'
import Services_Overview_Section from './components/pages/home/Services_Overview'
import How_It_Works_Section from './components/pages/home/How_It_Works'
import Success_Stories_Section from './components/pages/home/Success_Stories'
import FAQ_Section from './components/pages/home/FAQ'
import Contact_Section from './components/pages/home/Contact'

export default function Home() {
    return (
        <>
            <Heading_1
                h1Text='Elevate Your Digital Presence Without the Financial Burden'
                className='heading_1'
            />
            <Heading_2
                h2Text='I specialize in creating stunning, custom web solutions for startups and small businesses - all with £0 upfront costs'
                className='heading_2'
            />
            <Route_Change href='/about'>
                <Button
                    buttonText='Discover How'
                    className='button'
                />
            </Route_Change>
            
            <Hero_Section />
            <Why_Choose_Me_Section />
            <Services_Overview_Section />
            <How_It_Works_Section />
            <Success_Stories_Section />
            <FAQ_Section />
            <Contact_Section />
        </>
    )
}