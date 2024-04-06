import './globals.scss'
import './styles/Sections.scss'
import Navbar from './components/ui/navigation/Navbar'
import Strips from './components/ui/strips/Strips'
import Footer from './components/ui/navigation/Footer'
import Homepage_Loader_Wrapper from './components/ui/loaders/Homepage_Loader_Wrapper '
import Animation_Wrapper from './components/ui/transitions/Animation_Wrapper'

export const metadata = {
    title: 'Bespoke Web Development for Startups | Zero Upfront Cost',
    description: 'Empowering startups and small businesses with custom web development services, including premium hosting at £0 upfront cost. Elevate your digital presence with our bespoke solutions tailored to your unique vision and goals.',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body suppressHydrationWarning={true}>
                {/* <Homepage_Loader_Wrapper> */}
                    <Navbar />
                    <Animation_Wrapper>
                        <Strips />
                        {children}
                        <Footer />
                    </Animation_Wrapper>
                {/* </Homepage_Loader_Wrapper> */}
            </body>
        </html>
    )
}