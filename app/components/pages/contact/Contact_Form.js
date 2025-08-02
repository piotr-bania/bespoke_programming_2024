'use client'

import { useState } from 'react'
import { motion as m } from 'framer-motion'
import { Button_Variant } from '../../ui/animations/Text'

const Contact_Form = () => {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		company: '',
		message: '',
	})

	const [status, setStatus] = useState(null)

	const handleInputChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setStatus('loading')

		try {
			const res = await fetch(
				'https://bespoke-programming-resend.vercel.app/api/sendEmail',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						name: formState.name,
						email: formState.email,
						phoneNumber: formState.company, // keeping your input field
						message: formState.message,
					}),
				}
			)

			const result = await res.json()

			if (res.ok) {
				setStatus('success')
				setFormState({ name: '', email: '', company: '', message: '' })
			} else {
				setStatus('error')
				console.error('Form error:', result.message)
			}
		} catch (err) {
			console.error('Submit failed:', err)
			setStatus('error')
		}
	}

	return (
		<div className="contact_form">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					value={formState.name}
					onChange={handleInputChange}
					placeholder="Your Name"
					required
				/>

				<input
					type="email"
					name="email"
					value={formState.email}
					onChange={handleInputChange}
					placeholder="Your Email"
					required
				/>

				<input
					type="tel"
					name="company"
					value={formState.company}
					onChange={handleInputChange}
					placeholder="Company Name (Optional)"
				/>

				<textarea
					name="message"
					value={formState.message}
					onChange={handleInputChange}
					placeholder="Project Details"
					required
				/>

				<m.button
					type="submit"
					className="cta"
					initial="hidden"
					animate="visible"
					variants={Button_Variant}
				>
					{status === 'loading' ? 'Sending...' : 'Launch Your Vision'}
				</m.button>

				{status === 'success' && (
					<p className="success_msg">
						Thanks! I’ll be in touch shortly.
					</p>
				)}
				{status === 'error' && (
					<p className="error_msg">
						Something went wrong. Try Telegram?
					</p>
				)}
			</form>
		</div>
	)
}

export default Contact_Form
