import './Navbar.scss'
import Image from 'next/image'
import Route_Change from '../transitions/Route_Change'
import Button from '../buttons/Button'

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

            <div className='links'>
                <Route_Change href='/services'>
                    Services
                </Route_Change>

                <Route_Change href='/portfolio'>
                    Portfolio
                </Route_Change>

                <Route_Change href='/about'>
                    About
                </Route_Change>

                <Route_Change href='/blog'>
                    Blog
                </Route_Change>
            </div>

            <Route_Change href='/contact'>
                    <Button
                        buttonText='Start Your Journey'
                        className='button'
                    />
                </Route_Change>
        </section>
    )
}

export default Navbar