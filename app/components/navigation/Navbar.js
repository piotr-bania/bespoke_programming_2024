import './navbar.scss'
import Link from 'next/link'
import Navbar_Canvas from './Navbar_Canvas'

const Navbar = () => {
    return (
        <section id='navbar'>
            <Link href="/">
                <Navbar_Canvas />
            </Link>
        </section>
    )
}

export default Navbar