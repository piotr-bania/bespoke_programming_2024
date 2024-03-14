import Hero from './components/pages/home/Hero'
import Value_Proposition from './components/pages/home/Value_Proposition'
import Services_Overview from './components/pages/home/Services_Overview'
import Transparent_Pricing from './components/pages/home/Transparent_Pricing'
import Process_Explained from './components/pages/home/Process_Explained'
import Recent_Work from './components/pages/home/Recent_Work'
import FAQs from './components/pages/home/FAQs'
import Call_To_Action from './components/pages/home/Call_To_Action'
import About_Me from './components/pages/home/About_Me'

export default function Home() {
    return (
        <>          
            <Hero />
            <Value_Proposition />
            <Services_Overview />
            <Transparent_Pricing />
            <Process_Explained />
            <Recent_Work />
            <FAQs />
            <Call_To_Action />
            <About_Me />
        </>
    )
}