import Hero from './components/pages/homepage/Hero'
import Value_Proposition from './components/pages/homepage/Value_Proposition'
import Services_Overview from './components/pages/homepage/Services_Overview'
import Transparent_Pricing from './components/pages/homepage/Transparent_Pricing'
import Process_Explained from './components/pages/homepage/Process_Explained'
import Recent_Work from './components/pages/homepage/Recent_Work'
import Call_To_Action from './components/pages/homepage/Call_To_Action'

export default function Home() {
    return (
        <>          
            <Hero />
            <Value_Proposition />
            <Services_Overview />
            <Transparent_Pricing />
            <Recent_Work />
            <Process_Explained />
            <Call_To_Action />
        </>
    )
}