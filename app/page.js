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