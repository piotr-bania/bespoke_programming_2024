import './globals.scss'
import Navbar from './components/ui/navigation/Navbar'
import Strips from './components/ui/strips/Strips'
import Footer from './components/ui/navigation/Footer'

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <Navbar />
                <Strips />
                {children}
                <Footer />
            </body>
        </html>
    )
}
