'use client'

import { useState } from 'react'
import { motion as m, AnimatePresence } from 'framer-motion'
import Paragraph from '../../ui/paragraphs/Paragraph'
import { FAQ_Variant } from '../../ui/animations/Text'

const FAQ_Questions = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleFAQ = (index) => {
        setIsOpen(isOpen === index ? null : index)
    }

    return (
        <m.div
            className='faq_item'
            initial='hidden'
            animate='visible'
            variants={FAQ_Variant}
        >
            {items.map((item, index) => (
                <div key={index}>
                    <m.div
                        className='faq_question'
                        initial={false}
                        onClick={() => toggleFAQ(index)}
                    >
                        <h4>{item.question}</h4>
                        <span>{isOpen === index ? '-' : '+'}</span>
                    </m.div>

                    <AnimatePresence>
                        {isOpen === index && (
                            <m.div
                                className='faq_answer'
                                key='content'
                                initial='collapsed'
                                animate='open'
                                exit='collapsed'
                                variants={{
                                    open: { opacity: 1, height: 'auto' },
                                    collapsed: { opacity: 0, height: 0 }
                                }}
                            >
                                <Paragraph
                                    pText={item.answer}
                                />
                            </m.div>
                        )}
                        <hr />
                    </AnimatePresence>
                </div>
            ))}
        </m.div>
    )
}

export default FAQ_Questions