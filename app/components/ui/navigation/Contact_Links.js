import React from 'react'
import Link from 'next/link'

const Contact_Links = () => {
    return (
        <div className='contact_links'>
            <div className='telegram'>
                <h4>Telegram</h4>
                <Link href='https://t.me/+wXV6CfavGhJlMzhk' target='blank' className='link'>
                    t.me/bespokeprogramming
                </Link>
            </div>

            <div className='email'>
                <h4>Email</h4>
                <Link href='mailto:contact@bespokeprogramming.net' target='blank' className='link'>
                    contact@bespokeprogramming.net
                </Link>
            </div>
        </div>
    )
}

export default Contact_Links