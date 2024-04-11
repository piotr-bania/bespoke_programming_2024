import './Footer.scss'
import Link from 'next/link'
import Social_Media from './elements/Social_Media'
import Pages_Links from './elements/Pages_Links'
import Company from './elements/Company'
import Route_Change from '../transitions/Route_Change'
import Button from '../buttons/Button'
import Office_Hours from './Office_Hours'
import Contact_Links from './Contact_Links'

const Footer = () => {
    return (
        <>
            <div className='footer_left'></div>

            <section id='footer'>
                <Company />
                <Social_Media />
                <Pages_Links />
                <Office_Hours />
                <Contact_Links />

                <Route_Change href='/contact'>
                    <Button
                        buttonText='Start Your Project'
                        className='cta'
                    />
                </Route_Change>
            </section>

            <div className='footer_right'></div>
        </>
    )
}

export default Footer