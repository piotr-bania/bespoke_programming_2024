import Hero from './components/pages/home/Hero'
import Value_Proposition from './components/pages/home/Value_Proposition'
import Services_Overview from './components/pages/home/Services_Overview'
import Process_Explained from './components/pages/home/Process_Explained'
import Recent_Work from './components/pages/home/Recent_Work'
import FAQs from './components/pages/home/FAQs'
import Call_To_Action from './components/pages/home/Call_To_Action'

export default function Home() {
    return (
        <>          
            <Hero />
            <Value_Proposition />
            <Services_Overview />
            <Process_Explained />
            <Recent_Work />
            <FAQs />
            <Call_To_Action />
        </>
    )
}