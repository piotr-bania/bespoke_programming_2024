'use client'

import React, { useState, useEffect } from 'react'
import Loading from './components/animations/Loading'
import Hero_Section from './components/sections/Hero_Section'

export default function Home() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <main>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Hero_Section />
                </>
            )}
        </main>
    )
}