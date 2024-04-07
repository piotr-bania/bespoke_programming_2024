import './Footer.scss'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <div className='footer_left'></div>

            <section id='footer'>
                <div className='location'>
                    <h4>Bespoke Programming</h4>
                    <p className='uppercase'>London, <br />United Kingdom</p>
                </div>

                <div className='office_hours'>
                    <h4>Office Hours</h4>
                    <p className='uppercase'>Monday-Friday <abbr className='indigo'>⇀</abbr> 9am-7pm</p>
                    <p className='uppercase'>Saturday-Sunday <abbr className='indigo'>⇀</abbr> 10am-5pm</p>
                </div>

                <div className='email'>
                    <p className='uppercase'>
                        Email
                    </p>
                    <Link href='mailto:contact@bespokeprogramming.net' target='blank'>
                        <h4 className='link'>contact@bespokeprogramming.net</h4>
                    </Link>
                </div>

                <div className='telegram'>
                    <p className='uppercase'>
                        Telegram
                    </p>
                    <Link href='https://t.me/bespokeprogramming' target='blank'>
                        <h4 className='link'>t.me/bespokeprogramming</h4>
                    </Link>
                </div>

                <div className='map'>
                    <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56261.17243618749!2d-0.0698284801433428!3d51.45051755512958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760217687bbabf%3A0xaa75a3ab26a3bb67!2sCatford%2C%20London!5e0!3m2!1sen!2suk!4v1712510649136!5m2!1sen!2suk' width='100%' height='100%'
                    />
                </div>
            </section>

            <div className='footer_right'></div>
        </>
    )
}

export default Footer