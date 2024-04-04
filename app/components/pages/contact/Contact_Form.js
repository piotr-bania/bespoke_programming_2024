'use client'

import { useState } from 'react'
import { motion as m } from 'framer-motion'
import { Button_Variant } from '../../ui/animations/Text'

const Contact_Form = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    })

    const handleInputChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='contact_form'>
            <form
                method='POST'
                action='https://formsubmit.co/contact@bespokeprogramming.net'
            >
                <input
                    type='text'
                    name='name'
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder='Your Name'
                    required
                />

                <input
                    type='email'
                    name='email'
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder='Your Email'
                    required
                />

                <input
                    type='tel'
                    name='company'
                    value={formState.company}
                    onChange={handleInputChange}
                    placeholder='Company Name (Optional)'
                    required
                />

                <textarea
                    name='message'
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder='Project Details'
                    required
                />

                <m.button
                    type='submit'
                    className='cta'
                    initial='hidden'
                    animate='visible'
                    variants={Button_Variant}
                >
                    Launch Your Vision
                </m.button>
            </form>
        </div>
    )
}

export default Contact_Form