import './Navbar.scss'
import Image from 'next/image'
import Route_Change from '../transitions/Route_Change'

const Navbar = () => {
    return (
        <section id='navbar'>
            <Route_Change href='/'>
                <Image
                    src='/svg/logo.svg'
                    alt='logo'
                    width={60}
                    height={60}
                />
            </Route_Change>
        </section>
    )
}

export default Navbar